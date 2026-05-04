import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, Home, Zap } from "lucide-react";

export function RealEstateHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700">
            <Zap className="w-4 h-4" />
            <span>AI Real Estate Automation</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Turn Missed Property Inquiries Into Signed Deals — <span className="text-blue-600">Automatically</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl">
            O.N.E.Tech builds 24/7 AI real estate automation systems that capture, qualify, and convert leads before they go cold.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-300 hover:bg-slate-50">
              See How It Works
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-slate-600">Lead Capture</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">+40%</div>
              <div className="text-sm text-slate-600">More Leads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">5s</div>
              <div className="text-sm text-slate-600">Response Time</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">AI Agent Active</div>
                  <div className="text-sm text-slate-500">Handling inquiries</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <Home className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">Property Matched</div>
                    <div className="text-sm text-slate-600">3-bed villa in Marbella - €850k</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">Viewing Scheduled</div>
                    <div className="text-sm text-slate-600">Tomorrow at 2:00 PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <Zap className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">Lead Synced to CRM</div>
                    <div className="text-sm text-slate-600">Contact details captured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}