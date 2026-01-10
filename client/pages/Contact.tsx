import Layout from "../components/Layout";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    alert(
      "Thank you for reaching out! We'll respond to your message as soon as possible during office hours (Mon-Sat, 10 AM - 7 PM). For urgent matters, please call or WhatsApp directly.",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            📞 Thank you for contacting Prajit Rong at SoulLink Foundation.
            Calls are preferred for more effective communication and better
            understanding of your needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Contact Person */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Contact Person
              </h3>
              <p className="text-gray-600 text-sm font-semibold">Prajit Rong</p>
              <p className="text-gray-600 text-sm">
                SoulLink Foundation
                <br />
                Mental Health & Wellness
              </p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Phone
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                <span className="font-semibold block text-primary">
                  WhatsApp or Call
                </span>
                <span className="text-xs text-gray-500">(Calls Preferred)</span>
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-gray-600 text-sm">
                <a
                  href="mailto:teamprajitrong@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  teamprajitrong@gmail.com
                </a>
              </p>
              <p className="text-gray-600 text-xs mt-2">For urgent matters</p>
            </div>

            {/* Office Hours */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hours
              </h3>
              <p className="text-gray-600 text-sm">
                Monday - Saturday
                <br />
                10:00 AM - 7:00 PM
                <br />
                <span className="text-xs text-gray-500">IST</span>
              </p>
            </div>
          </div>

          {/* Contact Notice */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg border-l-4 border-secondary">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              📞 How to Reach Us
            </h3>
            <p className="text-gray-700 mb-3">
              We prefer phone calls for more effective communication and to
              better understand your needs.
            </p>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>
                ✓ <strong>Preferred Method:</strong> Direct call or WhatsApp
              </li>
              <li>
                ✓ <strong>Call Hours:</strong> 10:00 AM – 7:00 PM, Monday to
                Saturday
              </li>
              <li>
                ✓ <strong>For Urgent Matters:</strong> Email
                teamprajitrong@gmail.com
              </li>
              <li>
                ✓ <strong>Response Time:</strong> We respond as soon as possible
              </li>
            </ul>
            <p className="text-gray-600 text-sm mt-4">
              Thank you for your patience and for reaching out to SoulLink
              Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Contact Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500 text-center"
            >
              <div className="text-4xl font-bold text-green-500 mb-3">💬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                WhatsApp
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Quick and convenient communication
              </p>
              <p className="text-primary font-semibold text-sm">
                Available during office hours
              </p>
            </a>

            {/* Direct Call */}
            <a
              href="tel:+919876543210"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary text-center"
            >
              <div className="text-4xl font-bold text-primary mb-3">📞</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Direct Call
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Preferred method for effective communication
              </p>
              <p className="text-primary font-semibold text-sm">
                10:00 AM - 7:00 PM (Mon-Sat)
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Send us a Message
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Fill out the form below and we'll get back to you as soon as
            possible
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="john@example.com"
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

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Subject *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Select a subject</option>
                <option value="counseling">Counseling Services</option>
                <option value="healthcare">Healthcare Services</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="volunteer">Volunteer Opportunity</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Please share your message or inquiry..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 pt-4 border-t border-gray-300">
              We typically respond as soon as possible during our office hours:
              Monday - Saturday, 10:00 AM - 7:00 PM.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What's the best way to contact you?",
                a: "We prefer phone calls (WhatsApp or regular call) as they allow us to better understand your needs and provide more effective support. You can reach us during 10:00 AM - 7:00 PM, Monday to Saturday.",
              },
              {
                q: "Can I reach you outside of office hours?",
                a: "For urgent matters outside our regular hours, please send an email to teamprajitrong@gmail.com. We'll respond as soon as possible.",
              },
              {
                q: "What services does SoulLink Foundation provide?",
                a: "We provide comprehensive mental health services including psychological counseling, cognitive development programs, crisis support, resilience building, and community-based mental health initiatives.",
              },
              {
                q: "How do I schedule a consultation?",
                a: "Simply call or WhatsApp us during office hours. Our team will discuss your needs and schedule an appointment at a convenient time.",
              },
              {
                q: "Do you offer online counseling?",
                a: "Yes, we offer both in-person and online counseling sessions. Discuss your preference when you contact us.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
