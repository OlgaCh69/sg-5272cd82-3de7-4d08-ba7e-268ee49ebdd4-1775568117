import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function TelegramFinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Ready to Build a Direct Revenue Channel with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_auto] animate-gradient">
              Telegram?
            </span>
          </h2>

          {/* Body */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If you want more control, better engagement, and a stronger connection with your customers, Telegram automation is a powerful next step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/#contact">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-blue-500 hover:bg-blue-600 group shadow-lg shadow-blue-500/25"
              >
                Book a Strategy Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-blue-500/30 hover:border-blue-500/50"
            >
              Explore Telegram Automation
            </Button>
          </div>

          {/* Supporting Text */}
          <p className="text-sm text-muted-foreground pt-4">
            Built for ecommerce brands that want long-term growth, not just short-term campaigns
          </p>
        </div>
      </div>
    </section>
  );
}