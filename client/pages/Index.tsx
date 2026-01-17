import { useQuery } from "@tanstack/react-query";
import { Post } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function Index() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("/api/posts");
      if (!res.ok) throw new Error("Failed to fetch posts");
      return res.json();
    },
  });

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Latest Updates</h1>
        <Button asChild>
          <Link to="/post/new">Create Post</Link>
        </Button>
      </div>

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 rounded-xl bg-slate-100 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {posts?.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
              {post.imageUrl && (
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded capitalize">
                    {post.type}
                  </div>
                </div>
              )}
              <CardHeader>
                {!post.imageUrl && (
                  <div className="mb-2">
                    <span className="bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded capitalize font-medium">
                      {post.type}
                    </span>
                  </div>
                )}
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>
                  {post.createdAt && format(new Date(post.createdAt), "MMMM d, yyyy")}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {post.content}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="#">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
          {posts?.length === 0 && (
            <div className="col-span-full text-center py-10 text-muted-foreground">
              No posts found. Be the first to create one!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
