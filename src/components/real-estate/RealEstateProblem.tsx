import { Clock, MessageSquareOff, TrendingDown, XCircle, AlertCircle } from "lucide-react";

export function RealEstateProblem() {
  const problems = [
    {
      icon: Clock,
      title: "Slow replies kill deal momentum",
      description: "High-value buyers expect instant responses, not hours of waiting"
    },
    {
      icon: MessageSquareOff,
      title: "No after-hours lead handling",
      description: "Premium properties don't sleep—your service shouldn't either"
    },
    {
      icon: TrendingDown,
      title: "Missed calls become missed commissions",
      description: "Every unanswered inquiry is revenue walking out the door"
    },
    {
      icon: XCircle,
      title: "Manual CRM entry wastes agent time",
      description: "Your top agents should close deals, not update spreadsheets"
    },
    {
      icon: AlertCircle,
      title: "Property inquiries slip through the cracks",
      description: "Losing qualified buyers to competitors with faster response times"
    }
  ];

  return (
    <section className="py-32 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-[#c9a961] mb-4 font-medium">The Challenge</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1a1a2e] mb-6">
              Missed Inquiries = <span className="italic">Lost Commissions</span>
            </h2>
            <p className="text-xl text-[#1a1a2e]/70 max-w-3xl mx-auto font-light leading-relaxed">
              High-end real estate agencies lose valuable leads because manual follow-up is too slow. Buyers expect instant answers, after-hours support, and seamless viewing bookings.
            </p>
          </div>

          {/* Problem Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#c9a961]/10 transition-all duration-500 border border-[#1a1a2e]/5"
              >
                <div className="w-14 h-14 rounded-full bg-[#c9a961]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a961]/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-[#c9a961]" />
                </div>
                <h3 className="text-xl font-medium text-[#1a1a2e] mb-3">{problem.title}</h3>
                <p className="text-[#1a1a2e]/60 font-light leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}