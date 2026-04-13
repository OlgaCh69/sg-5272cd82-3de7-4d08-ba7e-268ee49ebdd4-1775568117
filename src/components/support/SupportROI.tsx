import { TrendingUp } from "lucide-react";

export function SupportROI() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Reduce Costs While Improving Support Quality
            </h2>
          </div>
          
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Customer support often grows with your business.
            </p>
            
            <p>
              More customers usually means more staff, more time, and more cost.
            </p>
            
            <p>
              Automation changes that.
            </p>
            
            <p className="font-medium text-foreground">
              You can handle more support requests, maintain faster response times, and improve efficiency without scaling your team at the same rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}