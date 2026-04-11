import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhatsAppFinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Ready to Turn WhatsApp Into a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Revenue Channel?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If your ecommerce brand is getting customer messages every day, there is already revenue sitting in those conversations.
          </p>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's build a system that helps you capture more of it.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-base font-semibold" asChild>
              <Link href="/contact">
                Book a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold border-green-600/50 text-green-600 hover:bg-green-50" asChild>
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Trust Line */}
          <p className="text-sm text-muted-foreground pt-8">
            Built for ecommerce brands that want smarter automation, better customer experiences, and stronger conversion performance.
          </p>
        </div>
      </div>
    </section>
  );
}