import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Member, InsertMember, insertMemberSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, User, Mail, Upload, Loader2, Pencil, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

export default function MembersManager() {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isCreating, setIsCreating] = useState(false);
    const [editingMember, setEditingMember] = useState<Member | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const { data: members, isLoading } = useQuery<Member[]>({
        queryKey: ["members"],
        queryFn: async () => {
            const res = await fetch("/api/members");
            if (!res.ok) throw new Error("Failed to fetch members");
            return res.json();
        },
    });

    const form = useForm<InsertMember>({
        resolver: zodResolver(insertMemberSchema),
        defaultValues: {
            name: "",
            position: "",
            contact: "",
            imageUrl: "",
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: InsertMember) => {
            const res = await fetch("/api/members", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("Failed to create member");
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["members"] });
            toast({ title: "Success", description: "Member added successfully" });
            handleCancel();
        },
        onError: () => {
            toast({ title: "Error", description: "Failed to create member", variant: "destructive" });
        },
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, data }: { id: number; data: InsertMember }) => {
            const res = await fetch(`/api/members/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("Failed to update member");
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["members"] });
            toast({ title: "Success", description: "Member updated successfully" });
            handleCancel();
        },
        onError: () => {
            toast({ title: "Error", description: "Failed to update member", variant: "destructive" });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            const res = await fetch(`/api/members/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Failed to delete member");
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["members"] });
            toast({ title: "Success", description: "Member deleted successfully" });
        },
    });

    const handleCancel = () => {
        setIsCreating(false);
        setEditingMember(null);
        setFile(null);
        form.reset({ name: "", position: "", contact: "", imageUrl: "" });
    };

    const handleEdit = (member: Member) => {
        setEditingMember(member);
        form.reset({
            name: member.name,
            position: member.position,
            contact: member.contact,
            imageUrl: member.imageUrl || "",
        });
        setIsCreating(true);
    };

    const onSubmit = async (data: InsertMember) => {
        if (file) {
            setUploading(true);
            const formData = new FormData();
            formData.append('file', file);
            try {
                const res = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });
                if (!res.ok) throw new Error('Upload failed');
                const { url } = await res.json();
                data.imageUrl = url;
            } catch (error) {
                console.error("Upload error:", error);
                toast({ title: "Error", description: "Failed to upload image", variant: "destructive" });
                setUploading(false);
                return;
            }
            setUploading(false);
        }

        if (editingMember) {
            updateMutation.mutate({ id: editingMember.id, data });
        } else {
            mutation.mutate(data);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Manage Members</h2>
                <Button onClick={isCreating ? handleCancel : () => setIsCreating(true)}>
                    {isCreating ? <><X className="mr-2 h-4 w-4" /> Cancel</> : <><Plus className="mr-2 h-4 w-4" /> Add Member</>}
                </Button>
            </div>

            {isCreating && (
                <div className="bg-white p-6 rounded-lg shadow-md border animate-in fade-in slide-in-from-top-4">
                    <h3 className="text-lg font-semibold mb-4">{editingMember ? "Edit Team Member" : "Add New Team Member"}</h3>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Dr. John Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="position"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Position</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Senior Psychologist" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="contact"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Contact Info</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. john@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormItem>
                                    <FormLabel>Photo</FormLabel>
                                    <FormControl>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => document.getElementById('member-upload')?.click()}
                                                className="w-full"
                                            >
                                                <Upload className="mr-2 h-4 w-4" />
                                                {file ? "Change Photo" : "Select Photo"}
                                            </Button>
                                            <Input
                                                id="member-upload"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const f = e.target.files?.[0];
                                                    if (f) setFile(f);
                                                }}
                                            />
                                        </div>
                                    </FormControl>
                                    {file && <span className="text-sm text-gray-500">{file.name}</span>}
                                    <FormMessage />
                                </FormItem>
                            </div>

                            <Button type="submit" disabled={mutation.isPending || updateMutation.isPending || uploading}>
                                {mutation.isPending || updateMutation.isPending || uploading ? (
                                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {editingMember ? "Updating..." : "Saving..."}</>
                                ) : (editingMember ? "Update Member" : "Add Member")}
                            </Button>
                        </form>
                    </Form>
                </div>
            )}

            <div className="grid grid-cols-1 gap-4">
                {isLoading ? (
                    <div>Loading members...</div>
                ) : members?.length === 0 ? (
                    <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-lg">No members found.</div>
                ) : (
                    members?.map((member) => (
                        <div key={member.id} className="bg-white p-4 rounded-lg shadow border flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <div className="h-16 w-16 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
                                    <img src={member.imageUrl || "https://placehold.co/100"} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                                    <p className="text-primary font-medium">{member.position}</p>
                                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                                        <Mail className="w-3 h-3" /> {member.contact}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => handleEdit(member)}
                                >
                                    <Pencil className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => deleteMutation.mutate(member.id)}
                                    disabled={deleteMutation.isPending}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
