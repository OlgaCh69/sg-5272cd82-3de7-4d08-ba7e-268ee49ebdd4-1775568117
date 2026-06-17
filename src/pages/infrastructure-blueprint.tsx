"use client";

import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Download, 
  CheckCircle2, 
  Building2, 
  Shield, 
  Network, 
  Target, 
  TrendingUp,
  ArrowRight,
  FileText,
  Lock
} from "lucide-react";
import Link from "next/link";

export default function InfrastructureBlueprintPage() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && company) {
      setSubmitted(true);
      // In production, this would trigger actual download and CRM integration
    }
  };

  return (
    <>
      <SEO
        title="Infrastructure Blueprint | O.N.E.Tech"
        description="Download the complete Enterprise AI Infrastructure Blueprint. Learn how to design governance-first AI infrastructure for operational excellence."
      />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          
          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">STRATEGIC RESOURCE</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold">
                    Enterprise AI
                    <br />
                    Infrastructure
                    <br />
                    <span className="text-primary">Blueprint</span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    The complete framework for designing governance-first AI infrastructure
                    that transforms operational fragmentation into intelligent ecosystems.
                  </p>

                  {/* What's Included */}
                  <div className="space-y-3 pt-4">
                    {[
                      "5-Layer Infrastructure Architecture",
                      "Governance Framework Design",
                      "Operational Intelligence Methodology",
                      "Agentic Coordination Patterns",
                      "Executive Control Implementation",
                      "Industry-Specific Adaptations"
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Download Form */}
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-muted/10 p-8 lg:p-10">
                  {!submitted ? (
                    <form onSubmit={handleDownload} className="space-y-6">
                      <div className="text-center space-y-2">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-2">
                          <Download className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Download Blueprint</h3>
                        <p className="text-sm text-muted-foreground">
                          Enter your details to receive instant access
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Company Name</label>
                          <Input
                            type="text"
                            placeholder="Your company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                            className="bg-background/50"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">Business Email</label>
                          <Input
                            type="email"
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-background/50"
                          />
                        </div>

                        <Button type="submit" className="w-full gap-2">
                          <Download className="w-4 h-4" />
                          Download Blueprint
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                          By downloading, you agree to receive occasional updates about
                          enterprise AI infrastructure from O.N.E.Tech
                        </p>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center space-y-6 py-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Blueprint Sent!</h3>
                        <p className="text-muted-foreground">
                          Check your inbox at <span className="text-foreground font-medium">{email}</span>
                        </p>
                      </div>

                      <div className="pt-4 space-y-3">
                        <Button asChild className="w-full gap-2">
                          <Link href="/contact">
                            Book Executive Briefing
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full gap-2">
                          <Link href="/enterprise-ai-architecture">
                            Explore Architecture
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blueprint Sections Preview */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">What's Inside The Blueprint</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A comprehensive framework covering every layer of enterprise AI infrastructure design
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Building2,
                    title: "Enterprise Systems Integration",
                    desc: "How to connect ERP, CRM, HR, Finance, and Operations into a unified intelligent layer"
                  },
                  {
                    icon: Network,
                    title: "Agentic Coordination",
                    desc: "Design patterns for AI agents that orchestrate work across departments and systems"
                  },
                  {
                    icon: Shield,
                    title: "Governance Framework",
                    desc: "Policy enforcement, audit trails, human oversight, and risk controls architecture"
                  },
                  {
                    icon: Target,
                    title: "Operational Intelligence",
                    desc: "Transform operational data into predictive insights and executive decision support"
                  },
                  {
                    icon: TrendingUp,
                    title: "Executive Control Center",
                    desc: "Real-time visibility dashboards and strategic command interfaces"
                  },
                  {
                    icon: Lock,
                    title: "Trust & Compliance",
                    desc: "Data protection, role-based access, auditability, and regulatory readiness"
                  }
                ].map((section) => (
                  <div
                    key={section.title}
                    className="rounded-xl border border-border/30 bg-gradient-to-br from-muted/10 to-background p-6 hover:border-primary/30 transition-all"
                  >
                    <section.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                    <p className="text-sm text-muted-foreground">{section.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="relative py-20 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">Industry-Specific Guidance</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Tailored implementation approaches for different enterprise contexts
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    industry: "Energy & Oil/Gas",
                    applications: [
                      "Asset health monitoring and predictive maintenance",
                      "Field workforce coordination and safety compliance",
                      "Permit workflow automation and regulatory tracking",
                      "Incident response orchestration"
                    ]
                  },
                  {
                    industry: "Infrastructure & Construction",
                    applications: [
                      "Multi-project portfolio intelligence",
                      "Workforce deployment optimization",
                      "Issue resolution routing and escalation",
                      "Budget variance detection and alerts"
                    ]
                  },
                  {
                    industry: "Real Estate",
                    applications: [
                      "Lead qualification and intent scoring",
                      "Multi-property portfolio management",
                      "Buyer journey orchestration",
                      "Viewing request automation"
                    ]
                  },
                  {
                    industry: "Financial Services & Forex",
                    applications: [
                      "Client lifecycle automation and retention",
                      "FTD pipeline visibility and conversion",
                      "Compliance workflow orchestration",
                      "Risk detection and executive alerts"
                    ]
                  }
                ].map((item) => (
                  <div
                    key={item.industry}
                    className="rounded-xl border border-border/30 bg-gradient-to-br from-background to-muted/10 p-8"
                  >
                    <h3 className="text-xl font-bold mb-4 text-primary">{item.industry}</h3>
                    <ul className="space-y-3">
                      {item.applications.map((app) => (
                        <li key={app} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-muted/20 p-12 text-center space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Ready To Design Your Infrastructure?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Schedule an executive briefing to discuss your operational infrastructure roadmap
                  and governance requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      Book Executive Briefing
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <Link href="/assessment">
                      Take Infrastructure Assessment
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}