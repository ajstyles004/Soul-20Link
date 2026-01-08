import Layout from "../components/Layout";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      category: "workshops",
      title: "Mental Health Awareness Workshop",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      category: "events",
      title: "Community Counseling Session",
      image:
        "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      category: "programs",
      title: "Healthcare Camp",
      image:
        "https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      category: "workshops",
      title: "Stress Management Training",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      category: "events",
      title: "Team Meeting",
      image:
        "https://images.unsplash.com/photo-1552821206-7eb0d89a4b3d?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      category: "programs",
      title: "Group Therapy Session",
      image:
        "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      category: "workshops",
      title: "Youth Mental Health Forum",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
    {
      id: 8,
      category: "events",
      title: "Annual Health Drive",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    },
    {
      id: 9,
      category: "programs",
      title: "School Mental Health Program",
      image:
        "https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=400&h=300&fit=crop",
    },
    {
      id: 10,
      category: "workshops",
      title: "Professional Development",
      image:
        "https://images.unsplash.com/photo-1552821206-7eb0d89a4b3d?w=400&h=300&fit=crop",
    },
    {
      id: 11,
      category: "events",
      title: "Community Outreach",
      image:
        "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop",
    },
    {
      id: 12,
      category: "programs",
      title: "Rehabilitation Program",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore moments from our programs, events, and community initiatives
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {[
              { label: "All", value: "all" },
              { label: "Workshops", value: "workshops" },
              { label: "Events", value: "events" },
              { label: "Programs", value: "programs" },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  activeFilter === filter.value
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.image)}
                className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white w-full">
                      <p className="text-sm font-semibold text-primary mb-1">
                        {image.category.toUpperCase()}
                      </p>
                      <h3 className="font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* About Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work in Action
          </h2>
          <p className="text-gray-600 text-lg">
            Through these images, we showcase the impact of our programs and the
            strength of our community partnerships. Every photo represents a
            moment of change, growth, and hope.
          </p>
        </div>
      </section>
    </Layout>
  );
}
