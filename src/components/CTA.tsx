
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
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div 
          ref={ctaRef}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12 md:p-16 shadow-xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Ready to secure your business?</h2>
            <p ref={textRef} className="text-gray-600 mb-10 text-lg">
              Join thousands of companies that trust CyberShield to protect their digital assets from cyber threats.
            </p>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white button-glow px-8 py-6 text-base">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-100 px-8 py-6 text-base">
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
