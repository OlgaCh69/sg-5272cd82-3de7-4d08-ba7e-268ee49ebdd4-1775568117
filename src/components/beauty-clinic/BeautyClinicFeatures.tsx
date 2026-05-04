import { Instagram, MessageCircle, Calendar, PhoneOff } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function BeautyClinicFeatures() {
  const features = [
    {
      icon: Instagram,
      title: "Instagram DM Automation",
      description: "Turn followers into paying clients.",
      benefits: [
        "Instant replies to DMs",
        "Answer treatment questions",
        "Guide users to booking",
        "Never miss an inquiry"
      ],
      gradient: "from-[#d4af37] to-[#b8941f]"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Booking Automation",
      description: "Convert chats into confirmed appointments.",
      benefits: [
        "Real-time conversations",
        "Automated booking flow",
        "Reminders & confirmations",
        "Follow-ups built in"
      ],
      gradient: "from-[#25D366] to-[#128C7E]"
    },
    {
      icon: Calendar,
      title: "Smart Booking System",
      description: "Seamless, no back-and-forth.",
      benefits: [
        "Calendar integration",
        "Real-time availability",
        "One-click booking",
        "Reduce no-shows"
      ],
      gradient: "from-[#ffb6c1] to-[#ff69b4]"
    },
    {
      icon: PhoneOff,
      title: "Missed Call AI (SMS Recovery)",
      description: "Turn missed calls into bookings.",
      benefits: [
        "Instant SMS reply in seconds",
        "Sends booking link automatically",
        "Captures lost clients"
      ],
      gradient: "from-[#d4af37] to-[#ffb6c1]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f5f5dc]/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 border-gray-100 hover:border-[#d4af37]/30 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${feature.gradient}`}></div>
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-[#1a1a1a]">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} mt-2 shrink-0`}></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}