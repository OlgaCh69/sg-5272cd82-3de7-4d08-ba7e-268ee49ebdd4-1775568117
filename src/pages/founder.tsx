import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

export default function FounderPage() {
  return (
    <>
      <SEO 
        title="Founder - Olga Chavoshi - O.N.E.Tech"
        description="Olga Chavoshi, Founder & CEO of O.N.E.Tech. Enterprise AI Infrastructure Strategist building governance-first operational intelligence for GCC and Cyprus enterprises."
        image="/og-image.png"
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative border-b border-border bg-background pt-32 pb-20">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <h1 className="mb-2 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                  Olga Chavoshi
                </h1>
                <p className="text-2xl text-primary font-semibold">
                  Founder & CEO
                </p>
                <p className="mt-4 text-xl text-muted-foreground">
                  Enterprise AI Infrastructure Strategist
                </p>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/olga-chavoshi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl space-y-12">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Vision
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Most enterprises don't need more AI tools. They need operational intelligence that connects their people, processes, and systems into governed, coordinated ecosystems.
                  </p>
                  <p>
                    O.N.E.Tech was founded on the belief that AI infrastructure—when built governance-first—can transform how enterprises operate, compete, and grow across the GCC and Cyprus markets.
                  </p>
                  <p>
                    Too many organizations deploy AI without governance frameworks, creating operational risk instead of operational advantage. We take a different approach: governance-first infrastructure that ensures every AI capability is auditable, controlled, and aligned with enterprise policies.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-8">
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  Core Philosophy
                </h3>
                <ul className="space-y-4">
                  {[
                    "AI without governance becomes enterprise risk",
                    "Operational intelligence requires coordinated systems, not isolated tools",
                    "Enterprise transformation happens through infrastructure, not tactics",
                    "GCC and Cyprus markets demand sovereign, compliant AI operations",
                    "Real competitive advantage comes from operational excellence at scale"
                  ].map((principle, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="border-t border-border bg-card/30 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl space-y-12">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Background
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Olga brings enterprise technology transformation experience across multiple industries and markets. Her work focuses on helping organizations deploy AI infrastructure that scales operationally while maintaining governance, compliance, and strategic alignment.
                  </p>
                  <p>
                    With deep expertise in operational intelligence, workforce automation, and enterprise systems integration, Olga has guided companies through complex AI adoption journeys—from initial infrastructure assessment to full operational deployment.
                  </p>
                  <p>
                    Her approach emphasizes governance-first architecture, ensuring that AI capabilities enhance rather than complicate enterprise operations. This philosophy is especially critical for organizations operating in regulated industries or across international jurisdictions.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-bold text-foreground">
                  Focus Areas
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Enterprise AI Infrastructure",
                      description: "Building scalable, governed AI systems for large organizations"
                    },
                    {
                      title: "Operational Intelligence",
                      description: "Transforming fragmented processes into coordinated ecosystems"
                    },
                    {
                      title: "AI Governance Frameworks",
                      description: "Ensuring safe, compliant, and auditable AI operations"
                    },
                    {
                      title: "GCC & Cyprus Markets",
                      description: "Understanding regional requirements, compliance, and opportunities"
                    },
                    {
                      title: "Financial Services AI",
                      description: "Specialized infrastructure for forex brokers and financial institutions"
                    },
                    {
                      title: "Multilingual Operations",
                      description: "Supporting diverse workforces across Arabic, English, Greek, and more"
                    }
                  ].map((area, index) => (
                    <div 
                      key={index} 
                      className="rounded-lg border border-border bg-background/50 backdrop-blur-sm p-6"
                    >
                      <h4 className="mb-2 text-lg font-semibold text-foreground">
                        {area.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="border-t border-border bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Mission
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    To help GCC and Cyprus-based enterprises deploy AI safely at scale—transforming operational complexity into strategic advantage through governance-first infrastructure.
                  </p>
                  <p>
                    Every enterprise should be able to adopt AI with confidence: knowing their operations are governed, their data is secure, their workforce is empowered, and their competitive position is strengthened.
                  </p>
                  <p>
                    That's what O.N.E.Tech delivers: enterprise AI infrastructure built for operational excellence, not just technological experimentation.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm p-8">
                <p className="text-lg text-foreground italic leading-relaxed">
                  "AI infrastructure isn't about replacing humans—it's about coordinating them. When enterprise systems, AI agents, and governance frameworks work together, organizations don't just operate faster. They operate smarter, safer, and at scale."
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  — Olga Chavoshi, Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-card/30 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Discuss Your Infrastructure Roadmap
              </h2>
              <p className="text-lg text-muted-foreground">
                Connect with Olga to explore how governance-first AI infrastructure can transform your enterprise operations.
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