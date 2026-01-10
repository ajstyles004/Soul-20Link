import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  ArrowRight,
  Heart,
  Brain,
  Users,
  Stethoscope,
  MessageCircle,
  BookOpen,
} from "lucide-react";

export default function Home() {
  const galleryImages = [
    {
      id: 1,
      title: "Mental Health Awareness Workshop",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Community Counseling Session",
      image:
        "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Healthcare Camp",
      image:
        "https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Stress Management Training",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Team Meeting",
      image:
        "https://images.unsplash.com/photo-1552821206-7eb0d89a4b3d?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Group Therapy Session",
      image:
        "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Welcome to Soul Link Foundation
              </h1>
              <p className="text-lg text-gray-600 mb-2 font-semibold text-blue-700">
                Transforming Lives Through Mental Health & Wellness
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Soul Link is dedicated to providing comprehensive mental health
                services, psychological counseling, and healthcare interventions
                to underserved communities across India. Our mission is to make
                quality mental healthcare accessible to all.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/services"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded transition-colors inline-flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Images */}
            <div className="relative h-96 md:h-full hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop"
                      alt="Healthcare professionals"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop"
                      alt="Counseling session"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 right-12 w-1/3 h-1/3 rounded-lg overflow-hidden shadow-md bg-white border-4 border-white">
                    <img
                      src="https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=300&h=300&fit=crop"
                      alt="Mental health support"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Images */}
        <div className="lg:hidden grid grid-cols-2 gap-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
            alt="Healthcare"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=400&h=300&fit=crop"
            alt="Support"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

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
                  src="https://images.unsplash.com/photo-1559606772-46e46a088cf5?w=500&h=300&fit=crop"
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
                  src="https://images.unsplash.com/photo-1579154204601-01d5f6011d21?w=500&h=300&fit=crop"
                  alt="Healthcare"
                  className="w-full h-full object-cover"
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
      <section className="bg-primary py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Making a measurable difference in mental health and healthcare
              access
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50,000+", label: "People Served" },
              { number: "5,000+", label: "Counseling Sessions" },
              { number: "200+", label: "Workshops Conducted" },
              { number: "500+", label: "Lives Transformed" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-primary/90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-900">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded transition-colors"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link
              to="/donate"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded transition-colors inline-flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Make a Donation
            </Link>
            <Link
              to="/fundraising"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Involved <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="mt-8 text-blue-100 text-sm">
            Your donation is secure and will be used transparently. We are a
            registered organization with all necessary legal clearances.
          </p>
        </div>
      </section>
    </Layout>
  );
}
