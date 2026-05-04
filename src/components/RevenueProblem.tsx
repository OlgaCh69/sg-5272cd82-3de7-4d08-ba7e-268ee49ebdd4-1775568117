import { MessageSquareOff, Clock, TrendingDown } from "lucide-react";

export function RevenueProblem() {
  const problems = [
    { icon: Clock, text: "Replies are too slow" },
    { icon: MessageSquareOff, text: "Conversations are inconsistent" },
    { icon: TrendingDown, text: "Opportunities are missed" }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            You're Not Losing Traffic.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4444] to-[#ff8888]">
              You're Losing Revenue Inside Conversations.
            </span>
          </h2>

          <div className="space-y-6 mb-12 text-center">
            <p className="text-lg md:text-xl text-gray-300">
              Your customers are already reaching out.
            </p>
            <p className="text-lg text-gray-400">
              Website chats. Instagram DMs. WhatsApp messages. Phone calls.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-white font-semibold">{problem.text}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-center text-white font-semibold">
            👉 And that's where revenue disappears.
          </p>
        </div>
      </div>
    </section>
  );
}