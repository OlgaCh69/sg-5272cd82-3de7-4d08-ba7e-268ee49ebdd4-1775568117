import Link from "next/link";
import { MessageCircle, Instagram, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MultiChannel() {
  const channels = [
    {
      icon: MessageCircle,
      title: "WhatsApp Automation",
      description: "Recover carts, answer questions, and close sales in your highest-converting channel.",
      link: "/whatsapp-automation-ecommerce",
    },
    {
      icon: Instagram,
      title: "Instagram Automation",
      description: "Turn DMs and comments into structured sales conversations automatically.",
      link: "/instagram-automation-ecommerce",
    },
    {
      icon: Send,
      title: "Telegram Automation",
      description: "Build direct engagement and drive repeat revenue with owned communication.",
      link: "/telegram-automation-ecommerce",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white text-center mb-8">
            One AI Across <span className="text-[#c9a961] font-normal">All Your Channels</span>
          </h2>
          <p className="text-xl text-white/70 text-center mb-16 font-light">
            Your customers interact on different platforms. Your AI should too.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <channel.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">{channel.title}</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">{channel.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white"
                  asChild
                >
                  <Link href={channel.link}>
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}