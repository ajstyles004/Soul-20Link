import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import EventsManager from "../components/admin/EventsManager";
import MembersManager from "../components/admin/MembersManager";
import ProgrammesManager from "../components/admin/ProgrammesManager";
import NewsManager from "../components/admin/NewsManager";
import GalleryManager from "../components/admin/GalleryManager";
import DonationsManager from "../components/admin/DonationsManager";
import ContactManager from "../components/admin/ContactManager";
import UserManager from "../components/admin/UserManager";
import {
  Lock,
  Users,
  FileText,
  Image,
  Heart,
  MessageSquare,
  Calendar,
  BookOpen,
  Loader2
} from "lucide-react";

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface AdminStats {
  pendingMemberApprovals: number;
  newsAndArticles: number;
  galleryImages: number;
  pendingDonations: number;
  contactMessages: number;
  adminUsers: number;
  totalMembers: number;
  totalProgrammes: number;
  totalEvents: number;
}

export default function Admin() {
  const { user, loginMutation, logoutMutation } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  // View state is now derived from URL
  const activeView = (searchParams.get('view') as 'dashboard' | 'events' | 'members' | 'programmes' | 'news' | 'gallery' | 'donations' | 'contact' | 'users') || 'dashboard';
  const editIdStr = searchParams.get('editId');
  const editId = editIdStr ? parseInt(editIdStr) : null;

  // Function to change view and update URL
  const setActiveView = (view: 'dashboard' | 'events' | 'members' | 'programmes' | 'news' | 'gallery' | 'donations' | 'contact' | 'users') => {
    setSearchParams({ view });
  };

  // Fetch Stats
  const { data: stats, isLoading: statsLoading } = useQuery<AdminStats>({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await fetch("/api/stats");
      if (!res.ok) throw new Error("Failed to fetch stats");
      return res.json();
    },
    enabled: !!user // Only fetch if logged in
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ username, password });
  };

  if (!user) {
    return (
      <Layout>
        <section className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex justify-center mb-6">
                <Lock className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
                Admin Panel
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Secure login area for administrators
              </p>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter admin username"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter admin password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loginMutation.isPending}
                  className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
                >
                  {loginMutation.isPending ? "Logging in..." : "Login"}
                </button>
              </form>

              <p className="text-center text-sm text-gray-600 mt-6 pt-6 border-t border-gray-300">
                Authorized access only.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => logoutMutation.mutate()}
            className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Logout
          </button>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Cards for Stats */}
          {activeView === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  label: "Pending Member Approvals",
                  count: stats?.pendingMemberApprovals || 0,
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  label: "News & Articles",
                  count: stats?.newsAndArticles || 0,
                  color: "text-green-600",
                  bg: "bg-green-50",
                },
                {
                  icon: <Image className="w-8 h-8" />,
                  label: "Gallery Images",
                  count: stats?.galleryImages || 0,
                  color: "text-purple-600",
                  bg: "bg-purple-50",
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  label: "Pending Donations",
                  count: stats?.pendingDonations || 0,
                  color: "text-red-600",
                  bg: "bg-red-50",
                },
                {
                  icon: <MessageSquare className="w-8 h-8" />,
                  label: "Contact Messages",
                  count: stats?.contactMessages || 0,
                  color: "text-orange-600",
                  bg: "bg-orange-50",
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  label: "Admin Users",
                  count: stats?.adminUsers || 0,
                  color: "text-indigo-600",
                  bg: "bg-indigo-50",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className={`${card.bg} p-6 rounded-lg shadow-md border-l-4 border-gray-300 relative`}
                >
                  {statsLoading && <div className="absolute inset-0 bg-white/50 flex items-center justify-center rounded-lg"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>}
                  <div className={`${card.color} mb-4`}>{card.icon}</div>
                  <p className="text-gray-600 text-sm font-semibold mb-1">
                    {card.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {card.count}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Admin Functions */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {activeView === 'dashboard' ? (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Admin Functions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {([
                    {
                      title: "Manage Members",
                      description: "Add and delete team members",
                      icon: <Users className="w-12 h-12" />,
                      action: () => setActiveView('members'),
                    },
                    {
                      title: "Manage Programmes",
                      description: "Add and delete programmes",
                      icon: <BookOpen className="w-12 h-12" />,
                      action: () => setActiveView('programmes'),
                    },
                    {
                      title: "Manage News",
                      description: "Add, edit, and delete news articles and press releases",
                      icon: <FileText className="w-12 h-12" />,
                      action: () => setActiveView('news'),
                    },
                    {
                      title: "Manage Gallery",
                      description: "Upload and manage gallery images and albums",
                      icon: <Image className="w-12 h-12" />,
                      action: () => setActiveView('gallery'),
                    },
                    {
                      title: "Manage Events",
                      description: "Add, edit, and delete upcoming events",
                      icon: <Calendar className="w-12 h-12" />,
                      action: () => setActiveView('events'),
                    },
                    {
                      title: "View Donations",
                      description: "Verify donations and export donation records",
                      icon: <Heart className="w-12 h-12" />,
                      action: () => setActiveView('donations'),
                    },
                    {
                      title: "Contact Messages",
                      description: "View and respond to contact form submissions",
                      icon: <MessageSquare className="w-12 h-12" />,
                      action: () => setActiveView('contact'),
                    },
                    {
                      title: "User Management",
                      description: "Manage admin accounts and permissions",
                      icon: <Lock className="w-12 h-12" />,
                      action: () => setActiveView('users'),
                    },
                  ] as const).map((func, index) => (
                    <button
                      key={index}
                      onClick={() => 'action' in func && func.action ? (func.action as () => void)() : undefined}
                      className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-all text-left group"
                    >
                      <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                        {func.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {func.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{func.description}</p>
                    </button>
                  ))}
                </div>
              </>
            ) : activeView === 'events' ? (
              <EventsManager
                onBack={() => {
                  if (editId) setSearchParams({ view: 'events' });
                  else setActiveView('dashboard');
                }}
                editId={editId}
              />
            ) : activeView === 'members' ? (
              <div className="space-y-4">
                <button onClick={() => setActiveView('dashboard')} className="text-sm hover:underline mb-4">&larr; Back to Dashboard</button>
                <MembersManager />
              </div>
            ) : activeView === 'programmes' ? (
              <div className="space-y-4">
                <button onClick={() => setActiveView('dashboard')} className="text-sm hover:underline mb-4">&larr; Back to Dashboard</button>
                <ProgrammesManager />
              </div>
            ) : activeView === 'news' ? (
              <div className="space-y-4">
                <button onClick={() => setActiveView('dashboard')} className="text-sm hover:underline mb-4">&larr; Back to Dashboard</button>
                <NewsManager />
              </div>
            ) : activeView === 'gallery' ? (
              <div className="space-y-4">
                <button onClick={() => setActiveView('dashboard')} className="text-sm hover:underline mb-4">&larr; Back to Dashboard</button>
                <GalleryManager />
              </div>
            ) : activeView === 'donations' ? (
              <div className="space-y-4">
                <button onClick={() => setActiveView('dashboard')} className="text-sm hover:underline mb-4">&larr; Back to Dashboard</button>
                <DonationsManager />
              </div>
            ) : activeView === 'contact' ? (
              <div className="space-y-4">
                <button onClick={() => setActiveView('dashboard')} className="text-sm hover:underline mb-4">&larr; Back to Dashboard</button>
                <ContactManager />
              </div>
            ) : activeView === 'users' ? (
              <div className="space-y-4">
                <button onClick={() => setActiveView('dashboard')} className="text-sm hover:underline mb-4">&larr; Back to Dashboard</button>
                <UserManager />
              </div>
            ) : null}
          </div>

          {/* Quick Stats */}
          <div className="mt-8 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Quick Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Total Members", value: stats?.totalMembers || 0 },
                { label: "Total Donations", value: "₹" + (stats?.pendingDonations ? stats.pendingDonations * 1000 : "2,50,000") }, // Placeholder calculation or keep hardcoded if no donation data
                { label: "Articles Published", value: stats?.newsAndArticles || 0 },
                { label: "Total Events", value: stats?.totalEvents || 0 },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-white/80 text-sm font-semibold mb-2">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
