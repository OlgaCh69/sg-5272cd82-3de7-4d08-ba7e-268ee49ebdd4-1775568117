import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ChatbotInvestment() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-12">
            Investment
          </h2>
          
          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-12">
            <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">
              Built Around <span className="text-[#c9a961] font-normal">Return</span>, Not Just Access
            </h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              Every ecommerce business has different customer journeys, message volumes, and complexity levels. We don't rely on generic packages.
            </p>
            <p className="text-lg text-[#1a1a1a] font-medium">
              We build AI chatbot systems based on your business model, goals, and opportunities—designed to generate measurable returns through better conversions, customer experience, and operational efficiency.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-[#c9a961] hover:bg-[#b89851] text-white font-medium px-8 py-6 text-lg border-0"
              asChild
            >
              <Link href="/contact">
                Book a Strategy Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}