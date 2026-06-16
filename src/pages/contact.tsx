import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Calendar, Shield, TrendingUp } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact - O.N.E.Tech"
        description="Schedule an executive briefing to discuss your operational intelligence roadmap. Governance-first AI infrastructure for GCC and Cyprus enterprises."
        image="/og-image.png"
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative border-b border-border bg-background pt-32 pb-20">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                Discuss Your Operational Intelligence Roadmap
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Schedule an executive consultation to explore how governance-first AI infrastructure can transform your enterprise operations.
              </p>
            </div>

            {/* Contact Options */}
            <div className="mt-16 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 text-center hover:border-primary/50 transition-colors">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Executive Briefing
                </h3>
                <p className="text-sm text-muted-foreground">
                  45-minute infrastructure consultation
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 text-center hover:border-primary/50 transition-colors">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Governance Assessment
                </h3>
                <p className="text-sm text-muted-foreground">
                  AI readiness and compliance review
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 text-center hover:border-primary/50 transition-colors">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Infrastructure Planning
                </h3>
                <p className="text-sm text-muted-foreground">
                  Strategic roadmap development
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* Process Section */}
        <section className="border-t border-border bg-card/30 py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  Our Engagement Process
                </h2>
                <p className="text-lg text-muted-foreground">
                  How we work with enterprise clients
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border border-border bg-background/50 backdrop-blur-sm p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-xl font-bold text-primary">
                      01
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Discovery & Assessment
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We begin with a comprehensive assessment of your current operational landscape: systems, processes, pain points, and strategic objectives. This includes reviewing your existing enterprise infrastructure, identifying governance requirements, and understanding your industry-specific challenges.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-background/50 backdrop-blur-sm p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-xl font-bold text-primary">
                      02
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Infrastructure Design
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We design a governance-first AI infrastructure tailored to your enterprise needs. This includes architectural specifications, integration requirements, governance frameworks, and a phased implementation roadmap. Every component is designed with your compliance requirements and operational constraints in mind.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-background/50 backdrop-blur-sm p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-xl font-bold text-primary">
                      03
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Phased Implementation
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Implementation follows a phased approach: start with high-value use cases, validate outcomes, then scale across the enterprise. This typically spans 3-6 months for initial deployment, with ongoing optimization and expansion as your operational intelligence capabilities mature.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-background/50 backdrop-blur-sm p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-xl font-bold text-primary">
                      04
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Governance & Optimization
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Post-deployment, we provide ongoing governance support, performance monitoring, and continuous optimization. This ensures your AI infrastructure remains compliant, secure, and aligned with evolving business objectives while delivering measurable operational improvements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Focus */}
        <section className="border-t border-border bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Built For GCC & Cyprus Enterprise Markets
              </h2>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                O.N.E.Tech specializes in governance-first AI infrastructure for enterprises operating across Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, Oman, and Cyprus. We understand regional compliance requirements, multilingual operations, and the strategic importance of sovereign AI infrastructure.
              </p>
              <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto text-sm text-muted-foreground">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">GCC</div>
                  <div>Regional Operations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Cyprus</div>
                  <div>EU Gateway</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Enterprise</div>
                  <div>Governance-First</div>
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