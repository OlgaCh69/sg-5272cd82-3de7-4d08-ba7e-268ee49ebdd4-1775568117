import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Solution() {
  const benefits = [
    "Instantly respond to every customer inquiry",
    "Recover lost revenue from abandoned carts",
    "Guide customers to purchase decisions",
    "Automate support without sacrificing experience",
    "Increase average order value through smart upsells",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Turn Conversations Into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Revenue Channel
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We help ecommerce brands automate and optimize the most overlooked part of their business—customer conversations.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10">
            <p className="text-lg text-center text-foreground leading-relaxed">
              Instead of reacting manually, your business runs on <strong>intelligent automation</strong> that engages, qualifies, and converts in real time.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <p className="text-lg text-foreground flex-1">{benefit}</p>
                <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}