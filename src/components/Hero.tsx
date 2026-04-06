import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const platforms = [
    { name: "Telegram", color: "bg-blue-500", icon: "💬" },
    { name: "WhatsApp", color: "bg-green-500", icon: "📱" },
    { name: "Instagram", color: "bg-pink-500", icon: "📷" },
    { name: "Messenger", color: "bg-blue-600", icon: "💬" },
    { name: "More", color: "bg-purple-500", icon: "••••" },
  ];

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 glass-card border border-primary/20 rounded-full mb-6">
              <span className="text-sm text-primary font-medium">⚡ AUTOMATE • ENGAGE • GROW</span>
            </div>
            
            <h1 className="font-heading font-bold text-5xl lg:text-6xl mb-6 leading-tight">
              Turn Conversations Into{" "}
              <span className="text-gradient">Sales. 24/7.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Create smart bots for Telegram, WhatsApp, Instagram, and more. Automate support, showcase products, and increase conversions — all in one place.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-foreground">Reduce support workload by 60%</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-foreground">Increase sales with instant responses</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-semibold text-base group">
                Get Your Bot Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 font-semibold text-base">
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 border-2 border-background" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Trusted by e-commerce brands worldwide</p>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative z-10 flex gap-6">
              <div className="glass-card p-6 rounded-3xl shadow-card flex-1">
                <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-sm">🤖</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Your Brand Bot</div>
                      <div className="text-xs text-muted-foreground">@yourbot</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-primary/10 transition-colors cursor-pointer">
                      <span className="text-xl">🛍️</span>
                      <span className="text-sm font-medium">Shop</span>
                    </div>
                    <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-primary/10 transition-colors cursor-pointer">
                      <span className="text-xl">🔍</span>
                      <span className="text-sm font-medium">Search</span>
                    </div>
                    <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-primary/10 transition-colors cursor-pointer">
                      <span className="text-xl">📦</span>
                      <span className="text-sm font-medium">My Orders</span>
                    </div>
                    <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-primary/10 transition-colors cursor-pointer">
                      <span className="text-xl">🔥</span>
                      <span className="text-sm font-medium">Deals</span>
                    </div>
                    <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-primary/10 transition-colors cursor-pointer">
                      <span className="text-xl">👤</span>
                      <span className="text-sm font-medium">Account</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-3xl shadow-card flex-1">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-4">
                  <div className="bg-card rounded-xl overflow-hidden mb-3">
                    <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                      <span className="text-6xl">🎒</span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">Tactical Backpack</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-primary">€89.99</span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-xs text-muted-foreground">(120 reviews)</span>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                    <li>✓ Durable & Waterproof</li>
                    <li>✓ Multiple Compartments</li>
                    <li>✓ Perfect for Outdoor</li>
                  </ul>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    Add to Cart
                  </Button>
                  <div className="mt-2 text-xs text-center text-muted-foreground">
                    ✓ Added to cart! Total: €89.99
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 space-y-4">
              {platforms.map((platform, i) => (
                <div
                  key={platform.name}
                  className="glass-card p-3 rounded-xl flex items-center gap-2 animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className={`w-8 h-8 ${platform.color} rounded-lg flex items-center justify-center text-white`}>
                    {platform.icon}
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">{platform.name}</span>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 glass-card px-6 py-3 rounded-full border-2 border-primary/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-primary">+35% More Sales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}