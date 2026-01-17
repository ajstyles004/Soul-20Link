import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertPostSchema, InsertPost } from "@shared/schema";
import { useCreatePost } from "../lib/posts";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function PostEditor() {
    const { toast } = useToast();
    const createPostMutation = useCreatePost();
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const form = useForm<InsertPost>({
        resolver: zodResolver(insertPostSchema),
        defaultValues: {
            title: "",
            content: "",
            type: "blog",
            imageUrl: "",
        },
    });

    async function onSubmit(data: InsertPost) {
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

        createPostMutation.mutate(data, {
            onSuccess: () => {
                toast({
                    title: "Success",
                    description: "Post created successfully",
                });
                form.reset();
                setFile(null);
            },
            onError: (error) => {
                toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive",
                });
            },
        });
    }

    return (
        <div className="container mx-auto py-10 max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle>Create New Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Post title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="blog">Blog Post</SelectItem>
                                                <SelectItem value="news">News Update</SelectItem>
                                                <SelectItem value="gallery">Gallery Image</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) setFile(file);
                                        }}
                                    />
                                </FormControl>
                                {file && <p className="text-sm text-muted-foreground">Selected: {file.name}</p>}
                                <FormMessage />
                            </FormItem>

                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Content</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Write your post content here..."
                                                className="min-h-[200px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" disabled={createPostMutation.isPending || uploading}>
                                {createPostMutation.isPending || uploading ? "Processing..." : "Publish Post"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
