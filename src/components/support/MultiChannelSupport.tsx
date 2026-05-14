import { Mail, MessageCircle, Instagram, Send, Globe, Smartphone } from "lucide-react";

export function MultiChannelSupport() {
  const channels = [
    {
      icon: Mail,
      title: "Email Support",
      description: "AI triages, categorizes, and responds to email tickets with context from past conversations."
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Website chat handled 24/7. Instant answers with seamless handoff to humans when needed."
    },
    {
      icon: Instagram,
      title: "Instagram DMs",
      description: "Support questions from your Instagram community answered automatically."
    },
    {
      icon: Send,
      title: "WhatsApp & Telegram",
      description: "Messaging platform support with the same AI answering questions consistently."
    },
    {
      icon: Globe,
      title: "Social Media",
      description: "Monitor and respond to support questions on Facebook, Twitter, and other platforms."
    },
    {
      icon: Smartphone,
      title: "SMS Support",
      description: "Text message support for time-sensitive questions and order updates."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              One AI, <span className="text-[#c9a961] font-normal">Every Channel</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Consistent support across email, chat, social, and messaging—all automated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {channels.map((channel, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <channel.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">
                  {channel.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}