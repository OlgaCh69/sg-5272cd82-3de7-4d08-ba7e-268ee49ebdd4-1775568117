import { MessageSquare, Package, Truck, Sparkles, ShoppingCart } from "lucide-react";

export function DMAutomation() {
  const examples = [
    { icon: Package, text: "Product questions" },
    { icon: ShoppingCart, text: "Pricing inquiries" },
    { icon: Truck, text: "Shipping details" },
    { icon: Sparkles, text: "Recommendations" },
    { icon: MessageSquare, text: "Purchase guidance" },
  ];

  return (
    <section id="dm-automation" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Automate Instagram DMs Without{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Losing the Personal Touch
              </span>
            </h2>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Customers expect fast, helpful responses.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Instagram automation ensures every message is answered immediately while maintaining a natural and relevant conversation flow.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Instead of generic replies, your system can guide users based on their intent.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {examples.map((example, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-background border border-border/50 hover:border-pink-500/50 transition-colors text-center"
              >
                <example.icon className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                <p className="text-sm font-medium">{example.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}