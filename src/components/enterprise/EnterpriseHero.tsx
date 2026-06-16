"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Eye, TrendingUp, Network, Database, ArrowRight, CheckCircle2 } from "lucide-react";

const layers = [
  {
    number: "05",
    title: "Strategic Outcomes",
    description: "Executive visibility, operational excellence, risk reduction",
    color: "from-emerald-500/20 to-emerald-600/30",
    capabilities: ["Executive Visibility", "Operational Excellence", "Risk Reduction", "Performance Intelligence"]
  },
  {
    number: "04",
    title: "Operational Intelligence",
    description: "Predictive insights, workforce intelligence, risk monitoring",
    color: "from-emerald-500/20 to-emerald-600/30",
    capabilities: ["Predictive Insights", "Workforce Intelligence", "Business Intelligence", "Risk Monitoring"]
  },
  {
    number: "03",
    title: "AI Governance Layer",
    description: "Policies, human approval gates, audit trails, compliance",
    color: "from-emerald-500/20 to-emerald-600/30",
    capabilities: ["Policies", "Human Approval Gates", "Audit Trails", "Compliance Controls"]
  },
  {
    number: "02",
    title: "Agentic Coordination",
    description: "AI agents, workflow intelligence, task orchestration",
    color: "from-emerald-500/20 to-emerald-600/30",
    capabilities: ["AI Agents", "Workflow Intelligence", "Task Orchestration", "Decision Routing"]
  },
  {
    number: "01",
    title: "Enterprise Systems",
    description: "ERP, CRM, HR, Operations, Finance, Trading Platforms",
    color: "from-emerald-500/20 to-emerald-600/30",
    capabilities: ["ERP", "CRM", "HR", "Operations", "Finance", "Trading Platforms"]
  }
];

const systems = [
  { name: "ERP", angle: 0 },
  { name: "CRM", angle: 72 },
  { name: "HR", angle: 144 },
  { name: "FINANCE", angle: 216 },
  { name: "OPERATIONS", angle: 288 }
];

