
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import DashboardMockup from "@/components/DashboardMockup";
import Features from "@/components/Features";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient grid-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Secure Your <span className="text-primary-500">Digital Future</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Comprehensive cybersecurity services designed to protect your business from evolving threats in the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary-500 hover:bg-primary-500/90 text-white button-glow">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
              
              <div className="mt-10 inline-flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  Trusted by <span className="font-medium">1,000+</span> businesses
                </span>
              </div>
            </div>
            <div className="hidden lg:block">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Features Section */}
      <Features />

      {/* Mobile Dashboard (shows only on mobile) */}
      <div className="lg:hidden py-16 px-6">
        <DashboardMockup />
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Monitoring" },
              { value: "<30min", label: "Response Time" },
              { value: "500+", label: "Threats Blocked Daily" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">{stat.value}</div>
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
