import { Quote } from "lucide-react";

export function AbandonedCartSocialProof() {
  const testimonials = [
    {
      quote: "We recovered €180k in the first 8 months from abandoned carts. The multi-channel approach captured customers we would have otherwise lost.",
      author: "Michael R.",
      role: "Founder, Fashion Ecommerce",
      metric: "€180k recovered"
    },
    {
      quote: "Cart abandonment dropped from 72% to 58% once we implemented automated recovery. The instant follow-ups make all the difference.",
      author: "Lisa T.",
      role: "COO, Beauty Brand",
      metric: "14% reduction"
    },
    {
      quote: "The conversational AI handles objections better than our support team did manually. It's like having a 24/7 sales closer.",
      author: "James K.",
      role: "Head of Growth, DTC",
      metric: "24/7 coverage"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Results From <span className="text-[#c9a961] font-normal">Real Stores</span>
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