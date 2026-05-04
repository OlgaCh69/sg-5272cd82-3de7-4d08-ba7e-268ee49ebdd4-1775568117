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
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            In beauty and aesthetics, speed is everything. If you don't reply fast, clients book somewhere else.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: MessageSquareOff, text: "Instagram DMs go unanswered" },
              { icon: Clock, text: "WhatsApp messages pile up" },
              { icon: PhoneOff, text: "Missed calls = lost bookings" },
              { icon: Users, text: "Receptionists can't keep up" },
              { icon: TrendingDown, text: "Clients don't wait" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <item.icon className="w-5 h-5 text-[#e75480]" />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-lg font-semibold text-[#1a1a1a]">
            👉 Every delay = lost revenue
          </p>

          <p className="text-base md:text-lg text-gray-600 mt-6 p-6 bg-gradient-to-br from-[#f8f3ef] to-white rounded-xl border border-gray-200">
            Most beauty businesses don't realize they're losing <span className="font-bold text-[#e75480]">20–40% of potential bookings</span> due to slow replies, missed calls, and unhandled DMs.
          </p>
        </div>
      </div>
    </section>
  );
}