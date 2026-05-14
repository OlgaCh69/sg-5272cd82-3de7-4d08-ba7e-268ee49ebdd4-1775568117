import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function AbandonedCartFinalCTA() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-8">
            Ready to Recover <span className="text-[#c9a961] font-normal">More Abandoned Carts?</span>
          </h2>
          
          <p className="text-xl text-gray-600 font-light mb-8">
            If your ecommerce brand is already generating traffic and checkout activity, there's likely revenue being lost every day.
          </p>
          
          <p className="text-xl text-[#1a1a1a] font-medium mb-10">
            Let's build an abandoned cart recovery system that helps you capture more of it.
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
              className="border-gray-300 hover:border-[#c9a961] bg-white hover:bg-gray-50 text-[#1a1a1a] px-8 py-6 text-lg"
              asChild
            >
              <Link href="/ecommerce-automation-case-studies">
                See Results <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-gray-600 font-light mt-8">
            Built for ecommerce brands that want more revenue from the traffic they already have
          </p>
        </div>
      </div>
    </section>
  );
}