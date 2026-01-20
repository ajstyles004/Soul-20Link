import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Post, insertPostSchema, InsertPost } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { ImageUpload } from "@/components/ui/image-upload";
import { Loader2, Plus, Pencil, Trash2, X } from "lucide-react";

export default function NewsManager() {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const { data: news, isLoading } = useQuery<Post[]>({
        queryKey: ["/api/posts", "news"],
        queryFn: async () => {
            const res = await fetch("/api/posts?type=news");
            if (!res.ok) throw new Error("Failed to fetch news");
            return res.json();
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            await fetch(`/api/posts/${id}`, { method: "DELETE" });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
            toast({ title: "News deleted successfully" });
        },
    });

    const form = useForm<InsertPost>({
        resolver: zodResolver(insertPostSchema),
        defaultValues: {
            title: "",
            content: "",
            imageUrl: "",
            type: "news",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const url = selectedPost ? `/api/posts/${selectedPost.id}` : "/api/posts";
            const method = selectedPost ? "PATCH" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, type: "news" }),
            });

            if (!res.ok) throw new Error("Failed to save news");

            queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
            toast({ title: `News ${selectedPost ? "updated" : "created"} successfully` });
            setIsEditing(false);
            setSelectedPost(null);
            form.reset();
        } catch (error) {
            toast({ title: "Error saving news", variant: "destructive" });
        }
    };

    const handleEdit = (post: Post) => {
        setSelectedPost(post);
        form.reset({
            title: post.title,
            content: post.content,
            imageUrl: post.imageUrl || "",
            type: "news",
        });
        setIsEditing(true);
    };

    if (isLoading) return <Loader2 className="w-8 h-8 animate-spin mx-auto" />;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage News & Articles</h2>
                {!isEditing && (
                    <button
                        onClick={() => {
                            setSelectedPost(null);
                            form.reset({ title: "", content: "", imageUrl: "", type: "news" });
                            setIsEditing(true);
                        }}
                        className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90"
                    >
                        <Plus className="w-4 h-4" /> Add News
                    </button>
                )}
            </div>

            {isEditing ? (
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{selectedPost ? "Edit News" : "New Article"}</h3>
                        <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-gray-700">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <input {...form.register("title")} className="w-full p-2 border rounded" placeholder="Article Title" />
                            {form.formState.errors.title && <p className="text-red-500 text-sm">{String(form.formState.errors.title.message)}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Image (Optional)</label>
                            <ImageUpload
                                value={form.watch("imageUrl") || ""}
                                onChange={(url) => form.setValue("imageUrl", url)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Content</label>
                            <textarea {...form.register("content")} className="w-full p-2 border rounded h-32" placeholder="Write your article here..." />
                            {form.formState.errors.content && <p className="text-red-500 text-sm">{String(form.formState.errors.content.message)}</p>}
                        </div>

                        <div className="flex justify-end gap-2">
                            <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 border rounded">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Save</button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="grid gap-4">
                    {news?.map((post) => (
                        <div key={post.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-start">
                            <div>
                                <h3 className="font-bold text-lg">{post.title}</h3>
                                <p className="text-sm text-gray-500">{new Date(post.createdAt || "").toLocaleDateString()}</p>
                                <p className="text-gray-600 mt-2 line-clamp-2">{post.content}</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(post)} className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                                    <Pencil className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => {
                                        if (confirm("Are you sure?")) deleteMutation.mutate(post.id);
                                    }}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                    {news?.length === 0 && <p className="text-center text-gray-500 py-8">No news articles found.</p>}
                </div>
            )}
        </div>
    );
}
