import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SupportInvestment() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Investment
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Every ecommerce business has different support volume, workflows, and complexity.
          </p>
          
          <p className="text-lg text-muted-foreground">
            Because of that, we design customer support automation systems based on your specific needs.
          </p>

          <div className="space-y-4 pt-4">
            <h3 className="text-2xl font-semibold">
              Focused on Efficiency and Return
            </h3>
            
            <p className="text-lg text-muted-foreground">
              The goal is not just to reduce workload.
            </p>
            
            <p className="text-lg text-muted-foreground">
              It is to create a system that improves customer experience while supporting growth and operational efficiency.
            </p>
          </div>

          <div className="pt-4">
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                Book a Strategy Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}