import Link from "next/link";
import { MessageCircle, Instagram, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MultiChannel() {
  const channels = [
    {
      icon: MessageCircle,
      title: "WhatsApp Automation",
      description: "Recover carts, answer questions, and close sales in a high-converting channel.",
      link: "/whatsapp-automation-ecommerce",
      color: "text-green-600",
    },
    {
      icon: Instagram,
      title: "Instagram Automation",
      description: "Turn DMs and comments into structured sales opportunities.",
      link: "/instagram-automation-ecommerce",
      color: "text-pink-600",
    },
    {
      icon: Send,
      title: "Telegram Automation",
      description: "Build direct engagement and support repeat revenue with owned communication.",
      link: "/telegram-automation-ecommerce",
      color: "text-blue-600",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for the Channels Ecommerce Brands Already Use
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your customers do not all interact in the same place. That is why our AI chatbot systems are designed to support ecommerce conversations across multiple channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                <channel.icon className={`w-12 h-12 ${channel.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-3">{channel.title}</h3>
                <p className="text-muted-foreground mb-6">{channel.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={channel.link}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
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