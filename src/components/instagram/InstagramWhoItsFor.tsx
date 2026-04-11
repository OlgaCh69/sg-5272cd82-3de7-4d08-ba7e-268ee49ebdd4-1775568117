import { Instagram, TrendingUp, MessageCircle, Target, Users } from "lucide-react";

export function InstagramWhoItsFor() {
  const audience = [
    { icon: Instagram, text: "Brands with active Instagram audiences" },
    { icon: TrendingUp, text: "Ecommerce stores running ads or influencer campaigns" },
    { icon: MessageCircle, text: "Businesses receiving regular DMs" },
    { icon: Target, text: "Brands focused on conversion rate optimization" },
    { icon: Users, text: "Teams looking to scale without increasing manual work" },
  ];

  return (
    <section id="who-its-for" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Built for Ecommerce Brands That{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Sell Through Social
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Instagram automation is ideal for ecommerce businesses that rely on engagement, content, and direct messaging.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {audience.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-lg bg-background border border-border/50"
              >
                <item.icon className="w-6 h-6 text-pink-500 flex-shrink-0" />
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}