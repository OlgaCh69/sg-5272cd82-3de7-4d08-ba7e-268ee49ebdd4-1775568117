import { Eye, MessageCircle, Zap, Package, ShoppingCart } from "lucide-react";

export function InstagramCustomerJourney() {
  const steps = [
    {
      icon: Eye,
      title: "User sees your content",
      description: "Discovery through posts, stories, or ads",
    },
    {
      icon: MessageCircle,
      title: "Leaves a comment or sends a DM",
      description: "Shows buying intent through engagement",
    },
    {
      icon: Zap,
      title: "Receives instant response",
      description: "Automated reply guides the conversation",
    },
    {
      icon: Package,
      title: "Gets product information or offer",
      description: "Personalized recommendations and details",
    },
    {
      icon: ShoppingCart,
      title: "Moves toward purchase",
      description: "Smooth conversion without friction",
    },
  ];

  return (
    <section id="customer-journey" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Build a Complete Sales Journey{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Inside Instagram
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Instagram automation allows you to guide customers from discovery to purchase without friction.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 rounded-lg bg-background border border-border/50 hover:border-pink-500/50 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20 flex-shrink-0">
                  <step.icon className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20">
            <p className="text-center text-muted-foreground">
              This creates a structured system instead of random, inconsistent conversations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}