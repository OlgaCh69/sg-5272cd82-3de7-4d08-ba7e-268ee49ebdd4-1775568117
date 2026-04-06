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
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}