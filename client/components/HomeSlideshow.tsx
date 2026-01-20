import { useState, useEffect } from "react";
import { Post } from "@shared/schema";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HomeSlideshowProps {
  slides: Post[];
}

const MENTAL_HEALTH_QUOTES = [
  { quote: "There is hope, even when your brain tells you there isn't.", author: "John Green" },
  { quote: "Mental health is not a destination, but a process. It’s about how you drive, not where you’re going.", author: "Noam Shpancer" },
  { quote: "You don’t have to control your thoughts. You just have to stop letting them control you.", author: "Dan Millman" },
  { quote: "Your illness does not define you. Your strength and courage does.", author: "Unknown" },
  { quote: "Self-care is how you take your power back.", author: "Lalah Delia" },
  { quote: "It is okay to have bad days.", author: "Unknown" },
];

const DEFAULT_SLIDES = [
  {
    id: -1,
    title: "Kolkata's Top NGO: 500 Local Volunteers",
    content: "Among India's best NGOs and West Bengal's top 10 ranked foundations. Providing healthcare, scholarships, and flood relief across Kolkata, Howrah, and Sundarbans. Partner with us today.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
  },
  {
    id: -2,
    title: "Transforming Lives Through Mental Health",
    content: "Soul Link is dedicated to providing comprehensive mental health services, psychological counseling, and healthcare interventions to underserved communities.",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=1200&h=800&fit=crop",
  },
  {
    id: -3,
    title: "Healthcare for Everyone",
    content: "Making quality healthcare accessible to all, regardless of their background or economic status. Join us in our mission.",
    imageUrl: "https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=1200&h=800&fit=crop",
  }
];

export default function HomeSlideshow({ slides }: HomeSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use provided slides if available, otherwise use defaults
  const activeSlides = slides && slides.length > 0 ? slides : DEFAULT_SLIDES;

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-900 text-white">
      {/* Slides */}
      <div className="relative w-full h-full">
        {activeSlides.map((slide, index) => (
          <div
            key={slide.id || index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.imageUrl || "https://placehold.co/1200x800"}
                alt={slide.title}
                className={`w-full h-full object-cover will-change-transform transition-transform duration-[8000ms] ease-linear brightness-[0.7] ${index === currentSlide ? "scale-110" : "scale-100"
                  }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/50 mix-blend-multiply" />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl space-y-8">
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg transition-all duration-700 delay-300 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.title}
                </h1>

                {/* Random Quote */}
                <div className={`border-l-4 border-yellow-400 pl-6 py-2 bg-black/40 backdrop-blur-sm rounded-r-lg max-w-2xl transition-all duration-700 delay-500 transform ${index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                  <p className="text-xl md:text-2xl italic text-gray-100 font-serif leading-relaxed">
                    "{MENTAL_HEALTH_QUOTES[index % MENTAL_HEALTH_QUOTES.length].quote}"
                  </p>
                  <p className="text-sm text-yellow-400 mt-3 font-semibold tracking-wider uppercase">
                    — {MENTAL_HEALTH_QUOTES[index % MENTAL_HEALTH_QUOTES.length].author}
                  </p>
                </div>

                <p className={`text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl transition-all duration-700 delay-700 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.content}
                </p>

                <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 delay-900 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Link to="/donate">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-14 px-8 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                      <span className="mr-2">❤️</span> DONATE NOW
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="text-white border-2 border-white/30 bg-white/10 hover:bg-white hover:text-primary font-bold h-14 px-8 text-lg backdrop-blur-sm transition-all">
                      GET INVOLVED
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {activeSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-yellow-400" : "bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 left-8 sm:left-auto sm:right-32 z-20 text-white font-mono text-sm tracking-widest hidden sm:block">
        {String(currentSlide + 1).padStart(2, '0')} / {String(activeSlides.length).padStart(2, '0')}
      </div>
    </div>
  );
}
