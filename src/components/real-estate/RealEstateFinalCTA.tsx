import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function RealEstateFinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Automate Your Real Estate Business?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Stop losing leads to slow replies, missed calls, and manual follow-up. Build a 24/7 AI real estate agent that captures every opportunity.
        </p>

        <Link href="/contact">
          <Button size="lg" className="text-lg px-12 py-6 bg-blue-600 hover:bg-blue-700 mb-8">
            Book a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>

        <div className="flex items-center justify-center gap-2 text-slate-400">
          <Mail className="w-5 h-5" />
          <a href="mailto:support@onetechautomation.com" className="hover:text-blue-400 transition-colors">
            support@onetechautomation.com
          </a>
        </div>
      </div>
    </section>
  );
}