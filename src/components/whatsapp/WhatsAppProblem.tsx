import { AlertCircle, TrendingDown, Clock, UserX } from "lucide-react";

export function WhatsAppProblem() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              The Cost of <span className="text-[#c9a961] font-normal">Manual Conversations</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Every missed message is lost revenue. Every slow response loses you to a competitor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Abandoned Cart Revenue Loss</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                70% of carts are abandoned. Without automated WhatsApp recovery, you're leaving 15-30% of that revenue on the table.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">€50,000-€300,000+ annual loss</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Slow Response Time</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                82% of customers expect responses within 10 minutes on messaging platforms. Manual support can't keep up.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">3-6 hour average delay</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Conversion Leaks</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Product questions go unanswered. Buying objections aren't addressed. Customers shop elsewhere while you sleep.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">20-40% conversion loss</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <UserX className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Team Bottlenecks</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Your team spends hours on repetitive WhatsApp questions instead of high-value work. Support costs scale linearly with volume.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">€3,000-€8,000/month per agent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}