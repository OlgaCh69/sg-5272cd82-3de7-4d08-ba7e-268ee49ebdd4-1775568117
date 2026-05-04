import { XCircle, MessageSquareOff, Clock, UserX, TrendingDown } from "lucide-react";

export function LeadCaptureProblem() {
  const problems = [
    {
      icon: UserX,
      title: "Website visitors leave without submitting forms",
      description: "Most visitors won't fill out a form, but they'll chat if someone responds instantly."
    },
    {
      icon: MessageSquareOff,
      title: "Instagram DMs get buried",
      description: "Manual replies mean hot leads wait hours or days, giving competitors time to close the deal."
    },
    {
      icon: Clock,
      title: "WhatsApp inquiries are handled manually",
      description: "Every message requires a human reply, slowing down response times and overwhelming your team."
    },
    {
      icon: XCircle,
      title: "Teams ask the same questions again and again",
      description: "Returning visitors have to re-explain their needs because there's no conversation memory."
    },
    {
      icon: TrendingDown,
      title: "Hot leads go cold before sales can reply",
      description: "By the time your team follows up, the prospect has already moved on to a faster competitor."
    }
  ];

  return (
    <section className="py-20 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2332]">
            Your Best Leads Are Slipping Away
          </h2>
          <p className="text-lg text-gray-600">
            Most businesses lose leads because replies are too slow, inboxes are disconnected, and visitors leave before anyone follows up. Every unanswered website chat, WhatsApp message, or Instagram DM is a missed sales opportunity.
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