import { CheckCircle2 } from "lucide-react";

export function WhatsAppSolution() {
  const benefits = [
    "Respond instantly to inbound WhatsApp messages",
    "Recover abandoned carts with automated follow-up",
    "Answer product and shipping questions automatically",
    "Qualify leads before your team steps in",
    "Send post-purchase updates and support replies",
    "Create a consistent buying journey at scale",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Turn WhatsApp Into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Scalable Sales System
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              OneTech Automation helps ecommerce brands automate the conversations that drive revenue.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-green-500/5 via-green-600/5 to-green-500/5 border border-green-500/10">
            <p className="text-lg text-center text-foreground leading-relaxed">
              Instead of relying on manual replies, your business can <strong>respond instantly</strong>, guide customers to purchase, recover lost checkouts, and handle repetitive support requests automatically.
            </p>
            <p className="text-lg text-center text-foreground leading-relaxed mt-4">
              This gives your team more leverage while giving your customers a better buying experience.
            </p>
          </div>

          {/* Benefits List */}
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500" />
                </div>
                <p className="text-lg text-foreground flex-1">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}