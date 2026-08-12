import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Heart,

  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { User as UserIcon, LayoutDashboard, LogOut } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logoutMutation } = useAuth();
  const location = useLocation();

  const navGroups = [
    {
      title: "WHO WE ARE",
      items: [
        { label: "About Us", href: "/about", description: "Our story, mission, and vision." },
        { label: "Our Team", href: "/team", description: "Meet the dedicated people behind our mission." },
        { label: "Impact", href: "/impact", description: "See the change we are making together." },
        { label: "Certificates", href: "/certificates", description: "Our legal registrations and certifications." },
      ],
    },
    {
      title: "OUR PROGRAMMES",
      items: [
        { label: "Programmes", href: "/programmes", description: "Our core initiatives and projects." },
        { label: "Services", href: "/services", description: "Services we offer to the community." },
        { label: "Events", href: "/events", description: "Upcoming and past events." },
      ],
    },
    {
      title: "RESOURCES",
      items: [
        { label: "News", href: "/news", description: "Latest updates and press releases." },
        { label: "Blogs", href: "/blogs", description: "Articles and insights on mental health." },
        { label: "Gallery", href: "/gallery", description: "Visual stories from our activities." },
      ],
    },
    {
      title: "GET INVOLVED",
      items: [
        { label: "Donate", href: "/donate", description: "Support our cause financially." },
        { label: "Partnership", href: "/fundraising", description: "Collaborate with us." },
        { label: "Contact Us", href: "/contact", description: "Get in touch with our team." },
      ],
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Blue Header Bar with Scrolling Text */}
      <div className="bg-primary text-white py-1 text-xs overflow-hidden">
        <div className="flex items-center gap-6">
          {/* Scrolling Text */}
          <div className="scroll-text-container flex-1 min-w-0">
            <div className="scroll-text inline-block">
              <span style={{ fontFamily: "'Times New Roman', serif" }}>
                Soul Link is registered under sections 12A &amp; 80G of the
                Income Tax Act, 1961 and CSR-1 registered under the Ministry of
                Health &amp; Education.{" "}
                <Link
                  to="/certificates"
                  className="underline hover:opacity-80 transition-opacity font-semibold"
                  style={{ fontFamily: "'Times New Roman', serif" }}
                >
                  click here
                </Link>{" "}
                to view the certificates
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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Left: Hamburger + Logo */}
            <div className="flex items-center gap-4">
              {/* Hamburger Button */}
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>

              <Link to="/" className="flex-shrink-0 flex items-center group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fad2084e23846432ebddf5f6d3806dc48?format=webp&width=800"
                  alt="SoulLink"
                  className="h-20 w-auto group-hover:scale-105 transition-transform opacity-90 mix-blend-multiply"
                />
              </Link>
            </div>

            {/* Center: Desktop Navigation (Mega Menu) */}
            <div className="hidden lg:block flex-1 px-8">
              <NavigationMenu className="mx-auto">
                <NavigationMenuList>
                  {navGroups.map((group) => (
                    <NavigationMenuItem key={group.title}>
                      <NavigationMenuTrigger className="bg-transparent text-sm font-bold text-gray-700 hover:text-primary uppercase tracking-wide">
                        {group.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                          {group.items.map((item) => (
                            <ListItem key={item.href} title={item.label} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right: Donate Button & Admin Menu */}
            <div className="flex items-center gap-3">

              <Link
                to="/donate"
                className="hidden sm:inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-extrabold py-2.5 px-6 rounded shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 uppercase tracking-wide text-sm"
              >
                <Heart className="w-4 h-4 mr-2 text-red-600 fill-current" />
                Donate
              </Link>

              {/* Admin / User Menu */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <UserIcon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="hidden md:inline-block font-semibold text-sm text-gray-700">Account</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-white">
                    <DropdownMenuLabel>My Account ({user.username})</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="cursor-pointer w-full flex items-center">
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600 cursor-pointer focus:text-red-600 focus:bg-red-50"
                      onClick={() => logoutMutation.mutate()}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to="/auth"
                  className="hidden sm:inline-flex items-center justify-center text-sm font-bold text-gray-700 hover:text-primary uppercase tracking-wide transition-colors"
                >
                  Admin Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Sidebar Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl p-6 overflow-y-auto transition-transform duration-300 transform translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fad2084e23846432ebddf5f6d3806dc48?format=webp&width=800"
                alt="SoulLink"
                className="h-10 w-auto"
              />
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-8">
              {navGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 border-b pb-2">{group.title}</h4>
                  <ul className="space-y-3 pl-2">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className={cn(
                            "block text-gray-700 hover:text-primary font-medium transition-colors text-base py-1",
                            location.pathname === item.href && "text-primary font-bold"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="pt-6 border-t border-gray-100 space-y-4">
                {user ? (
                  <Link to="/admin" className="block w-full text-center py-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 font-semibold transition-colors">Admin Panel</Link>
                ) : (
                  <Link to="/auth" className="block w-full text-center py-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 font-semibold transition-colors">Admin Login</Link>
                )}
                <Link to="/donate" className="block w-full text-center py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded shadow-md uppercase tracking-wider transition-colors">
                  Donate Now
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-900 group-hover:text-primary">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
