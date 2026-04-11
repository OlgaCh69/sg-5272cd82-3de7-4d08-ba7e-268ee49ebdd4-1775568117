import { AlertCircle, TrendingDown, Clock } from "lucide-react";

export function Problem() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              This Isn't Another Chatbot Tool
            </h2>
          </div>

          {/* Main Copy */}
          <div className="prose prose-lg max-w-none text-center mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Most ecommerce brands don't have a traffic problem—they have a <strong className="text-foreground">conversion problem</strong>.
            </p>
          </div>

          {/* Problem Statements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: AlertCircle,
                text: "Customers ask questions and leave",
              },
              {
                icon: Clock,
                text: "DMs go unanswered",
              },
              {
                icon: TrendingDown,
                text: "Support teams get overwhelmed",
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-6 rounded-lg bg-background border border-border/50"
              >
                <item.icon className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <p className="text-xl text-muted-foreground">
              Revenue is lost in conversations that never convert.
            </p>
            
            <p className="text-xl text-muted-foreground">
              We built <strong className="text-foreground">OneTech Automation</strong> for brands that want to fix that at scale.
            </p>

            <div className="pt-8 space-y-3">
              <p className="text-2xl font-semibold text-foreground">
                This is not just automation.
              </p>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                This is a system designed to turn every interaction into revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}