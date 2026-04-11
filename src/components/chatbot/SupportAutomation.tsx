import { HeadphonesIcon, CheckCircle2 } from "lucide-react";

export function SupportAutomation() {
  const supportTypes = [
    "Shipping times",
    "Return policies",
    "Stock questions",
    "Order updates",
    "Product details",
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <HeadphonesIcon className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Automate Support Without Sacrificing Experience
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground mb-8">
            <p>
              Customer support is one of the biggest pressure points for growing ecommerce brands.
            </p>
            
            <p>
              As message volume increases, teams struggle to maintain speed and consistency.
            </p>
            
            <p>
              AI chatbots help handle the repetitive, high-volume questions that slow your team down.
            </p>
            
            <p className="text-foreground font-semibold">
              This includes common requests such as:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {supportTypes.map((type, index) => (
              <div key={index} className="flex items-center gap-2 bg-card p-3 rounded-lg border border-border/50">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{type}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-foreground font-semibold">
            The result is faster support for customers and more leverage for your business.
          </p>
        </div>
      </div>
    </section>
  );
}