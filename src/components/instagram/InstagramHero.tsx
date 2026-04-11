import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Instagram } from "lucide-react";

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-600 to-fuchsia-600 hover:from-pink-700 hover:to-fuchsia-700 text-white group w-full sm:w-auto"
              asChild
            >
              <a href="#contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-pink-500/30 hover:bg-pink-500/5 w-full sm:w-auto"
              asChild
            >
              <a href="#how-it-works">
                <Play className="mr-2 h-4 w-4" />
                See How It Works
              </a>
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