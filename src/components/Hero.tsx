import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Automate • Engage • Grow</span>
            </div>
            
            <h1 className="font-heading font-bold text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              Turn Conversations Into{" "}
              <span className="text-gradient">Sales. 24/7.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Create smart bots for Telegram, WhatsApp, Instagram, and more. Automate support, showcase products, and increase conversions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base group px-8 h-14 w-full sm:w-auto">
                  Get Your Bot Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="border-2 border-border hover:bg-card font-semibold text-base h-14 px-8 w-full sm:w-auto">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-6">
              <div className="flex-1 bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <div className="bg-muted/20 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Your Brand Bot</div>
                      <div className="text-xs text-muted-foreground">@yourbot</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { icon: "🛍️", label: "Shop" },
                      { icon: "🔍", label: "Search" },
                      { icon: "📦", label: "My Orders" },
                      { icon: "🔥", label: "Deals" },
                      { icon: "👤", label: "Account" },
                    ].map((item, i) => (
                      <button
                        key={i}
                        className="w-full bg-muted/40 px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-muted/60 transition-all"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <div className="bg-muted/20 rounded-xl p-4">
                  <div className="bg-muted/30 rounded-lg overflow-hidden mb-4 aspect-square flex items-center justify-center">
                    <span className="text-6xl">🎒</span>
                  </div>
                  
                  <h3 className="font-semibold text-base mb-2">Tactical Backpack</h3>
                  
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">€89.99</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">⭐</span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">(120 reviews)</span>
                  </div>
                  
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm h-10">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {[
                { name: "Telegram", color: "bg-blue-500", icon: "✈️" },
                { name: "WhatsApp", color: "bg-green-500", icon: "💬" },
                { name: "Instagram", color: "bg-pink-500", icon: "📸" },
                { name: "Messenger", color: "bg-blue-600", icon: "💬" },
              ].map((platform, i) => (
                <div
                  key={platform.name}
                  className="bg-card/80 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2 border border-border/50"
                >
                  <div className={`w-8 h-8 ${platform.color} rounded-md flex items-center justify-center text-sm`}>
                    {platform.icon}
                  </div>
                  <span className="text-xs font-medium pr-2">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}