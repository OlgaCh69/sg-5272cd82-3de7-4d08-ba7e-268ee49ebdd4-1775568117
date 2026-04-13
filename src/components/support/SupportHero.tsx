import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function SupportHero() {
  return (
    <section className="relative bg-gradient-to-b from-background to-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Ecommerce Customer Support Automation
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Automate customer support, respond instantly, and reduce workload with AI-powered support systems built for ecommerce brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#how-it-works">
                See How It Works
                <Play className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Built for ecommerce brands that want faster support, better customer experience, and scalable operations
          </p>
        </div>
      </div>
    </section>
  );
}