import { Instagram, MessageCircle, Calendar, PhoneOff, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function BeautyClinicFeatures() {
  const features = [
    {
      icon: Instagram,
      title: "Instagram DM Automation",
      subtitle: "Turn followers into paying clients.",
      benefits: [
        "Instant replies to DMs",
        "Answer treatment questions",
        "Guide users to booking",
        "Never miss an inquiry"
      ]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Booking Automation",
      subtitle: "Convert chats into confirmed appointments.",
      benefits: [
        "Real-time conversations",
        "Automated booking flow",
        "Reminders & confirmations",
        "Follow-ups built in"
      ]
    },
    {
      icon: Calendar,
      title: "Smart Booking System",
      subtitle: "Seamless, no back-and-forth.",
      benefits: [
        "Calendar integration",
        "Real-time availability",
        "One-click booking",
        "Reduce no-shows"
      ]
    },
    {
      icon: PhoneOff,
      title: "Missed Call AI (SMS Recovery)",
      subtitle: "Turn missed calls into bookings.",
      benefits: [
        "Instant SMS reply in seconds",
        "Sends booking link automatically",
        "Captures lost clients"
      ]
    },
    {
      icon: TrendingUp,
      title: "Lost Booking Recovery Engine",
      subtitle: "Turn missed opportunities into revenue.",
      benefits: [
        "Automatically follows up with unanswered DMs",
        "Re-engages missed inquiries",
        "Recovers abandoned booking conversations",
        "Converts missed calls into appointments via SMS"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-[#d4af37] transition-all hover:shadow-xl bg-gradient-to-br from-white to-[#f8f3ef]">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-[#1a1a1a]" />
                </div>
                <CardTitle className="text-xl text-[#1a1a1a]">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">{feature.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-gray-700 flex items-start gap-2">
                      <span className="text-[#e75480] mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}