"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Building2, Zap, Eye, ArrowRight, Layers, ChevronUp } from "lucide-react";

const infrastructureLayers = [
  {
    number: "05",
    icon: Eye,
    title: "Executive Control Center",
    description: "Real-time visibility, governance oversight and strategic decision intelligence."
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Operational Intelligence Layer",
    description: "Predictive insights, risk detection, workforce intelligence and KPIs."
  },
  {
    number: "03",
    icon: Shield,
    title: "AI Governance Layer",
    description: "Policies, compliance, audit trails, human oversight and risk controls."
  },
  {
    number: "02",
    icon: Layers,
    title: "Agentic Coordination Layer",
    description: "AI agents, orchestration, workflow intelligence and decision routing."
  },
  {
    number: "01",
    icon: Building2,
    title: "Enterprise Systems Layer",
    description: "ERP, CRM, HR, Finance, Operations and external data sources."
  }
];

const capabilities = [
  { icon: Shield, label: "AI Governance" },
  { icon: TrendingUp, label: "Operational Intelligence" },
  { icon: Building2, label: "Sovereign Infrastructure" },
  { icon: Zap, label: "Enterprise Scale" },
  { icon: Eye, label: "Executive Control" }
];

const systems = [
  { label: "ERP", x: 10, y: 70 },
  { label: "CRM", x: 25, y: 85 },
  { label: "HR", x: 48, y: 88 },
  { label: "FINANCE", x: 68, y: 85 },
  { label: "OPERATIONS", x: 85, y: 75 }
];

export function EnterpriseHero() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,183,122,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,183,122,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative container mx-auto px-6">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 pt-32 pb-16">
          {/* Left side - Messaging */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">GOVERNANCE-FIRST BY DESIGN</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                The Infrastructure Layer<br />
                Behind Enterprise<br />
                <span className="text-primary">AI Transformation</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                O.N.E.Tech designs and deploys governance-first AI infrastructure that connects enterprise systems, workforce operations, decision intelligence and operational execution into a unified ecosystem.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Request Executive Briefing
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/infrastructure">
                <Button size="lg" variant="outline" className="gap-2">
                  Explore Infrastructure Stack
                  <Layers className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Capabilities */}
            <div className="flex flex-wrap gap-4 pt-4">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 border border-border/50">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground/80">{capability.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Infrastructure Layers Panel */}
          <div className="relative">
            <div className="sticky top-24 space-y-4">
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-4 rounded-t-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <h3 className="text-lg font-semibold text-primary">Enterprise Infrastructure Layers</h3>
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              </div>

              {/* Layers */}
              <div className="relative space-y-3 px-6 py-6 rounded-b-2xl bg-card/30 backdrop-blur-sm border border-t-0 border-border/50">
                {/* Vertical connection line */}
                <div className="absolute right-12 top-8 bottom-8 w-[2px] border-l-2 border-dashed border-primary/30" />
                
                {infrastructureLayers.map((layer, index) => {
                  const Icon = layer.icon;
                  const isActive = activeLayer === index;
                  
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setActiveLayer(index)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative group transition-all duration-300 ${
                        isActive ? 'scale-[1.02]' : ''
                      }`}
                    >
                      {/* Connection dot */}
                      <div className="absolute -right-[4.5rem] top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isActive ? 'bg-primary ring-4 ring-primary/20' : 'bg-primary/50'
                        }`} />
                        {index < infrastructureLayers.length - 1 && (
                          <svg className="w-4 h-4 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        )}
                      </div>

                      <div className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 ${
                        isActive 
                          ? 'bg-primary/5 border-primary/30' 
                          : 'bg-muted/20 border-border/30'
                      }`}>
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors duration-300 ${
                            isActive ? 'bg-primary/10' : 'bg-muted/50'
                          }`}>
                            <Icon className={`w-6 h-6 transition-colors duration-300 ${
                              isActive ? 'text-primary' : 'text-muted-foreground'
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground mb-1">{layer.title}</h4>
                            <p className="text-sm text-muted-foreground leading-snug">{layer.description}</p>
                          </div>
                        </div>
                        <span className="text-3xl font-bold text-muted-foreground/20">{layer.number}</span>
                      </div>

                      {index < infrastructureLayers.length - 1 && (
                        <div className="flex justify-center py-1">
                          <div className="w-px h-4 bg-gradient-to-b from-primary/30 to-transparent" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Bottom tagline */}
                <div className="text-center pt-4 text-sm text-muted-foreground space-x-2">
                  <span className="text-primary font-medium">Governed.</span>
                  <span className="text-primary font-medium">Orchestrated.</span>
                  <span className="text-primary font-medium">Intelligent.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Infrastructure Visualization */}
        <div className="relative h-64 mt-16 mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Labels */}
            <div className="absolute left-8 top-4 text-xs font-medium text-muted-foreground">SUPPLIERS</div>
            <div className="absolute right-8 top-4 text-xs font-medium text-muted-foreground">FIELD TEAMS</div>

            {/* Central hub */}
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
              <div className="absolute inset-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-4 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Building2 className="w-12 h-12 text-primary" />
              </div>
            </div>

            {/* System nodes */}
            {mounted && systems.map((system, index) => {
              const angle = (index / systems.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-300"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Connection line */}
                  <svg className="absolute inset-0 w-[400px] h-[400px] pointer-events-none" style={{ left: -x, top: -y }}>
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke="rgba(0,183,122,0.3)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                  
                  <div className="relative px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/30 text-xs font-medium text-foreground whitespace-nowrap">
                    {system.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust bar */}
        <div className="py-12 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by forward-thinking enterprises across GCC and beyond
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            <div className="text-2xl font-bold text-foreground/70">aramco</div>
            <div className="text-xl font-bold text-foreground/70">SDAIA</div>
            <div className="text-xl font-bold text-foreground/70">NEOM</div>
            <div className="text-xl font-bold text-foreground/70">EMAAR</div>
            <div className="text-xl font-bold text-foreground/70">Qiddiya</div>
          </div>
        </div>
      </div>
    </section>
  );
}