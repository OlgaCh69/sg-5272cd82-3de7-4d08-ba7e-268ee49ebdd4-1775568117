import { AlertCircle } from "lucide-react";

export function AbandonedCartProblem() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <AlertCircle className="w-12 h-12 text-destructive flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Most Ecommerce Brands Are Losing Revenue at Checkout
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              A large percentage of ecommerce shoppers add products to cart and leave without completing their purchase.
            </p>
            
            <p>
              This is one of the biggest sources of lost revenue for online stores.
            </p>
            
            <p>
              Sometimes they get distracted. Sometimes they hesitate. Sometimes they still have a question that no one answers in time.
            </p>
            
            <p>
              The traffic is there. The buying intent is there.<br />
              But the sale never happens.
            </p>
            
            <p className="text-foreground font-semibold">
              For many ecommerce brands, the issue is not demand.<br />
              It is the lack of a structured abandoned cart recovery system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}