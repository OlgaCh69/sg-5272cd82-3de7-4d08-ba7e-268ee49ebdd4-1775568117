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
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              What Ecommerce Brands <span className="text-[#c9a961] font-normal">Are Saying</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Real feedback from businesses using automation to improve performance
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 relative"
              >
                <Quote className="w-10 h-10 text-[#c9a961]/20 absolute top-6 left-6" />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4 ml-16">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-5 h-5 fill-[#c9a961] text-[#c9a961]" 
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg text-gray-600 font-light mb-6 ml-16 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="ml-16 pt-4 border-t border-gray-200">
                    <p className="font-medium text-[#1a1a1a]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 font-light">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 font-light italic">
              Results may vary based on business model, implementation, and market conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}