import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.52-.47-.01-1.38-.27-2.05-.49-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.74 4-1.74 6.68-2.88 8.03-3.44 3.82-1.59 4.61-1.87 5.13-1.87.11 0 .37.03.53.17.14.11.17.27.19.38-.01.06-.01.24-.03.38z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.448 5.51 3.71 7.197V22l3.417-1.874c.913.252 1.882.387 2.873.387 5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.065 12.44l-2.577-2.745-5.03 2.745 5.527-5.868 2.64 2.745 4.968-2.745-5.528 5.868z"/>
  </svg>
);

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
                    <span className="text-6xl">🎧</span>
                  </div>
                  
                  <h3 className="font-semibold text-base mb-2">Premium Wireless Headphones</h3>
                  
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">€299.99</span>
                    <span className="text-sm text-muted-foreground line-through">€399.99</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">⭐</span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">(450 reviews)</span>
                  </div>
                  
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm h-10">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {[
                { name: "Telegram", color: "bg-[#0088cc]", Icon: TelegramIcon },
                { name: "WhatsApp", color: "bg-[#25D366]", Icon: WhatsAppIcon },
                { name: "Instagram", color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]", Icon: InstagramIcon },
                { name: "Messenger", color: "bg-[#0084FF]", Icon: MessengerIcon },
              ].map((platform, i) => (
                <div
                  key={platform.name}
                  className="bg-card/80 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2 border border-border/50"
                >
                  <div className={`w-8 h-8 ${platform.color} rounded-md flex items-center justify-center text-white`}>
                    <platform.Icon />
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