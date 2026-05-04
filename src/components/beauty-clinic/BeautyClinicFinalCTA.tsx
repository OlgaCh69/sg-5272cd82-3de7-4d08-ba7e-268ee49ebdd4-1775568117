import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BeautyClinicFinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-[#f5f5dc] to-[#ffb6c1] bg-clip-text text-transparent">
            Ready to Fill Your Calendar Automatically?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Stop losing clients to slow replies and missed calls. Let your AI receptionist handle everything.
          </p>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#9a7a1a] text-black font-semibold text-lg px-8 py-6 shadow-xl shadow-[#d4af37]/20"
            asChild
          >
            <Link href="/contact">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <p className="mt-6 text-gray-400">
            Have questions? Email us at{" "}
            <a href="mailto:support@onetechautomation.com" className="text-[#d4af37] hover:text-[#b8941f] transition-colors underline">
              support@onetechautomation.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}