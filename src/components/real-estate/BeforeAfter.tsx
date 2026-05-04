import { XCircle, CheckCircle2 } from "lucide-react";

export function BeforeAfter() {
  const before = [
    "Leads wait too long",
    "Agents search listings manually",
    "Viewings require back-and-forth emails",
    "Missed calls are forgotten",
    "CRM updates are delayed"
  ];

  const after = [
    "Leads are answered instantly",
    "AI matches properties automatically",
    "Viewings are booked in one click",
    "Missed calls get instant SMS follow-up",
    "Leads sync directly to CRM"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--real-estate-navy))]">
            From Manual Bottlenecks to Automated Growth
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-[hsl(var(--real-estate-grey))] p-8 rounded-xl border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--real-estate-navy))]">Before</h3>
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

          <div className="bg-gradient-to-br from-[hsl(var(--real-estate-blue))]/10 to-[hsl(var(--real-estate-blue))]/5 p-8 rounded-xl border-2 border-[hsl(var(--real-estate-blue))]/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--real-estate-blue))]/20 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--real-estate-blue))]" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--real-estate-navy))]">After</h3>
            </div>
            <ul className="space-y-3">
              {after.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--real-estate-blue))] shrink-0 mt-0.5" />
                  <span className="text-[hsl(var(--real-estate-navy))] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}