import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, Search, MessageCircle, HelpCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "What we do", href: "/news" },
    { label: "Partnership", href: "/contact" },
    { label: "Get Involved", href: "/donate" },
    { label: "Resources", href: "/gallery" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Blue Header Bar */}
      <div className="bg-blue-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="text-center sm:text-left">
              Soul Link is registered under sections 12A & 80G of the Income Tax Act, 1961 and CSR-1 registered under the Ministry of Corporate Affairs for undertaking CSR activities.{" "}
              <Link to="/certificates" className="font-semibold underline hover:no-underline">
                click here
              </Link>{" "}
              to visit all certificates
            </div>
            <div className="flex gap-6 text-xs sm:text-sm">
              <a href="tel:+911140538140" className="flex items-center gap-1 hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4" />
                011-40538140
              </a>
              <a href="mailto:info@ngo.org" className="flex items-center gap-1 hover:opacity-90 transition-opacity">
                <Mail className="w-4 h-4" />
                info@ngo.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-gray-900">
                    बाल
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    Mental Health & Wellness
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <Link
                to="/donate"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 sm:px-6 rounded transition-colors text-sm"
              >
                Donate Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <button
          className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          aria-label="Help"
        >
          <HelpCircle className="w-7 h-7" />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">बाल Foundation</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Providing mental health and healthcare services to underserved
                communities across India.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12.05a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-red-500 transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-red-500 transition-colors"
                  >
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="hover:text-red-500 transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    to="/news"
                    className="hover:text-red-500 transition-colors"
                  >
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-red-500 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="tel:+911140538140"
                    className="hover:text-red-500 transition-colors"
                  >
                    011-40538140
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@ngo.org"
                    className="hover:text-red-500 transition-colors"
                  >
                    info@ngo.org
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-red-500 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm text-gray-400">
              <div>
                <p className="font-semibold text-white mb-1">
                  Organization Details
                </p>
                <p>
                  Registration No: HCF/2010/12345 | PAN: AABCT5050D | 80G:
                  80G/2010/12345
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">
                  Legal Disclaimer
                </p>
                <p>
                  Donations are voluntary and non-refundable. All contributions
                  are utilized transparently and accounted for.
                </p>
              </div>
            </div>
            <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
              <p>
                &copy; 2024 बाल Foundation. All rights reserved.
                | Mental Health & Healthcare Services
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
