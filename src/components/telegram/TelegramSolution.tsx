import { CheckCircle2 } from "lucide-react";

export function TelegramSolution() {
  const features = [
    "Automate customer conversations and replies",
    "Send targeted broadcasts and updates",
    "Guide users through product discovery",
    "Capture and qualify leads automatically",
    "Build long-term engagement with your audience",
    "Create repeat purchase flows",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Turn Telegram Into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Scalable Growth Channel
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              OneTech Automation helps ecommerce brands use Telegram as a structured, automated communication system.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-500/5 border border-blue-500/10">
            <p className="text-lg text-center text-foreground leading-relaxed">
              Instead of sending occasional messages, you create a <strong>consistent flow</strong> that engages customers, drives action, and supports your sales process.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                </div>
                <p className="text-lg text-foreground flex-1">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}