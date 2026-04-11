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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/#contact">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 group shadow-lg shadow-green-600/25"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/#contact">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2"
              >
                Get Started
              </Button>
            </Link>
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