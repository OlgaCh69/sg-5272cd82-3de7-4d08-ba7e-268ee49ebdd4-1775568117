import { Instagram, MessageCircle, Calendar, PhoneOff, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BeautyClinicFeatures() {
  const features = [
    {
      icon: Instagram,
      title: "Instagram DM Automation",
      subtitle: "Turn followers into paying clients.",
      points: [
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
      points: [
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
      points: [
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
      points: [
        "Instant SMS reply in seconds",
        "Sends booking link automatically",
        "Captures lost clients"
      ]
    },
    {
      icon: TrendingUp,
      title: "Lost Booking Recovery Engine",
      subtitle: "Turn missed opportunities into revenue.",
      points: [
        "Automatically follows up with unanswered DMs",
        "Re-engages missed inquiries",
        "Recovers abandoned booking conversations",
        "Converts missed calls into appointments via SMS"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-[#f8f3ef] to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-[#d4af37] hover:shadow-2xl transition-all duration-300 bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#ffb6c1] flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-[#1a1a1a]" />
                </div>
                <CardTitle className="text-2xl text-[#1a1a1a]">{feature.title}</CardTitle>
                <CardDescription className="text-base text-gray-600">{feature.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] hover:from-[#b8961f] hover:to-[#d4af37] text-[#1a1a1a] font-semibold px-8"
            asChild
          >
            <Link href="/contact">See It In Action</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}