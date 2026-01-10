import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  Target,
  Award,
  Lightbulb,
  Heart,
} from "lucide-react";

export default function Impact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🌱 Impact & Future Goals</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Measuring our impact and charting our course toward global change
          </p>
        </div>
      </section>

      {/* Measured Impact */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measured Impact
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Our work has contributed to meaningful, measurable change in mental health and community well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                metric: "50,000+",
                description: "Improved emotional well-being across diverse communities",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                metric: "Increased Awareness",
                description: "Reduced stigma surrounding mental health through education",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                metric: "Global Reach",
                description:
                  "Expanded access to psychological support in both remote and urban environments",
              },
              {
                icon: <Users className="w-8 h-8" />,
                metric: "Strengthened Resilience",
                description:
                  "Enhanced individual resilience and cognitive well-being across populations",
              },
            ].map((item, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-lg border-l-4 border-secondary">
                <div className="text-secondary mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {item.metric}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              <strong>Continuous Evaluation:</strong> We continuously assess outcomes to ensure effectiveness, responsibility, and sustained social impact through rigorous monitoring, data collection, and community feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Vision for the Future */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Strategic Vision for the Future
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Scaling Across Regions",
                description:
                  "Expanding programs across regions, countries, and continents to reach more people in need",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Reaching Underserved Populations",
                description:
                  "Strategic outreach targeting high-need and underserved populations globally",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovative Solutions",
                description:
                  "Integrating innovative therapeutic models and digital mental health solutions",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Global Partnerships",
                description:
                  "Establishing global partnerships and professional networks for collaborative impact",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Strengthening Governance",
                description:
                  "Improving governance, compliance, and impact evaluation systems",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Long-Term Sustainability",
                description:
                  "Building sustainable systems ensuring lasting impact for generations to come",
              },
            ].map((priority, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-secondary mb-4">{priority.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {priority.title}
                </h3>
                <p className="text-gray-700">{priority.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-teal-50 rounded-lg border-l-4 border-secondary">
            <p className="text-gray-900 font-semibold mb-2">Long-Term Objective</p>
            <p className="text-gray-700 leading-relaxed">
              Our long-term objective is to contribute to a resilient, mentally healthy global society through inclusive and responsible mental health initiatives. We aim to create systemic change that ensures no one is left behind in their mental health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Transformation",
                description:
                  "A remote village gained access to mental health education and counseling, reducing stigma and improving community mental wellness.",
              },
              {
                title: "Individual Recovery",
                description:
                  "Individuals struggling with depression and anxiety found relief and developed resilience through our evidence-based interventions.",
              },
              {
                title: "Family Healing",
                description:
                  "Families dealing with relationship challenges found renewed connection and improved communication through our family counseling programs.",
              },
            ].map((story, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Commitment to Impact
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are committed to delivering measurable results and creating sustainable change in mental health and community well-being. Every program, every intervention, and every resource allocation is guided by our commitment to effectiveness and ethical stewardship.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that through continued dedication, innovation, and collaboration, we can contribute meaningfully to a world where mental health is no longer stigmatized, where access is universal, and where every individual can achieve their full potential in wellness and resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Heart Icon for import */}
      {/* Added invisible import */}
      {(() => {
        const { Heart } = require("lucide-react");
        return null;
      })()}

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of Our Impact Story
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Support our mission to create a mentally healthy global society
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/donate"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2"
            >
              Support Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2"
            >
              Get Involved <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
