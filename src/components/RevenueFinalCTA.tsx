import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

export function RevenueFinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Stop Losing Revenue in Your Conversations
          </h2>

          <div className="space-y-4 mb-12 text-lg md:text-xl text-gray-300">
            <p>Your customers are already reaching out.</p>
            <p>The question is:</p>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]">
              👉 Do you have a system to convert them?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#00ff87] to-[#60efff] hover:from-[#00dd75] hover:to-[#50dfef] text-[#0a0a0a] font-semibold px-8 py-6 text-lg"
              asChild
            >
              <Link href="/contact">
                Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 hover:border-[#00ff87]/50 text-white hover:bg-white/5 px-8 py-6 text-lg"
              asChild
            >
              <Link href="/contact">
                Get Free Automation Plan <FileText className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            support@onetechautomation.com
          </p>
        </div>
      </div>
    </section>
  );
}