import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Mental Health Awareness Program Reaches 1000+ Students",
      category: "Press Release",
      date: "January 2024",
      description:
        "Our latest awareness campaign in schools across Kolkata has successfully educated over 1000 students about mental health and emotional well-being.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "How to Identify Disabilities in Young Children",
      category: "Newspaper Coverage",
      date: "December 2023",
      description:
        "Featured in The Times of India discussing early intervention strategies and identification of developmental challenges in children.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Workplace Mental Health Initiative Launched",
      category: "Press Release",
      date: "November 2023",
      description:
        "Introducing our new comprehensive workplace mental health program designed to support employees and organizations.",
      image:
        "https://images.unsplash.com/photo-1552821206-7eb0d89a4b3d?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "The Power of Community Support in Mental Health Recovery",
      category: "Article",
      date: "October 2023",
      description:
        "Exploring how community-based interventions contribute significantly to mental health recovery and social integration.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Crisis Support Services Expanded to Rural Areas",
      category: "Press Release",
      date: "September 2023",
      description:
        "Expanding our 24/7 mental health helpline to underserved rural communities across Eastern India.",
      image:
        "https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Understanding Anxiety Disorders: A Comprehensive Guide",
      category: "Article",
      date: "August 2023",
      description:
        "Medical professionals share insights on anxiety disorders, treatment options, and coping strategies.",
      image:
        "https://images.unsplash.com/photo-1579154204601-01d5f6011d21?w=400&h=300&fit=crop",
    },
  ];

  const categories = ["All", "Press Release", "Newspaper Coverage", "Article"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Latest News & Updates
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Stay informed about our latest initiatives, research, and impact
            stories
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  category === "All"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {news.description}
                  </p>

                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold text-sm transition-colors"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
