"use client";

import { Shield, Building2, TrendingUp, Network, Globe, Eye } from "lucide-react";

export function WhyONETech() {
  const reasons = [
    {
      number: "01",
      icon: Shield,
      title: "Governance-First",
      description: "AI governance embedded into every infrastructure layer. Human oversight, auditability and policy enforcement by design."
    },
    {
      number: "02",
      icon: Building2,
      title: "Enterprise Architecture",
      description: "Built around enterprise systems, workflows and operational complexity. Not standalone AI tools."
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Operational Intelligence",
      description: "Transform operational data into actionable intelligence. Executive visibility at every level."
    },
    {
      number: "04",
      icon: Network,
      title: "Agentic Coordination",
      description: "AI agents orchestrated through governed workflows. Controlled, auditable and scalable."
    },
    {
      number: "05",
      icon: Globe,
      title: "GCC Focus",
      description: "Designed for Saudi Arabia, UAE and GCC enterprise transformation initiatives. Aligned with regional modernization strategies."
    },
    {
      number: "06",
      icon: Eye,
      title: "Executive Visibility",
      description: "Real-time operational insight, governance monitoring and strategic decision support."
    }
  ];

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Why <span className="text-primary">O.N.E.Tech</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Enterprise AI requires more than automation. It requires governance, intelligence and operational control.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="group relative rounded-2xl border border-border/30 bg-gradient-to-br from-muted/10 to-background p-8 hover:border-primary/50 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative space-y-4">
                  {/* Number & Icon */}
                  <div className="flex items-start justify-between">
                    <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                      {reason.number}
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <reason.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}