"use client";

import { useState } from "react";
import { Cloud, Database, Shield, Zap, Brain, Mic } from "lucide-react";

export function TechnologyEcosystem() {
  const technologies = [
    {
      name: "OpenAI",
      role: "Enterprise AI Intelligence",
      icon: Brain,
      category: "AI"
    },
    {
      name: "Anthropic",
      role: "Advanced Reasoning & AI Safety",
      icon: Shield,
      category: "AI"
    },
    {
      name: "Microsoft Azure",
      role: "Cloud Infrastructure",
      icon: Cloud,
      category: "Cloud"
    },
    {
      name: "Amazon Web Services",
      role: "Scalable Enterprise Compute",
      icon: Cloud,
      category: "Cloud"
    },
    {
      name: "Google Cloud",
      role: "Data & AI Services",
      icon: Cloud,
      category: "Cloud"
    },
    {
      name: "Deepgram",
      role: "Speech Intelligence",
      icon: Mic,
      category: "AI"
    },
    {
      name: "Supabase",
      role: "Data Infrastructure & Memory Layer",
      icon: Database,
      category: "Data"
    }
  ];

  return (
    <section className="relative py-32 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Enterprise Technology <span className="text-primary">Ecosystem</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Powered by leading technology platforms and infrastructure providers trusted by organizations worldwide.
            </p>
          </div>

          {/* Architecture Flow */}
          <div className="relative">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent animate-pulse" />
              </div>
            </div>

            {/* Flow Diagram */}
            <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-background/50 to-muted/20 backdrop-blur-sm p-12">
              <div className="flex flex-col items-center gap-6">
                {/* Layer 1 */}
                <div className="w-full max-w-2xl text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                    <Cloud className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Technology Ecosystem</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-primary/20" />
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Layer 2 */}
                <div className="w-full max-w-2xl text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-semibold">O.N.E.Tech Governance Layer</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-primary/20" />
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Layer 3 */}
                <div className="w-full max-w-2xl text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Operational Intelligence Layer</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-primary/20" />
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Layer 4 */}
                <div className="w-full max-w-2xl text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Enterprise Operations</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-primary/20" />
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Layer 5 */}
                <div className="w-full max-w-2xl text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Executive Control Center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group rounded-xl border border-border/30 bg-gradient-to-br from-muted/10 to-background p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <tech.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {tech.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Messaging */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                "Enterprise-grade technology",
                "Governed by design",
                "Built for scale",
                "Designed for operational intelligence"
              ].map((message) => (
                <div
                  key={message}
                  className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3"
                >
                  <p className="text-sm font-medium text-primary">{message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}