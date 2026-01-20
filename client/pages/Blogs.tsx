import Layout from "../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@shared/schema";
import { Loader2, Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import AdminActionButtons from "../components/AdminActionButtons";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Blogs() {
    const { user } = useAuth();
    const { data: posts, isLoading } = useQuery<Post[]>({
        queryKey: ["posts", "blog"],
        queryFn: async () => {
            const res = await fetch("/api/posts?type=blog");
            if (!res.ok) throw new Error("Failed to fetch blogs");
            return res.json();
        },
    });

    return (
        <Layout>
            <section className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Application Blog</h1>
                        <p className="text-xl text-white/80 max-w-2xl">
                            Insights, stories, and updates from our team and community.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {isLoading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="h-10 w-10 animate-spin text-primary" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts?.length === 0 && (
                                <div className="col-span-full text-center py-10 text-gray-500">
                                    No blog posts found.
                                </div>
                            )}
                            {posts?.map((post) => (
                                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    {post.imageUrl && (
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={post.imageUrl}
                                                alt={post.title}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {post.createdAt ? format(new Date(post.createdAt), 'MMM d, yyyy') : 'Recent'}
                                                </span>
                                            </div>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 line-clamp-3 mb-4">
                                            {post.content}
                                        </p>
                                        <Link to={`/post/${post.id}`} className="text-primary font-semibold hover:underline">
                                            Read Full Article →
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}
