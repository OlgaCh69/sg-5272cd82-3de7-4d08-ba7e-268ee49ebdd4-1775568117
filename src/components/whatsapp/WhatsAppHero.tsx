import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm font-medium text-green-700 dark:text-green-400">
            <MessageCircle className="h-4 w-4" />
            Built for ecommerce businesses that want faster responses, higher conversions, and scalable customer communication
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            WhatsApp Automation for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-[length:200%_auto] animate-gradient">
              Ecommerce Brands
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recover abandoned carts, automate customer conversations, and close more sales on WhatsApp with a system built for high-growth ecommerce brands.
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
        </div>
      </div>
    </section>
  );
}