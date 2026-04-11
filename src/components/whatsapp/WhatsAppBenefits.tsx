import { TrendingUp, ShoppingCart, Headphones, Heart, Users } from "lucide-react";

export function WhatsAppBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Conversion Rates",
      description: "Customers are more likely to buy when they get answers immediately.",
    },
    {
      icon: ShoppingCart,
      title: "Recover Lost Revenue",
      description: "Automated follow-up helps bring back shoppers who abandoned checkout.",
    },
    {
      icon: Headphones,
      title: "Reduce Support Workload",
      description: "Common questions can be handled automatically without sacrificing customer experience.",
    },
    {
      icon: Heart,
      title: "Improve Customer Experience",
      description: "Fast, relevant, real-time communication builds trust and removes buying friction.",
    },
    {
      icon: Users,
      title: "Scale Without Hiring More Staff",
      description: "Automation gives you the ability to grow conversations without growing headcount at the same rate.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Ecommerce Brands Use WhatsApp Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with ecommerce businesses that want more than convenience. They want better performance.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              WhatsApp automation helps create a faster, smoother customer journey while reducing operational pressure on your team.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 border border-border/50 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <benefit.icon className="h-7 w-7 text-green-600 dark:text-green-500" />
                </div>

                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}