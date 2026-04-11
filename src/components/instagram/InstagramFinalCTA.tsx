import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function InstagramFinalCTA() {
  return (
    <section id="final-cta" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Turn Instagram Into a{" "}
            <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
              Revenue Channel?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If your ecommerce brand is getting engagement but not converting it fully, automation is the missing layer.
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let&apos;s build a system that turns attention into revenue.
          </p>

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
                Explore Instagram Automation
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Built for ecommerce brands that want consistent growth, not inconsistent results
          </p>
        </div>
      </div>
    </section>
  );
}