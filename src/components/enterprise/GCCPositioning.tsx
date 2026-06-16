import { Globe2, TrendingUp, Building2, Zap, DollarSign, Users } from "lucide-react";

export function GCCPositioning() {
  const initiatives = [
    { icon: TrendingUp, label: "Saudi Vision 2030", desc: "Aligned with digital transformation goals" },
    { icon: Building2, label: "Industrial Modernization", desc: "AI-powered operational excellence" },
    { icon: Zap, label: "Digital Transformation", desc: "Enterprise-grade AI infrastructure" },
    { icon: Users, label: "Workforce Intelligence", desc: "Multilingual operational support" },
    { icon: DollarSign, label: "Financial Services Innovation", desc: "Forex and fintech infrastructure" },
    { icon: Globe2, label: "Cross-Border Growth", desc: "GCC and Cyprus expansion support" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 to-accent/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built For The Next Wave Of <span className="text-gradient">GCC & Cyprus Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            O.N.E.Tech infrastructure aligns with regional digital transformation initiatives, regulatory frameworks, and operational excellence standards across the Gulf Cooperation Council and Cyprus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {initiatives.map((initiative, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl hover:bg-card/60 transition-all group text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <initiative.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{initiative.label}</h3>
              <p className="text-sm text-muted-foreground">{initiative.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 rounded-xl max-w-3xl mx-auto border border-primary/20">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Serving enterprises across
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Saudi Arabia", "UAE", "Qatar", "Bahrain", "Kuwait", "Oman", "Cyprus"].map((country) => (
                <span key={country} className="px-4 py-2 rounded-lg glass-panel text-sm font-medium border border-border/50">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}