import { Send, Target, Clock } from "lucide-react";

export function BroadcastPower() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Send Messages That Actually Get Seen
            </h2>
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-center mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Email open rates continue to decline. Social media reach is unpredictable.
            </p>
            
            <p className="text-2xl font-semibold text-foreground">
              Telegram gives you a direct line to your audience.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              With automation, you can schedule, segment, and deliver messages that reach customers at the right time with the right content.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Send,
                title: "Direct Delivery",
                description: "No spam filters, no promotions tab",
              },
              {
                icon: Target,
                title: "Smart Segmentation",
                description: "Target the right audience segments",
              },
              {
                icon: Clock,
                title: "Perfect Timing",
                description: "Schedule for maximum impact",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-blue-600">
              This allows you to turn simple broadcasts into consistent revenue opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}