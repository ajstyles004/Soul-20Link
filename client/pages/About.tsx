import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Dedicated to advancing mental health and healthcare in India
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2010, Healthcare Foundation emerged from a simple
                vision: to make quality mental health and medical care
                accessible to everyone, regardless of their economic status.
                What started as a small counseling center has grown into a
                comprehensive healthcare organization.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Over the years, we've served more than 50,000 individuals and
                families, conducting thousands of counseling sessions and
                awareness programs across India. Our team of clinical
                psychologists, psychiatrists, and healthcare professionals works
                tirelessly to break stigma and provide compassionate care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue our mission with renewed commitment,
                expanding our reach and developing innovative programs to meet
                the evolving mental health needs of our communities.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop"
                alt="Our foundation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-secondary">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold text-gray-900">
                  🌍 Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to create a world where mental well-being is
                accessible to everyone, without financial or social barriers. We
                aim to build a global ecosystem of mental relief and
                psychological support that serves individuals across all
                regions—from remote communities to modern cities—and across all
                economic backgrounds. Mental health is universal, and our vision
                reaches beyond borders, cultures, and continents.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-gray-900">
                  🎯 Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to deliver mental relief, mind improvement, and
                psychological well-being through advanced, modern, and
                evidence-based therapeutic approaches. We are committed to
                ensuring that access to mental health support is never limited
                by economic conditions. Our services are designed to be
                inclusive, ethical, and available to all individuals, regardless
                of their financial background, geographic location, or social
                status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🧠 What We Do
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are a non-profit organization working to make mental health
              support inclusive and universally accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Providing mental relief and emotional support using modern therapeutic techniques",
              "Enhancing mental clarity, resilience, and overall well-being",
              "Reaching both underserved communities and urban populations",
              "Serving individuals across diverse economic and cultural backgrounds",
              "Expanding our impact globally, from developing regions to developed nations",
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-primary text-2xl font-bold flex-shrink-0">
                  •
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-lg border-l-4 border-primary">
            <p className="text-gray-700 leading-relaxed">
              Our approach is rooted in compassion, dignity, and the belief that
              mental wellness should not be restricted by financial or social
              limitations.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            💙 What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Inclusive Approach",
                description:
                  "We prioritize access over affordability, ensuring no one is left behind",
              },
              {
                title: "Universal Support",
                description:
                  "Equal support for individuals from all walks of life",
              },
              {
                title: "Global Outlook",
                description:
                  "A mission without geographical or economic boundaries",
              },
              {
                title: "Ethics & Empathy",
                description: "A mission driven by ethics, empathy, and impact",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Compassion",
                description:
                  "We approach every individual with empathy and respect",
              },
              {
                title: "Excellence",
                description:
                  "We strive for the highest standards in mental health care",
              },
              {
                title: "Integrity",
                description:
                  "We maintain ethical practices in all our operations",
              },
              {
                title: "Accessibility",
                description:
                  "We work to make healthcare available to all, regardless of background",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Details */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Legal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Registration Details
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="font-semibold text-gray-700">
                    Organization Name:
                  </dt>
                  <dd className="text-gray-600">
                    Healthcare Foundation, Kolkata
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">
                    Registration Number:
                  </dt>
                  <dd className="text-gray-600">HCF/2010/12345</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">Type:</dt>
                  <dd className="text-gray-600">Registered Trust</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">Pan Number:</dt>
                  <dd className="text-gray-600">AABCT5050D</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Trust Details
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="font-semibold text-gray-700">Founder:</dt>
                  <dd className="text-gray-600">Dr. Rajesh Sharma</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">Trust Date:</dt>
                  <dd className="text-gray-600">January 15, 2010</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">
                    Trustee Members:
                  </dt>
                  <dd className="text-gray-600">7 members</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">Contact:</dt>
                  <dd className="text-gray-600">
                    info@healthcarefoundation.org
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Awards & Recognition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                year: "2023",
                title: "Best Mental Health Organization",
                awarding_body: "India Healthcare Excellence Awards",
              },
              {
                year: "2022",
                title: "Community Impact Award",
                awarding_body: "National NGO Council",
              },
              {
                year: "2021",
                title: "Innovation in Mental Health",
                awarding_body: "Asia Health Forum",
              },
              {
                year: "2020",
                title: "Service to Society Award",
                awarding_body: "Kolkata Municipal Corporation",
              },
            ].map((award, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">
                    {award.year}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{award.awarding_body}</p>
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
            Join Us in Our Mission
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Be part of a movement to transform mental health and healthcare in
            India
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/donate"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Support Us
            </Link>
            <Link
              to="/team"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
