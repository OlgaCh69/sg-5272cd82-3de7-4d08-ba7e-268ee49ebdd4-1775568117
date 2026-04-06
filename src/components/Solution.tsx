import { CheckCircle2 } from "lucide-react";

export function Solution() {
  const platforms = [
    { name: "Telegram", emoji: "✈️", color: "bg-blue-500" },
    { name: "WhatsApp", emoji: "💬", color: "bg-green-500" },
    { name: "Instagram", emoji: "📸", color: "bg-pink-500" },
    { name: "Messenger", emoji: "💬", color: "bg-blue-600" }
  ];

  const messages = [
    { platform: "WhatsApp", emoji: "💬", color: "bg-green-500/20", message: "New order received!", time: "11:24" },
    { platform: "Instagram", emoji: "📸", color: "bg-pink-500/20", message: "New message from user", time: "11:24" },
    { platform: "Telegram", emoji: "✈️", color: "bg-blue-500/20", message: "New customer inquiry", time: "11:25" },
    { platform: "Messenger", emoji: "💬", color: "bg-blue-600/20", message: "User requested support", time: "11:25" }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight">
              One Bot. <span className="text-gradient">Multiple Platforms.</span><br />
              Endless Possibilities.
            </h2>

            <div className="flex gap-3">
              {platforms.map((platform, i) => (
                <div
                  key={i}
                  className={`${platform.color} rounded-2xl w-16 h-16 flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg`}
                >
                  {platform.emoji}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                "Unified inbox",
                "Smart automations",
                "Consistent brand experience",
                "Built to convert"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Build once. Deploy everywhere. Connect with your customers on their favorite platforms — Telegram, WhatsApp, Instagram, and more. No coding required.
            </p>
          </div>

          <div className="relative">
            <div className="glass-card rounded-3xl p-6 shadow-card border border-border/50 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">Your Business</div>
                  <div className="text-xs text-muted-foreground">Multi-Platform</div>
                </div>
              </div>

              <div className="space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted/70 transition-colors">
                    <div className={`w-12 h-12 rounded-full ${msg.color} flex items-center justify-center text-xl flex-shrink-0`}>
                      {msg.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm mb-0.5">{msg.platform}</div>
                      <div className="text-xs text-muted-foreground truncate">{msg.message}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{msg.time}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Conversations</span>
                  <span className="text-2xl font-bold text-primary">24</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 glass-card rounded-2xl px-6 py-4 border border-primary/30 shadow-glow backdrop-blur-xl">
              <div className="text-3xl font-bold text-primary mb-1">4</div>
              <div className="text-xs text-muted-foreground">Platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}