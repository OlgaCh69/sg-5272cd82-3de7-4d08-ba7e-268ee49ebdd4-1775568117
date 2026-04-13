import { MessageSquare } from "lucide-react";

export function BuyingObjections() {
  const objections = [
    "Shipping time",
    "Product fit",
    "Stock availability",
    "Returns",
    "Trust",
    "Timing",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <MessageSquare className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Recover Sales by Solving the Last Buying Objection
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground mb-8">
            <p>
              Many abandoned carts are not lost because the customer is not interested.
            </p>
            
            <p>
              They are lost because one final objection is never addressed.
            </p>
            
            <p className="text-foreground font-semibold">
              That objection could be:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {objections.map((objection, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border border-border/50 text-center">
                <p className="text-foreground font-medium">{objection}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-foreground font-semibold">
            Our abandoned cart recovery systems help bring those customers back into a conversation where the sale can still happen.
          </p>
        </div>
      </div>
    </section>
  );
}