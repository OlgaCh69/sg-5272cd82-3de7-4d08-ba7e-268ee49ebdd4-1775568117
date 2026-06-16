"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Building, Home, TrendingUp, Globe, Landmark, ArrowRight, ChevronRight } from "lucide-react";

const industries = [
  {
    icon: Zap,
    name: "Energy & Oil/Gas",
    challenges: "Complex operations, regulatory compliance, multi-site coordination",
    outcome: "Unified operational intelligence across production, distribution, and compliance",
    systems: ["ERP", "SCADA", "HSE"]
  },
  {
    icon: Building,
    name: "Infrastructure & Construction",
    challenges: "Project delays, resource coordination, quality control",
    outcome: "Real-time project intelligence and automated compliance workflows",
    systems: ["Project Mgmt", "Field Ops", "QC"]
  },
  {
    icon: Home,
    name: "Real Estate Development",
    challenges: "Client management, sales coordination, property operations",
    outcome: "Intelligent CRM, automated follow-ups, operational dashboards",
    systems: ["CRM", "Sales", "Property"]
  },
  {
    icon: TrendingUp,
    name: "Financial Services",
    challenges: "Client onboarding, compliance documentation, service delivery",
    outcome: "Governance-first automation with full audit trails",
    systems: ["Core Banking", "KYC", "Audit"]
  },
  {
    icon: Globe,
    name: "Forex Brokerage",
    challenges: "Client acquisition, KYC/AML compliance, retention, operational visibility",
    outcome: "End-to-end client lifecycle automation with regulatory compliance",
    systems: ["Trading", "CRM", "Compliance"]
  },
  {
    icon: Landmark,
    name: "Government & Enterprise",
    challenges: "Siloed departments, manual processes, limited visibility",
    outcome: "Integrated operational ecosystems with governance controls",
    systems: ["ERP", "HR", "Operations"]
  }
];

export function IndustriesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
      
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">INDUSTRY EXPERTISE</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold">
            Built For <span className="text-primary">GCC & Cyprus Industries</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deep industry expertise meeting regional operational requirements and regulatory frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative transition-all duration-500 ${
                  isHovered ? 'scale-105 z-10' : 'scale-100'
                }`}
              >
                {/* Glow effect */}
                {isHovered && (
                  <div className="absolute -inset-2 bg-primary/10 rounded-2xl blur-2xl" />
                )}

                <div className={`relative h-full rounded-2xl border transition-all duration-300 ${
                  isHovered 
                    ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-muted/30 shadow-2xl shadow-primary/20' 
                    : 'border-border/30 bg-gradient-to-br from-muted/5 to-background hover:border-primary/30'
                }`}>
                  <div className="p-8 space-y-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHovered 
                        ? 'bg-primary/20 scale-110' 
                        : 'bg-muted/30 group-hover:bg-primary/10'
                    }`}>
                      <Icon className={`w-8 h-8 transition-all duration-300 ${
                        isHovered ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                      }`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground">{industry.name}</h3>

                    {/* Challenges */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-destructive/80 uppercase tracking-wide">Challenges</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{industry.challenges}</p>
                    </div>

                    {/* Infrastructure diagram - revealed on hover */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-3 pt-3 border-t border-border/30">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide">Infrastructure Layer</p>
                        <div className="flex items-center gap-2">
                          {industry.systems.map((system, sysIndex) => (
                            <div key={sysIndex} className="flex items-center gap-1">
                              <div className="px-2 py-1 rounded bg-primary/10 border border-primary/20">
                                <span className="text-xs text-primary font-medium">{system}</span>
                              </div>
                              {sysIndex < industry.systems.length - 1 && (
                                <ChevronRight className="w-3 h-3 text-primary/50" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide">Expected Outcome</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{industry.outcome}</p>
                    </div>

                    {/* Arrow indicator */}
                    <div className={`flex items-center text-primary font-medium transition-all duration-300 ${
                      isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
                    }`}>
                      <span className="text-sm">View industry details</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/industries">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              View All Industries
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}