"use client";

import { useState } from "react";
import { Target, TrendingUp, Shield, Network, Database } from "lucide-react";

export function FutureEnterpriseStack() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    {
      id: 5,
      title: "Strategic Outcomes",
      icon: Target,
      color: "from-primary to-accent",
      items: ["Reduced Operational Friction", "Faster Execution", "Higher Productivity", "Governed AI Adoption"]
    },
    {
      id: 4,
      title: "Operational Intelligence",
      icon: TrendingUp,
      color: "from-accent to-primary",
      items: ["Predictive Insights", "Executive Visibility", "Risk Detection", "Workforce Intelligence"]
    },
    {
      id: 3,
      title: "AI Governance Layer",
      icon: Shield,
      color: "from-primary to-accent",
      items: ["Policies", "Audit Trails", "Approvals", "Compliance Controls"]
    },
    {
      id: 2,
      title: "Agentic Coordination",
      icon: Network,
      color: "from-accent to-primary",
      items: ["AI Agents", "Workflow Intelligence", "Decision Routing", "Task Orchestration"]
    },
    {
      id: 1,
      title: "Enterprise Systems",
      icon: Database,
      color: "from-primary to-accent",
      items: ["ERP", "CRM", "HR", "Operations", "Finance", "Trading Platforms"]
    }
  ];

  return (
    <section className="relative py-32 border-t border-border bg-background">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">The Future </span>
              <span className="text-gradient">Enterprise Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A layered architecture that transforms disconnected systems into intelligent operations
            </p>
          </div>

          {/* Layered Stack */}
          <div className="relative space-y-4">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

            {layers.map((layer, index) => (
              <div
                key={layer.id}
                className="relative"
                onMouseEnter={() => setActiveLayer(layer.id)}
                onMouseLeave={() => setActiveLayer(null)}
              >
                {/* Layer Card */}
                <div className={`relative rounded-xl border backdrop-blur-sm transition-all duration-500 cursor-pointer
                  ${activeLayer === layer.id 
                    ? 'border-primary bg-gradient-to-r from-primary/20 to-accent/10 shadow-lg shadow-primary/20 scale-105' 
                    : 'border-border bg-card/30 hover:border-primary/30'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Layer Number */}
                  <div className={`absolute -left-12 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all duration-500
                    ${activeLayer === layer.id 
                      ? 'border-primary bg-primary/20 text-primary scale-110' 
                      : 'border-border bg-background text-muted-foreground'}`}>
                    {layer.id}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500
                        ${activeLayer === layer.id 
                          ? 'bg-primary/20 border-2 border-primary' 
                          : 'bg-card border border-border'}`}>
                        <layer.icon className={`w-6 h-6 transition-colors duration-500 ${activeLayer === layer.id ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-3 transition-colors duration-500
                          ${activeLayer === layer.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {layer.title}
                        </h3>

                        {/* Items Grid */}
                        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-500
                          ${activeLayer === layer.id ? 'opacity-100 max-h-40' : 'opacity-60 max-h-0 overflow-hidden'}`}>
                          {layer.items.map((item, i) => (
                            <div
                              key={i}
                              className="text-sm px-3 py-2 rounded-md bg-background/50 border border-border/50 text-center"
                            >
                              {item}
                            </div>
                          ))}
                        </div>

                        {/* Collapsed View */}
                        <div className={`transition-all duration-500 ${activeLayer === layer.id ? 'opacity-0 max-h-0' : 'opacity-100 max-h-10'}`}>
                          <p className="text-sm text-muted-foreground">
                            {layer.items.join(' • ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${layer.color} opacity-0 transition-opacity duration-500
                    ${activeLayer === layer.id ? 'opacity-10' : ''}`} />
                </div>

                {/* Connector Arrow */}
                {index < layers.length - 1 && (
                  <div className="absolute left-8 -bottom-2 w-px h-4 bg-gradient-to-b from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Each layer builds upon the foundation below, creating a complete operational intelligence platform
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              <Shield className="w-4 h-4" />
              Governance embedded at every layer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}