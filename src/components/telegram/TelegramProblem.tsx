import { AlertCircle, TrendingDown, Clock, Users } from "lucide-react";

export function TelegramProblem() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Your Telegram Channel Is <span className="text-[#c9a961] font-normal">Underutilized</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              High open rates, direct audience access—but manual engagement doesn't scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">One-Way Broadcasts</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                You send messages, but can't have conversations at scale. Engagement is limited to reactions and forwards.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">Missed revenue opportunities</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Manual Support Burden</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Customers message your Telegram bot or group with questions. Responding manually to hundreds of messages daily doesn't scale.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">4-8 hour response delays</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Low Conversion Rates</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Subscribers see your offers but have no easy path to purchase. Friction between message and checkout kills conversions.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">2-5% typical conversion</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">No Personalization</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Everyone gets the same broadcast. No segmentation based on behavior, no product recommendations, no individual conversations.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">Generic = low engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}