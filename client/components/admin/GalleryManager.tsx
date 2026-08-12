import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Post, insertPostSchema, InsertPost } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { ImageUpload } from "@/components/ui/image-upload";
import { Loader2, Plus, Trash2, X, Pencil } from "lucide-react";

export default function GalleryManager() {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isAdding, setIsAdding] = useState(false);
    const [editId, setEditId] = useState<number | null>(null);

    const { data: gallery, isLoading } = useQuery<Post[]>({
        queryKey: ["/api/posts", "gallery"],
        queryFn: async () => {
            const res = await fetch("/api/posts?type=gallery");
            if (!res.ok) throw new Error("Failed to fetch gallery");
            return res.json();
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            await fetch(`/api/posts/${id}`, { method: "DELETE" });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
            toast({ title: "Image deleted successfully" });
        },
    });

    const form = useForm<InsertPost>({
        resolver: zodResolver(insertPostSchema),
        defaultValues: {
            title: "Gallery Image",
            content: "Gallery Description",
            imageUrl: "",
            type: "gallery",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const url = editId ? `/api/posts/${editId}` : "/api/posts";
            const method = editId ? "PATCH" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, type: "gallery" }),
            });

            if (!res.ok) throw new Error("Failed to save image");

            queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
            toast({ title: editId ? "Image updated" : "Image added successfully" });
            setIsAdding(false);
            setEditId(null);
            form.reset({
                title: "Gallery Image",
                content: "Gallery Description",
                imageUrl: "",
                type: "gallery",
            });
        } catch (error) {
            toast({ title: "Error saving image", variant: "destructive" });
        }
    };

    const handleEdit = (post: Post) => {
        setEditId(post.id);
        form.reset({
            title: post.title,
            content: post.content || "",
            imageUrl: post.imageUrl || "",
            type: "gallery",
        });
        setIsAdding(true);
    };

    const handleCancel = () => {
        setIsAdding(false);
        setEditId(null);
        form.reset({
            title: "Gallery Image",
            content: "Gallery Description",
            imageUrl: "",
            type: "gallery",
        });
    };

    if (isLoading) return <Loader2 className="w-8 h-8 animate-spin mx-auto" />;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Gallery</h2>
                {!isAdding && (
                    <button
                        onClick={() => {
                            setEditId(null);
                            form.reset({
                                title: "Gallery Image",
                                content: "Gallery Description",
                                imageUrl: "",
                                type: "gallery",
                            });
                            setIsAdding(true);
                        }}
                        className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90"
                    >
                        <Plus className="w-4 h-4" /> Add Image
                    </button>
                )}
            </div>

            {isAdding && (
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{editId ? "Edit Image" : "Add New Image"}</h3>
                        <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Upload Image</label>
                            <ImageUpload
                                value={form.watch("imageUrl") || ""}
                                onChange={(url) => form.setValue("imageUrl", url)}
                            />
                            {form.formState.errors.imageUrl && <p className="text-red-500 text-sm">{String(form.formState.errors.imageUrl.message)}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Caption / Title (Optional)</label>
                            <input {...form.register("title")} className="w-full p-2 border rounded" placeholder="Image Title" />
                        </div>

                        <div className="flex justify-end gap-2">
                            <button type="button" onClick={handleCancel} className="px-4 py-2 border rounded">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-primary text-white rounded">{editId ? "Update" : "Upload"}</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery?.map((post) => (
                    <div key={post.id} className="relative group bg-white rounded-lg shadow overflow-hidden aspect-square">
                        <img src={post.imageUrl || ""} alt={post.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button
                                onClick={() => handleEdit(post)}
                                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                            >
                                <Pencil className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => {
                                    if (confirm("Delete this image?")) deleteMutation.mutate(post.id);
                                }}
                                className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 truncate">
                            {post.title}
                        </div>
                    </div>
                ))}
                {gallery?.length === 0 && !isAdding && <p className="col-span-full text-center text-gray-500 py-8">No images found.</p>}
            </div>
        </div>
    );
}
