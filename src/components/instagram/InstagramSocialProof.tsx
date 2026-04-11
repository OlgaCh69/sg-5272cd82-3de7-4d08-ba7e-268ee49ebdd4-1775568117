import { Star } from "lucide-react";

export function InstagramSocialProof() {
  const testimonials = [
    {
      quote: "We turned Instagram DMs into one of our highest-converting channels after implementing automation.",
      author: "Sarah M.",
      role: "Founder, Fashion Ecommerce Brand",
      rating: 5,
    },
  ];

  return (
    <section id="social-proof" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Trusted by Ecommerce Brands{" "}
              <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                Scaling Through Instagram
              </span>
            </h2>
          </div>

          <div className="grid gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-background border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-pink-500 text-pink-500" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}