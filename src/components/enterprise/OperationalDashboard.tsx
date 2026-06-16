"use client";

import { useState, useEffect } from "react";
import { Activity, AlertTriangle, CheckCircle2, TrendingUp, Users, Shield, Clock, Zap } from "lucide-react";

export function OperationalDashboard() {
  const [metrics, setMetrics] = useState({
    activeOps: 127,
    riskAlerts: 3,
    workforce: 94,
    compliance: 99.2
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeOps: prev.activeOps + Math.floor(Math.random() * 3 - 1),
        riskAlerts: Math.max(0, prev.riskAlerts + Math.floor(Math.random() * 2 - 1)),
        workforce: Math.min(100, Math.max(85, prev.workforce + Math.floor(Math.random() * 3 - 1))),
        compliance: Math.min(100, Math.max(95, prev.compliance + (Math.random() * 0.2 - 0.1)))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 border-t border-border bg-gradient-to-b from-card/30 to-background">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Operational </span>
              <span className="text-gradient">Command Center</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time visibility into your entire enterprise ecosystem
            </p>
          </div>

          {/* Dashboard Interface */}
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-xl p-8 shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Enterprise Dashboard</h3>
                <p className="text-sm text-muted-foreground mt-1">Live operational intelligence</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Live</span>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="rounded-lg border border-border bg-background/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <span className="text-xs text-muted-foreground">Real-time</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{metrics.activeOps}</div>
                <div className="text-sm text-muted-foreground">Active Operations</div>
              </div>

              <div className="rounded-lg border border-border bg-background/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <span className="text-xs text-muted-foreground">Alerts</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{metrics.riskAlerts}</div>
                <div className="text-sm text-muted-foreground">Risk Alerts</div>
              </div>

              <div className="rounded-lg border border-border bg-background/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground">Efficiency</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{metrics.workforce}%</div>
                <div className="text-sm text-muted-foreground">Workforce Status</div>
              </div>

              <div className="rounded-lg border border-border bg-background/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground">Governance</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{metrics.compliance.toFixed(1)}%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">AI Recommendations</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Optimize approval workflow in Finance - reduce cycle time by 23%
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Deploy multilingual support agent for MENA market expansion
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Schedule governance review for new trading infrastructure
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Live Operations</h4>
              {[
                { icon: CheckCircle2, text: "Invoice #INV-2847 approved via governance workflow", time: "2m ago", color: "text-primary" },
                { icon: Users, text: "32 customer inquiries routed to AI agents", time: "5m ago", color: "text-blue-400" },
                { icon: Shield, text: "Compliance audit trail generated for Q2", time: "12m ago", color: "text-primary" },
                { icon: TrendingUp, text: "Revenue pipeline updated - 8 new opportunities", time: "18m ago", color: "text-green-400" },
                { icon: Clock, text: "Scheduled: Executive intelligence briefing", time: "25m ago", color: "text-yellow-400" }
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors">
                  <activity.icon className={`w-5 h-5 ${activity.color}`} />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{activity.text}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O.N.E.Tech provides <span className="text-primary font-semibold">executive-level visibility</span> into all AI-powered operations, ensuring governance and control at enterprise scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}