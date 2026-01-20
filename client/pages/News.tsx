import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Plus } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useState } from "react";
import AdminActionButtons from "../components/AdminActionButtons";
import { useAuth } from "@/hooks/use-auth";

export default function News() {
  const { user } = useAuth();
  const [filter, setFilter] = useState("All");

  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["posts", "news"],
    queryFn: async () => {
      const res = await fetch("/api/posts?type=news");
      if (!res.ok) throw new Error("Failed to fetch news");
      return res.json();
    },
  });

  const categories = ["All", "Press Release", "Newspaper Coverage", "Article"];

  // Note: Backend 'type' is just 'news' or 'blog'. 
  // If we want sub-categories, we might need to add a 'category' field to the DB.
  // For now, we will just show everything or filter if we had that field. 
  // Since the user asked for "blogs, images, news", I implemented 'type' enum.
  // The existing UI has "Press Release" etc which aren't in my simple schema.
  // I will just display all "news" type posts here.

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Latest News & Updates
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Stay informed about our latest initiatives, research, and impact stories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${filter === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg h-96 animate-pulse shadow-md" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts?.length === 0 && (
                <div className="col-span-full text-center py-10 text-gray-500">
                  No news posts found.
                </div>
              )}
              {posts?.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col"
                >
                  {/* Image */}
                  {news.imageUrl && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                          {news.type}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {news.createdAt && format(new Date(news.createdAt), "MMMM yyyy")}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {news.content}
                    </p>

                    <Link
                      to={`/post/${news.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold text-sm transition-colors mt-auto"
                    >
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Latest Work
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates about our programs, research, and
            impact stories
          </p>

          <form className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
