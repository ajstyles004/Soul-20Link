import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Programme, InsertProgramme, insertProgrammeSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, Plus, Upload, Loader2, BookOpen } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

export default function ProgrammesManager() {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isCreating, setIsCreating] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const { data: programmes, isLoading } = useQuery<Programme[]>({
        queryKey: ["programmes"],
        queryFn: async () => {
            const res = await fetch("/api/programmes");
            if (!res.ok) throw new Error("Failed to fetch programmes");
            return res.json();
        },
    });

    const form = useForm<InsertProgramme>({
        resolver: zodResolver(insertProgrammeSchema),
        defaultValues: {
            title: "",
            description: "",
            imageUrl: "",
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: InsertProgramme) => {
            const res = await fetch("/api/programmes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("Failed to create programme");
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["programmes"] });
            toast({ title: "Success", description: "Programme added successfully" });
            setIsCreating(false);
            setFile(null);
            form.reset();
        },
        onError: () => {
            toast({ title: "Error", description: "Failed to create programme", variant: "destructive" });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            const res = await fetch(`/api/programmes/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Failed to delete programme");
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["programmes"] });
            toast({ title: "Success", description: "Programme deleted successfully" });
        },
    });

    const onSubmit = async (data: InsertProgramme) => {
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
        mutation.mutate(data);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Manage Programmes</h2>
                <Button onClick={() => setIsCreating(!isCreating)}>
                    {isCreating ? "Cancel" : <><Plus className="mr-2 h-4 w-4" /> Add Programme</>}
                </Button>
            </div>

            {isCreating && (
                <div className="bg-white p-6 rounded-lg shadow-md border animate-in fade-in slide-in-from-top-4">
                    <h3 className="text-lg font-semibold mb-4">Add New Programme</h3>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Youth Mentorship" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => document.getElementById('prog-upload')?.click()}
                                            className="w-full"
                                        >
                                            <Upload className="mr-2 h-4 w-4" />
                                            {file ? "Change Image" : "Select Image"}
                                        </Button>
                                        <Input
                                            id="prog-upload"
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

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Programme details..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" disabled={mutation.isPending || uploading}>
                                {mutation.isPending || uploading ? (
                                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</>
                                ) : "Add Programme"}
                            </Button>
                        </form>
                    </Form>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {isLoading ? (
                    <div>Loading programmes...</div>
                ) : programmes?.length === 0 ? (
                    <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-lg col-span-2">No programmes found.</div>
                ) : (
                    programmes?.map((prog) => (
                        <div key={prog.id} className="bg-white p-4 rounded-lg shadow border">
                            <div className="h-40 bg-gray-100 rounded-md overflow-hidden mb-4 relative">
                                <img src={prog.imageUrl || "https://placehold.co/400x200"} alt={prog.title} className="w-full h-full object-cover" />
                                <div className="absolute top-2 right-2">
                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => deleteMutation.mutate(prog.id)}
                                        disabled={deleteMutation.isPending}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900">{prog.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm line-clamp-3">{prog.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
