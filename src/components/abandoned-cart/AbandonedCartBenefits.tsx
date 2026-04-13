import { DollarSign, TrendingUp, Target, MinusCircle, Repeat } from "lucide-react";

export function AbandonedCartBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Recover More Revenue",
      description: "Bring back shoppers who were already near the point of purchase.",
    },
    {
      icon: TrendingUp,
      title: "Improve Conversion Rates",
      description: "Reduce friction between cart and completed checkout.",
    },
    {
      icon: Target,
      title: "Maximize Existing Traffic",
      description: "Get more value from the visitors you already paid to acquire.",
    },
    {
      icon: MinusCircle,
      title: "Reduce Lost Opportunities",
      description: "Follow up before buying intent disappears completely.",
    },
    {
      icon: Repeat,
      title: "Scale Recovery Automatically",
      description: "Create a repeatable system instead of relying on manual outreach.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Abandoned Cart Recovery Automation Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Recovering abandoned carts is one of the fastest ways to improve ecommerce performance because it focuses on shoppers who already showed buying intent.
            </p>
            <p className="text-lg text-foreground font-semibold mt-4">
              You are not trying to create demand from scratch.<br />
              You are capturing revenue that was already close to converting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {benefits.slice(3).map((benefit, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}