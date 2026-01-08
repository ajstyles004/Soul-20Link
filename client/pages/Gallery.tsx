import Layout from "../components/Layout";
import PlaceholderPage from "../components/PlaceholderPage";
import { Image } from "lucide-react";

export default function Gallery() {
  return (
    <Layout>
      <PlaceholderPage
        icon={<Image className="w-16 h-16" />}
        title="Photo Gallery"
        description="Explore our collection of photos from events, programs, and community activities across India."
      />
    </Layout>
  );
}
