import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Sparkles, Target, ShoppingCart } from "lucide-react";

export function RevenueServices() {
  const services = [
    {
      icon: Building2,
      title: "Real Estate AI Assistant",
      tagline: "Turn inquiries into signed deals.",
      features: [
        "Instant lead qualification",
        "AI property matching",
        "Viewing booking automation",
        "Missed call recovery",
        "CRM integration"
      ],
      image: "/generated/real-estate-ai-system.png",
      link: "/ai-real-estate-automation"
    },
    {
      icon: Sparkles,
      title: "AI Receptionist for Beauty & Clinics",
      tagline: "Fill your calendar automatically.",
      features: [
        "Instagram & WhatsApp automation",
        "Smart booking system",
        "Automated follow-ups",
        "Missed call SMS recovery",
        "Recover 20–40% lost bookings"
      ],
      image: "/generated/beauty-ai-receptionist.png",
      link: "/ai-receptionist-beauty-clinic"
    },
    {
      icon: Target,
      title: "AI Lead Capture System",
      tagline: "Never lose a lead again.",
      features: [
        "Website AI assistant",
        "WhatsApp & Instagram integration",
        "Smart qualification flows",
        "AI memory (remembers users)",
        "Website scraping knowledge"
      ],
      image: "/generated/lead-capture-system.png",
      link: "/ai-lead-capture-assistant"
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Revenue Automation",
      tagline: "Turn conversations into sales.",
      features: [
        "DM selling on WhatsApp & Instagram",
        "AI shopping assistant (shop inside chat)",
        "Product recommendations",
        "Abandoned cart recovery",
        "Post-purchase upsells"
      ],
      image: "/generated/ecommerce-revenue-automation.png",
      link: "/"
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            Revenue Systems Built for Your Business
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            Choose the system that matches your revenue model
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-[#00ff87]/50 transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#0a0a0a]" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-lg text-[#00ff87] mb-6 font-semibold">{service.tagline}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-[#00ff87] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-[#00ff87] to-[#60efff] hover:from-[#00dd75] hover:to-[#50dfef] text-[#0a0a0a] font-semibold"
                    >
                      <Link href={service.link}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}