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
  return <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Shuttle Gradient */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Shuttle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 z-0"></div>

        {/* Modern Geometric Shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-black/3 rounded-full blur-3xl"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-background z-10 opacity-30"></div>

        <div className="container mx-auto px-4 md:px-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-2 px-4 py-1 bg-black/5 backdrop-blur-sm rounded-full">
                <span className="text-sm font-medium text-black/70">
                  Next-Gen Security Platform
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Secure Your <br />
                <span className="relative">
                  <span className="relative z-10 text-primary-500 text-primary-hover">
                    Digital Future
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-black/5 rounded-full -z-10 transform -rotate-1"></span>
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Comprehensive cybersecurity services designed to protect your
                business from evolving threats in the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary-500 hover:bg-primary-500/90 text-white button-glow relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="border-black hover:bg-black/5 transition-colors">
                  Learn More
                </Button>
              </div>

              {/* Modern Trust Indicators */}
              <div className="mt-10 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>)}
                </div>
                <div className="text-sm text-gray-600">
                  Trusted by <span className="font-semibold">500+</span>{" "}
                  companies worldwide
                </div>
              </div>
            </div>
            {/* <div className="hidden lg:block relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-black/5 rounded-full blur-xl"></div>
              <div className="relative z-10 transform hover:-rotate-2 hover:scale-105 transition-transform duration-500">
                <DashboardMockup />
              </div>
             </div> */}
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
          }].map((stat, index) => <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>;
};
export default Index;