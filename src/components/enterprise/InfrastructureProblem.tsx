"use client";

import { useState, useEffect } from "react";
import { Database, Users, TrendingUp, Shield, Network, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export function InfrastructureProblem() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsConnected(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const systems = [
    { icon: Database, label: "ERP", color: "text-blue-400" },
    { icon: Users, label: "CRM", color: "text-purple-400" },
    { icon: TrendingUp, label: "Finance", color: "text-green-400" },
    { icon: Shield, label: "HR", color: "text-yellow-400" },
    { icon: Network, label: "Operations", color: "text-red-400" },
    { icon: Zap, label: "Field Teams", color: "text-cyan-400" }
  ];

  const outcomes = [
    { icon: CheckCircle2, label: "Visibility", desc: "360° operational view" },
    { icon: Shield, label: "Governance", desc: "Policy enforcement" },
    { icon: Network, label: "Automation", desc: "Intelligent workflows" },
    { icon: TrendingUp, label: "Intelligence", desc: "Predictive insights" }
  ];

  return (
    <section className="relative py-32 border-t border-border bg-gradient-to-b from-background to-card/30">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Enterprise AI Is Not A </span>
              <span className="text-gradient">Tool Problem</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              It Is An <span className="text-primary font-semibold">Infrastructure Problem</span>
            </p>
          </div>

          {/* Disconnected State */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-500
                ${!isConnected ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-muted/30 text-muted-foreground border border-border'}`}>
                {!isConnected ? 'Disconnected Systems' : 'Before O.N.E.Tech'}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {systems.map((system, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl border backdrop-blur-sm p-6 text-center transition-all duration-700
                    ${!isConnected ? 'border-border bg-card/30' : 'border-primary/30 bg-primary/5'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <system.icon className={`w-12 h-12 mx-auto mb-3 transition-colors duration-500 ${!isConnected ? system.color : 'text-primary'}`} />
                  <div className="font-semibold">{system.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">Isolated</div>
                </div>
              ))}
            </div>
          </div>

          {/* O.N.E.Tech Infrastructure Layer Animation */}
          <div className="relative mb-20">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent transform -translate-x-1/2">
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000
                ${isConnected ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="relative">
                  <div className="w-64 h-16 rounded-lg border-2 border-primary bg-primary/10 backdrop-blur-md flex items-center justify-center">
                    <Network className="w-8 h-8 text-primary mr-3" />
                    <div className="text-left">
                      <div className="text-sm font-bold text-primary">O.N.E.Tech</div>
                      <div className="text-xs text-muted-foreground">Infrastructure Layer</div>
                    </div>
                  </div>
                  
                  {/* Radiating Connection Lines */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <div
                      key={i}
                      className={`absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-primary to-transparent origin-left transition-all duration-1000
                        ${isConnected ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                      style={{
                        transform: `rotate(${angle}deg)`,
                        transitionDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="py-12">
              <ArrowRight className={`w-8 h-8 text-primary mx-auto transition-all duration-500
                ${isConnected ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} />
            </div>
          </div>

          {/* Connected State - Outcomes */}
          <div>
            <div className="text-center mb-8">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-500
                ${isConnected ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-muted/30 text-muted-foreground border border-border'}`}>
                {isConnected ? 'Unified Ecosystem' : 'After O.N.E.Tech'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm p-6 text-center transition-all duration-700
                    ${isConnected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <outcome.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-semibold text-lg mb-2">{outcome.label}</div>
                  <div className="text-sm text-muted-foreground">{outcome.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <div className={`mt-16 text-center transition-all duration-1000 ${isConnected ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              O.N.E.Tech connects your enterprise systems, workforce operations, and decision intelligence into a <span className="text-primary font-semibold">governed, unified operational ecosystem</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}