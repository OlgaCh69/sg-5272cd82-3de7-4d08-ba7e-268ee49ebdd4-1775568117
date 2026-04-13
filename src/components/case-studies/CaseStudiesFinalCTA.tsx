import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function CaseStudiesFinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Build a System That Works for Your Store
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every ecommerce business has untapped opportunities within its customer conversations.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            The next step is to identify where those opportunities are in your store and build a system around them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contact">Book Your Strategy Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link href="/#features">Explore Our Solutions</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Focused on real results, not generic solutions
          </p>
        </div>
      </div>
    </section>
  );
}