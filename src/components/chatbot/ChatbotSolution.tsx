import { CheckCircle2 } from "lucide-react";

export function ChatbotSolution() {
  const benefits = [
    "Respond instantly to customer questions",
    "Guide shoppers to the right products",
    "Recover lost sales opportunities",
    "Automate support without reducing quality",
    "Qualify leads and reduce manual workload",
    "Create a more consistent buying journey",
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Turn Conversations Into a Scalable Revenue System
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground mb-10">
            <p>
              OneTech Automation helps ecommerce brands use AI chatbots to automate the conversations that directly impact sales.
            </p>
            
            <p>
              Instead of relying on manual replies, your business can respond instantly, guide customers toward purchase, answer key questions, and support buyers at every stage of the journey.
            </p>
            
            <p>
              This creates a smoother customer experience while unlocking more value from the traffic you already have.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}