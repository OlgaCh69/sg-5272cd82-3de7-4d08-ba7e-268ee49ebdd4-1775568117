import Link from "next/link";
import { MessageCircle, Instagram, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChannelPositioning() {
  const channels = [
    { icon: MessageCircle, title: "WhatsApp Recovery", description: "95%+ open rates. Direct, personal, and highest-converting channel for cart recovery.", link: "/whatsapp-automation-ecommerce" },
    { icon: Instagram, title: "Instagram Recovery", description: "Reach customers where they discovered your products. Convert DM conversations into completed purchases.", link: "/instagram-automation-ecommerce" },
    { icon: Send, title: "Telegram Recovery", description: "Direct communication channel with engaged subscribers. Perfect for repeat customers and loyal audiences.", link: "/telegram-automation-ecommerce" }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] text-center mb-8">
            Multi-Channel Recovery <span className="text-[#c9a961] font-normal">Maximizes Results</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 font-light">
            Different customers prefer different channels. We reach them wherever they're most likely to respond.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#c9a961]/30 transition-colors">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <channel.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">{channel.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">{channel.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 hover:border-[#c9a961] bg-white hover:bg-gray-50 text-[#1a1a1a]"
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