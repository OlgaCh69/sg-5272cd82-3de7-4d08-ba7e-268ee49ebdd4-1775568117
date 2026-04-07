import { Server, Target, Shield, Flame } from "lucide-react";

export function Trust() {
  const benefits = [
    {
      icon: Server,
      title: "Scalable Architecture",
      description: "Built to grow with your business.",
    },
    {
      icon: Target,
      title: "Conversion Focused",
      description: "Designed to turn chats into sales.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data and customers are safe.",
    },
    {
      icon: Flame,
      title: "Limited slots available",
      description: "this month. Let's build yours.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm sm:text-base mb-1.5">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}