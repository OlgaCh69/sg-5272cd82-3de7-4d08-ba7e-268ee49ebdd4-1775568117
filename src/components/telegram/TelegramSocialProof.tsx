import { Quote } from "lucide-react";

export function TelegramSocialProof() {
  const testimonials = [
    {
      quote: "Telegram brings us €150k/month in direct sales. 95% open rates mean every product launch reaches our entire audience instantly.",
      author: "Michael R.",
      role: "Founder, International DTC",
      metric: "€150k monthly revenue"
    },
    {
      quote: "We built a 50,000-subscriber Telegram channel in 6 months. Automated broadcasts and bot support handle everything—zero manual work.",
      author: "Anna K.",
      role: "Growth Lead, Digital Products",
      metric: "50k subscribers"
    },
    {
      quote: "Telegram automation recovered €75k in abandoned carts in Q1. Higher conversion rates than email or WhatsApp combined.",
      author: "David L.",
      role: "COO, Tech Hardware",
      metric: "€75k cart recovery"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Results From <span className="text-[#c9a961] font-normal">Telegram-Powered Brands</span>
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