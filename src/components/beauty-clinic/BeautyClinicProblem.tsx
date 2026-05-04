import { MessageSquareOff, Clock, PhoneOff, Users, TrendingDown } from "lucide-react";

export function BeautyClinicProblem() {
  const problems = [
    {
      icon: MessageSquareOff,
      title: "Instagram DMs go unanswered",
      description: "Potential clients message and never hear back"
    },
    {
      icon: Clock,
      title: "WhatsApp messages pile up",
      description: "Your inbox is full while competitors respond instantly"
    },
    {
      icon: PhoneOff,
      title: "Missed calls = lost bookings",
      description: "Clients call after hours and book elsewhere"
    },
    {
      icon: Users,
      title: "Receptionists can't keep up",
      description: "Too many inquiries, not enough staff"
    },
    {
      icon: TrendingDown,
      title: "Clients don't wait",
      description: "Slow replies mean they choose your competition"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
            You're Losing Clients Every Day
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In beauty and aesthetics, speed is everything. If you don't reply fast, clients book somewhere else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#ffb6c1]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#1a1a1a]">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-[#d4af37]">
            👉 Every delay = lost revenue
          </p>
        </div>
      </div>
    </section>
  );
}