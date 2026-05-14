import { Quote } from "lucide-react";

export function ChatbotSocialProof() {
  const testimonials = [
    { quote: "AI chatbot helped us respond faster and convert more conversations into sales.", author: "Sarah M.", role: "Founder, DTC Brand", metric: "35% conversion lift" },
    { quote: "We recovered €85k in abandoned carts in the first 4 months.", author: "David K.", role: "COO, Fashion Store", metric: "€85k recovered" },
    { quote: "Support costs dropped 60% while customer satisfaction went up.", author: "Emma L.", role: "Head of Growth", metric: "60% cost reduction" }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white text-center mb-16">
            Results From <span className="text-[#c9a961] font-normal">Real Brands</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                <Quote className="w-8 h-8 text-[#c9a961] mb-6" />
                <p className="text-white/90 font-light leading-relaxed mb-6">"{testimonial.quote}"</p>
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