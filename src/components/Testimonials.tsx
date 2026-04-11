import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "We stopped missing customer messages and started converting them. Within weeks, we saw a significant increase in revenue from conversations alone.",
      author: "Sarah Mitchell",
      role: "Founder",
      company: "Modern Apparel Co.",
      rating: 5,
    },
    {
      quote: "The abandoned cart recovery alone paid for itself in the first month. Now we're automating our entire customer journey across WhatsApp and Instagram.",
      author: "Marcus Chen",
      role: "Head of Growth",
      company: "TechGear Store",
      rating: 5,
    },
    {
      quote: "Our support costs dropped by 40% while customer satisfaction went up. The automation handles routine questions perfectly and escalates when needed.",
      author: "Elena Rodriguez",
      role: "COO",
      company: "Beauty & Wellness Hub",
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
              Trusted by Ecommerce Brands Scaling Faster
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-muted/30 rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed italic">
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