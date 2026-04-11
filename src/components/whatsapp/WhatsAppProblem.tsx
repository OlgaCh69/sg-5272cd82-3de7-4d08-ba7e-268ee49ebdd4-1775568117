import { AlertCircle, Clock, MessageSquareX } from "lucide-react";

export function WhatsAppProblem() {
  const problems = [
    {
      icon: Clock,
      text: "Delays and missed replies",
    },
    {
      icon: MessageSquareX,
      text: "Inconsistent follow-up",
    },
    {
      icon: AlertCircle,
      text: "Lost sales opportunities",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Most Ecommerce Brands Are Losing Revenue in WhatsApp Conversations
            </h2>
          </div>

          {/* Main Copy */}
          <div className="prose prose-lg max-w-none text-center mb-12 space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Customers ask product questions, request updates, and show buying intent on WhatsApp every day.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              But most ecommerce teams still handle those conversations <strong className="text-foreground">manually</strong>.
            </p>
          </div>

          {/* Problem Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-6 rounded-lg bg-background border border-border/50"
              >
                <problem.icon className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="text-center space-y-6">
            <p className="text-xl text-muted-foreground">
              That creates delays, missed replies, inconsistent follow-up, and lost sales.
            </p>
            
            <p className="text-xl text-muted-foreground">
              When response time drops, conversions drop with it.
            </p>

            <div className="pt-8 space-y-3">
              <p className="text-2xl font-semibold text-foreground">
                For growing ecommerce brands, WhatsApp is not just a support channel.
              </p>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                It is a revenue channel.
              </p>
              <p className="text-xl text-muted-foreground pt-4">
                The problem is that most businesses are not using it that way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}