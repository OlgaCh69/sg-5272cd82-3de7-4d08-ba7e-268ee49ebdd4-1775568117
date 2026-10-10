import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Building2, Clock, MessageSquare, Users, TrendingUp, BarChart3, Sparkles, Hotel, Wrench, DollarSign, Shield, Globe } from "lucide-react";
import Image from "next/image";
import { HotelSolutionsCatalogue } from "@/components/hospitality/HotelSolutionsCatalogue";
import { HotelAssessmentForm } from "@/components/hospitality/HotelAssessmentForm";
import { AIWorkflowDemo } from "@/components/hospitality/AIWorkflowDemo";
import { OurApproach } from "@/components/hospitality/OurApproach";

export default function HospitalityPage() {
  const painPoints = [
    {
      icon: Clock,
      title: "Delayed Room Readiness",
      description: "Housekeeping, maintenance, and inspections don't communicate in real-time. Guests wait. Revenue is lost."
    },
    {
      icon: Wrench,
      title: "Maintenance and Service Delays",
      description: "Fault reports get lost in messages and emails. Technicians arrive late. Guest complaints multiply."
    },
    {
      icon: MessageSquare,
      title: "Fragmented Guest Communication",
      description: "Reception, concierge, and departments use different channels. Messages are missed. Guest experience suffers."
    },
    {
      icon: Users,
      title: "Inefficient Staff Coordination",
      description: "Shift handovers rely on memory and notes. Task priorities are unclear. Staff work harder, not smarter."
    },
    {
      icon: DollarSign,
      title: "Missed Upselling Opportunities",
      description: "Upgrade offers, spa bookings, and dining promotions are inconsistent. Revenue potential goes unrealized."
    },
    {
      icon: BarChart3,
      title: "Limited Management Visibility",
      description: "Executives see reports from yesterday. Real-time operational intelligence doesn't exist. Decisions lag."
    }
  ];

  const aiCapabilities = [
    {
      icon: MessageSquare,
      title: "AI Guest Service Coordination",
      description: "Intelligent routing of guest requests across departments. Multilingual AI assistants handle enquiries, bookings, and service requests. Automatic escalation for urgent issues. Real-time status updates to guests and staff.",
      applications: ["Multilingual chatbots", "Request classification", "Smart routing", "Automated responses", "Escalation triggers"]
    },
    {
      icon: Sparkles,
      title: "Intelligent Housekeeping",
      description: "AI-powered room assignment based on checkout times, VIP arrivals, and maintenance status. Predictive cleaning schedules. Automatic priority adjustments. Real-time room status across all departments.",
      applications: ["Dynamic scheduling", "Priority optimization", "Status synchronization", "Inspection workflows", "Resource allocation"]
    },
    {
      icon: Wrench,
      title: "Maintenance Intelligence",
      description: "AI classification of maintenance requests by urgency and type. Automatic technician routing. Predictive maintenance alerts. Spare parts inventory tracking. Recurring fault pattern detection.",
      applications: ["Fault classification", "Technician dispatch", "Preventive scheduling", "Parts management", "Pattern analysis"]
    },
    {
      icon: TrendingUp,
      title: "AI Revenue Opportunity Engine",
      description: "Intelligent upsell recommendations based on guest profiles and booking patterns. Automated personalized offers. Conversion tracking. Dynamic pricing suggestions. Ancillary revenue optimization.",
      applications: ["Guest segmentation", "Personalized offers", "Conversion analytics", "Dynamic pricing", "Revenue forecasting"]
    },
    {
      icon: Shield,
      title: "AI Staff & Workflow Coordination",
      description: "Intelligent task assignment across departments. Automated shift handovers. AI-powered knowledge base. Multilingual staff assistants. Workflow bottleneck detection and alerts.",
      applications: ["Task orchestration", "Digital handovers", "Knowledge AI", "Workflow analytics", "Bottleneck alerts"]
    },
    {
      icon: Globe,
      title: "Multi-Property Operational Intelligence",
      description: "Centralized dashboards across hotel groups. AI-generated executive briefings. Property comparison analytics. Standardized workflows with local customization. Group-level operational insights.",
      applications: ["Executive dashboards", "AI briefings", "Performance benchmarking", "Workflow standardization", "Group analytics"]
    }
  ];

  return (
    <>
      <SEO 
        title="AI Hotel Operations & Hospitality Automation | O.N.E.Tech"
        description="Connect your hotel systems with AI-powered operational intelligence. Custom hotel workflow automation, systems integration, and multi-property management solutions for hotels, resorts, and hospitality groups."
        image="/generated/luxury-hotel-operations.png"
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative border-b border-border bg-background pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
                  <Hotel className="h-4 w-4" />
                  Hospitality & Hotels
                </div>
                
                <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Your Hotel Has the Systems. We Connect the Intelligence.
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Your hotel already has people, software and processes. But disconnected departments, manual coordination and delays still cost money. O.N.E.Tech connects existing systems and introduces AI-powered workflows to improve operational efficiency, guest experience and profitability.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#assessment">
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                      Discover Your Operational Opportunities
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#solutions">
                    <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                      Explore Our Hotel Solutions
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-3xl" />
                <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <Image 
                    src="/generated/luxury-hotel-operations.png"
                    alt="Luxury hotel operations with AI intelligence"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Owner Pain */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                A Fully Booked Hotel Can Still Be Losing Money.
              </h2>
              <p className="text-lg text-muted-foreground">
                These operational inefficiencies cost time, money, and guest satisfaction every single day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {painPoints.map((pain, index) => {
                const Icon = pain.icon;
                return (
                  <div 
                    key={index}
                    className="group rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {pain.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xl font-semibold text-foreground">
                You're paying for the people. You're paying for the software. You shouldn't also pay for the inefficiencies between them.
              </p>
            </div>
          </div>
        </section>

        {/* Featured AI Capabilities */}
        <section className="py-24 bg-card/30 border-y border-border">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                AI-Powered Hotel Operations
              </h2>
              <p className="text-lg text-muted-foreground">
                Custom-developed capabilities that connect your systems, automate workflows, and deliver operational intelligence. Not prebuilt products — purpose-built solutions for your hotel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div 
                    key={index}
                    className="rounded-lg border border-border bg-background/80 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {capability.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Example Applications
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {capability.applications.map((app, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center rounded-full bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 22 Solutions Catalogue */}
        <HotelSolutionsCatalogue />

        {/* Interactive Assessment */}
        <section id="assessment" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Where Is Your Hotel Losing Operational Efficiency?
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete this assessment to identify opportunities for AI-powered improvements in your hotel operations. Our team will review your responses and provide customized recommendations.
              </p>
            </div>
            
            <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card/50 backdrop-blur-sm p-8">
              <HotelAssessmentForm />
            </div>
          </div>
        </section>

        {/* AI Workflow Demo */}
        <AIWorkflowDemo />

        {/* Our Approach */}
        <OurApproach />

        {/* Final CTA */}
        <section className="py-24 bg-card/30 border-y border-border">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                Your Next Operational Improvement Could Be Hiding in Plain Sight.
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover where AI-powered intelligence can reduce costs, improve guest satisfaction, and increase revenue in your hotel operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#assessment">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    Assess Your Hotel Operations
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    Speak With O.N.E.Tech
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}