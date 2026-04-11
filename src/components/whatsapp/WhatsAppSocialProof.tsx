import { Star } from "lucide-react";

export function WhatsAppSocialProof() {
  const testimonials = [
    {
      quote: "WhatsApp became one of our highest-converting channels once we automated the right parts of the customer journey.",
      author: "Sarah Mitchell",
      role: "Founder",
      company: "Modern Apparel Co.",
      rating: 5,
    },
    {
      quote: "We reduced support pressure, improved response time, and recovered more lost sales without adding more team members.",
      author: "Marcus Chen",
      role: "Head of Growth",
      company: "TechGear Store",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Trusted by Ecommerce Brands That Want Better Results
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-muted/30 rounded-2xl p-8 border border-border/50 hover:border-green-500/30 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-green-600 text-green-600 dark:fill-green-500 dark:text-green-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed italic text-lg">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}