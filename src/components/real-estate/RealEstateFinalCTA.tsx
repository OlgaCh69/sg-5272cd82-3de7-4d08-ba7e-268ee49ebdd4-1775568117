import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function RealEstateFinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a2332] to-[#0f1419] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to Automate Your Real Estate Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stop losing leads to slow replies, missed calls, and manual follow-up. Build a 24/7 AI real estate agent that captures every opportunity.
          </p>

          <Button size="lg" className="text-lg bg-[#0ea5e9] hover:bg-[#0ea5e9]/90 text-white mb-8" asChild>
            <Link href="/contact">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <p className="text-gray-400">
            Questions? Email us at{" "}
            <a href="mailto:support@onetechautomation.com" className="text-[#0ea5e9] hover:underline">
              support@onetechautomation.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}