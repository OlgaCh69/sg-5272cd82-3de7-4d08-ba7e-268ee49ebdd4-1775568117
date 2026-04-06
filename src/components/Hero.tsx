import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag, Search, Package, Flame, User, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">AUTOMATE • ENGAGE • GROW</span>
            </div>

            <h1 className="font-heading font-bold text-5xl lg:text-6xl xl:text-7xl leading-tight">
              Turn Conversations Into{" "}
              <span className="text-primary">Sales. 24/7.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Create smart bots for Telegram, WhatsApp, Instagram, and more. Automate support, showcase products, and increase conversions — all in one place.
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-2xl">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-medium">60%</span>
                </div>
                <p className="text-xs text-muted-foreground">Reduce support workload by 60%</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Instant</span>
                </div>
                <p className="text-xs text-muted-foreground">Increase sales with instant responses</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-medium">24/7</span>
                </div>
                <p className="text-xs text-muted-foreground">Build stronger customer relationships</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-button font-semibold text-base px-8">
                Get Your Bot Demo
                <span className="ml-2">→</span>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 font-semibold text-base px-8">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/50 border-2 border-background" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/60 border-2 border-background" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-primary/70 border-2 border-background" />
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by e-commerce brands worldwide
              </p>
            </div>
          </div>

          <div className="relative lg:ml-auto animate-slide-up">
            <div className="relative z-10 flex gap-4">
              <div className="flex-1 space-y-4">
                <div className="glass-card rounded-3xl p-6 border border-primary/10 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Your Brand Bot</div>
                      <div className="text-xs text-muted-foreground">@yourbrand</div>
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground">15:32</div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-secondary/50 rounded-2xl p-4">
                      <p className="text-sm mb-3">🔥 Welcome! How can I help you today?</p>
                      <div className="text-xs text-muted-foreground">11:44</div>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors text-left">
                        <ShoppingBag className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Shop</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors text-left">
                        <Search className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Search</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors text-left">
                        <Package className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">My Orders</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors text-left">
                        <Flame className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Deals</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors text-left">
                        <User className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Account</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex-1 bg-secondary/50 rounded-full px-4 py-2 text-sm text-muted-foreground">
                      Message
                    </div>
                    <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary-foreground" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4 pt-12">
                <div className="glass-card rounded-3xl p-6 border border-primary/10 shadow-2xl">
                  <div className="aspect-square bg-secondary/50 rounded-2xl mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  </div>

                  <h3 className="font-semibold mb-2">Tactical Backpack</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 text-primary">⭐</div>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">(120 reviews)</span>
                  </div>

                  <div className="text-2xl font-bold text-primary mb-1">€89.99</div>

                  <ul className="space-y-1 mb-4 text-xs text-muted-foreground">
                    <li>✓ Durable & Waterproof</li>
                    <li>✓ Multiple Compartments</li>
                    <li>✓ Perfect for Outdoor</li>
                  </ul>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-button">
                    Add to Cart
                  </Button>
                  <Button variant="ghost" className="w-full mt-2 text-sm">
                    View Details
                  </Button>

                  <div className="mt-4 pt-4 border-t border-border/50 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-primary">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Added to cart!</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Total: €89.99</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-12 top-1/4 space-y-4 animate-fade-in">
              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center border border-primary/20 hover:scale-110 transition-transform cursor-pointer">
                <div className="text-2xl">✈️</div>
              </div>
              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center border border-primary/20 hover:scale-110 transition-transform cursor-pointer">
                <div className="text-2xl">💬</div>
              </div>
              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center border border-primary/20 hover:scale-110 transition-transform cursor-pointer">
                <div className="text-2xl">📸</div>
              </div>
              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center border border-primary/20 hover:scale-110 transition-transform cursor-pointer">
                <div className="text-2xl">📱</div>
              </div>
              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center border border-primary/20 hover:scale-110 transition-transform cursor-pointer">
                <div className="text-2xl">➕</div>
              </div>
            </div>

            <div className="absolute -bottom-8 right-1/4 glass-card rounded-2xl px-6 py-3 border border-primary/20 animate-scale-in">
              <div className="text-3xl font-bold text-primary">+35%</div>
              <div className="text-xs text-muted-foreground">More Sales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}