import Layout from "../components/Layout";
import PlaceholderPage from "../components/PlaceholderPage";
import { Lock } from "lucide-react";

export default function Admin() {
  return (
    <Layout>
      <PlaceholderPage
        icon={<Lock className="w-16 h-16" />}
        title="Admin Panel"
        description="Secure administration area for managing members, news, gallery, donations, and contact messages."
      />
    </Layout>
  );
}
