import { Clock, TrendingUp, Users, Zap } from "lucide-react";

export function ResponseTimeImpact() {
  const metrics = [
    {
      icon: Clock,
      metric: "<1 min",
      label: "Average response time",
      description: "AI answers every support question in under 60 seconds. No queues, no wait times."
    },
    {
      icon: TrendingUp,
      metric: "35-50%",
      label: "Higher CSAT scores",
      description: "Instant, accurate answers drive significantly better customer satisfaction ratings."
    },
    {
      icon: Users,
      metric: "24/7",
      label: "Always available",
      description: "No coverage gaps. Support works around the clock across all timezones."
    },
    {
      icon: Zap,
      metric: "Zero",
      label: "Queue times",
      description: "Every customer gets immediate attention. No \"your message is #47 in queue.\""
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Speed <span className="text-[#c9a961] font-normal">Drives Satisfaction</span>
            </h2>
            <p className="text-xl text-white/70 font-light">
              Fast support isn't just convenient—it directly impacts CSAT, retention, and LTV.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {metrics.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <p className="text-4xl font-serif font-light text-white mb-2">{item.metric}</p>
                <p className="text-lg text-[#c9a961] font-medium mb-4">{item.label}</p>
                <p className="text-white/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}