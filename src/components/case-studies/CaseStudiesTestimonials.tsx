import { Quote, Star } from "lucide-react";

export function CaseStudiesTestimonials() {
  const testimonials = [
    {
      quote: "The automation system helped us recover abandoned carts we didn't even know we were losing. Our conversion rate improved significantly within the first month.",
      author: "Sarah Chen",
      company: "Premium Fashion Brand",
      role: "Head of Ecommerce"
    },
    {
      quote: "Response times dropped from hours to seconds. Our customers get instant answers, and our support team can finally focus on complex issues instead of repetitive questions.",
      author: "Marcus Rodriguez",
      company: "Health & Wellness Store",
      role: "Customer Success Manager"
    },
    {
      quote: "We were skeptical about automation, but the results speak for themselves. More revenue from the same traffic, better customer experience, and our team is less overwhelmed.",
      author: "Emily Thompson",
      company: "Home Goods Retailer",
      role: "Operations Director"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Ecommerce Brands Are Saying
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from businesses using automation to improve performance
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-lg p-8 relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4 ml-16">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-5 h-5 fill-primary text-primary" 
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg mb-6 ml-16">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="ml-16 pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground italic">
              Results may vary based on business model, implementation, and market conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}