export function EnterpriseHero() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,183,122,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,183,122,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left side - Messaging (40%) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl shadow-lg shadow-primary/10">
              <Shield className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary tracking-wide">GOVERNANCE-FIRST AI INFRASTRUCTURE</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              The Operating System
              <br />
              For <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary animate-gradient">Enterprise Intelligence</span>
            </h1>

            {/* Subheadline */}
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                O.N.E.Tech transforms fragmented systems, workforce operations, governance frameworks and decision intelligence into a unified operational infrastructure.
              </p>
              <p className="text-xl font-semibold text-foreground">
                Enterprise organizations do not need more AI tools.
                <br />
                <span className="text-primary">They need operational control.</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="group gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                  Request Executive Briefing
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/infrastructure">
                <Button size="lg" variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
                  View Infrastructure Stack
                  <Network className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Executive metrics */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                { icon: Shield, text: "Governance By Design" },
                { icon: TrendingUp, text: "Operational Intelligence" },
                { icon: Eye, text: "Executive Visibility" },
                { icon: Network, text: "AI Orchestration" },
                { icon: Database, text: "Enterprise Scale" }
              ].slice(0, 4).map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{metric.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Infrastructure Diagram (60%) */}
          <div className="lg:col-span-3 relative">
            {/* Live Governance Status */}
            <div className="absolute -top-6 right-0 z-20">
              <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-primary/20 shadow-2xl shadow-primary/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Live Governance Status</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Policy Compliance", value: "99.8%" },
                    { label: "Human Oversight", value: "Active" },
                    { label: "Audit Trail", value: "Enabled" },
                    { label: "Risk Monitoring", value: "Active" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between gap-4 text-xs">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-semibold text-primary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Infrastructure Layers Panel */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card/40 to-muted/20 backdrop-blur-2xl border border-border/30 shadow-2xl">
              <div className="space-y-3">
                {layers.map((layer, index) => {
                  const isActive = activeLayer === index;
                  
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setActiveLayer(index)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`group relative transition-all duration-500 ${
                        isActive ? 'scale-[1.02] z-10' : 'scale-100'
                      }`}
                    >
                      {/* Glow effect */}
                      {isActive && (
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-2xl blur-xl" />
                      )}

                      <div className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                        isActive 
                          ? `border-primary/50 bg-gradient-to-br ${layer.color} shadow-xl shadow-primary/20` 
                          : 'border-border/20 bg-muted/10 hover:border-primary/30'
                      }`}>
                        <div className="flex items-center gap-6">
                          {/* Number */}
                          <div className={`text-5xl font-bold transition-all duration-300 ${
                            isActive ? 'text-primary' : 'text-muted-foreground/20'
                          }`}>
                            {layer.number}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-foreground mb-1">{layer.title}</h3>
                            <p className="text-sm text-muted-foreground">{layer.description}</p>
                            
                            {/* Capabilities - revealed on hover */}
                            <div className={`grid grid-cols-2 gap-2 mt-3 transition-all duration-300 overflow-hidden ${
                              isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                              {layer.capabilities.map((capability, capIndex) => (
                                <div key={capIndex} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                  <CheckCircle2 className="w-3 h-3 text-primary" />
                                  <span>{capability}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Connection dot */}
                          <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            isActive ? 'bg-primary shadow-lg shadow-primary/50' : 'bg-border'
                          }`} />
                        </div>
                      </div>

                      {/* Vertical connection line */}
                      {index < layers.length - 1 && (
                        <div className="absolute -bottom-3 right-[23px] w-0.5 h-6 bg-gradient-to-b from-primary/50 to-transparent" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Data flow indicator */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
                <span className="text-xs">Data flowing through infrastructure layers</span>
              </div>
            </div>

            {/* 3D Infrastructure Visualization */}
            <div className="mt-12 relative h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central hub */}
                <div className="relative">
                  {/* Pulsing rings */}
                  {[0, 1, 2].map((ring) => (
                    <div
                      key={ring}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 animate-ping"
                      style={{
                        width: `${80 + ring * 40}px`,
                        height: `${80 + ring * 40}px`,
                        animationDuration: `${3 + ring}s`,
                        animationDelay: `${ring * 0.5}s`
                      }}
                    />
                  ))}
                  
                  {/* Central node */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center shadow-2xl shadow-primary/50">
                    <Network className="w-10 h-10 text-white animate-pulse" />
                  </div>
                </div>

                {/* Connected systems */}
                {systems.map((system, index) => {
                  const radius = 140;
                  const angle = (system.angle * Math.PI) / 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div key={index}>
                      {/* Connection line */}
                      <svg
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
                        style={{ zIndex: 1 }}
                      >
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`calc(50% + ${x}px)`}
                          y2={`calc(50% + ${y}px)`}
                          stroke="rgba(0, 183, 122, 0.3)"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                          className="animate-pulse"
                          style={{ animationDelay: `${index * 0.3}s` }}
                        />
                      </svg>

                      {/* System node */}
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
                        style={{
                          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                          zIndex: 10
                        }}
                      >
                        <div className="px-4 py-2 rounded-lg bg-muted/80 backdrop-blur-sm border border-primary/30 shadow-lg hover:border-primary hover:shadow-primary/30 transition-all">
                          <span className="text-xs font-bold text-primary whitespace-nowrap">{system.name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Supporting labels */}
              <div className="absolute -bottom-2 left-0 px-3 py-1 rounded-lg bg-muted/60 backdrop-blur-sm border border-border/30">
                <span className="text-xs text-muted-foreground">SUPPLIERS</span>
              </div>
              <div className="absolute -bottom-2 right-0 px-3 py-1 rounded-lg bg-muted/60 backdrop-blur-sm border border-border/30">
                <span className="text-xs text-muted-foreground">FIELD TEAMS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-20 pt-12 border-t border-border/30">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by forward-thinking enterprises across GCC and beyond
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {["aramco", "SDAIA", "NEOM", "EMAAR", "Qiddiya"].map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-muted-foreground hover:text-primary transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}