import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot, Root } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Certificates from "./pages/Certificates";
import Donation from "./pages/Donation";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Services from "./pages/Services";
import Impact from "./pages/Impact";
import Fundraising from "./pages/Fundraising";
import NotFound from "./pages/NotFound";
import PostEditor from "./pages/PostEditor";
import PostDetails from "./pages/PostDetails";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./hooks/use-auth";

declare global {
  interface Window {
    __REACT_ROOT__?: Root;
  }
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/news" element={<News />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/donate" element={<Donation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/fundraising" element={<Fundraising />} />

            {/* Protected Routes */}
            <Route path="/admin" element={<AdminRoute component={Admin} />} />
            <Route path="/post/new" element={<AdminRoute component={PostEditor} />} />
            <Route path="/post/edit/:id" element={<AdminRoute component={PostEditor} />} />
            <Route path="/post/:id" element={<PostDetails />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

// Simple wrapper for protected routes using react-router-dom
function AdminRoute({ component: Component }: { component: any }) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <Login />;

  return <Component />;
}

// Use window object to persist root across HMR reloads
const initializeApp = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;

  // Check if we already have a root instance in the window
  if (window.__REACT_ROOT__) {
    window.__REACT_ROOT__.render(<App />);
  } else {
    // Create root only on first load
    const newRoot = createRoot(rootElement);
    window.__REACT_ROOT__ = newRoot;
    newRoot.render(<App />);
  }
};

// Initialize when ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}

// Cleanup on HMR dispose
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    // Don't unmount on dispose - keep the root alive for re-render
  });

  import.meta.hot.accept([], () => {
    // Re-render on any hot update
    initializeApp();
  });
}
