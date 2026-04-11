import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Instagram } from "lucide-react";
import Link from "next/link";

export function InstagramHero() {
  const stats = [
    { value: "3x", label: "Higher engagement" },
    { value: "60%", label: "Faster response time" },
    { value: "24/7", label: "Automated replies" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-fuchsia-500/5" />
      
      <div className="container relative z-10 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20">
            <Instagram className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-600 dark:text-pink-400">
              Instagram Automation for Ecommerce
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Instagram Automation for{" "}
            <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
              Ecommerce Brands
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Turn Instagram DMs into revenue. Automate conversations, capture leads, and convert followers into customers with a system built for high-growth ecommerce brands.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white text-base font-semibold" asChild>
              <Link href="/contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold border-pink-500/50 text-pink-500 hover:bg-pink-50" asChild>
              <Link href="#how-it-works">
                See How It Works
                <Play className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Supporting text */}
          <p className="text-sm text-muted-foreground pt-4">
            Built for ecommerce brands that want to scale sales without scaling manual replies
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-border/50">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}