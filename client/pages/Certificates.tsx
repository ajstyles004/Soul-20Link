import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { ArrowRight, Award, FileText } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "12A Registration Certificate",
      description: "Income Tax Act, 1961 - Section 12A Registration",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      status: "Active",
    },
    {
      id: 2,
      title: "80G Registration Certificate",
      description: "Income Tax Act, 1961 - Section 80G Registration",
      image:
        "https://images.unsplash.com/photo-1554224311-beee415c15c9?w=600&h=400&fit=crop",
      status: "Active",
    },
    {
      id: 3,
      title: "CSR-1 Registration Certificate",
      description:
        "Ministry of Corporate Affairs - CSR-1 for undertaking CSR activities",
      image:
        "https://images.unsplash.com/photo-1450849708868-641acb6c7f3d?w=600&h=400&fit=crop",
      status: "Active",
    },
    {
      id: 4,
      title: "DARPAN Registration Certificate",
      description: "Unique ID for NGOs registered with DARPAN",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      status: "Active",
    },
    {
      id: 5,
      title: "12A & 80G Combined Certificate",
      description: "Combined certificate showing 12A and 80G status",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
      status: "Active",
    },
    {
      id: 6,
      title: "Pan Card Certificate",
      description: "PAN certificate for Soul Link Foundation",
      image:
        "https://images.unsplash.com/photo-1567427181402-d432862512ff?w=600&h=400&fit=crop",
      status: "Active",
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 py-12 md:py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">All Certificates</h1>
          </div>
          <p className="text-blue-100 max-w-3xl">
            Soul Link Foundation is registered and certified under multiple
            regulatory bodies to ensure transparency and trust in our operations.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Registrations & Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All certificates and registrations that validate our commitment to
              transparency, compliance, and ethical operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {cert.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {cert.description}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-2">
                    View Certificate <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Trust & Transparency Section */}
          <div className="bg-blue-50 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Trust & Transparency
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Legal Compliance</h4>
                <p className="text-gray-600">
                  Soul Link is fully compliant with all applicable laws and
                  regulations. All our registrations are current and valid.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Financial Accountability
                </h4>
                <p className="text-gray-600">
                  We maintain transparent financial records and undergo regular
                  audits to ensure accountability to our donors and beneficiaries.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Donor Trust
                </h4>
                <p className="text-gray-600">
                  All donations made to Soul Link are eligible for tax deduction
                  under Section 80G of the Income Tax Act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 md:py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Support Our Mission?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Your donations are secure and fully tax-deductible. Join us in
            making a difference in mental health and wellness.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/donate"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded transition-colors inline-flex items-center gap-2"
            >
              Make a Donation
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded transition-colors inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
