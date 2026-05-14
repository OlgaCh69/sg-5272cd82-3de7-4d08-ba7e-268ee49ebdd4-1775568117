import { Headphones, Clock, MessageCircle, CheckCircle, TrendingUp, Users } from "lucide-react";

export function SupportAutomation() {
  const features = [
    { icon: Clock, title: "Instant Answers 24/7", description: "Shipping times, return policies, stock questions—answered in seconds." },
    { icon: MessageCircle, title: "70-85% Automation Rate", description: "AI handles the majority of support questions without human intervention." },
    { icon: CheckCircle, title: "Consistent Quality", description: "Every customer gets accurate, on-brand responses every time." },
    { icon: TrendingUp, title: "Reduced Support Costs", description: "Free your team from repetitive questions to focus on complex issues." },
    { icon: Users, title: "Smart Escalation", description: "Complex questions route to your team automatically when needed." },
    { icon: Headphones, title: "Better Customer Satisfaction", description: "Fast, helpful responses improve CSAT scores and loyalty." }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white text-center mb-16">
            Automate Support Without <span className="text-[#c9a961] font-normal">Sacrificing Experience</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}