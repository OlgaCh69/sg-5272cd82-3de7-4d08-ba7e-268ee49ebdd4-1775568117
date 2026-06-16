"use client";

import { useState } from "react";
import { Database, Network, Shield, TrendingUp, Eye, ChevronRight } from "lucide-react";

const layers = [
  {
    number: "05",
    icon: Eye,
    title: "Strategic Outcomes",
    items: ["Executive Visibility", "Risk Reduction", "Performance Intelligence", "Operational Excellence"]
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Operational Intelligence",
    items: ["Predictive Insights", "Workforce Intelligence", "Business Intelligence", "Risk Monitoring"]
  },
  {
    number: "03",
    icon: Shield,
    title: "AI Governance Layer",
    items: ["Policies", "Audit Trails", "Human Approval Gates", "Compliance Controls"]
  },
  {
    number: "02",
    icon: Network,
    title: "Agentic Coordination",
    items: ["AI Agents", "Workflow Intelligence", "Task Orchestration", "Decision Routing"]
  },
  {
    number: "01",
    icon: Database,
    title: "Enterprise Systems",
    items: ["ERP", "CRM", "HR", "Operations", "Finance", "Trading Platforms"]
  }
];

export function PlatformStack() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Network className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">INFRASTRUCTURE ARCHITECTURE</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold">
            The O.N.E.Tech
            <br />
            <span className="text-primary">Infrastructure Stack</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Five integrated layers transforming enterprise operations from fragmented systems
            into intelligent, governed operational ecosystems.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            const isActive = activeLayer === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveLayer(index)}
                onMouseLeave={() => setActiveLayer(null)}
                className={`group relative transition-all duration-500 ${
                  isActive ? 'scale-105 z-10' : 'scale-100'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Glow effect */}
                {isActive && (
                  <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl" />
                )}

                <div className={`relative rounded-2xl border transition-all duration-300 ${
                  isActive 
                    ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-muted/30 shadow-2xl shadow-primary/20' 
                    : 'border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30'
                }`}>
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Number */}
                      <div className={`text-6xl font-bold transition-all duration-300 ${
                        isActive ? 'text-primary' : 'text-muted-foreground/20 group-hover:text-primary/40'
                      }`}>
                        {layer.number}
                      </div>

                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-primary/20 scale-110' 
                          : 'bg-muted/30 group-hover:bg-primary/10 group-hover:scale-105'
                      }`}>
                        <Icon className={`w-8 h-8 transition-colors duration-300 ${
                          isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                        }`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-foreground mb-4">{layer.title}</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {layer.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                                isActive ? 'text-foreground' : 'text-muted-foreground'
                              }`}
                              style={{ transitionDelay: `${itemIndex * 50}ms` }}
                            >
                              <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                                isActive ? 'text-primary translate-x-1' : 'text-muted-foreground/50'
                              }`} />
                              <span className="font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data flow indicator */}
                  {index < layers.length - 1 && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20">
                      <div className={`w-0.5 h-6 transition-all duration-300 ${
                        isActive ? 'bg-primary' : 'bg-border'
                      }`}>
                        <div className={`w-2 h-2 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 ${
                          isActive ? 'bg-primary animate-pulse' : 'bg-border'
                        }`} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            Every layer <span className="text-primary font-semibold">governed</span>,{" "}
            <span className="text-primary font-semibold">orchestrated</span>, and{" "}
            <span className="text-primary font-semibold">intelligent</span>.
          </p>
        </div>
      </div>
    </section>
  );
}