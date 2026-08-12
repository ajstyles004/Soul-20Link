import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Handshake,
  Target,
  DollarSign,
  Users,
  Building2,
  CheckCircle,
  Shield,
  Globe2,
  Lightbulb,
  BarChart3,
  Award,
} from "lucide-react";

export default function Fundraising() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🤝 Fundraising & Strategic Support
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Advancing inclusive mental well-being through structured, ethical,
            and evidence-informed practices
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commitment to Stewardship
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Our organization is committed to advancing mental well-being
              through structured, ethical, and evidence-informed practices. We
              operate with the belief that access to psychological support
              should not be constrained by socioeconomic or geographic
              limitations.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 max-w-3xl">
              Strategic support from institutions, partners, and individuals
              enables us to strengthen program delivery, expand outreach, and
              ensure long-term sustainability of our mental health initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Allocation of Resources */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🍀 Strategic Allocation of Resources
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Support received is directed towards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Globe2 className="w-8 h-8" />,
                title: "Program Development & Expansion",
                description:
                  "Development and expansion of services in underserved regions globally",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Research & Innovation",
                description:
                  "Research, innovation, and integration of advanced therapeutic methodologies",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Capacity Building",
                description:
                  "Training, supervision of facilitators, volunteers, and mental health professionals",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Digital Infrastructure",
                description:
                  "Secure delivery platforms and technological solutions for accessible services",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Monitoring & Evaluation",
                description:
                  "Continuous improvement and impact assessment of our mental health initiatives",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Strategic Initiatives",
                description:
                  "Implementation of evidence-based programs and community partnerships",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-secondary mb-4">{resource.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-700">{resource.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-lg border-l-4 border-primary">
            <p className="text-gray-700 leading-relaxed font-semibold">
              We value transparency, accountability, and ethical stewardship in
              all forms of support.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership & Collaboration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            🤝 Partnership & Collaboration
          </h2>

          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed max-w-3xl mb-8">
              We welcome collaboration with organizations and partners who share
              our commitment to mental health and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Handshake className="w-8 h-8" />,
                title: "Non-Profit & Humanitarian Organizations",
                description:
                  "Partnerships with organizations dedicated to social impact and community welfare",
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Academic & Research Institutions",
                description:
                  "Collaboration with universities and research centers for evidence-based innovation",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Healthcare & Mental Health Professionals",
                description:
                  "Networks with practitioners providing clinical expertise and professional support",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Social Impact Partners",
                description:
                  "Engagement with global initiatives working toward sustainable development",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg border border-secondary/20"
              >
                <div className="text-secondary mb-4">{partner.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {partner.title}
                </h3>
                <p className="text-gray-700">{partner.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-teal-50 rounded-lg">
            <p className="text-gray-900 font-semibold mb-2">
              Together, We Can Strengthen Mental Health Ecosystems
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through collaboration and strategic partnerships, we can extend
              meaningful support worldwide and create lasting change in mental
              health systems globally.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Ways to Support Our Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Financial Contributions",
                description:
                  "Direct donations to support program development, research, and service delivery",
              },
              {
                number: "02",
                title: "In-Kind Support",
                description:
                  "Donation of resources, materials, equipment, and professional services",
              },
              {
                number: "03",
                title: "Institutional Partnerships",
                description:
                  "Formal partnerships for capacity building, training, and program implementation",
              },
              {
                number: "04",
                title: "Volunteer Service",
                description:
                  "Professional and community volunteer support for program delivery and events",
              },
              {
                number: "05",
                title: "Advocacy & Awareness",
                description:
                  "Help promote mental health awareness and reduce stigma in your networks",
              },
              {
                number: "06",
                title: "Research & Innovation",
                description:
                  "Collaborate on research projects and innovative solutions for mental health",
              },
            ].map((way, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl font-bold text-secondary mb-4">
                  {way.number}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {way.title}
                </h3>
                <p className="text-gray-700 text-sm">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Principles of Stewardship
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Transparency",
                description:
                  "Open communication about how resources are allocated and utilized to maximize impact",
              },
              {
                title: "Accountability",
                description:
                  "Regular reporting, audits, and evaluation to ensure responsible resource management",
              },
              {
                title: "Ethical Practice",
                description:
                  "Adherence to highest standards of professional conduct and moral principles",
              },
              {
                title: "Impact Focus",
                description:
                  "Ensuring every resource directly contributes to our mission of mental health accessibility",
              },
              {
                title: "Sustainability",
                description:
                  "Building long-term capacity and programs that create lasting, measurable change",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gray-50 rounded-lg border-l-4 border-secondary"
              >
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-700">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support Mental Health & Well-Being Globally
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join us in our mission to make mental health accessible to everyone
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/donate"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2"
            >
              <DollarSign className="w-5 h-5" />
              Make a Donation
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2"
            >
              Become a Partner <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
