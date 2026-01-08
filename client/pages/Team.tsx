import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Team() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    bio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will review your application and get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      bio: "",
    });
  };

  const teamMembers = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Founder & Medical Director",
      bio: "MD Psychiatry with 20+ years of experience in mental health services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      name: "Dr. Sarah Johnson",
      position: "Clinical Psychologist",
      bio: "Specialized in cognitive behavioral therapy and trauma counseling",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
    },
    {
      name: "Priya Sharma",
      position: "Senior Counselor",
      bio: "Certified counselor with expertise in family and relationship therapy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
    },
    {
      name: "Amit Patel",
      position: "Community Coordinator",
      bio: "Leads community outreach and awareness programs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Dedicated professionals committed to mental health and healthcare excellence
          </p>
        </div>
      </section>

      {/* Current Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Team Members
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Join Our Mission
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Are you passionate about mental health and healthcare? We're always looking for dedicated professionals and volunteers to join our team. Fill out the form below to express your interest.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 md:p-12 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Position / Role *
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a position</option>
                  <option value="psychologist">Clinical Psychologist</option>
                  <option value="counselor">Counselor</option>
                  <option value="doctor">Medical Doctor</option>
                  <option value="coordinator">Program Coordinator</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tell us about yourself
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Share your experience, qualifications, and why you want to join us..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Submit Application <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 pt-4 border-t border-gray-300">
                Your application will be reviewed by our admin team and we'll get back to you within 7 business days.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Volunteer Opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Counseling Support",
                description: "Help provide emotional support during counseling sessions and support groups"
              },
              {
                title: "Awareness Programs",
                description: "Conduct mental health awareness workshops in schools and communities"
              },
              {
                title: "Administrative Support",
                description: "Assist with program coordination, data entry, and office management"
              },
            ].map((opportunity, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600 mb-6">{opportunity.description}</p>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Have Questions About Joining Us?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <a
              href="mailto:careers@healthcarefoundation.org"
              className="flex items-center gap-3 bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <Mail className="w-5 h-5" />
              careers@healthcarefoundation.org
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
