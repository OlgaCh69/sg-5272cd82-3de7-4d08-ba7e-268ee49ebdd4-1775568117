import { Sparkles, Clock, MessageSquare, CalendarCheck } from "lucide-react";

export function RealEstateSolution() {
  const features = [
    {
      icon: MessageSquare,
      title: "Instant Response",
      description: "Answer every inquiry in under 2 seconds, 24/7"
    },
    {
      icon: Sparkles,
      title: "AI Property Matching",
      description: "Intelligent recommendations based on buyer preferences"
    },
    {
      icon: CalendarCheck,
      title: "Automated Bookings",
      description: "Viewing appointments scheduled without back-and-forth"
    },
    {
      icon: Clock,
      title: "Never Offline",
      description: "Capture leads during evenings, weekends, and holidays"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c9a961] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#c9a961] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-[#c9a961] mb-4 font-medium">The Solution</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white mb-6">
              Meet Your 24/7 <span className="italic text-[#c9a961]">AI Real Estate Agent</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Our AI system works around the clock to respond instantly, qualify leads, match buyers with properties, book viewings, and capture every opportunity into your CRM.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#c9a961]/50 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a961] to-[#b89851] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-3">{feature.title}</h3>
                    <p className="text-white/60 font-light leading-relaxed">{feature.description}</p>
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