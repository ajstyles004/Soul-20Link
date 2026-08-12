import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEventSchema, InsertEvent, Event } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Layout from "../components/Layout";
import { Loader2, ArrowLeft, Upload } from "lucide-react";

export default function EventEditor() {
    const { toast } = useToast();
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const isEditing = !!id;
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const form = useForm<InsertEvent>({
        resolver: zodResolver(insertEventSchema),
        defaultValues: {
            title: "",
            date: "",
            location: "",
            description: "",
            imageUrl: "",
        },
    });

    // Fetch details if we are editing
    const { data: eventToEdit, isLoading: isLoadingEvent } = useQuery<Event>({
        queryKey: ["event", id],
        queryFn: async () => {
            if (!id) return null;
            const res = await fetch(`/api/events/${id}`);
            if (!res.ok) throw new Error("Failed to fetch event");
            return res.json();
        },
        enabled: isEditing,
    });

    // Populate form when event data is available
    useEffect(() => {
        if (eventToEdit) {
            form.reset({
                title: eventToEdit.title,
                date: eventToEdit.date,
                location: eventToEdit.location,
                description: eventToEdit.description,
                imageUrl: eventToEdit.imageUrl || "",
            });
        }
    }, [eventToEdit, form]);

    const mutation = useMutation({
        mutationFn: async (data: InsertEvent) => {
            const url = isEditing ? `/api/events/${id}` : "/api/events";
            const method = isEditing ? "PATCH" : "POST";

            // If we are editing and no new image URL is set (and no file uploaded to set it),
            // we should probably not overwrite the existing one if we are just patching.
            // But since we are sending the whole form data which includes imageUrl (from form state), it's fine.
            // The form state is initialized with the existing imageUrl.

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error(`Failed to ${isEditing ? "update" : "create"} event`);
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["events"] });
            if (isEditing) queryClient.invalidateQueries({ queryKey: ["event", id] });

            toast({ title: "Success", description: `Event ${isEditing ? "updated" : "created"} successfully` });
            navigate("/events");
        },
        onError: () => {
            toast({ title: "Error", description: `Failed to ${isEditing ? "update" : "create"} event`, variant: "destructive" });
        },
    });

    const onSubmit = async (data: InsertEvent) => {
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
                toast({
                    title: "Error",
                    description: "Failed to upload image",
                    variant: "destructive",
                });
                setUploading(false);
                return;
            }
            setUploading(false);
        }
        mutation.mutate(data);
    };

    if (isEditing && isLoadingEvent) {
        return (
            <Layout>
                <div className="flex justify-center p-20">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="container mx-auto py-10 max-w-2xl px-4">
                <Button variant="ghost" className="mb-6" onClick={() => navigate("/events")}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
                </Button>

                <Card>
                    <CardHeader>
                        <CardTitle>{isEditing ? "Edit Event" : "Create New Event"}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Event Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Health Camp 2024" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="date"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Date</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g. March 15, 2024" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="location"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Location</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g. Kolkata" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormItem>
                                    <FormLabel>Event Image</FormLabel>
                                    <div className="flex flex-col gap-4">
                                        <FormControl>
                                            <div className="flex items-center gap-4">
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => document.getElementById('image-upload')?.click()}
                                                    className="w-full md:w-auto"
                                                >
                                                    <Upload className="w-4 h-4 mr-2" />
                                                    {file ? "Change Image" : "Select Image"}
                                                </Button>
                                                <Input
                                                    id="image-upload"
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) setFile(file);
                                                    }}
                                                />
                                                {file && <span className="text-sm text-gray-500 truncate max-w-[200px]">{file.name}</span>}
                                            </div>
                                        </FormControl>

                                        {/* Image Preview */}
                                        {(file ? URL.createObjectURL(file) : eventToEdit?.imageUrl) && (
                                            <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                                                <img
                                                    src={file ? URL.createObjectURL(file) : eventToEdit?.imageUrl!}
                                                    alt="Event preview"
                                                    className="w-full h-full object-cover"
                                                />
                                                {!file && (
                                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity">
                                                        Current Image
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <FormMessage />
                                </FormItem>

                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Event details..."
                                                    className="min-h-[150px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full" disabled={mutation.isPending || uploading}>
                                    {mutation.isPending || uploading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            {uploading ? "Uploading Image..." : "Saving..."}
                                        </>
                                    ) : (
                                        isEditing ? "Update Event" : "Create Event"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
