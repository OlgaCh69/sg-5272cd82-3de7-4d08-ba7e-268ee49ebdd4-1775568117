import { Bot, Zap, MessageCircle, CheckCircle2 } from "lucide-react";

export function BeautyClinicSolution() {
  const features = [
    "Replies instantly",
    "Books appointments",
    "Handles client questions",
    "Follows up automatically"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffb6c1] flex items-center justify-center mx-auto">
              <Bot className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Meet Your 24/7 AI Receptionist
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            This isn't just a chatbot.
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-8">
            It's a smart assistant that:
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: Zap, text: "Replies instantly" },
              { icon: MessageCircle, text: "Books appointments" },
              { icon: Bot, text: "Handles client questions" },
              { icon: CheckCircle2, text: "Follows up automatically" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <span className="text-lg text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-4">
            👉 Like a perfect receptionist… that never sleeps.
          </p>

          <p className="text-base md:text-lg text-gray-600 p-6 bg-gradient-to-br from-[#f8f3ef] to-white rounded-xl border border-gray-200">
            Our AI receptionist doesn't just respond—it <span className="font-bold text-[#e75480]">actively recovers lost opportunities</span> and turns them into confirmed appointments.
          </p>
        </div>
      </div>
    </section>
  );
}