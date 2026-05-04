import { XCircle, CheckCircle2 } from "lucide-react";

export function LeadCaptureBeforeAfter() {
  const before = [
    "Visitors leave without converting",
    "DMs are answered manually",
    "Leads are not qualified properly",
    "Sales teams waste time on cold prospects",
    "Follow-up is inconsistent"
  ];

  const after = [
    "Every visitor gets an instant reply",
    "Leads are captured automatically",
    "Hot prospects are pushed to booking",
    "Returning users get personalized conversations",
    "Your team focuses only on serious opportunities"
  ];

  return (
    <section className="py-20 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2332]">
            From Missed Messages to Automated Sales Conversations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332]">Before</h3>
            </div>
            <ul className="space-y-3">
              {before.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#0ea5e9]/10 to-[#0ea5e9]/5 p-8 rounded-xl border-2 border-[#0ea5e9]/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-[#0ea5e9]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332]">After</h3>
            </div>
            <ul className="space-y-3">
              {after.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0ea5e9] shrink-0 mt-0.5" />
                  <span className="text-[#1a2332] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}