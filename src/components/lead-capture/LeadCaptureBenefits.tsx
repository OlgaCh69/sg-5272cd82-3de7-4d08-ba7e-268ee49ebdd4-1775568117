import { Zap, Clock, TrendingUp, MessageSquareOff, Users, Star } from "lucide-react";

export function LeadCaptureBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Reduce response time to seconds",
      description: "Stop losing leads to slow replies"
    },
    {
      icon: Clock,
      title: "Capture leads outside working hours",
      description: "24/7 availability without hiring night shift"
    },
    {
      icon: TrendingUp,
      title: "Increase booked calls",
      description: "More qualified demos and sales conversations"
    },
    {
      icon: MessageSquareOff,
      title: "Stop losing prospects in DMs",
      description: "Automate Instagram and WhatsApp follow-up"
    },
    {
      icon: Users,
      title: "Reduce manual inbox work",
      description: "Your team focuses on high-value tasks"
    },
    {
      icon: Star,
      title: "Improve customer experience",
      description: "Instant replies create better first impressions"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2332]">
            Why This AI Assistant Drives More Revenue
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-[#0ea5e9]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1a2332]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}