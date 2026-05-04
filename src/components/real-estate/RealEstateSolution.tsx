import { Bot, Clock, Zap, Globe } from "lucide-react";

export function RealEstateSolution() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Meet Your <span className="text-blue-600">24/7 AI Real Estate Agent</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI system works around the clock to respond instantly, qualify leads, match buyers with properties, book viewings, and capture every opportunity into your CRM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">AI-Powered</h3>
            <p className="text-slate-600">Smart conversations that understand buyer needs</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Always On</h3>
            <p className="text-slate-600">24/7 availability, even on holidays</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Response</h3>
            <p className="text-slate-600">Answer inquiries in seconds, not hours</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Multi-Channel</h3>
            <p className="text-slate-600">Website, WhatsApp, SMS, and more</p>
          </div>
        </div>
      </div>
    </section>
  );
}