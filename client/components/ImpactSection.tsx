import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Users, Heart, Award, Zap } from "lucide-react";

interface StatItem {
  number: number;
  label: string;
  icon: React.ReactNode;
  color: string;
}

export default function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      number: 50000,
      label: "People Served",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      number: 5000,
      label: "Counseling Sessions",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-400 to-pink-600",
    },
    {
      number: 200,
      label: "Workshops Conducted",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
    },
    {
      number: 500,
      label: "Lives Transformed",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.number) {
            newCounts[index] = Math.min(
              newCounts[index] + stat.number / steps,
              stat.number,
            );
          }
          return newCounts;
        });
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  const formatNumber = (num: number, original: number) => {
    const rounded = Math.floor(num);
    return rounded.toLocaleString() + "+";
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-secondary opacity-95"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Our Impact
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg animate-fade-in-delay">
            Making a measurable difference in mental health and healthcare
            access across India
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Card Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl group-hover:blur-2xl`}
              ></div>

              {/* Card Content */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                {/* Icon Container */}
                <div
                  className={`inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>

                {/* Number with animation */}
                <div className="mb-3">
                  <div className="text-5xl md:text-6xl font-bold tracking-tight">
                    {formatNumber(counts[index], stat.number)}
                  </div>
                </div>

                {/* Label */}
                <p className="text-blue-50 font-medium text-sm md:text-base">
                  {stat.label}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} rounded-full group-hover:w-full transition-all duration-500`}
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join us in our mission to provide accessible mental health services
            to every corner of India. Your support matters.
          </p>
          <div className="inline-flex gap-4 flex-wrap justify-center">
            <Link
              to="/about"
              className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 duration-300 inline-block"
            >
              Learn More
            </Link>
            <Link
              to="/fundraising"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-block"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Custom animation for fade-in effect */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}
