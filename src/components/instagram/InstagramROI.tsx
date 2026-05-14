import { TrendingUp, DollarSign, Clock, Users } from "lucide-react";

export function InstagramROI() {
  const metrics = [
    {
      icon: TrendingUp,
      metric: "20-35%",
      label: "Conversion rate increase",
      description: "Instant DM responses drive significantly more followers to checkout versus manual handling."
    },
    {
      icon: DollarSign,
      metric: "€40k-€200k",
      label: "Annual revenue captured",
      description: "From conversations that would have gone unanswered or been handled too slowly manually."
    },
    {
      icon: Clock,
      metric: "60-75%",
      label: "Support cost reduction",
      description: "AI handles 70-80% of DMs autonomously. Eliminate repetitive manual work."
    },
    {
      icon: Users,
      metric: "4-7x",
      label: "ROI in Year 1",
      description: "Between conversion lift, recovered revenue, and cost savings, Instagram automation pays for itself many times over."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Expected <span className="text-[#c9a961] font-normal">Financial Impact</span>
            </h2>
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