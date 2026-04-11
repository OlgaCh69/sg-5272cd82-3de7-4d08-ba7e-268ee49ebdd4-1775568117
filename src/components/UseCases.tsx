import { ShoppingCart, Headphones, Sparkles, MessageCircle, Heart, TrendingUp } from "lucide-react";

export function UseCases() {
  const useCases = [
    {
      icon: ShoppingCart,
      title: "Abandoned Cart Recovery Flows",
      description: "Automatically re-engage customers who left items in their cart with personalized follow-ups.",
    },
    {
      icon: Headphones,
      title: "Customer Support & FAQ Automation",
      description: "Instantly answer common questions and route complex issues to human support.",
    },
    {
      icon: Sparkles,
      title: "Product Recommendation Engines",
      description: "Guide customers to the perfect product based on their preferences and behavior.",
    },
    {
      icon: MessageCircle,
      title: "Lead Capture from Social Channels",
      description: "Convert social media engagement into qualified leads automatically.",
    },
    {
      icon: Heart,
      title: "Post-Purchase Follow-Ups",
      description: "Build loyalty with automated thank-you messages, reviews requests, and support.",
    },
    {
      icon: TrendingUp,
      title: "Upsell and Cross-Sell Sequences",
      description: "Increase order value with intelligent product suggestions and bundles.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              What High-Performing Ecommerce Brands Automate
            </h2>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}