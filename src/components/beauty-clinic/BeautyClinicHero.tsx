import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function BeautyClinicHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Turn Every Message Into a Booked Appointment — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#ffb6c1]">Automatically</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                Our AI receptionist replies instantly on Instagram, WhatsApp, and your website—books appointments, follows up, and captures every client before they go somewhere else.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] hover:from-[#b8961f] hover:to-[#d4af37] text-[#1a1a1a] font-semibold px-8"
                  asChild
                >
                  <Link href="/contact">Book a Demo</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  asChild
                >
                  <Link href="#features">
                    See How It Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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

            <div className="lg:w-1/2 relative">
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] mb-6">
                    <Sparkles className="w-12 h-12 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">24/7 Automated Booking</h3>
                  <p className="text-lg text-gray-300">Never miss a client opportunity again</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}