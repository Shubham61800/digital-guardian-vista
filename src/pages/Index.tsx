
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
  const waitlistRef = useRef<HTMLDivElement>(null);
  const floatingIcon1 = useRef<HTMLDivElement>(null);
  const floatingIcon2 = useRef<HTMLDivElement>(null);
  const floatingIcon3 = useRef<HTMLDivElement>(null);
  const floatingIcon4 = useRef<HTMLDivElement>(null);
  const floatingIcon5 = useRef<HTMLDivElement>(null);
  const floatingIcon6 = useRef<HTMLDivElement>(null);

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

    gsap.fromTo(waitlistRef.current, {
      opacity: 0,
      y: 8
    }, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 1
    });

    // Animate floating brand icons
    const icons = [floatingIcon1, floatingIcon2, floatingIcon3, floatingIcon4, floatingIcon5, floatingIcon6];
    icons.forEach((icon, index) => {
      if (icon.current) {
        gsap.fromTo(icon.current, {
          opacity: 0,
          scale: 0,
          y: 50
        }, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 1.2 + (index * 0.1)
        });

        // Continuous floating animation
        gsap.to(icon.current, {
          y: "+=20",
          rotation: 360,
          duration: 8 + (index * 0.5),
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Dark Purple Gradient */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Dark Purple Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"></div>
        
        {/* Floating Brand Icons */}
        <div ref={floatingIcon1} className="absolute top-1/4 left-1/6 w-20 h-20 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-purple-400/30">
          <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div>
        </div>
        
        <div ref={floatingIcon2} className="absolute top-1/3 right-1/5 w-24 h-24 bg-purple-700/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-purple-400/30">
          <div className="text-white font-bold text-lg">S</div>
        </div>
        
        <div ref={floatingIcon3} className="absolute bottom-1/3 left-1/5 w-28 h-28 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-purple-400/30">
          <div className="w-10 h-10 border-2 border-white rounded-full"></div>
        </div>
        
        <div ref={floatingIcon4} className="absolute bottom-1/4 right-1/6 w-22 h-22 bg-purple-700/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-purple-400/30">
          <div className="flex flex-col space-y-1">
            <div className="w-6 h-1 bg-white rounded"></div>
            <div className="w-6 h-1 bg-white rounded"></div>
            <div className="w-6 h-1 bg-white rounded"></div>
          </div>
        </div>

        <div ref={floatingIcon5} className="absolute top-1/2 left-1/12 w-18 h-18 bg-purple-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-purple-400/30">
          <div className="w-6 h-6 bg-gradient-to-r from-white to-purple-200 rounded-full"></div>
        </div>

        <div ref={floatingIcon6} className="absolute top-1/2 right-1/12 w-18 h-18 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-purple-400/30">
          <div className="text-white font-bold">₿</div>
        </div>

        {/* Glowing Effects */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>

        {/* Main Content - Center Aligned */}
        <div className="container mx-auto px-4 md:px-20 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block mb-6 px-6 py-2 bg-purple-600/30 backdrop-blur-sm rounded-full shadow-lg border border-purple-400/50">
              <span className="text-sm font-medium text-purple-200">
                🚀 Elite Security Launchpad
              </span>
            </div>

            {/* Main Headline */}
            <h1 ref={headlineRef} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 text-white">
              The Most Exclusive{" "}
              <span className="relative inline-block group">
                <span className="relative z-10 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Security Platform
                </span>
              </span>
              <br />
              <span className="text-purple-300">Reserved for Elite & Innovators</span>
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0">
              A premier security platform where only the best solutions make it through. No spam. No scams. Only the elite.
            </p>

            {/* Action Buttons */}
            <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 relative overflow-hidden group text-white shadow-xl shadow-purple-900/50 px-8 py-4 text-lg border border-purple-400/30">
                <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none"></span>
                <span className="relative z-10 flex items-center">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125" />
                </span>
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-purple-400 bg-transparent text-purple-200 hover:bg-purple-600 hover:text-white group shadow-lg px-8 py-4 text-lg backdrop-blur-sm">
                <span className="relative flex items-center">
                  Launch App
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125" />
                </span>
              </Button>
            </div>

            {/* Waitlist Counter */}
            <div ref={waitlistRef} className="flex items-center justify-center gap-4 opacity-0">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-purple-600 rounded-full border-2 border-purple-400 flex items-center justify-center text-white text-xs font-bold">A</div>
                <div className="w-10 h-10 bg-purple-700 rounded-full border-2 border-purple-400 flex items-center justify-center text-white text-xs font-bold">B</div>
                <div className="w-10 h-10 bg-purple-800 rounded-full border-2 border-purple-400 flex items-center justify-center text-white text-xs font-bold">C</div>
              </div>
              <span className="text-purple-200 font-medium">9,553 People Waiting</span>
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
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Monitoring" },
              { value: "<30min", label: "Response Time" },
              { value: "500+", label: "Threats Blocked Daily" }
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
