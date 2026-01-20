import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import ImpactSection from "../components/ImpactSection";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@shared/schema";
import HomeSlideshow from "../components/HomeSlideshow";

import {
  ArrowRight,
  Heart,
  Brain,
  Users,
  Stethoscope,
  MessageCircle,
  BookOpen,
} from "lucide-react";

import { Event } from "@shared/schema";
import { format } from "date-fns";
import { Calendar, MapPin } from "lucide-react";

function EventsList() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await fetch("/api/events");
      if (!res.ok) return [];
      return res.json();
    },
  });

  if (isLoading) {
    return <div className="text-center py-10">Loading events...</div>;
  }

  if (!events || events.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No upcoming events scheduled at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <div key={event.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 overflow-hidden bg-gray-100">
            <img
              src={event.imageUrl || "https://placehold.co/600x400?text=Event"}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-2">
              <Calendar className="w-4 h-4" />
              {event.date}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <MapPin className="w-4 h-4" />
              {event.location}
            </div>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {event.description}
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to={`/events/${event.id}`}>
                Know More
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {

  const { data: galleryItems } = useQuery<Post[]>({
    queryKey: ["posts", "gallery"],
    queryFn: async () => {
      const res = await fetch("/api/posts?type=gallery");
      if (!res.ok) return [];
      return res.json();
    },
  });

  return (
    <Layout>
      {/* Hero Models */}
      <HomeSlideshow slides={galleryItems?.slice(0, 5) || []} />

      {/* What We Do Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-primary">What We </span>
              <span className="text-secondary">Do</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We work in the field of mental health and healthcare, providing
              psychological support, counseling, and medical interventions to
              vulnerable communities across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mental Health Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop"
                  alt="Mental health"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-primary text-white">
                <h3 className="text-2xl font-bold mb-3">Mental Health</h3>
                <p className="text-primary/90 mb-4">
                  Comprehensive psychological counseling, therapy, and mental
                  health awareness programs for individuals and communities.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary/80 transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Healthcare Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=500&h=300&fit=crop"
                  alt="Healthcare"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-8 bg-secondary text-white">
                <h3 className="text-2xl font-bold mb-3">Healthcare Services</h3>
                <p className="text-secondary/90 mb-4">
                  Medical consultation, health awareness, and preventive care
                  programs for underserved populations.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-secondary/80 transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Community Support */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&h=300&fit=crop"
                  alt="Community Support"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-8 bg-purple-600 text-white">
                <h3 className="text-2xl font-bold mb-3">Community Support</h3>
                <p className="text-purple-100 mb-4">
                  Building stronger communities through education, vocational training, and social welfare initiatives.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-purple-200 transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Women Empowerment */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&h=300&fit=crop"
                  alt="Women Empowerment"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-8 bg-pink-600 text-white">
                <h3 className="text-2xl font-bold mb-3">Women Empowerment</h3>
                <p className="text-pink-100 mb-4">
                  Supporting women through skill development, self-help groups, and leadership programs.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-pink-200 transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us in our upcoming events and workshops to make a difference.
            </p>
          </div>

          <EventsList />
        </div>
      </section>

      {/* Gallery Section at Bottom */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Gallery
            </h2>
            <p className="text-gray-600">
              Moments from our programs, events, and community initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {!galleryItems || galleryItems.length === 0 ? (
              // Fallback static images if no dynamic content
              [
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=400&h=300&fit=crop"
              ].map((src, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img src={src} className="w-full h-full object-cover" alt="Gallery item" />
                  </div>
                </div>
              ))
            ) : (
              galleryItems.slice(0, 6).map((image) => (
                <div
                  key={image.id}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={image.imageUrl || "https://placehold.co/600x400"}
                      alt={image.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-gray-900 line-clamp-1">{image.title}</h3>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded transition-colors"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of mental health and healthcare services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Psychological Counseling",
                description:
                  "Individual and group counseling sessions led by certified psychologists",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Mental Health Awareness",
                description:
                  "Community programs and workshops on mental wellness",
              },
              {
                icon: <Stethoscope className="w-8 h-8" />,
                title: "Medical Consultation",
                description: "Healthcare services and medical consultations",
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Crisis Support",
                description:
                  "24/7 helpline and emergency mental health support",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Family Counseling",
                description: "Family therapy and relationship counseling",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Educational Programs",
                description:
                  "Training and awareness programs for schools and organizations",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white border-2 border-gray-100 rounded hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Statistics */}
      <ImpactSection />

      {/* Journey Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Celebrating Our Journey in Changing Lives
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Since our founding, we have been committed to providing
                accessible mental health and healthcare services to communities
                that need them most. Through dedicated work and community
                partnerships, we have reached thousands of individuals and
                families.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our approach combines clinical expertise with community
                understanding, ensuring that our services are culturally
                sensitive and effective. We believe that mental health is a
                human right and work tirelessly to break stigma and increase
                awareness.
              </p>
              <Link
                to="/impact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded transition-colors"
              >
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop"
                alt="Our journey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When to Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              <span className="text-primary">WHEN </span>
              <span className="text-gray-900">You Should </span>
              <span className="text-secondary">CONTACT US</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "If You're Struggling",
                description:
                  "Are facing emotional, behavioral, learning problems, depression, anxiety or other mental health concerns",
              },
              {
                title: "For Adults",
                description:
                  "Dealing with stress, depression, relationship issues, substance abuse, or any mental health challenge",
              },
              {
                title: "For Organizations",
                description:
                  "Looking to implement mental health programs, awareness workshops, or staff wellness initiatives",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded border-l-4 border-primary"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Donation Section at Bottom */}
      <section className="bg-primary py-16 md:py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support Our Mission
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Your contribution helps us provide mental health services and
            healthcare to underserved communities. Every donation, regardless of
            size, makes a real difference.
          </p>



          <p className="mt-8 text-blue-100 text-sm">
            Your donation is secure and will be used transparently. We are a
            registered organization with all necessary legal clearances.
          </p>
        </div>
      </section>
    </Layout>
  );
}
