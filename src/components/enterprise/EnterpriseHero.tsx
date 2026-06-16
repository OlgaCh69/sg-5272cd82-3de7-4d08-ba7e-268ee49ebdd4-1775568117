"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Building2, Network, Eye, ArrowRight, Layers } from "lucide-react";

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
    icon: Network,
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
  { icon: Network, label: "Enterprise Scale" },
  { icon: Eye, label: "Executive Control" }
];

export function EnterpriseHero() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,183,122,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,183,122,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A]" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Main hero content */}
        <div className="grid lg:grid-cols-5 gap-12 pt-32 pb-20">
          {/* Left side - Messaging (3 columns) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide">GOVERNANCE-FIRST BY DESIGN</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                The Infrastructure Layer<br />
                Behind Enterprise<br />
                <span className="text-primary">AI Transformation</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                O.N.E.Tech designs and deploys governance-first AI infrastructure that connects enterprise systems, workforce operations, decision intelligence and operational execution into a unified ecosystem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90">
                  Request Executive Briefing
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/infrastructure">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-border/50 hover:border-primary/50">
                  Explore Infrastructure Stack
                  <Layers className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Capabilities badges */}
            <div className="flex flex-wrap gap-3 pt-6">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/20 border border-border/30">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground/90">{capability.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Infrastructure Layers Panel (2 columns) */}
          <div className="lg:col-span-3">
            <div className="max-w-2xl ml-auto">
              {/* Panel container */}
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-muted/10 to-muted/5 backdrop-blur-xl shadow-2xl">
                {/* Panel header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border/30">
                  <h3 className="text-lg font-semibold text-primary">Enterprise Infrastructure Layers</h3>
                  <div className="w-6 h-6 rounded border border-border/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary/50" />
                  </div>
                </div>

                {/* Layers list */}
                <div className="relative p-6">
                  {/* Vertical dashed line on the right */}
                  <div className="absolute right-12 top-8 bottom-8 w-px">
                    <div className="w-full h-full border-r-2 border-dashed border-primary/20" />
                  </div>

                  <div className="space-y-4">
                    {infrastructureLayers.map((layer, index) => {
                      const Icon = layer.icon;
                      const isActive = activeLayer === index;
                      
                      return (
                        <div
                          key={index}
                          onMouseEnter={() => setActiveLayer(index)}
                          onMouseLeave={() => setActiveLayer(null)}
                          className="relative group"
                        >
                          {/* Connection dot */}
                          <div className="absolute -right-[3.25rem] top-1/2 -translate-y-1/2">
                            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              isActive 
                                ? 'bg-primary ring-4 ring-primary/30 scale-125' 
                                : 'bg-primary/40 group-hover:bg-primary/60'
                            }`} />
                          </div>

                          {/* Layer card */}
                          <div className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                            isActive 
                              ? 'bg-primary/10 border border-primary/30 shadow-lg shadow-primary/10' 
                              : 'bg-muted/10 border border-transparent hover:border-border/50'
                          }`}>
                            {/* Icon */}
                            <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                              isActive ? 'bg-primary/20 scale-110' : 'bg-muted/30'
                            }`}>
                              <Icon className={`w-5 h-5 transition-colors duration-300 ${
                                isActive ? 'text-primary' : 'text-muted-foreground'
                              }`} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-foreground mb-1 leading-tight">{layer.title}</h4>
                              <p className="text-sm text-muted-foreground leading-snug">{layer.description}</p>
                            </div>

                            {/* Number */}
                            <div className={`text-4xl font-bold transition-colors duration-300 ${
                              isActive ? 'text-primary/30' : 'text-muted-foreground/20'
                            }`}>
                              {layer.number}
                            </div>
                          </div>

                          {/* Arrow between layers */}
                          {index < infrastructureLayers.length - 1 && (
                            <div className="absolute -right-[3rem] top-full w-4 h-4 flex items-center justify-center">
                              <svg className="w-3 h-3 text-primary/30" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom tagline */}
                  <div className="text-center pt-6 text-sm space-x-1">
                    <span className="text-primary font-semibold">Governed.</span>
                    <span className="text-primary font-semibold">Orchestrated.</span>
                    <span className="text-primary font-semibold">Intelligent.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Infrastructure Visualization */}
        <div className="relative py-20">
          {/* Labels */}
          <div className="absolute left-12 top-12 text-xs font-medium text-primary tracking-wider">SUPPLIERS</div>
          <div className="absolute right-12 top-12 text-xs font-medium text-primary tracking-wider">FIELD TEAMS</div>

          <div className="relative h-80 flex items-center justify-center">
            {/* Central hub with animated rings */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Animated rings */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-primary/20"
                  style={{
                    animation: `pulse 3s ease-in-out infinite`,
                    animationDelay: `${i * 1}s`,
                    transform: `scale(${1 + i * 0.3})`
                  }}
                />
              ))}
              
              {/* Center icon */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                <Building2 className="w-10 h-10 text-primary" />
              </div>
            </div>

            {/* System nodes arranged in circle */}
            {mounted && ["ERP", "CRM", "HR", "FINANCE", "OPERATIONS"].map((system, index) => {
              const angle = (index / 5) * Math.PI * 2 - Math.PI / 2;
              const radius = 220;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div key={index}>
                  {/* Connection line */}
                  <svg 
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      width: Math.abs(x) * 2 + 100,
                      height: Math.abs(y) * 2 + 100,
                      transform: `translate(-50%, -50%)`
                    }}
                  >
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke="rgba(0,183,122,0.4)"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      className="animate-pulse"
                    />
                  </svg>

                  {/* System node */}
                  <div
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="px-5 py-2.5 rounded-lg bg-gradient-to-br from-muted/40 to-muted/20 border border-primary/30 backdrop-blur-sm">
                      <div className="text-sm font-semibold text-foreground tracking-wide whitespace-nowrap">
                        {system}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust bar */}
        <div className="py-16 border-t border-border/30">
          <p className="text-center text-sm text-muted-foreground mb-10">
            Trusted by forward-thinking enterprises across GCC and beyond
          </p>
          <div className="flex flex-wrap items-center justify-center gap-16 opacity-40">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">aramco</div>
              <div className="text-xs text-muted-foreground mt-1">Saudi Aramco</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">SDAIA</div>
              <div className="text-xs text-muted-foreground mt-1">Saudi Data & AI Authority</div>
            </div>
            <div className="text-2xl font-bold">NEOM</div>
            <div className="text-2xl font-bold">EMAAR</div>
            <div className="text-xl font-bold">Qiddiya</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}