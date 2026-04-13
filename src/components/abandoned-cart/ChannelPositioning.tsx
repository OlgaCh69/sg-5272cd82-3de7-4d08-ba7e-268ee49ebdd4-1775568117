import Link from "next/link";
import { MessageCircle, Instagram, Bot } from "lucide-react";

export function ChannelPositioning() {
  const channels = [
    {
      icon: MessageCircle,
      title: "WhatsApp Abandoned Cart Recovery",
      description: "Re-engage shoppers with direct, high-converting messages on WhatsApp and recover lost checkouts faster.",
      link: "/whatsapp-automation-ecommerce",
      color: "text-green-600",
    },
    {
      icon: Instagram,
      title: "Instagram Follow-Up Automation",
      description: "Reconnect with interested customers through structured Instagram messaging flows.",
      link: "/instagram-automation-ecommerce",
      color: "text-pink-600",
    },
    {
      icon: Bot,
      title: "AI Chatbot Recovery Flows",
      description: "Use AI-powered conversation paths to answer objections, guide decisions, and move customers back to checkout.",
      link: "/ai-chatbot-ecommerce",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Abandoned Cart Recovery Across the Channels That Convert
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Customers do not always respond the same way on every platform. That is why we build abandoned cart recovery systems around the channels ecommerce brands already use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <Link 
                key={index}
                href={channel.link}
                className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <channel.icon className={`w-12 h-12 ${channel.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold mb-3">{channel.title}</h3>
                <p className="text-muted-foreground">{channel.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}