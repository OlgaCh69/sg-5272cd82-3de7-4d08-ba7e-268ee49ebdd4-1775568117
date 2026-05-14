import { Quote } from "lucide-react";

export function WhatsAppSocialProof() {
  const testimonials = [
    {
      quote: "We recovered €120k in the first 6 months from abandoned carts alone. WhatsApp automation paid for itself in week 3.",
      author: "Sarah M.",
      role: "Founder, Premium Skincare Brand",
      metric: "€120k recovered"
    },
    {
      quote: "Response time went from 4 hours to under 1 minute. Our conversion rate jumped 28% and support costs dropped 65%.",
      author: "David K.",
      role: "COO, Fashion Ecommerce",
      metric: "28% conversion lift"
    },
    {
      quote: "The AI handles sizing questions, shipping inquiries, and cart recovery while we sleep. Feels like having 10 support reps working 24/7.",
      author: "Emma L.",
      role: "Head of Growth, DTC Brand",
      metric: "24/7 coverage"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Results From <span className="text-[#c9a961] font-normal">Real Ecommerce Brands</span>
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