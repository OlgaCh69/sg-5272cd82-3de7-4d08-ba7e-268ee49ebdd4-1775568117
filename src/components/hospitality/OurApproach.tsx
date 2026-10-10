import { CheckCircle2, Search, Layout, Shield, Rocket, TrendingUp } from "lucide-react";

export function OurApproach() {
  const methodology = [
    {
      icon: Search,
      title: "Assess",
      description: "Comprehensive operational assessment across all hotel departments to identify inefficiencies and opportunities"
    },
    {
      icon: Layout,
      title: "Architect",
      description: "Design custom workflows and system integrations aligned with your existing infrastructure and processes"
    },
    {
      icon: Shield,
      title: "Govern",
      description: "Implement oversight frameworks with human approvals, access controls, and operational transparency"
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Phased implementation with staff training, testing, and gradual rollout to minimize disruption"
    },
    {
      icon: TrendingUp,
      title: "Optimize",
      description: "Continuous improvement based on performance data, staff feedback, and evolving operational needs"
    }
  ];

  const engagementOptions = [
    {
      name: "Operational Assessment",
      description: "Comprehensive review of current operations, systems, and workflows with improvement recommendations"
    },
    {
      name: "AI Pilot",
      description: "Focused implementation in one department or workflow to demonstrate value before wider deployment"
    },
    {
      name: "Department Automation",
      description: "Complete workflow automation for specific departments: housekeeping, maintenance, F&B, or reception"
    },
    {
      name: "Custom Hotel Software",
      description: "Purpose-built applications: mobile apps for staff, guest portals, or specialized management tools"
    },
    {
      name: "Connected Hotel Infrastructure",
      description: "End-to-end integration connecting PMS, POS, guest systems, and operational workflows"
    },
    {
      name: "Multi-Property Intelligence",
      description: "Group-level dashboards, standardized workflows, and centralized operational oversight for hotel groups"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Methodology */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Start With One Problem. Scale Across Your Operation.
          </h2>
          <p className="text-lg text-muted-foreground">
            Our governance-first methodology ensures every AI implementation is controlled, transparent, and aligned with your operational goals.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-20">
          {methodology.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Engagement Options */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Flexible Engagement Models
          </h3>
          <p className="text-muted-foreground">
            Choose the scope and approach that fits your hotel's needs and timeline
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engagementOptions.map((option, index) => (
            <div 
              key={index}
              className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <h4 className="text-base font-semibold text-foreground">
                  {option.name}
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Principles */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-border bg-card/30 p-8">
            <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
              Our Commitment
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Integration with Existing Systems</p>
                  <p className="text-xs text-muted-foreground">Work with your current PMS, POS, and tools—no forced replacements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Human Oversight</p>
                  <p className="text-xs text-muted-foreground">AI assists, humans decide—approvals and escalations built-in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Secure Access</p>
                  <p className="text-xs text-muted-foreground">Role-based permissions and data protection for all systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Custom Scope</p>
                  <p className="text-xs text-muted-foreground">Start small or go comprehensive—every engagement is tailored</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}