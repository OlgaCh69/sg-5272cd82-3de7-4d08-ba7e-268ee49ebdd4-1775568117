import { TrendingUp, Target, Smile, Users, Zap } from "lucide-react";

export function ChatbotBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Conversion Rates",
      description: "Customers are more likely to buy when they get answers immediately.",
    },
    {
      icon: Target,
      title: "Reduce Missed Opportunities",
      description: "An AI chatbot helps you capture demand that would otherwise disappear.",
    },
    {
      icon: Smile,
      title: "Improve Customer Experience",
      description: "Fast, relevant replies create trust and reduce buying friction.",
    },
    {
      icon: Users,
      title: "Scale Support Efficiently",
      description: "Handle more conversations without expanding your team at the same pace.",
    },
    {
      icon: Zap,
      title: "Support Growth Across Channels",
      description: "Use chatbot automation across your ecommerce ecosystem, including social and messaging platforms.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Ecommerce Brands Use AI Chatbots
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AI chatbots help ecommerce businesses improve both performance and efficiency. They do not just answer messages. They support the customer journey in real time and help remove the friction that stops people from buying.
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