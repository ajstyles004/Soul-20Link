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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    alert("Thank you for contacting us! We'll get back to you within 24 hours.");
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Have questions or need support? We're here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Address */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                Healthcare Foundation<br />
                123 Medical Street<br />
                Kolkata, West Bengal 700001<br />
                India
              </p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm mb-2">
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                <a href="tel:+919123456789" className="hover:text-primary transition-colors">
                  +91 91234 56789
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-1">
                <a href="mailto:info@healthcarefoundation.org" className="hover:text-primary transition-colors">
                  info@healthcarefoundation.org
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                <a href="mailto:support@healthcarefoundation.org" className="hover:text-primary transition-colors">
                  support@healthcarefoundation.org
                </a>
              </p>
            </div>

            {/* Office Hours */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">
                Monday - Friday<br />
                9:00 AM - 6:00 PM<br />
                Saturday<br />
                10:00 AM - 4:00 PM
              </p>
            </div>
          </div>

          {/* 24/7 Crisis Support */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-lg border-l-4 border-secondary">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              🆘 24/7 Crisis Support Helpline
            </h3>
            <p className="text-gray-700 mb-3">
              If you or someone you know is experiencing a mental health crisis, please reach out immediately:
            </p>
            <div className="text-2xl font-bold text-secondary mb-2">
              +91 XXXX 987 654
            </div>
            <p className="text-gray-600 text-sm">
              Available 24 hours a day, 7 days a week. Free and confidential support.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5503799999998!2d88.37!3d22.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzEyLjAiTiA4OMKwMjInMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
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
            Fill out the form below and we'll get back to you as soon as possible
          </p>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg space-y-6">
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
              We typically respond within 24 hours during business days.
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
                q: "How can I access your counseling services?",
                a: "You can reach out via phone, email, or fill out our contact form. Our team will schedule an appointment or consultation based on your needs."
              },
              {
                q: "What if I need urgent mental health support?",
                a: "Please call our 24/7 crisis helpline at +91 XXXX 987 654. Our trained counselors are available round the clock for emergencies."
              },
              {
                q: "Do you provide online counseling?",
                a: "Yes, we offer both in-person and online counseling sessions through secure video platforms. Contact us to book your session."
              },
              {
                q: "What is your cancellation policy?",
                a: "Cancellations made 24 hours in advance are free. Late cancellations may incur charges. Contact us for details."
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
