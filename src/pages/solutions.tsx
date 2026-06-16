import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Home, DollarSign, Users, ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: "Operational Infrastructure",
      description: "Enterprise orchestration systems for large-scale operations. Transform siloed departments into coordinated operational ecosystems.",
      features: [
        "Workflow intelligence and task orchestration",
        "Decision routing across departments",
        "Governance and approval frameworks",
        "Real-time operational visibility"
      ],
      outcomes: [
        "Reduced operational friction",
        "Faster execution cycles",
        "Improved compliance posture",
        "Executive-level operational insight"
      ]
    },
    {
      icon: TrendingUp,
      title: "Revenue Infrastructure",
      description: "AI-powered revenue operations, lead intelligence, sales automation and pipeline visibility for enterprise growth.",
      features: [
        "Lead scoring and qualification AI",
        "Sales process automation",
        "Pipeline intelligence and forecasting",
        "Revenue operations analytics"
      ],
      outcomes: [
        "Accelerated sales cycles",
        "Improved conversion rates",
        "Enhanced forecast accuracy",
        "Revenue operations efficiency"
      ]
    },
    {
      icon: Home,
      title: "Real Estate Infrastructure",
      description: "AI systems for developers, brokers and property operations. Intelligent automation for property lifecycle management.",
      features: [
        "Property intelligence systems",
        "Client journey orchestration",
        "Document workflow automation",
        "Transaction visibility and tracking"
      ],
      outcomes: [
        "Faster property transactions",
        "Improved client experience",
        "Operational efficiency gains",
        "Enhanced portfolio visibility"
      ]
    },
    {
      icon: DollarSign,
      title: "Forex Infrastructure",
      description: "Governance-first AI systems for forex brokers. Client acquisition, onboarding, retention, compliance workflows, operational intelligence and executive visibility.",
      features: [
        "Client acquisition automation",
        "KYC and compliance orchestration",
        "Trading operations intelligence",
        "Risk monitoring and governance"
      ],
      outcomes: [
        "Accelerated client onboarding",
        "Enhanced compliance posture",
        "Improved client retention",
        "Operational risk reduction"
      ]
    },
    {
      icon: Users,
      title: "Workforce Intelligence Infrastructure",
      description: "Multilingual workforce support, knowledge access and operational coordination. Transform employee experience and productivity.",
      features: [
        "Multilingual AI assistance",
        "Knowledge orchestration systems",
        "Employee workflow automation",
        "Workforce analytics and insights"
      ],
      outcomes: [
        "Increased workforce productivity",
        "Reduced operational bottlenecks",
        "Improved employee satisfaction",
        "Better knowledge utilization"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Enterprise Solutions - O.N.E.Tech"
        description="Governance-first AI infrastructure solutions for operational excellence, revenue growth, real estate operations, forex brokerage, and workforce intelligence."
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
                Enterprise Infrastructure Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Purpose-built AI infrastructure for operational intelligence, revenue optimization, and strategic execution across enterprise domains.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="mx-auto max-w-6xl">
                    <div className="grid gap-12 lg:grid-cols-2 items-start">
                      {/* Left: Overview */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <h2 className="text-3xl font-bold text-foreground">
                            {solution.title}
                          </h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {solution.description}
                        </p>
                        <Link href="/contact">
                          <Button size="lg" className="gap-2">
                            Discuss Your Infrastructure Needs
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>

                      {/* Right: Features & Outcomes */}
                      <div className="grid gap-6">
                        {/* Features */}
                        <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6">
                          <h3 className="mb-4 text-lg font-semibold text-foreground">
                            Infrastructure Capabilities
                          </h3>
                          <ul className="space-y-3">
                            {solution.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcomes */}
                        <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6">
                          <h3 className="mb-4 text-lg font-semibold text-foreground">
                            Strategic Outcomes
                          </h3>
                          <ul className="space-y-3">
                            {solution.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
                Ready To Deploy Enterprise AI Infrastructure?
              </h2>
              <p className="text-lg text-muted-foreground">
                Schedule an executive briefing to discuss your operational intelligence roadmap.
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