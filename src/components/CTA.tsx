
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from 'gsap';

const CTA = () => {
  const ctaRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for sequenced animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%", // Start animation when top of element reaches 80% from top of viewport
          toggleActions: "play none none none"
        }
      });

      // Add animations to timeline
      tl.fromTo(ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(titleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4" // Overlap with previous animation
      )
      .fromTo(textRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(buttonsRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
    }, ctaRef);

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div 
          ref={ctaRef}
          className="bg-gradient-to-r from-primary-500/10 to-accent-yellow/10 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">Ready to secure your business?</h2>
            <p ref={textRef} className="text-gray-600 mb-8">
              Join thousands of companies that trust CyberShield to protect their digital assets from cyber threats.
            </p>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
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
