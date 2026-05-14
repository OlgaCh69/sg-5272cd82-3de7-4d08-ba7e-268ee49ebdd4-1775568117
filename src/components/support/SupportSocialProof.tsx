import { Quote } from "lucide-react";

export function SupportSocialProof() {
  const testimonials = [
    {
      quote: "Support costs dropped 60% while CSAT scores increased 40%. The AI handles everything our team used to spend hours on.",
      author: "Michael R.",
      role: "COO, Fashion Ecommerce",
      metric: "60% cost reduction"
    },
    {
      quote: "We went from 4-hour response times to under 1 minute. Customers are happier and our team focuses on complex issues only.",
      author: "Lisa K.",
      role: "Head of CX, Beauty Brand",
      metric: "Sub-1-min responses"
    },
    {
      quote: "AI support paid for itself in 2 months. We're handling 3x the ticket volume with the same team size.",
      author: "Tom S.",
      role: "Founder, Electronics Store",
      metric: "3x capacity"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Trusted by <span className="text-[#c9a961] font-normal">Leading Ecommerce Brands</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                <Quote className="w-8 h-8 text-[#c9a961] mb-6" />
                <p className="text-white/90 font-light leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-white/60 text-sm font-light">{testimonial.role}</p>
                  <p className="text-[#c9a961] text-sm font-medium mt-2">{testimonial.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}