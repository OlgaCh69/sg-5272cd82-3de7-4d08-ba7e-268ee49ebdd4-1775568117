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
          
          <p className="text-xl text-gray-300 mb-8">
            This isn't just a chatbot.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 mb-6">
              It's a smart assistant that:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-left bg-white/5 rounded-lg px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-[#d4af37] shrink-0" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xl font-semibold bg-gradient-to-r from-[#d4af37] to-[#ffb6c1] bg-clip-text text-transparent">
                👉 Like a perfect receptionist… that never sleeps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}