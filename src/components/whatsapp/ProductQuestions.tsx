import { MessageCircle, Clock, CheckCircle2 } from "lucide-react";

export function ProductQuestions() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
              <MessageCircle className="h-4 w-4" />
              Instant Answers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Answer Buying Questions Before They Cost You the Sale
            </h2>
          </div>

          {/* Main Copy */}
          <div className="prose prose-lg max-w-none space-y-6 mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed text-center">
              Many ecommerce customers do not need a long sales process. They just need one clear answer before they buy.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed text-center">
              Questions about sizing, delivery times, stock availability, returns, or product fit often decide whether a customer converts or leaves.
            </p>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10 text-center">
              <p className="text-xl text-foreground font-semibold mb-2">
                With WhatsApp automation, those questions can be handled instantly, even outside business hours.
              </p>
              <p className="text-lg text-muted-foreground">
                That means fewer lost opportunities and more completed purchases.
              </p>
            </div>
          </div>

          {/* Supporting Points */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-muted/30 border border-border/50">
              <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Availability</h3>
              <p className="text-sm text-muted-foreground">Answer questions anytime, even when your team is offline</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-muted/30 border border-border/50">
              <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Instant Response</h3>
              <p className="text-sm text-muted-foreground">No waiting time for customers who are ready to buy</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-muted/30 border border-border/50">
              <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Higher Conversions</h3>
              <p className="text-sm text-muted-foreground">Remove friction and close more sales faster</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}