import { Clock, Users, Smile, TrendingUp, Zap } from "lucide-react";

export function SupportBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Faster Response Times",
      description: "Customers get answers instantly, not hours later.",
    },
    {
      icon: Users,
      title: "Reduced Workload",
      description: "Your team handles fewer repetitive tasks.",
    },
    {
      icon: Smile,
      title: "Improved Customer Experience",
      description: "Consistent, accurate responses build trust.",
    },
    {
      icon: Zap,
      title: "Scalable Support System",
      description: "Handle more customers without expanding your team.",
    },
    {
      icon: TrendingUp,
      title: "Better Conversion Rates",
      description: "Quick answers help customers move forward with their purchase.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Ecommerce Brands Automate Customer Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Customer support is one of the most resource-heavy parts of an ecommerce business.
              Automation helps reduce that pressure while improving the overall customer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}