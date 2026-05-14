import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SupportInvestment() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
            Investment in <span className="text-[#c9a961] font-normal">Support Excellence</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-6 font-light leading-relaxed">
            Every ecommerce business has different support volume, workflows, and complexity.
          </p>
          
          <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
            We design support automation systems based on your specific needs—ticket volume, channels, product complexity, and growth trajectory.
          </p>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-serif font-light text-white mb-4">
              ROI-Focused Implementation
            </h3>
            
            <p className="text-white/70 font-light leading-relaxed mb-4">
              The goal isn't just to reduce workload.
            </p>
            
            <p className="text-white/70 font-light leading-relaxed">
              It's to create a system that improves customer experience while supporting growth and operational efficiency—without linear cost scaling.
            </p>
          </div>

          <Button 
            size="lg" 
            className="bg-[#c9a961] hover:bg-[#b89851] text-white font-medium px-8 py-6 text-lg border-0"
            asChild
          >
            <Link href="/contact">
              Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}