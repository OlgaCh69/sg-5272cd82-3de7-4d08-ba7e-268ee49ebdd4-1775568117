import { Target, Zap, MessageCircle } from "lucide-react";

export function InstagramDifferentiation() {
  const differentiators = [
    {
      icon: Target,
      title: "Instagram-Native Automation",
      description: "Built specifically for Instagram's unique conversation patterns. Not a generic chatbot template."
    },
    {
      icon: Zap,
      title: "Visual Product Focus",
      description: "AI understands product images, handles sizing questions, and recommends based on visual preferences."
    },
    {
      icon: MessageCircle,
      title: "Conversational Commerce",
      description: "Natural back-and-forth conversations that feel human. No rigid scripts or keyword matching."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Why O.N.E.Tech for <span className="text-[#c9a961] font-normal">Instagram?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <diff.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">
                  {diff.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}