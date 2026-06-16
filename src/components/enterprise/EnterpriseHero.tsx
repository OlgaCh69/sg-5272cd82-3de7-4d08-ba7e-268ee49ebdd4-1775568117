"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Shield, Zap, Database, Users, TrendingUp } from "lucide-react";

export function EnterpriseHero() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { icon: Database, label: "ERP", position: "top-1/4 left-1/4" },
    { icon: Users, label: "CRM", position: "top-1/4 right-1/4" },
    { icon: TrendingUp, label: "Finance", position: "bottom-1/4 left-1/4" },
    { icon: Shield, label: "HR", position: "bottom-1/4 right-1/4" },
    { icon: Network, label: "Operations", position: "top-1/2 left-1/2" },
    { icon: Zap, label: "Field", position: "bottom-1/2 right-1/3" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Infrastructure Nodes Visualization */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {nodes.map((node, i) => (
          <div
            key={i}
            className={`absolute ${node.position} transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000`}
          >
            <div className={`relative ${activeNode === i ? 'scale-125' : 'scale-100'} transition-transform duration-500`}>
              <div className={`w-16 h-16 rounded-full border-2 backdrop-blur-sm flex items-center justify-center
                ${activeNode === i ? 'border-primary bg-primary/20' : 'border-border bg-card/20'}`}>
                <node.icon className={`w-8 h-8 ${activeNode === i ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>
              {/* Connection Lines */}
              {i < nodes.length - 1 && (
                <svg className="absolute top-8 left-8 w-64 h-64 overflow-visible">
                  <line
                    x1="0"
                    y1="0"
                    x2={Math.random() * 200 - 100}
                    y2={Math.random() * 200 - 100}
                    stroke={activeNode === i || activeNode === i + 1 ? "#00B67A" : "#ffffff20"}
                    strokeWidth="2"
                    className="transition-all duration-500"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
        
        {/* Central AI Layer */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-2 border-primary/50 bg-primary/10 backdrop-blur-md flex items-center justify-center animate-pulse">
              <Network className="w-16 h-16 text-primary" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-sm text-foreground mb-4 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span>Governance-First AI Infrastructure</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            <span className="block text-foreground">The Infrastructure Layer Behind</span>
            <span className="block text-gradient mt-2">Enterprise AI Transformation</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            O.N.E.Tech designs and deploys governance-first AI infrastructure that connects enterprise systems, workforce operations, decision intelligence and operational execution into a unified ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-accent text-white px-8 py-6 text-lg rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                Request Executive Briefing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/infrastructure">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5 px-8 py-6 text-lg rounded-lg">
                Explore Infrastructure Stack
                <Network className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Key Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Shield, label: "Governance-First", desc: "Built-in compliance & audit trails" },
              { icon: Network, label: "AI Orchestration", desc: "Intelligent workflow automation" },
              { icon: Zap, label: "Operational Intelligence", desc: "Real-time insights & predictions" }
            ].map((item, i) => (
              <div key={i} className="group relative rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 hover:border-primary/50 hover:bg-card/50 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="w-8 h-8 text-primary mb-3 mx-auto relative z-10" />
                <h3 className="font-semibold text-lg mb-2 relative z-10">{item.label}</h3>
                <p className="text-sm text-muted-foreground relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}