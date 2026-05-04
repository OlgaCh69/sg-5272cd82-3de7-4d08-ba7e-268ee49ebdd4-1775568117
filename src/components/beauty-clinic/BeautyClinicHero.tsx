import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Instagram, Calendar, TrendingUp, MessageCircle } from "lucide-react";

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

            {/* Right side - Feature showcase */}
            <div className="lg:w-1/2 relative">
              <div className="relative h-full flex items-center justify-center p-4 lg:p-8">
                <div className="w-full space-y-4">
                  {/* Feature Card 1 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-[#d4af37]/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center flex-shrink-0">
                        <Instagram className="w-7 h-7 text-[#1a1a1a]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Instagram DM Automation</h3>
                        <p className="text-base text-gray-300">Reply to inquiries instantly, 24/7</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Card 2 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-[#d4af37]/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-7 h-7 text-[#1a1a1a]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Smart Booking System</h3>
                        <p className="text-base text-gray-300">Appointments booked in seconds</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Card 3 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-[#d4af37]/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-7 h-7 text-[#1a1a1a]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">20-40% More Bookings</h3>
                        <p className="text-base text-gray-300">Recover lost opportunities automatically</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Card 4 - New */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-[#d4af37]/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-7 h-7 text-[#1a1a1a]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">WhatsApp Automation</h3>
                        <p className="text-base text-gray-300">Handle client messages automatically</p>
                      </div>
                    </div>
                  </div>

                  {/* Stat Badge */}
                  <div className="bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] rounded-2xl p-8 text-center">
                    <p className="text-4xl font-bold text-[#1a1a1a] mb-2">24/7</p>
                    <p className="text-lg font-semibold text-[#1a1a1a]">Always-On AI Receptionist</p>
                    <p className="text-sm text-[#1a1a1a] mt-2 opacity-80">Never miss a client opportunity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}