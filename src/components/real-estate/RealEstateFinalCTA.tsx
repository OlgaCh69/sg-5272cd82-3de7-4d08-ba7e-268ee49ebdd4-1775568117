import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function RealEstateFinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c9a961] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white mb-8">
            Ready to <span className="italic text-[#c9a961]">Automate</span> Your
            <br />
            Real Estate Business?
          </h2>

          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Stop losing leads to slow replies, missed calls, and manual follow-up. Build a 24/7 AI real estate agent that captures every opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#c9a961] hover:bg-[#b89851] text-white font-medium px-8 py-6 text-lg"
              asChild
            >
              <Link href="/contact">
                Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/60">
            <Mail className="w-4 h-4" />
            <a href="mailto:support@onetechautomation.com" className="text-sm font-light hover:text-[#c9a961] transition-colors">
              support@onetechautomation.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}