import { UserCheck, Home, Calendar, Phone, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function RealEstateFeatures() {
  const features = [
    {
      icon: UserCheck,
      title: "Instant Lead Qualification",
      description: "Respond to inquiries 24/7, ask the right questions, and identify serious buyers automatically.",
      benefits: ["24/7 availability", "Smart questioning", "Buyer scoring", "Priority routing"]
    },
    {
      icon: Home,
      title: "AI Property Matching",
      description: "Scan your property listings and recommend the best-fit homes based on buyer needs, budget, location, and preferences.",
      benefits: ["Smart recommendations", "Budget filtering", "Location matching", "Preference analysis"]
    },
    {
      icon: Calendar,
      title: "One-Click Viewing Scheduler",
      description: "Let qualified leads book viewings instantly with calendar sync and fewer back-and-forth messages.",
      benefits: ["Calendar integration", "Automated reminders", "Easy rescheduling", "Agent availability sync"]
    },
    {
      icon: Phone,
      title: "Missed Call AI",
      description: "Send an automatic SMS reply within seconds after a missed call, including a booking link or next-step message.",
      benefits: ["5-second response", "Personalized SMS", "Booking links", "Lead recovery"]
    },
    {
      icon: Database,
      title: "CRM Lead Capture",
      description: "Automatically log every lead, conversation, property interest, and booking into your CRM.",
      benefits: ["Auto-sync data", "Conversation logs", "Interest tracking", "Pipeline updates"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to <span className="text-blue-600">Capture & Convert Leads</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Complete automation for real estate agencies serious about growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}