import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function CaseStudiesHero() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Ecommerce Automation Case Studies
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            See how ecommerce brands use automation to increase conversions, recover lost revenue, and scale customer communication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Book a Strategy Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/#how-it-works">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <PlayCircle className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Real examples of how automation improves performance across ecommerce businesses
          </p>
        </div>
      </div>
    </section>
  );
}