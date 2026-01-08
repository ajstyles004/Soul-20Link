import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { ArrowRight, Users, Zap, Leaf, Heart, Award, BookOpen } from "lucide-react";

const impactStats = [
  {
    number: "3,51,377",
    description: "Children reached through our programs",
    color: "bg-blue-500",
  },
  {
    number: "20,252",
    description: "Families supported across India",
    color: "bg-pink-400",
  },
  {
    number: "63,007",
    description: "Community members engaged",
    color: "bg-yellow-400",
  },
  {
    number: "30,250",
    description: "Schools strengthened & resources",
    color: "bg-orange-500",
  },
  {
    number: "26,530",
    description: "Healthcare interventions provided",
    color: "bg-teal-500",
  },
  {
    number: "21,858",
    description: "Livelihood skills imparted",
    color: "bg-purple-500",
  },
];

const ourWork = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "Education",
    description: "Quality education for underprivileged children",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Healthcare",
    description: "Access to basic healthcare and wellness",
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Skills",
    description: "Vocational training and skill development",
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Environment",
    description: "Conservation and sustainability initiatives",
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Women Empowerment",
    description: "Programs supporting women's rights and independence",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Child Care",
    description: "Comprehensive child protection and welfare",
  },
];

const successStories = [
  {
    title: "Education Transform",
    description:
      "Helping children access quality education and achieve their dreams",
    image: "https://images.unsplash.com/photo-1427504494785-05a266e1ad2c?w=400&h=300&fit=crop",
  },
  {
    title: "Healthcare Relief",
    description: "Providing medical assistance to rural communities",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
  },
  {
    title: "Skill Development",
    description: "Empowering youth with marketable job skills",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    title: "Community Support",
    description: "Building stronger neighborhoods through collective action",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Empowering Communities, Changing Lives
                </h1>
                <p className="text-lg text-gray-700">
                  We work with underprivileged children and families to provide
                  education, healthcare, and livelihood opportunities across India.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link
                    to="/donate"
                    className="bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
                  >
                    Donate Now <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/about"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop"
                    alt="Children in classroom"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1469026169028-56623f02e42e?w=400&h=300&fit=crop"
                    alt="Community gathering"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop"
                    alt="Group activity"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop"
                    alt="Program activity"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-pink-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower underprivileged children and families by providing
                access to quality education, healthcare, and livelihood
                opportunities, while promoting sustainable development and
                social equality across India.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where every child has the opportunity to reach their full
                potential, where communities are empowered to drive their own
                development, and where compassion and justice guide our actions
                toward building an equitable society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="bg-teal-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              OUR FIELDS OF WORK
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work across multiple areas to create comprehensive impact and
              sustainable change in the communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ourWork.map((work, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{work.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-600">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Highlights Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Lives of{" "}
              <span className="text-primary">
                3,51,377 children changed through our impact
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.color} text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform`}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-sm md:text-base font-medium">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programmes Across India
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Through our integrated approach, we reach children and communities
            in urban slums, rural villages, and tribal regions across India,
            adapting our programs to local needs while maintaining core values
            of quality and impact.
          </p>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=400&fit=crop"
              alt="India map showing our reach"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Success Stories
            </h2>
            <p className="text-gray-600">
              Real stories of transformation and impact from our communities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm">{story.description}</p>
                <button className="mt-4 text-primary hover:text-blue-600 font-semibold text-sm">
                  Read More →
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/news"
              className="inline-block bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              RECOGNITION & AWARDS
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our commitment to excellence and transparency has been recognized
              by national and international organizations. These accolades
              inspire us to continue our mission with unwavering dedication.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center"
                >
                  <Award className="w-12 h-12 mx-auto mb-3" />
                  <p className="font-semibold text-sm">Award {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8 md:p-12 text-white">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with Our Work
              </h2>
              <p className="text-blue-100 mb-6">
                Subscribe to our newsletter to receive updates about our
                programs, impact stories, and ways you can get involved.
              </p>
              <form className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Make a Difference Today
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Your contribution, no matter the size, helps us reach more children
              and families in need. Join us in creating positive change.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/donate"
                className="bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Donate Now
              </Link>
              <Link
                to="/team"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
