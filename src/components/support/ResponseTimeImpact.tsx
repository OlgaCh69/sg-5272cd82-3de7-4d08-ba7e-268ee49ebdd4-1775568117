import { Zap } from "lucide-react";

export function ResponseTimeImpact() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Faster Support Leads to More Sales
            </h2>
          </div>
          
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Speed matters.
            </p>
            
            <p>
              When customers ask a question, they are often close to making a decision.
            </p>
            
            <p>
              If they get an answer quickly, they move forward.
              If they don't, they leave.
            </p>
            
            <p className="font-medium text-foreground">
              Customer support is not just about solving problems.
              It is about removing friction at the moment of decision.
            </p>
            
            <p>
              Automation ensures you are always present when it matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}