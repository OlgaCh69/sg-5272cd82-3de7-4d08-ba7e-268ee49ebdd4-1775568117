import { XCircle, Clock, PhoneOff, FileX, TrendingDown } from "lucide-react";

export function RealEstateProblem() {
  const problems = [
    {
      icon: Clock,
      title: "Slow replies kill deal momentum",
      description: "High-value buyers expect instant responses. Every hour of delay increases the chance they'll move to a competitor."
    },
    {
      icon: PhoneOff,
      title: "No after-hours lead handling",
      description: "Property inquiries come in 24/7, but your team can't answer calls at 9 PM or on weekends. Leads go cold."
    },
    {
      icon: XCircle,
      title: "Missed calls become missed commissions",
      description: "When agents are in viewings or meetings, missed calls mean lost opportunities. No follow-up = no conversion."
    },
    {
      icon: FileX,
      title: "Manual CRM entry wastes agent time",
      description: "Agents spend hours entering lead details, call notes, and property interests instead of closing deals."
    },
    {
      icon: TrendingDown,
      title: "Property inquiries slip through the cracks",
      description: "Without automation, leads get forgotten, follow-ups are delayed, and qualified buyers disappear."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Missed Inquiries = <span className="text-red-400">Lost Commissions</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            High-end real estate agencies lose valuable leads because manual follow-up is too slow. Buyers expect instant answers, after-hours support, and easy viewing bookings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 transition-all">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-slate-400">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}