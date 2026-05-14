import { Quote } from "lucide-react";

export function InstagramSocialProof() {
  const testimonials = [
    {
      quote: "We went from 6-hour DM response times to under 30 seconds. Conversion rate jumped 32% and our team finally has breathing room.",
      author: "Jessica R.",
      role: "Founder, Fashion Brand",
      metric: "32% conversion lift"
    },
    {
      quote: "Instagram automation recovered €90k in our first quarter from DM conversations that would have gone unanswered manually.",
      author: "Mark T.",
      role: "Growth Lead, Lifestyle Brand",
      metric: "€90k recovered"
    },
    {
      quote: "The AI handles product questions better than our junior reps. Customers love the instant responses and our support costs dropped 60%.",
      author: "Sophie L.",
      role: "COO, Beauty Ecommerce",
      metric: "60% cost reduction"
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Results From <span className="text-[#c9a961] font-normal">Instagram-First Brands</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                <Quote className="w-8 h-8 text-[#c9a961] mb-6" />
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-[#1a1a1a] font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm font-light">{testimonial.role}</p>
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