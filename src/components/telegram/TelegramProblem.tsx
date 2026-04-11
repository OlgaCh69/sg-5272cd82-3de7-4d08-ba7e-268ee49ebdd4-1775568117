import { AlertCircle, TrendingDown, MessageSquareX } from "lucide-react";

export function TelegramProblem() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Most Ecommerce Brands Underuse Telegram as a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Revenue Channel
              </span>
            </h2>
          </div>

          {/* Main Copy */}
          <div className="space-y-6 text-center mb-12">
            <p className="text-xl text-foreground leading-relaxed">
              Telegram is one of the most powerful communication platforms available today.
            </p>
            
            <p className="text-xl text-foreground leading-relaxed">
              High open rates. Direct access. No algorithm blocking your reach.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Yet most ecommerce brands either ignore it or use it inconsistently.
            </p>
          </div>

          {/* Problem Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: MessageSquareX,
                text: "Messages are not structured",
              },
              {
                icon: TrendingDown,
                text: "Follow-ups don't happen",
              },
              {
                icon: AlertCircle,
                text: "Opportunities are missed",
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
              Without automation, Telegram becomes just another unused channel instead of a reliable source of engagement and sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}