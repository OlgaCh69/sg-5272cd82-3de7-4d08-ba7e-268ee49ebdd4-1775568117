import { TrendingUp, Users, ShoppingBag } from "lucide-react";

export function InstagramWhoItsFor() {
  const segments = [
    {
      icon: TrendingUp,
      title: "High-Growth DTC Brands",
      description: "Strong Instagram presence, high engagement, but DM volume is overwhelming manual capacity."
    },
    {
      icon: ShoppingBag,
      title: "Fashion & Lifestyle",
      description: "Visual products that thrive on Instagram. Followers constantly ask about sizes, materials, and availability."
    },
    {
      icon: Users,
      title: "Influencer-Driven Brands",
      description: "High traffic from influencer partnerships. Need automation to convert followers into customers at scale."
    }
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Built for <span className="text-[#c9a961] font-normal">Instagram-First Brands</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                  <segment.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
                <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">
                  {segment.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}