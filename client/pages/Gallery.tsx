import Layout from "../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@shared/schema";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, Loader2 } from "lucide-react";
import AdminActionButtons from "../components/AdminActionButtons";

export default function Gallery() {
  const { user } = useAuth();

  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["posts", "gallery"],
    queryFn: async () => {
      const res = await fetch("/api/posts?type=gallery");
      if (!res.ok) throw new Error("Failed to fetch gallery");
      return res.json();
    },
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Impact Gallery
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Visual stories of transformation, community engagement, and the lives we've touched.
              </p>
            </div>
            {user && (
              <Button asChild variant="secondary" size="lg">
                <Link to="/post/new" className="gap-2">
                  <Plus className="w-5 h-5" /> Add Photo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts?.length === 0 && (
                <div className="col-span-full text-center py-10 text-gray-500">
                  No gallery items found.
                </div>
              )}
              {posts?.map((item) => (
                <div key={item.id} className="group relative break-inside-avoid mb-6 cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src={item.imageUrl || "https://placehold.co/600x400"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="text-white font-bold text-lg mb-2">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {item.content}
                          </p>
                        </div>
                        <div className="mb-2">
                          <AdminActionButtons postId={item.id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
