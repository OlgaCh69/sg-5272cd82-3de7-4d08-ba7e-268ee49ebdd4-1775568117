import { Bot, Clock, Zap, Globe } from "lucide-react";

export function RealEstateSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6">
            <Bot className="h-4 w-4 text-[#0ea5e9]" />
            <span className="text-sm font-semibold text-[#0ea5e9]">AI-Powered Solution</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1a2332]">
            Meet Your 24/7 AI Real Estate Agent
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our AI system works around the clock to respond instantly, qualify leads, match buyers with properties, book viewings, and capture every opportunity into your CRM.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-[#0ea5e9]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#1a2332]">Always On</h3>
            <p className="text-gray-600">24/7 instant responses to every property inquiry</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-[#0ea5e9]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#1a2332]">Lightning Fast</h3>
            <p className="text-gray-600">Qualify and match properties in seconds</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-[#0ea5e9]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#1a2332]">Multi-Channel</h3>
            <p className="text-gray-600">Website, WhatsApp, SMS, and more</p>
          </div>
        </div>
      </div>
    </section>
  );
}