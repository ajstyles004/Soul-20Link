import Layout from "../components/Layout";
import { useState } from "react";
import { Heart, Copy, Check } from "lucide-react";

export default function Donation() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    donorName: "",
    email: "",
    phone: "",
    amount: "",
    transactionId: "",
    donationDate: "",
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donation confirmation:", formData);
    alert(
      "Thank you for your generous donation! We will verify your transaction and send you a confirmation email shortly.",
    );
    setFormData({
      donorName: "",
      email: "",
      phone: "",
      amount: "",
      transactionId: "",
      donationDate: "",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Make a Donation
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your contribution helps us provide mental health services and
            healthcare to underserved communities
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-blue-50 border-l-4 border-primary py-8 mx-4 my-8 md:mx-0 md:my-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 font-semibold">
            💡 <strong>Important:</strong> Donations are voluntary and
            non-refundable. Your contributions are processed with complete
            transparency and are tax-deductible (details below).
          </p>
        </div>
      </section>

      {/* UPI & Bank Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Donation Methods
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* UPI Section */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-lg border-2 border-primary">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                UPI Donation (Recommended)
              </h3>

              <div className="mb-8 p-6 bg-white rounded-lg border-2 border-dashed border-primary">
                <p className="text-sm text-gray-600 mb-4 font-semibold">
                  Scan this QR code with any UPI app
                </p>
                <div className="bg-gray-100 w-full h-64 flex items-center justify-center rounded-lg mb-4">
                  <div className="text-center">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=healthcare@upi&pn=HealthcareFoundation"
                      alt="UPI QR Code"
                      className="w-48 h-48"
                    />
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mb-4">
                  Scan using GPay, PhonePe, Paytm, or any UPI app
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    UPI ID
                  </label>
                  <div className="flex items-center gap-2 bg-white p-4 rounded-lg border border-gray-300">
                    <code className="flex-1 font-mono text-gray-900 font-semibold">
                      healthcare@upi
                    </code>
                    <button
                      onClick={() => handleCopy("healthcare@upi", "upi")}
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      {copiedField === "upi" ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-600 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                ✅ <strong>Benefits:</strong> Instant, transparent, and direct
                transfer to our account
              </p>
            </div>

            {/* Bank Transfer Section */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-lg border-2 border-secondary">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                Bank Transfer
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    value="HDFC Bank"
                    readOnly
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    value="Healthcare Foundation"
                    readOnly
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Account Number
                  </label>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-300">
                    <code className="flex-1 font-mono text-gray-900 font-semibold">
                      50123456789012
                    </code>
                    <button
                      onClick={() => handleCopy("50123456789012", "account")}
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      {copiedField === "account" ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    IFSC Code
                  </label>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-300">
                    <code className="flex-1 font-mono text-gray-900 font-semibold">
                      HDFC0000123
                    </code>
                    <button
                      onClick={() => handleCopy("HDFC0000123", "ifsc")}
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      {copiedField === "ifsc" ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Branch
                  </label>
                  <input
                    type="text"
                    value="Kolkata, West Bengal"
                    readOnly
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-600 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                📝 <strong>Important:</strong> Please mention your name in the
                transaction remarks/description
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Confirmation Form */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Donation Confirmation
          </h2>
          <p className="text-gray-600 text-center mb-8">
            After making your donation, please fill out this form so we can
            track and acknowledge your contribution
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          >
            {/* Donor Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Donor Name *
              </label>
              <input
                type="text"
                name="donorName"
                value={formData.donorName}
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
                Phone Number (Optional)
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

            {/* Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Amount Donated (₹) *
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="1000"
              />
            </div>

            {/* Transaction ID */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Transaction ID / UTR Number *
              </label>
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Enter your UPI transaction ID or bank UTR"
              />
            </div>

            {/* Donation Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Date of Donation *
              </label>
              <input
                type="date"
                name="donationDate"
                value={formData.donationDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Submit Donation Details
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 pt-4 border-t border-gray-300">
              Your donation will be verified by our admin team within 3-5
              business days. You'll receive a confirmation email with your
              donation receipt.
            </p>
          </form>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Tax Benefits
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-l-4 border-green-500">
            <p className="text-gray-700 mb-4">
              Your donation to Healthcare Foundation is{" "}
              <strong>tax-deductible</strong> under Section 80G of the Indian
              Income Tax Act. We are registered as a charitable organization.
            </p>
            <dl className="space-y-3 text-gray-700">
              <div>
                <dt className="font-semibold text-gray-900">
                  Tax Exemption Number:
                </dt>
                <dd className="text-gray-600">80G/2010/12345</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">PAN Number:</dt>
                <dd className="text-gray-600">AABCT5050D</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">You can claim:</dt>
                <dd className="text-gray-600">
                  50% of your donation as a tax deduction
                </dd>
              </div>
            </dl>
          </div>
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
                q: "How is my donation used?",
                a: "Your donation directly supports our mental health services, counseling programs, healthcare camps, and awareness initiatives.",
              },
              {
                q: "Is my donation secure?",
                a: "Yes, all donations are processed through secure payment channels. We also accept direct bank transfers for complete transparency.",
              },
              {
                q: "Will I receive a receipt?",
                a: "Yes, you'll receive a detailed donation receipt and tax acknowledgment via email within 3-5 business days.",
              },
              {
                q: "Can I set up a recurring donation?",
                a: "Yes! Please contact us at donations@healthcarefoundation.org for setting up monthly or quarterly recurring donations.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thank You for Your Support
          </h2>
          <p className="text-lg text-white/80">
            Your generosity makes a real difference in the lives of those we
            serve. Together, we're building a healthier, more compassionate
            world.
          </p>
        </div>
      </section>
    </Layout>
  );
}
