import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function BeautyClinicHero() {
  const benefits = [
    "24/7 Instagram & WhatsApp replies",
    "Instant appointment booking",
    "Missed call → SMS recovery",
    "No more lost clients",
    "Fully automated front desk"
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#d4af37]/20 to-[#ffb6c1]/20 text-[#d4af37] border border-[#d4af37]/30">
                Premium AI Automation for Beauty & Aesthetics
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#f5f5dc] to-[#ffb6c1] bg-clip-text text-transparent leading-tight">
              Turn Every Message Into a Booked Appointment — Automatically
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our AI receptionist replies instantly on Instagram, WhatsApp, and your website—books appointments, follows up, and captures every client before they go somewhere else.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#9a7a1a] text-black font-semibold shadow-xl shadow-[#d4af37]/20 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#f5f5dc] text-white hover:bg-[#f5f5dc]/10"
                asChild
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>

            <div className="space-y-4">
              {[
                "24/7 Instagram & WhatsApp replies",
                "Instant appointment booking",
                "Recover 20–40% of lost bookings automatically",
                "Missed call → SMS recovery",
                "No more lost clients",
                "Fully automated front desk"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#1a1a1a]" />
                  </div>
                  <span className="text-base md:text-lg text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#d4af37] to-[#ffb6c1] bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-400">Instant Client Replies</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#ffb6c1] to-[#d4af37] bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-400">DMs & Messages Captured</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#d4af37] to-[#ffb6c1] bg-clip-text text-transparent">5-15%</div>
                <div className="text-sm text-gray-400">Booking Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}