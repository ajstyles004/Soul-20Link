import Layout from "../components/Layout";
import PlaceholderPage from "../components/PlaceholderPage";
import { Heart } from "lucide-react";

export default function Donation() {
  return (
    <Layout>
      <PlaceholderPage
        icon={<Heart className="w-16 h-16" />}
        title="Make a Donation"
        description="Support our mission by donating via UPI, bank transfer, or other methods. Every contribution helps!"
      />
    </Layout>
  );
}
