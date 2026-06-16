"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, TrendingUp, Home, DollarSign, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Building2,
    title: "Operational Infrastructure",
    description: "Enterprise orchestration systems for large-scale operations",
    features: ["Workflow Intelligence", "Process Automation", "System Integration"]
  },
  {
    icon: TrendingUp,
    title: "Revenue Infrastructure",
    description: "AI-powered revenue operations and pipeline visibility",
    features: ["Lead Intelligence", "Sales Automation", "Pipeline Analytics"]
  },
  {
    icon: Home,
    title: "Real Estate Infrastructure",
    description: "AI systems for developers, brokers and property operations",
    features: ["Property Intelligence", "Client Management", "Transaction Automation"]
  },
  {
    icon: DollarSign,
    title: "Forex Infrastructure",
    description: "Governance-first AI for forex brokers and trading operations",
    features: ["Client Lifecycle", "Compliance Workflows", "Retention Intelligence"]
  },
  {
    icon: Users,
    title: "Workforce Intelligence",
    description: "Multilingual workforce support and operational coordination",
    features: ["Knowledge Access", "Support Automation", "Team Coordination"]
  }
];

export function SolutionsPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">INFRASTRUCTURE SOLUTIONS</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold">
            Enterprise
            <br />
            <span className="text-primary">Infrastructure Portfolio</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
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

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                    </div>

                    {/* Features - revealed on hover */}
                    <div className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      isHovered ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="h-px bg-border/30" />
                      {solution.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow indicator */}
                    <div className={`flex items-center text-primary font-medium transition-all duration-300 ${
                      isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
                    }`}>
                      <span className="text-sm">Explore solution</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/solutions">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              View All Solutions
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}