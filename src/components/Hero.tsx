import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/20 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Automate • Engage • Grow</span>
            </div>
            
            <h1 className="font-heading font-bold text-5xl lg:text-6xl xl:text-7xl mb-6 leading-[1.1]">
              Turn Conversations Into{" "}
              <span className="text-gradient">Sales. 24/7.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Create smart bots for Telegram, WhatsApp, Instagram, and more. Automate support, showcase products, and increase conversions — all in one place.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">Reduce support workload by 60%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">Increase sales with instant responses</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-semibold text-base group px-8 h-14">
                Get Your Bot Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 font-semibold text-base h-14 px-8">
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/30 border-2 border-background" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Trusted by e-commerce brands worldwide</p>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative flex gap-4 lg:gap-6">
              <div className="flex-1 glass-card rounded-3xl p-6 shadow-card border border-border/50 backdrop-blur-xl">
                <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Your Brand Bot</div>
                      <div className="text-xs text-muted-foreground">@yourbot</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2.5">
                    {[
                      { icon: "🛍️", label: "Shop" },
                      { icon: "🔍", label: "Search" },
                      { icon: "📦", label: "My Orders" },
                      { icon: "🔥", label: "Deals" },
                      { icon: "👤", label: "Account" },
                    ].map((item, i) => (
                      <button
                        key={i}
                        className="w-full glass-card px-4 py-3.5 rounded-xl flex items-center gap-3 hover:bg-primary/10 hover:border-primary/30 transition-all group"
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 glass-card rounded-3xl p-6 shadow-card border border-border/50 backdrop-blur-xl">
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl p-5">
                  <div className="bg-muted/30 rounded-xl overflow-hidden mb-4 aspect-square flex items-center justify-center">
                    <span className="text-7xl">🎒</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">Tactical Backpack</h3>
                  
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold text-primary">€89.99</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">⭐</span>
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-xs text-muted-foreground">(120 reviews)</span>
                  </div>
                  
                  <ul className="text-xs text-muted-foreground space-y-1.5 mb-5">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      <span>Durable & Waterproof</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      <span>Multiple Compartments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      <span>Perfect for Outdoor</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    Add to Cart
                  </Button>
                  
                  <div className="mt-3 text-center">
                    <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Added to cart! Total: €89.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 space-y-3">
              {[
                { name: "Telegram", color: "bg-blue-500", icon: "✈️" },
                { name: "WhatsApp", color: "bg-green-500", icon: "💬" },
                { name: "Instagram", color: "bg-pink-500", icon: "📸" },
                { name: "Messenger", color: "bg-blue-600", icon: "💬" },
                { name: "More", color: "bg-purple-500", icon: "•••" },
              ].map((platform, i) => (
                <div
                  key={platform.name}
                  className="glass-card rounded-xl p-3 flex items-center gap-3 shadow-card border border-border/50 backdrop-blur-xl animate-float"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className={`w-10 h-10 ${platform.color} rounded-lg flex items-center justify-center text-white font-medium`}>
                    {platform.icon}
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap pr-2">{platform.name}</span>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-card rounded-full px-6 py-3 shadow-glow border-2 border-primary/40 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-bold text-primary">+35% More Sales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}