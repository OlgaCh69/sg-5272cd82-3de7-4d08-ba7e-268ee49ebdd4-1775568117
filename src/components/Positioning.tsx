import { TrendingUp, MessageSquare, Target, DollarSign } from "lucide-react";

export function Positioning() {
  const features = [
    { icon: Target, text: "Capture demand" },
    { icon: MessageSquare, text: "Qualify opportunities" },
    { icon: TrendingUp, text: "Guide decisions" },
    { icon: DollarSign, text: "Close more sales" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Most Businesses Automate Tasks.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]">
              We Automate Revenue.
            </span>
          </h2>

          <div className="space-y-6 mb-12 text-lg md:text-xl text-gray-300">
            <p>Automation tools reply to messages.</p>
            <p className="font-semibold text-white">Our systems do something different.</p>
            <p>They:</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#00ff87]/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-[#0a0a0a]" />
                </div>
                <p className="text-white font-semibold">{feature.text}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-white font-semibold">
            👉 Every message becomes part of a revenue system — not just a reply.
          </p>
        </div>
      </div>
    </section>
  );
}