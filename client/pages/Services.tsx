import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Heart,
  Users,
  Shield,
  BookOpen,
  MessageCircle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mental Relief & Emotional Regulation",
      description:
        "Structured interventions addressing stress, anxiety, emotional distress, and mental fatigue.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Cognitive & Mind Development Programs",
      description:
        "Evidence-informed practices designed to enhance focus, emotional intelligence, self-regulation, and mental clarity.",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Psychological Support & Guided Interventions",
      description:
        "Professional, structured support aligned with contemporary mental health frameworks.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Resilience & Well-Being Development",
      description:
        "Programs aimed at strengthening coping mechanisms, adaptability, and long-term emotional stability.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community-Based Mental Health Initiatives",
      description:
        "Group programs, workshops, and outreach interventions tailored for communities, institutions, and vulnerable populations.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🧠 Therapy & Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Advanced, modern, and evidence-based therapeutic approaches
          </p>
        </div>
      </section>

      {/* Clinical & Therapeutic Framework */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clinical & Therapeutic Framework
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Our therapeutic services are grounded in modern psychological
              science, ethical standards, and culturally sensitive practices. We
              adopt a person-centered and trauma-informed approach to ensure
              safety, dignity, and effectiveness across diverse populations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Evidence-Based Practice",
                description:
                  "All interventions are grounded in contemporary psychological research and best practices.",
              },
              {
                title: "Person-Centered Approach",
                description:
                  "We tailor treatment to individual needs, respecting autonomy and personal agency.",
              },
              {
                title: "Trauma-Informed Care",
                description:
                  "We understand trauma's impact and provide safe, supportive environments for healing.",
              },
              {
                title: "Culturally Sensitive Practice",
                description:
                  "We respect and integrate cultural values in all therapeutic work.",
              },
              {
                title: "Ethical Standards",
                description:
                  "We maintain the highest ethical standards in confidentiality and professional conduct.",
              },
              {
                title: "Holistic Wellness",
                description:
                  "We address mental, emotional, physical, and social well-being comprehensively.",
              },
            ].map((framework, index) => (
              <div
                key={index}
                className="p-6 border-2 border-primary/20 rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {framework.title}
                </h3>
                <p className="text-gray-700">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Services
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              All services are delivered with respect for confidentiality,
              ethics, and individual autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-secondary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Characteristics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Professional Team",
                description:
                  "Clinical psychologists, psychiatrists, and trained wellness professionals",
              },
              {
                number: "02",
                title: "Evidence-Based",
                description:
                  "Modern therapeutic techniques grounded in psychological research",
              },
              {
                number: "03",
                title: "Accessible",
                description:
                  "Available regardless of economic status or geographic location",
              },
              {
                number: "04",
                title: "Confidential",
                description:
                  "Strict privacy and ethical standards protecting your information",
              },
              {
                number: "05",
                title: "Inclusive",
                description:
                  "Services tailored for diverse populations and backgrounds",
              },
              {
                number: "06",
                title: "Comprehensive",
                description:
                  "Individual, group, family, and community-based interventions",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg text-center hover:bg-primary/5 transition-colors"
              >
                <div className="text-4xl font-bold text-primary mb-3">
                  {feature.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Delivery Methods */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How We Deliver Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Individual Counseling",
                description:
                  "One-on-one sessions tailored to personal mental health needs and goals",
              },
              {
                title: "Group Therapy",
                description:
                  "Supportive group settings where individuals share experiences and learn from peers",
              },
              {
                title: "Family Interventions",
                description:
                  "Family-centered approaches addressing relationship dynamics and collective healing",
              },
              {
                title: "Community Programs",
                description:
                  "Workshops, seminars, and awareness initiatives for community well-being",
              },
              {
                title: "Crisis Support",
                description:
                  "Emergency mental health support and intervention during times of crisis",
              },
              {
                title: "Online Services",
                description:
                  "Accessible remote counseling and support for individuals unable to attend in-person sessions",
              },
            ].map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-700">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Reach out to us today to learn more about our services or schedule a
            consultation
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
