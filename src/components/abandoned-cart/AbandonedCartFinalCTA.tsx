import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AbandonedCartFinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Recover More Abandoned Carts?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            If your ecommerce brand is already generating traffic and checkout activity, there is likely revenue being lost every day.
          </p>
          
          <p className="text-lg md:text-xl text-foreground font-semibold mb-10">
            Let's build an abandoned cart recovery system that helps you capture more of it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link href="/#features">
                Explore Our Automation Solutions
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Built for ecommerce brands that want more revenue from the traffic they already have
          </p>
        </div>
      </div>
    </section>
  );
}