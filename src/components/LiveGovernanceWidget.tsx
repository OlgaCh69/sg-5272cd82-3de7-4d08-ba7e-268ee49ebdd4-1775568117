"use client";

import { useState, useEffect } from "react";
import { Shield, CheckCircle2, Eye, Activity, Lock } from "lucide-react";

export function LiveGovernanceWidget() {
  const [compliance, setCompliance] = useState(99.8);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Subtle compliance fluctuation
    const interval = setInterval(() => {
      setCompliance(prev => {
        const change = (Math.random() - 0.5) * 0.1;
        const newValue = prev + change;
        return Math.max(99.5, Math.min(99.9, newValue));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const indicators = [
    { icon: Shield, label: "Policy Compliance", value: `${compliance.toFixed(1)}%`, status: "active" },
    { icon: Eye, label: "Human Oversight", value: "Active", status: "active" },
    { icon: CheckCircle2, label: "Audit Trail", value: "Enabled", status: "active" },
    { icon: Activity, label: "Risk Monitoring", value: "Active", status: "active" },
    { icon: Lock, label: "Data Residency", value: "Secured", status: "active" }
  ];

  return (
    <div className="fixed top-24 right-6 z-50 w-80 animate-in slide-in-from-right duration-500">
      <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-background/95 to-muted/95 backdrop-blur-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/30">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Shield className="w-4 h-4 text-primary" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            <span className="text-sm font-semibold text-foreground">Live Governance Status</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>

        {/* Indicators */}
        <div className="p-4 space-y-3">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-lg bg-muted/20 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80">{indicator.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-primary">{indicator.value}</span>
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-border/30 bg-muted/10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Infrastructure Health</span>
            <span className="text-primary font-semibold">Optimal</span>
          </div>
        </div>
      </div>
    </div>
  );
}