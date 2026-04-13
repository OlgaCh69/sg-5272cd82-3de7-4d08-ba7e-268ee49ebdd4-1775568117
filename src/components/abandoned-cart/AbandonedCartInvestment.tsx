import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AbandonedCartInvestment() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Investment
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground mb-10">
            <p>
              Every ecommerce business has a different checkout journey, message volume, and customer behavior.
            </p>
            
            <p>
              Because of that, we do not use one-size-fits-all recovery packages.
            </p>
            
            <p className="text-foreground font-semibold">
              We build abandoned cart recovery systems based on your store, your customer journey, and your growth goals.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl border border-border/50 mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Focused on Return, Not Just Setup
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              The goal is not simply to automate follow-up.
            </p>
            <p className="text-lg text-foreground font-semibold">
              The goal is to recover revenue that would otherwise be lost and build a system that creates a measurable return.
            </p>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}