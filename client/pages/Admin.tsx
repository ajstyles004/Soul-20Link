import Layout from "../components/Layout";
import { useState } from "react";
import {
  Lock,
  Users,
  FileText,
  Image,
  Heart,
  MessageSquare,
} from "lucide-react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsLoggedIn(true);
      setPassword("");
    } else {
      alert("Invalid password");
      setPassword("");
    }
  };

  if (!isLoggedIn) {
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
                    Admin Password
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
                  className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Login
                </button>
              </form>

              <p className="text-center text-sm text-gray-600 mt-6 pt-6 border-t border-gray-300">
                Demo password:{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">admin123</code>
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
            onClick={() => {
              setIsLoggedIn(false);
              setPassword("");
            }}
            className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Logout
          </button>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                label: "Pending Member Approvals",
                count: 12,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                label: "News & Articles",
                count: 28,
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                icon: <Image className="w-8 h-8" />,
                label: "Gallery Images",
                count: 156,
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                label: "Pending Donations",
                count: 8,
                color: "text-red-600",
                bg: "bg-red-50",
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                label: "Contact Messages",
                count: 24,
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
              {
                icon: <Lock className="w-8 h-8" />,
                label: "Admin Users",
                count: 3,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`${card.bg} p-6 rounded-lg shadow-md border-l-4 border-gray-300`}
              >
                <div className={`${card.color} mb-4`}>{card.icon}</div>
                <p className="text-gray-600 text-sm font-semibold mb-1">
                  {card.label}
                </p>
                <p className="text-3xl font-bold text-gray-900">{card.count}</p>
              </div>
            ))}
          </div>

          {/* Admin Functions */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Admin Functions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Manage Members",
                  description:
                    "Approve/reject member registrations and manage team members",
                  icon: <Users className="w-12 h-12" />,
                },
                {
                  title: "Manage News",
                  description:
                    "Add, edit, and delete news articles and press releases",
                  icon: <FileText className="w-12 h-12" />,
                },
                {
                  title: "Manage Gallery",
                  description: "Upload and manage gallery images and albums",
                  icon: <Image className="w-12 h-12" />,
                },
                {
                  title: "View Donations",
                  description: "Verify donations and export donation records",
                  icon: <Heart className="w-12 h-12" />,
                },
                {
                  title: "Contact Messages",
                  description: "View and respond to contact form submissions",
                  icon: <MessageSquare className="w-12 h-12" />,
                },
                {
                  title: "User Management",
                  description: "Manage admin accounts and permissions",
                  icon: <Lock className="w-12 h-12" />,
                },
              ].map((func, index) => (
                <button
                  key={index}
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
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Recent Activity
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Activity
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      activity: "New member registration - Rajesh Gupta",
                      date: "2024-01-15",
                      status: "Pending",
                    },
                    {
                      activity: "Donation received - ₹5000",
                      date: "2024-01-14",
                      status: "Verified",
                    },
                    {
                      activity: "News article posted - Mental Health Awareness",
                      date: "2024-01-13",
                      status: "Published",
                    },
                    {
                      activity: "Contact message from John Doe",
                      date: "2024-01-12",
                      status: "New",
                    },
                    {
                      activity: "Gallery images uploaded - Event 2024",
                      date: "2024-01-11",
                      status: "Approved",
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 text-gray-900">
                        {row.activity}
                      </td>
                      <td className="py-4 px-4 text-gray-600">{row.date}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            row.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : row.status === "Verified"
                                ? "bg-green-100 text-green-800"
                                : row.status === "New"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Quick Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Total Members", value: "47" },
                { label: "Total Donations", value: "₹2,50,000" },
                { label: "Articles Published", value: "28" },
                { label: "Page Views", value: "12,500" },
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
