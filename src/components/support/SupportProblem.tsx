import { AlertCircle, TrendingDown, Clock, DollarSign } from "lucide-react";

export function SupportProblem() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] mb-6">
              Manual Support <span className="text-[#c9a961] font-normal">Doesn't Scale</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Every support ticket costs you time and money. Growth multiplies the burden linearly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Slow Response Times</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Customers wait hours for answers to simple questions. Every delay drives them to competitors.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">3-6 hour average response</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Rising Support Costs</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                More customers = more tickets = more agents. Support costs scale linearly with volume.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">€3,000-€8,000/month per agent</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">Repetitive Work Burnout</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                70% of tickets are repetitive questions your team has answered hundreds of times.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">High agent turnover</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-4">24/7 Coverage Gaps</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                International customers, late-night shoppers, weekend inquiries—manual teams can't cover every timezone.
              </p>
              <p className="text-sm text-[#c9a961] font-medium">Off-hours revenue lost</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}