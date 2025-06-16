
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import DashboardMockup from "@/components/DashboardMockup";
import Features from "@/components/Features";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import gsap from "gsap";

const Index = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const trustGroupRef = useRef<HTMLDivElement>(null);
  const bgRef1 = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);
  const bgRef3 = useRef<HTMLDivElement>(null);
  const bgRef4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered text entrance
    gsap.fromTo(headlineRef.current, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out"
    });

    gsap.fromTo(subtitleRef.current, {
      opacity: 0,
      y: 16
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3
    });

    gsap.fromTo(btnsRef.current, {
      opacity: 0,
      y: 10
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.6
    });

    gsap.fromTo(trustGroupRef.current, {
      opacity: 0,
      y: 8
    }, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 1
    });

    // Animate floating background shapes
    if (bgRef1.current && bgRef2.current && bgRef3.current && bgRef4.current) {
      gsap.to(bgRef1.current, {
        y: 20,
        rotation: 360,
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.to(bgRef2.current, {
        y: -15,
        rotation: -180,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.to(bgRef3.current, {
        x: 10,
        y: 25,
        duration: 7,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.to(bgRef4.current, {
        x: -15,
        y: -10,
        rotation: 180,
        duration: 9,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Vector Background */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Vector Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-accent-lemon"></div>
        
        {/* Animated Vector Shapes */}
        <div ref={bgRef1} className="absolute top-20 left-1/4 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-purple">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="currentColor" />
          </svg>
        </div>
        
        <div ref={bgRef2} className="absolute top-1/3 right-1/4 w-24 h-24 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent-yellow">
            <circle cx="50" cy="50" r="45" fill="currentColor" />
          </svg>
        </div>
        
        <div ref={bgRef3} className="absolute bottom-1/3 left-1/5 w-40 h-40 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-purple">
            <path d="M50,5 L85,35 L70,80 L30,80 L15,35 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div ref={bgRef4} className="absolute bottom-20 right-1/5 w-28 h-28 opacity-25">
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent-yellow">
            <rect x="15" y="15" width="70" height="70" rx="10" fill="currentColor" />
          </svg>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary-purple/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-accent-yellow/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-primary-purple/20 rounded-full blur-lg"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-background opacity-5"></div>

        {/* Main Content - Center Aligned */}
        <div className="container mx-auto px-4 md:px-20 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-fade-in border border-primary-purple/20">
              <span className="text-sm font-medium text-primary-cta">
                🚀 Next-Gen Security Platform
              </span>
            </div>

            {/* Main Headline */}
            <h1 ref={headlineRef} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0">
              Secure Your{" "}
              <span className="relative inline-block group">
                <span className="relative z-10 bg-gradient-to-r from-primary-purple to-primary-cta bg-clip-text text-transparent">
                  Digital Future
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent-yellow/30 rounded-full -z-10 transform -rotate-1"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0">
              Comprehensive cybersecurity services designed to protect your
              business from evolving threats in the digital landscape.
            </p>

            {/* Action Buttons */}
            <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0">
              <Button size="lg" className="bg-primary-cta relative overflow-hidden group text-white button-glow transition-all border border-transparent hover:scale-105 focus-visible:scale-105 shadow-xl shadow-primary-100 px-8 py-4 text-lg">
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none"></span>
                <span className="relative z-10 flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125" />
                </span>
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-primary-purple transition-all bg-white/80 backdrop-blur-sm text-primary-cta relative hover:bg-primary-purple hover:text-white group shadow-lg px-8 py-4 text-lg">
                <span className="relative flex items-center">
                  Watch Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125" />
                </span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div ref={trustGroupRef} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 opacity-0">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div 
                    key={i} 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-purple to-primary-cta border-3 border-white flex items-center justify-center text-white font-bold transition-all hover:ring-4 hover:ring-primary-purple/30 scale-100 hover:scale-110 hover:shadow-xl cursor-pointer shadow-lg"
                    style={{
                      transition: "box-shadow 0.2s, transform 0.2s, ring 0.2s"
                    }}
                    tabIndex={0} 
                    aria-label={`Trusted user ${i}`}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                Trusted by <span className="font-bold text-primary-cta">500+</span>{" "}
                companies worldwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Features Section */}
      <Features />

      {/* Stats Section with Modern Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                value: "99.9%",
                label: "Uptime"
              },
              {
                value: "24/7",
                label: "Monitoring"
              },
              {
                value: "<30min",
                label: "Response Time"
              },
              {
                value: "500+",
                label: "Threats Blocked Daily"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 bg-transparent">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
