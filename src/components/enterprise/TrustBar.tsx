import { Database, Shield, Globe, TrendingUp, Users, Building2, DollarSign, MessageSquare } from "lucide-react";

export function TrustBar() {
  const capabilities = [
    { icon: Shield, label: "Enterprise AI" },
    { icon: TrendingUp, label: "Operational Intelligence" },
    { icon: Database, label: "AI Governance" },
    { icon: Building2, label: "Infrastructure Automation" },
    { icon: MessageSquare, label: "Multilingual Workforce AI" },
    { icon: Globe, label: "Sovereign Operations" },
    { icon: DollarSign, label: "Financial Intelligence" },
    { icon: Users, label: "Forex Operations" },
  ];

  return (
    <section className="py-12 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {capabilities.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center group">
              <div className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}