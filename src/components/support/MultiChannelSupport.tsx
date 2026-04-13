import Link from "next/link";
import { MessageCircle, Instagram, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MultiChannelSupport() {
  const channels = [
    {
      icon: MessageCircle,
      title: "WhatsApp Support Automation",
      description: "Respond to customer questions and provide updates in real time on WhatsApp.",
      link: "/whatsapp-automation-ecommerce",
    },
    {
      icon: Instagram,
      title: "Instagram DM Support",
      description: "Handle incoming messages and product inquiries directly through Instagram.",
      link: "/instagram-automation-ecommerce",
    },
    {
      icon: Bot,
      title: "AI Chatbot Support",
      description: "Use AI-driven conversations to provide instant answers across your ecommerce channels.",
      link: "/ai-chatbot-ecommerce",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Support Customers Across Every Channel
            </h2>
            <p className="text-lg text-muted-foreground">
              Customers reach out through different platforms. Your support system needs to handle all of them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Link key={index} href={channel.link}>
                  <Card className="h-full hover:border-primary transition-colors">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{channel.title}</h3>
                      <p className="text-muted-foreground">{channel.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}