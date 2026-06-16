"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Eye, TrendingUp, Workflow } from "lucide-react";

const layers = [
  {
    id: 5,
    title: "Strategic Outcomes",
    items: ["Executive Visibility", "Operational Excellence", "Risk Reduction", "Performance Intelligence"],
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: 4,
    title: "Operational Intelligence",
    items: ["Predictive Insights", "Workforce Intelligence", "Risk Monitoring", "Business Intelligence"],
    color: "from-emerald-600 to-emerald-700"
  },
  {
    id: 3,
    title: "AI Governance Layer",
    items: ["Policies", "Human Approval Gates", "Audit Trails", "Role-Based Access", "Compliance Controls"],
    color: "from-emerald-700 to-emerald-800"
  },
  {
    id: 2,
    title: "Agentic Coordination Layer",
    items: ["AI Agents", "Workflow Intelligence", "Decision Routing", "Task Orchestration"],
    color: "from-emerald-800 to-emerald-900"
  },
  {
    id: 1,
    title: "Enterprise Systems",
    items: ["ERP", "CRM", "HR", "Operations", "Finance", "Trading Platforms"],
    color: "from-gray-800 to-gray-900"
  }
];

const governanceMetrics = [
  { label: "Policy Compliance", value: "99.8%", status: "active" },
  { label: "Human Oversight", value: "Active", status: "active" },
  { label: "Audit Trail", value: "Enabled", status: "active" },
  { label: "Risk Monitoring", value: "Active", status: "active" }
];

const executiveMetrics = [
  { icon: Shield, label: "Governance By Design" },
  { icon: TrendingUp, label: "Operational Intelligence" },
  { icon: Eye, label: "Executive Visibility" },
  { icon: Workflow, label: "AI Orchestration" },
  { icon: CheckCircle2, label: "Enterprise Scale" }
];

export function EnterpriseHero() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const [dataFlowActive, setDataFlowActive] = useState(true);
  const [networkNodes, setNetworkNodes] = useState<Array<{ x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    // Generate network topology nodes
    const nodes = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.3 + 0.1
    }));
    setNetworkNodes(nodes);
  }, []);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Premium Background - Network Topology */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        {/* Network nodes */}
        {networkNodes.map((node, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500 rounded-full animate-pulse"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              opacity: node.opacity,
              animationDelay: `${i * 0.2}s`,
              animationDuration: "3s"
            }}
          />
        ))}

        {/* Data streams */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-pulse"
              style={{
                top: `${(i + 1) * 12}%`,
                left: 0,
                right: 0,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "4s"
              }}
            />
          ))}
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[calc(100vh-16rem)]">
          
          {/* LEFT SIDE - Executive Messaging (40%) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                Governance-First AI Infrastructure
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The Operating System For{" "}
                <span className="text-gradient">Enterprise Intelligence</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                O.N.E.Tech transforms fragmented systems, workforce operations, governance frameworks and decision intelligence into a unified operational infrastructure.
              </p>

              <p className="text-lg text-foreground font-semibold">
                Enterprise organizations do not need more AI tools.
                <br />
                <span className="text-primary">They need operational control.</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="group w-full sm:w-auto">
                  Request Executive Briefing
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/infrastructure">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Infrastructure Stack
                </Button>
              </Link>
            </div>

            {/* Executive Metrics */}
            <div className="grid grid-cols-1 gap-3 pt-6">
              {executiveMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <Icon className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium">{metric.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE - Infrastructure Architecture Diagram (60%) */}
          <div className="lg:col-span-3">
            <div className="relative">
              
              {/* Live Governance Status */}
              <div className="absolute -top-6 right-0 z-20">
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-2xl">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-foreground tracking-wider uppercase">
                      Live Governance Status
                    </span>
                  </div>
                  <div className="space-y-2">
                    {governanceMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between gap-4 text-xs">
                        <span className="text-muted-foreground">{metric.label}</span>
                        <span className="font-bold text-emerald-500">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Architecture Diagram Container */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-2xl mt-12">
                
                {/* Layer Stack */}
                <div className="space-y-6">
                  {layers.map((layer, index) => (
                    <div key={layer.id} className="relative">
                      {/* Connection line to next layer */}
                      {index < layers.length - 1 && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full h-6 w-px">
                          <div className="h-full w-full bg-gradient-to-b from-emerald-500/50 to-transparent">
                            {dataFlowActive && (
                              <div
                                className="h-2 w-full bg-emerald-500 animate-pulse"
                                style={{
                                  animationDelay: `${index * 0.3}s`,
                                  animationDuration: "2s"
                                }}
                              />
                            )}
                          </div>
                        </div>
                      )}

                      {/* Layer Card */}
                      <div
                        className={`
                          relative group cursor-pointer
                          transition-all duration-300
                          ${hoveredLayer === layer.id ? "scale-105 z-10" : ""}
                        `}
                        onMouseEnter={() => setHoveredLayer(layer.id)}
                        onMouseLeave={() => setHoveredLayer(null)}
                      >
                        <div
                          className={`
                            relative bg-gradient-to-br ${layer.color}
                            rounded-xl p-5 border border-emerald-500/20
                            shadow-lg transition-all duration-300
                            ${hoveredLayer === layer.id ? "shadow-emerald-500/20 shadow-2xl" : ""}
                          `}
                        >
                          {/* Glow effect on hover */}
                          {hoveredLayer === layer.id && (
                            <div className="absolute inset-0 bg-emerald-500/10 rounded-xl animate-pulse" />
                          )}

                          <div className="relative z-10">
                            {/* Layer Header */}
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-emerald-400">
                                  LAYER {layer.id}
                                </span>
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                              </div>
                              {hoveredLayer === layer.id && (
                                <span className="text-xs text-emerald-300 animate-pulse">
                                  ACTIVE
                                </span>
                              )}
                            </div>

                            {/* Layer Title */}
                            <h3 className="text-lg font-bold text-white mb-3">
                              {layer.title}
                            </h3>

                            {/* Layer Capabilities */}
                            <div className="flex flex-wrap gap-2">
                              {layer.items.map((item, i) => (
                                <span
                                  key={i}
                                  className={`
                                    text-xs px-2 py-1 rounded
                                    bg-black/30 text-white/90
                                    transition-all duration-200
                                    ${hoveredLayer === layer.id ? "bg-black/50 text-white" : ""}
                                  `}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data Flow Indicator */}
                <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-border">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground">
                    Data flowing through infrastructure layers
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}