import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BeautyClinicFinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Fill Your Calendar Automatically?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Stop losing clients to slow replies and missed calls. Recover the bookings you're already losing and fill your calendar without hiring more staff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] hover:from-[#b8961f] hover:to-[#d4af37] text-[#1a1a1a] font-semibold px-8 py-6 text-lg"
                asChild
              >
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-gray-400 mt-2">
                Most salons recover 20–40% more bookings in the first 30 days.
              </p>
            </div>
          </div>

          <p className="text-base text-gray-400 mt-8">
            Questions? Email us at{" "}
            <a href="mailto:support@onetechautomation.com" className="text-[#d4af37] hover:text-[#f4e4c1] underline">
              support@onetechautomation.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}