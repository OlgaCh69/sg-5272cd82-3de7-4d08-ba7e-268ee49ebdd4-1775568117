import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Droplet, Building, HardHat, Home, TrendingUp, DollarSign, Building2, Briefcase, ArrowRight } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      icon: Zap,
      name: "Energy",
      challenges: [
        "Distributed operations across facilities",
        "Regulatory compliance complexity",
        "Asset performance optimization",
        "Workforce coordination challenges"
      ],
      solution: "AI infrastructure for operational intelligence, predictive maintenance, compliance automation, and workforce orchestration across energy operations.",
      outcomes: [
        "Improved operational uptime",
        "Enhanced compliance posture",
        "Optimized asset performance",
        "Coordinated workforce operations"
      ]
    },
    {
      icon: Droplet,
      name: "Oil & Gas",
      challenges: [
        "Complex multi-site operations",
        "Safety and compliance requirements",
        "Supply chain coordination",
        "Operational data fragmentation"
      ],
      solution: "Governance-first AI systems for operational visibility, safety workflows, supply chain intelligence, and executive-level operational insight.",
      outcomes: [
        "Enhanced operational safety",
        "Improved supply chain efficiency",
        "Real-time operational visibility",
        "Risk mitigation frameworks"
      ]
    },
    {
      icon: Building,
      name: "Infrastructure",
      challenges: [
        "Project complexity and scale",
        "Stakeholder coordination",
        "Timeline and budget management",
        "Quality assurance processes"
      ],
      solution: "Enterprise orchestration for project workflows, stakeholder communication, progress tracking, and quality management systems.",
      outcomes: [
        "Accelerated project delivery",
        "Improved stakeholder coordination",
        "Enhanced quality outcomes",
        "Better budget control"
      ]
    },
    {
      icon: HardHat,
      name: "Construction & EPC",
      challenges: [
        "Multi-contractor coordination",
        "Document workflow complexity",
        "Safety compliance requirements",
        "Progress tracking across sites"
      ],
      solution: "AI infrastructure for contractor coordination, document automation, safety workflows, and real-time project intelligence.",
      outcomes: [
        "Streamlined contractor operations",
        "Faster document processing",
        "Improved safety compliance",
        "Enhanced project visibility"
      ]
    },
    {
      icon: Home,
      name: "Real Estate Development",
      challenges: [
        "Sales process inefficiencies",
        "Client communication gaps",
        "Document processing delays",
        "Portfolio visibility limitations"
      ],
      solution: "AI systems for sales automation, client journey orchestration, document workflows, and portfolio management intelligence.",
      outcomes: [
        "Accelerated sales cycles",
        "Improved client satisfaction",
        "Faster transaction closures",
        "Enhanced portfolio insights"
      ]
    },
    {
      icon: TrendingUp,
      name: "Financial Services",
      challenges: [
        "Client onboarding complexity",
        "Regulatory compliance burden",
        "Operational risk management",
        "Client communication gaps"
      ],
      solution: "Governance-first infrastructure for client lifecycle management, compliance automation, risk intelligence, and operational coordination.",
      outcomes: [
        "Faster client onboarding",
        "Enhanced compliance posture",
        "Reduced operational risk",
        "Improved client experience"
      ]
    },
    {
      icon: DollarSign,
      name: "Forex Brokerage",
      challenges: [
        "Client acquisition costs",
        "KYC and compliance complexity",
        "Client retention challenges",
        "Operational visibility gaps"
      ],
      solution: "Comprehensive forex infrastructure: client acquisition automation, compliance orchestration, retention intelligence, and executive operational dashboards.",
      outcomes: [
        "Reduced acquisition costs",
        "Accelerated KYC processing",
        "Improved client retention",
        "Enhanced operational insight"
      ]
    },
    {
      icon: Building2,
      name: "Government",
      challenges: [
        "Legacy system integration",
        "Process standardization needs",
        "Citizen service delivery",
        "Operational transparency requirements"
      ],
      solution: "Enterprise AI infrastructure for system integration, process automation, service delivery orchestration, and operational intelligence.",
      outcomes: [
        "Modernized operations",
        "Improved service delivery",
        "Enhanced transparency",
        "Better resource allocation"
      ]
    },
    {
      icon: Briefcase,
      name: "Enterprise Services",
      challenges: [
        "Multi-client coordination",
        "Service delivery consistency",
        "Resource allocation",
        "Performance visibility"
      ],
      solution: "AI orchestration for client management, service delivery workflows, resource optimization, and performance intelligence systems.",
      outcomes: [
        "Consistent service delivery",
        "Optimized resource utilization",
        "Improved client satisfaction",
        "Enhanced operational metrics"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Industries - O.N.E.Tech"
        description="Enterprise AI infrastructure solutions for Energy, Oil & Gas, Construction, Real Estate, Financial Services, Forex Brokerage, Government, and Enterprise Services across GCC and Cyprus."
        image="/og-image.png"
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative border-b border-border bg-background pt-32 pb-20">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                Industry-Specific Infrastructure
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Purpose-built AI infrastructure solutions for enterprise operations across strategic industries in GCC and Cyprus markets.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div 
                    key={index} 
                    className="group rounded-lg border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {industry.name}
                      </h2>
                    </div>

                    {/* Challenges */}
                    <div className="mb-6">
                      <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Industry Challenges
                      </h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div className="mb-6 rounded-lg bg-background/50 p-4">
                      <h3 className="mb-2 text-sm font-semibold text-primary uppercase tracking-wider">
                        Infrastructure Solution
                      </h3>
                      <p className="text-sm text-foreground leading-relaxed">
                        {industry.solution}
                      </p>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Strategic Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {industry.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-card/30 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Transform Your Industry Operations
              </h2>
              <p className="text-lg text-muted-foreground">
                Discuss how governance-first AI infrastructure can address your industry-specific operational challenges.
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Request Executive Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}