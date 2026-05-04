import { XCircle, Clock, PhoneOff, FileX, TrendingDown } from "lucide-react";

export function RealEstateProblem() {
  const problems = [
    {
      icon: Clock,
      title: "Slow replies kill deal momentum",
      description: "Buyers move fast. A 2-hour delay means they've contacted 3 competitors."
    },
    {
      icon: PhoneOff,
      title: "No after-hours lead handling",
      description: "Property inquiries don't stop at 5 PM. Missing evening and weekend leads costs you."
    },
    {
      icon: TrendingDown,
      title: "Missed calls become missed commissions",
      description: "Every unanswered call is a potential €20k-€50k commission walking away."
    },
    {
      icon: FileX,
      title: "Manual CRM entry wastes agent time",
      description: "Agents spend hours updating systems instead of closing deals."
    },
    {
      icon: XCircle,
      title: "Property inquiries slip through the cracks",
      description: "High inquiry volume overwhelms teams, and quality leads get lost in the chaos."
    }
  ];

  return (
    <section className="py-20 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2332]">
            Missed Inquiries = Lost Commissions
          </h2>
          <p className="text-lg text-gray-600">
            High-end real estate agencies lose valuable leads because manual follow-up is too slow. Buyers expect instant answers, after-hours support, and easy viewing bookings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#0ea5e9]/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1a2332]">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}