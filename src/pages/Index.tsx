
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
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
  const floatingRef1 = useRef<HTMLDivElement>(null);
  const floatingRef2 = useRef<HTMLDivElement>(null);
  const floatingRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered entrance animations
    gsap.fromTo(headlineRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.fromTo(subtitleRef.current, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.3
    });

    gsap.fromTo(btnsRef.current, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.6
    });

    // Floating elements animation
    if (floatingRef1.current && floatingRef2.current && floatingRef3.current) {
      gsap.to(floatingRef1.current, {
        y: -20,
        rotation: 360,
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.to(floatingRef2.current, {
        y: 15,
        x: 10,
        rotation: -180,
        duration: 10,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.to(floatingRef3.current, {
        y: -25,
        x: -15,
        rotation: 180,
        duration: 12,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Modern Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 animate-pulse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating geometric elements */}
        <div ref={floatingRef1} className="absolute top-20 left-1/4 w-24 h-24 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl rotate-45 blur-sm"></div>
        </div>
        
        <div ref={floatingRef2} className="absolute top-1/3 right-1/4 w-32 h-32 opacity-15">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-md"></div>
        </div>
        
        <div ref={floatingRef3} className="absolute bottom-1/3 left-1/6 w-20 h-20 opacity-25">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg rotate-12 blur-sm"></div>
        </div>

        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/5 opacity-30">
          <Shield className="w-8 h-8 text-purple-300 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        </div>
        <div className="absolute top-2/3 right-1/5 opacity-30">
          <Zap className="w-6 h-6 text-blue-300 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-30">
          <Globe className="w-7 h-7 text-cyan-300 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 md:px-20 relative z-20 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Modern badge */}
            <div className="inline-flex items-center mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
              <span className="text-sm font-medium text-white flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                🚀 Next-Generation Security Platform
              </span>
            </div>

            {/* Modern headline with gradient text */}
            <h1 ref={headlineRef} className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 opacity-0">
              <span className="block text-white mb-4">Secure Your</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent relative">
                Digital Future
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </span>
            </h1>

            {/* Modern subtitle */}
            <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0">
              Advanced cybersecurity solutions powered by AI and machine learning to protect your business from evolving digital threats.
            </p>

            {/* Modern action buttons */}
            <div ref={btnsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 opacity-0">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg rounded-2xl shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40 border-0 group">
                <span className="flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 group">
                <span className="flex items-center">
                  Watch Demo
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>

            {/* Modern stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "99.9%", label: "Uptime", icon: "⚡" },
                { value: "24/7", label: "Monitoring", icon: "🛡️" },
                { value: "<30s", label: "Response", icon: "⚡" },
                { value: "500K+", label: "Threats Blocked", icon: "🔒" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
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
            {[{
            value: "99.9%",
            label: "Uptime"
          }, {
            value: "24/7",
            label: "Monitoring"
          }, {
            value: "<30min",
            label: "Response Time"
          }, {
            value: "500+",
            label: "Threats Blocked Daily"
          }].map((stat, index) => (
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
