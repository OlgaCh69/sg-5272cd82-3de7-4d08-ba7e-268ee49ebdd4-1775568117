import { TrendingUp, Zap, Target, Clock } from "lucide-react";

export function RealEstateResults() {
  const stats = [
    {
      icon: TrendingUp,
      value: "+40%",
      label: "More leads captured",
      description: "Through 24/7 automation"
    },
    {
      icon: Target,
      value: "5–15%",
      label: "Conversion lift",
      description: "From lead to signed contract"
    },
    {
      icon: Zap,
      value: "5 sec",
      label: "Missed-call response",
      description: "Instant SMS follow-up"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Lead handling",
      description: "Without extra staff"
    }
  ];

  return (
    <section className="py-32 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-[#c9a961] mb-4 font-medium">Performance</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1a1a2e] mb-6">
              Built to Capture More Leads and <span className="italic">Convert Faster</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-[#c9a961]/10 transition-all duration-500 border border-[#1a1a2e]/5"
              >
                <div className="w-16 h-16 rounded-full bg-[#c9a961]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c9a961]/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-[#c9a961]" />
                </div>
                <p className="text-5xl font-light text-[#1a1a2e] mb-2">{stat.value}</p>
                <p className="text-lg font-medium text-[#1a1a2e] mb-2">{stat.label}</p>
                <p className="text-sm text-[#1a1a2e]/60 font-light">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}