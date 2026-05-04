import { UserCheck, Home, Calendar, Phone, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function RealEstateFeatures() {
  const features = [
    {
      icon: UserCheck,
      title: "Instant Lead Qualification",
      description: "Respond to inquiries 24/7, ask the right questions, and identify serious buyers automatically."
    },
    {
      icon: Home,
      title: "AI Property Matching",
      description: "Scan your property listings and recommend the best-fit homes based on buyer needs, budget, location, and preferences."
    },
    {
      icon: Calendar,
      title: "One-Click Viewing Scheduler",
      description: "Let qualified leads book viewings instantly with calendar sync and fewer back-and-forth messages."
    },
    {
      icon: Phone,
      title: "Missed Call AI",
      description: "Send an automatic SMS reply within seconds after a missed call, including a booking link or next-step message."
    },
    {
      icon: Database,
      title: "CRM Lead Capture",
      description: "Automatically log every lead, conversation, property interest, and booking into your CRM."
    }
  ];

  return (
    <section id="features" className="py-20 bg-[hsl(var(--real-estate-grey))]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--real-estate-navy))]">
            Complete AI Real Estate Automation
          </h2>
          <p className="text-lg text-gray-600">
            Every feature built to capture more leads and close more deals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-[hsl(var(--real-estate-blue))]/50 transition-all duration-300 hover:shadow-xl bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--real-estate-blue))]/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[hsl(var(--real-estate-blue))]" />
                  </div>
                  <CardTitle className="text-xl text-[hsl(var(--real-estate-navy))]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}