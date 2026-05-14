import { AlertCircle, TrendingDown, MessageCircle, Clock } from "lucide-react";

export function InstagramProblem() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Your Instagram DMs Are <span className="text-[#c9a961] font-normal">Costing You Sales</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Every unanswered DM is a lost customer. Every slow response sends them to your competitors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Overwhelmed DM Inbox</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Product questions, order inquiries, and buying requests pile up. Your team can't respond fast enough during peak hours.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">200-500+ daily DMs ignored</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Slow Response Time</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Instagram users expect instant replies. Manual responses take hours—by then, they've already bought elsewhere.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">3-8 hour average delay</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Lost Conversion Opportunities</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Interested followers message you about products, but never hear back. Warm leads go cold while you sleep.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">30-50% potential sales lost</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Manual Work Doesn't Scale</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                As your Instagram grows, DM volume becomes unmanageable. Hiring more support staff is expensive and slow.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">€4,000-€10,000/month per agent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}