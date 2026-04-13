import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Send } from "lucide-react";
import Link from "next/link";

export function TelegramHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Telegram Blue Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Telegram Icon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-600">
            <Send className="w-4 h-4" />
            Built for ecommerce brands that want direct, scalable communication
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Telegram Automation for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_auto] animate-gradient">
              Ecommerce Brands
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Engage customers, automate conversations, and drive repeat sales with Telegram automation built for high-growth ecommerce businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contact">Book Your Strategy Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>

          {/* Trust Metrics */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { metric: "95%+", label: "Open Rates" },
              { metric: "0%", label: "Algorithm Tax" },
              { metric: "Direct", label: "Audience Access" },
              { metric: "3x", label: "Engagement Lift" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.metric}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}