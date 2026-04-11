import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Users, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Investment() {
  const valuePoints = [
    "Capture and convert more customer conversations",
    "Recover revenue that would otherwise be lost",
    "Reduce manual workload across your team",
    "Improve customer experience at scale",
    "Create consistent, predictable growth",
  ];

  const qualifications = [
    "Are already generating consistent traffic or sales",
    "Receive regular customer messages or inquiries",
    "Want to improve conversion rates and efficiency",
    "Are focused on scaling with better systems",
  ];

  return (
    <section id="investment" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Investment
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Every ecommerce business is different.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
              The way your customers interact, the number of conversations you handle, and the level of automation you need all shape the system we build.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
              Because of that, we don't offer generic pricing tiers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4 font-medium">
              Instead, we design a solution around your business that focuses on one thing—driving measurable results.
            </p>
          </div>

          {/* Positioning */}
          <div className="mb-16 p-8 bg-muted/30 rounded-lg border border-border/50">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Built Around Performance, Not Packages
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most automation tools offer fixed plans that don't reflect how ecommerce businesses actually operate.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We take a different approach.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your setup is tailored based on your store, your customer journey, and your growth goals.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
              This ensures you are not paying for features you don't need or missing functionality that impacts performance.
            </p>
          </div>

          {/* Price Anchor */}
          <div className="mb-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Typical Investment Range
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Most ecommerce brands we work with invest from <span className="font-bold text-foreground">€1,000 to €10,000</span> per setup plus monthly support, depending on the complexity of their automation and the scale of their operations.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium">
              We focus on building systems that generate a return—so the investment is tied to outcomes, not just access to a tool.
            </p>
          </div>

          {/* Value Shift */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              What You're Really Investing In
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This is not just about automation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
              It's about building a system that helps your ecommerce business:
            </p>
            <ul className="space-y-3">
              {valuePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ROI Frame */}
          <div className="mb-16 p-8 bg-muted/30 rounded-lg border border-border/50">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Focused on Return, Not Cost
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For most ecommerce brands, even a small improvement in conversion rate or response time can have a significant impact on revenue.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Automation helps unlock value from traffic and conversations you are already generating.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Instead of increasing ad spend, you improve the performance of what you already have.
            </p>
          </div>

          {/* Qualification */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Who This Is For
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We typically work with ecommerce brands that:
            </p>
            <ul className="space-y-3">
              {qualifications.map((qualification, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{qualification}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">
              Let's See What This Could Look Like for Your Store
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The best way to understand how this would work for your business is through a short strategy call.
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We'll look at your current setup, identify opportunities, and show you how automation can support your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base font-semibold" asChild>
                <Link href="/contact">
                  Book a Strategy Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold border-border/50" asChild>
                <Link href="#features">
                  See How It Works
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No generic pitches. Just a focused conversation on your ecommerce growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}