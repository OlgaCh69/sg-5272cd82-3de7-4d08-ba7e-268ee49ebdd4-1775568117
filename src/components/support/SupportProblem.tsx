import { AlertCircle } from "lucide-react";

export function SupportProblem() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Customer Support Is Slowing Down Your Growth
            </h2>
          </div>
          
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              As ecommerce businesses grow, customer support becomes harder to manage.
            </p>
            
            <p>
              More orders mean more questions. More customers mean more messages.
            </p>
            
            <p>
              Support teams get overwhelmed. Response times increase. Customers wait longer than they should.
            </p>
            
            <p>
              And when customers don't get answers quickly, they don't just get frustrated—they leave.
            </p>
            
            <p className="font-medium text-foreground">
              For many ecommerce brands, support is no longer just an operational task.
              It directly impacts revenue, conversion, and customer retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}