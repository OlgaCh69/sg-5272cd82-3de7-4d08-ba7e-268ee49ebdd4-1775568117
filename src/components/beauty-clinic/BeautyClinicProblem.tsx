import { MessageSquareOff, Clock, PhoneOff, Users, TrendingDown } from "lucide-react";

export function BeautyClinicProblem() {
  const problems = [
    { icon: MessageSquareOff, text: "Instagram DMs go unanswered" },
    { icon: Clock, text: "WhatsApp messages pile up" },
    { icon: PhoneOff, text: "Missed calls = lost bookings" },
    { icon: Users, text: "Receptionists can't keep up" },
    { icon: TrendingDown, text: "Clients don't wait" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">
            You're Losing Clients Every Day
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            In beauty and aesthetics, speed is everything. If you don't reply fast, clients book somewhere else.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {problems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg border-2 border-red-200">
                <item.icon className="w-5 h-5 text-[#e75480]" />
                <span className="text-gray-800 font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-lg font-semibold text-[#1a1a1a] mb-6">
            👉 Every delay = lost revenue
          </p>

          <p className="text-base md:text-lg text-gray-800 p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border-2 border-red-200">
            Most beauty businesses don't realize they're losing <span className="font-bold text-[#e75480]">20–40% of potential bookings</span> due to slow replies, missed calls, and unhandled DMs.
          </p>
        </div>
      </div>
    </section>
  );
}