import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@shared/schema";
import Layout from "../components/Layout";
import { Loader2, Calendar, User, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PostDetails() {
    const { id } = useParams();

    const { data: post, isLoading, error } = useQuery<Post>({
        queryKey: ["post", id],
        queryFn: async () => {
            const res = await fetch(`/api/posts/${id}`);
            if (!res.ok) throw new Error("Failed to fetch post");
            return res.json();
        },
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <Layout>
                <div className="flex justify-center items-center min-h-[50vh]">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                </div>
            </Layout>
        );
    }

    if (error || !post) {
        return (
            <Layout>
                <div className="container mx-auto py-20 text-center">
                    <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
                    <Button asChild>
                        <Link to="/">Return Home</Link>
                    </Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Link
                    to={post.type === 'news' ? '/news' : '/blogs'}
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to {post.type === 'news' ? 'News' : 'Blogs'}
                </Link>

                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    {post.title}
                </h1>

                <div className="flex items-center gap-6 text-gray-500 mb-8 border-b border-gray-100 pb-8">
                    <span className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {post.createdAt && format(new Date(post.createdAt), 'MMMM d, yyyy')}
                    </span>
                    <span className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Admin
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {post.type}
                    </span>
                </div>

                {post.imageUrl && (
                    <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {post.content}
                </div>
            </article>
        </Layout>
    );
}
