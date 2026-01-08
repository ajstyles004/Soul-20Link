import Layout from "../components/Layout";
import PlaceholderPage from "../components/PlaceholderPage";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <PlaceholderPage
        icon={<Mail className="w-16 h-16" />}
        title="Contact Us"
        description="Get in touch with us. We'd love to hear from you about our work, partnerships, or volunteering opportunities."
      />
    </Layout>
  );
}
