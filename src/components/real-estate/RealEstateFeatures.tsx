import { Target, Sparkles, Calendar, MessageSquare, Database } from "lucide-react";

export function RealEstateFeatures() {
  const features = [
    {
      icon: Target,
      title: "Instant Lead Qualification",
      description: "Respond to inquiries 24/7, ask the right questions, and identify serious buyers automatically.",
      gradient: "from-[#c9a961]/20 to-[#c9a961]/5"
    },
    {
      icon: Sparkles,
      title: "AI Property Matching",
      description: "Scan your property listings and recommend the best-fit homes based on buyer needs, budget, location, and preferences.",
      gradient: "from-[#b89851]/20 to-[#b89851]/5"
    },
    {
      icon: Calendar,
      title: "One-Click Viewing Scheduler",
      description: "Let qualified leads book viewings instantly with calendar sync and fewer back-and-forth messages.",
      gradient: "from-[#c9a961]/20 to-[#c9a961]/5"
    },
    {
      icon: MessageSquare,
      title: "Missed Call AI",
      description: "Send an automatic SMS reply within seconds after a missed call, including a booking link or next-step message.",
      gradient: "from-[#b89851]/20 to-[#b89851]/5"
    },
    {
      icon: Database,
      title: "CRM Lead Capture",
      description: "Automatically log every lead, conversation, property interest, and booking into your CRM.",
      gradient: "from-[#c9a961]/20 to-[#c9a961]/5"
    }
  ];

  return (
    <section className="py-32 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-[#c9a961] mb-4 font-medium">Capabilities</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1a1a2e] mb-6">
              Premium Features for <span className="italic">Elite Agencies</span>
            </h2>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 border border-[#1a1a2e]/5 hover:border-[#c9a961]/30 hover:shadow-xl hover:shadow-[#c9a961]/5 transition-all duration-500`}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-8 h-8 text-[#c9a961]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-[#1a1a2e] mb-3">{feature.title}</h3>
                    <p className="text-[#1a1a2e]/70 font-light leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}