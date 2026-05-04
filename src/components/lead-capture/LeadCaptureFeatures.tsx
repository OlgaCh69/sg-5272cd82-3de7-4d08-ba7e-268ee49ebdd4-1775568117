import { MessageSquare, MessageCircle, Instagram, Brain, Database, UserCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function LeadCaptureFeatures() {
  const features = [
    {
      icon: MessageSquare,
      title: "Website Chat Assistant",
      description: "Instantly engage website visitors, answer questions, recommend services, and collect lead details before they leave."
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Lead Automation",
      description: "Reply to WhatsApp inquiries automatically, qualify prospects, and move serious leads toward booking."
    },
    {
      icon: Instagram,
      title: "Instagram DM Automation",
      description: "Turn Instagram conversations into qualified leads with fast replies, smart follow-ups, and sales-focused flows."
    },
    {
      icon: Brain,
      title: "AI Memory",
      description: "Recognize returning visitors and continue conversations with context, making every interaction feel personal."
    },
    {
      icon: Database,
      title: "Website Scraping Knowledge Base",
      description: "The assistant learns from your website pages, services, FAQs, pricing, and blog content so it can give accurate answers."
    },
    {
      icon: UserCheck,
      title: "Automated Lead Qualification",
      description: "Capture name, email, phone, business type, budget, service interest, urgency, and lead source automatically."
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2332]">
            Complete AI Lead Capture System
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to capture, qualify, and convert leads automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-[#0ea5e9]/50 transition-all duration-300 hover:shadow-xl bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#0ea5e9]" />
                  </div>
                  <CardTitle className="text-xl text-[#1a2332]">{feature.title}</CardTitle>
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