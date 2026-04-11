import { CheckCircle2 } from "lucide-react";

export function ChatbotUseCases() {
  const useCases = [
    "Product recommendations",
    "FAQ and customer support automation",
    "Order tracking and updates",
    "Abandoned cart recovery",
    "Lead capture and qualification",
    "Upsell and cross-sell flows",
    "Post-purchase follow-up",
    "Pre-sale buying guidance",
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What an AI Chatbot Can Automate in Ecommerce
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            Our systems are built around the real conversations ecommerce customers have before and after they buy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}