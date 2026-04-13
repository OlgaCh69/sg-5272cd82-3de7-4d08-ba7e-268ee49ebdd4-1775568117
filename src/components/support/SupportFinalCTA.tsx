import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SupportFinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Automate Your Customer Support?
          </h2>
          
          <p className="text-lg text-muted-foreground">
            If your ecommerce brand is handling increasing customer messages, automation can help you respond faster, reduce workload, and improve performance.
          </p>
          
          <p className="text-lg text-muted-foreground">
            Let's build a system that supports your growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#features">
                Explore Our Automation Solutions
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Built for ecommerce brands that want efficient, scalable support systems
          </p>
        </div>
      </div>
    </section>
  );
}