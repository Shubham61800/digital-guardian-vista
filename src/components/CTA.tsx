
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-primary-500/10 to-accent-yellow/10 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to secure your business?</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of companies that trust CyberShield to protect their digital assets from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-500/90 text-white button-glow">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
