import { MessageSquare, Instagram, Send, CheckCircle2 } from "lucide-react";

export function Features() {
  const platforms = [
    {
      icon: MessageSquare,
      title: "WhatsApp Automation for Ecommerce",
      description: "Recover abandoned carts, send real-time updates, and close sales directly inside WhatsApp—where conversion rates are highest.",
      benefits: [
        "Abandoned cart recovery flows",
        "Order updates & tracking",
        "Direct sales conversions",
        "Product recommendations",
      ],
    },
    {
      icon: Instagram,
      title: "Instagram DM Automation",
      description: "Turn engagement into revenue by automatically responding, qualifying, and guiding prospects through your funnel.",
      benefits: [
        "Auto-respond to DMs & comments",
        "Lead qualification",
        "Product discovery",
        "Sales conversion flows",
      ],
    },
    {
      icon: Send,
      title: "Multi-Channel Automation",
      description: "Deliver consistent, intelligent messaging across all your customer touchpoints with unified automation.",
      benefits: [
        "WhatsApp, Instagram & Telegram",
        "Unified customer data",
        "Cross-channel campaigns",
        "24/7 availability",
      ],
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Multi-Channel Automation Built for Ecommerce
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your customers don't stay in one place. Your automation shouldn't either.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <platform.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{platform.title}</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {platform.description}
                </p>

                <div className="space-y-2">
                  {platform.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}