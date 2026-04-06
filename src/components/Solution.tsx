import { CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";

export function Solution() {
  const platforms = [
    { name: "Telegram", emoji: "✈️" },
    { name: "WhatsApp", emoji: "💬" },
    { name: "Instagram", emoji: "📸" },
    { name: "Messenger", emoji: "📱" }
  ];

  const benefits = [
    "Unified inbox",
    "Smart automations",
    "Consistent brand experience",
    "Built to convert"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl leading-tight">
              One Bot. <span className="text-primary">Multiple Platforms.</span><br />
              Endless Possibilities.
            </h2>

            <div className="flex gap-4 mb-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-4 border border-primary/20 hover:scale-110 transition-transform cursor-pointer"
                >
                  <div className="text-3xl">{platform.emoji}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground">
              Build once. Deploy everywhere. Connect with your customers on their favorite platforms — Telegram, WhatsApp, Instagram, and more. No coding required.
            </p>
          </div>

          <div className="relative animate-slide-up">
            <div className="glass-card rounded-3xl p-6 border border-primary/10 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Your Business</div>
                    <div className="text-xs text-muted-foreground">Multi-Platform</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-xl">
                      💬
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">WhatsApp</div>
                      <div className="text-xs text-muted-foreground">New order received!</div>
                    </div>
                    <div className="text-xs text-muted-foreground">11:24</div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-xl">
                      📸
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Instagram</div>
                      <div className="text-xs text-muted-foreground">New message from user</div>
                    </div>
                    <div className="text-xs text-muted-foreground">11:24</div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl">
                      ✈️
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Telegram</div>
                      <div className="text-xs text-muted-foreground">New customer inquiry</div>
                    </div>
                    <div className="text-xs text-muted-foreground">11:25</div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center text-xl">
                      📱
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Messenger</div>
                      <div className="text-xs text-muted-foreground">User requested support</div>
                    </div>
                    <div className="text-xs text-muted-foreground">11:25</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Active Conversations</span>
                    <span className="font-semibold text-primary">24</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 glass-card rounded-2xl px-6 py-3 border border-primary/20 animate-scale-in">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-xs text-muted-foreground">Platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}