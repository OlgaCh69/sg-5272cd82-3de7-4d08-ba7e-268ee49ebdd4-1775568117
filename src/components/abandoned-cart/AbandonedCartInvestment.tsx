import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AbandonedCartInvestment() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-8 text-center">
            Custom <span className="text-[#c9a961] font-normal">Pricing</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 font-light mb-10">
            <p>
              Every ecommerce business has a different checkout journey, message volume, and customer behavior.
            </p>
            
            <p>
              Because of that, we don't use one-size-fits-all recovery packages.
            </p>
            
            <p className="text-[#1a1a1a] font-medium">
              We build abandoned cart recovery systems based on your store, your customer journey, and your growth goals.
            </p>
          </div>
          
          <div className="bg-[#c9a961]/10 border border-[#c9a961]/30 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">
              Focused on Return, Not Just Setup
            </h3>
            <p className="text-lg text-gray-600 font-light mb-4">
              The goal is not simply to automate follow-up.
            </p>
            <p className="text-lg text-[#1a1a1a] font-medium">
              The goal is to recover revenue that would otherwise be lost and build a system that creates a measurable return.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-[#c9a961] hover:bg-[#b89851] text-white font-medium px-8 py-6 text-lg border-0"
              asChild
            >
              <Link href="/contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}