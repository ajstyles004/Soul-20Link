import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Heart,
  Search,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Impact", href: "/impact" },
    { label: "Partnership", href: "/fundraising" },
    { label: "Get Involved", href: "/donate" },
    { label: "Resources", href: "/gallery" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Blue Header Bar with Scrolling Text */}
      <div className="bg-primary text-white py-2 overflow-hidden">
        <div className="flex items-center gap-6">
          {/* Scrolling Text */}
          <div className="scroll-text-container flex-1 min-w-0">
            <div className="scroll-text inline-block">
              <span>
                📞 Thank you for contacting Prajit Rong | Calls/WhatsApp
                Preferred | 📅 Mon-Sat, 10 AM - 7 PM | 📧
                teamprajitrong@gmail.com | Soul Link Foundation - Advancing
                Mental Well-Being Globally
              </span>
            </div>
          </div>

          {/* Contact Info - Static on desktop, hidden on mobile */}
          <div className="hidden sm:flex gap-6 text-xs flex-shrink-0 pl-4 border-l border-primary/50">
            <a
              href="https://wa.me/919876543210"
              className="flex items-center gap-1 hover:opacity-90 transition-opacity whitespace-nowrap"
              title="WhatsApp or Call"
            >
              <Phone className="w-4 h-4" />
              Call/WhatsApp
            </a>
            <a
              href="mailto:teamprajitrong@gmail.com"
              className="flex items-center gap-1 hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              teamprajitrong@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fad2084e23846432ebddf5f6d3806dc48?format=webp&width=800"
                alt="SoulLink Foundation Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors text-sm"
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
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 sm:px-6 rounded transition-colors text-sm"
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
                  className="block py-2 text-gray-700 hover:text-primary font-medium transition-colors"
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
          href="https://wa.me/919876543210?text=Hello%20Prajit%20Rong%2C%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          aria-label="WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <button
          className="w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
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
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">SoulLink Foundation</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Advancing inclusive mental well-being and psychological support
                globally. Contact Prajit Rong for services and inquiries.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
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
                  className="text-gray-400 hover:text-primary transition-colors"
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
                  className="text-gray-400 hover:text-primary transition-colors"
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
                    className="hover:text-primary transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary transition-colors"
                  >
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="hover:text-primary transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
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
                    className="hover:text-primary transition-colors"
                  >
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-primary transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/certificates"
                    className="hover:text-primary transition-colors"
                  >
                    Certificates
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
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
                  <p className="hover:text-primary transition-colors">
                    Prajit Rong
                  </p>
                </li>
                <li>
                  <a
                    href="mailto:teamprajitrong@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    teamprajitrong@gmail.com
                  </a>
                </li>
                <li className="text-xs text-gray-500">
                  📞 Call/WhatsApp preferred
                  <br />
                  🕙 10 AM - 7 PM (Mon-Sat)
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary transition-colors"
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
                  📍 Quick Contact
                </p>
                <p>
                  Prajit Rong | 📞 Call/WhatsApp | 🕙 10 AM - 7 PM (Mon-Sat) |
                  📧 teamprajitrong@gmail.com
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">
                  Mission & Values
                </p>
                <p>
                  Providing accessible, inclusive mental health support without
                  financial barriers. Committed to ethics, transparency, and
                  measurable impact.
                </p>
              </div>
            </div>
            <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
              <p>
                &copy; 2024 SoulLink Foundation. All rights reserved. |
                Advancing Mental Well-Being Globally
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
