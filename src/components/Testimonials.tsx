import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "CEO",
      company: "TechStyle Boutique",
      image: "👩‍💼",
      rating: 5,
      quote: "O.N.E.Tech transformed how we handle customer inquiries. Our response time dropped from hours to seconds, and sales increased by 40% in just 2 months. The automation is seamless!",
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "GadgetHub",
      image: "👨‍💻",
      rating: 5,
      quote: "The multi-platform support is incredible. Managing WhatsApp, Telegram, and Instagram from one dashboard saved us countless hours. Best investment we've made this year.",
    },
    {
      name: "Emma Williams",
      role: "Marketing Director",
      company: "Urban Fashion Co.",
      image: "👩‍🎨",
      rating: 5,
      quote: "Our customers love the instant responses and product recommendations. The bot feels natural and has boosted our conversion rate significantly. Highly recommend!",
    },
    {
      name: "David Thompson",
      role: "E-commerce Manager",
      company: "FitGear Plus",
      image: "👨‍💼",
      rating: 5,
      quote: "Setup was surprisingly quick, and the support team was fantastic. We're now handling 3x more customer conversations without adding staff. Game-changer for our business.",
    },
    {
      name: "Lisa Rodriguez",
      role: "Owner",
      company: "Beauty Essentials",
      image: "👩",
      rating: 5,
      quote: "The AI assistant feature is mind-blowing. It understands customer questions and provides accurate product recommendations. Our team can now focus on complex issues while the bot handles routine inquiries.",
    },
    {
      name: "James Park",
      role: "COO",
      company: "Digital Trends Store",
      image: "👨‍🔧",
      rating: 5,
      quote: "We've tried other chatbot solutions, but O.N.E.Tech is in a league of its own. The analytics helped us understand customer behavior better, and the automations just work flawlessly.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Loved by <span className="text-gradient">Growing Brands</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses already automating their sales and support
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="relative mb-4 sm:mb-6">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 text-primary/20" />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4 sm:pl-6">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl sm:text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-primary/20">
            <div className="flex -space-x-2">
              {["👨‍💼", "👩‍💻", "👨‍🔧", "👩‍🎨"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background text-xs sm:text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span className="font-semibold text-xs sm:text-sm">
              Join 500+ businesses automating with O.N.E.Tech
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}