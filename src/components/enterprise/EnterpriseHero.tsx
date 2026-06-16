import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Shield, Zap } from "lucide-react";

export function EnterpriseHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-muted-foreground mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span>Governance-First AI Infrastructure</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-foreground">Enterprise AI Infrastructure</span>
            <span className="block text-gradient mt-2">For Operational Excellence</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform fragmented enterprise processes into intelligent operational ecosystems powered by AI orchestration, governance frameworks, and real-time operational intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-6 text-lg rounded-lg">
                Book Executive Briefing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/infrastructure">
              <Button size="lg" variant="outline" className="border-border hover:bg-card/50 px-8 py-6 text-lg rounded-lg">
                Explore Infrastructure
                <Network className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { icon: Shield, label: "Governance-First", desc: "Built-in compliance & audit trails" },
              { icon: Network, label: "AI Orchestration", desc: "Intelligent workflow automation" },
              { icon: Zap, label: "Operational Intelligence", desc: "Real-time insights & predictions" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-lg hover:bg-card/50 transition-all">
                <item.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}