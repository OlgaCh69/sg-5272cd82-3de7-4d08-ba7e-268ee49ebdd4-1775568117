import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function CaseStudiesFinalCTA() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
            Let's Build a System That <span className="text-[#c9a961] font-normal">Works for Your Store</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-6 font-light leading-relaxed">
            Every ecommerce business has untapped opportunities within its customer conversations.
          </p>
          
          <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
            The next step is to identify where those opportunities are in your store and build a system around them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#c9a961] hover:bg-[#b89851] text-white font-medium px-8 py-6 text-lg border-0"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Strategy Demo
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/#features">
                Explore Solutions <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <p className="text-sm text-white/50 font-light mt-8">
            Focused on real results, not generic solutions
          </p>
        </div>
      </div>
    </section>
  );
}