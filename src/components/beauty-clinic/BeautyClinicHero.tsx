import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Instagram, Calendar, TrendingUp, MessageCircle, Clock, PhoneOff } from "lucide-react";

export function BeautyClinicHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#ffb6c1] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Turn Every Message Into a Booked Appointment — </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] bg-clip-text text-transparent">
                  Automatically
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                Our AI receptionist replies instantly on Instagram, WhatsApp, and your website—books appointments, follows up, and captures every client before they go somewhere else.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] hover:from-[#b8961f] hover:to-[#d4af37] text-[#1a1a1a] font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="/contact">Book a Demo</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="#how-it-works">
                    See How It Works <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-4 pt-8">
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

            {/* Right side - Expanded Feature Grid */}
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                {/* Large Featured Card */}
                <div className="bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1a1a1a]">AI Receptionist</h3>
                      <p className="text-[#1a1a1a]/80 text-lg">Always Available</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#1a1a1a]/10 rounded-xl p-4">
                      <p className="text-3xl font-bold text-[#1a1a1a]">24/7</p>
                      <p className="text-sm text-[#1a1a1a]/80">Coverage</p>
                    </div>
                    <div className="bg-[#1a1a1a]/10 rounded-xl p-4">
                      <p className="text-3xl font-bold text-[#1a1a1a]">5sec</p>
                      <p className="text-sm text-[#1a1a1a]/80">Response</p>
                    </div>
                  </div>
                </div>

                {/* Feature Grid - 2 columns */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-[#d4af37]/50 transition-all hover:scale-105">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center mb-4">
                      <Instagram className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Instagram</h4>
                    <p className="text-sm text-gray-300">Auto DM replies</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-[#d4af37]/50 transition-all hover:scale-105">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center mb-4">
                      <MessageCircle className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">WhatsApp</h4>
                    <p className="text-sm text-gray-300">Smart booking</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-[#d4af37]/50 transition-all hover:scale-105">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center mb-4">
                      <PhoneOff className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Missed Calls</h4>
                    <p className="text-sm text-gray-300">SMS recovery</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-[#d4af37]/50 transition-all hover:scale-105">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Bookings</h4>
                    <p className="text-sm text-gray-300">Instant scheduling</p>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <p className="text-3xl font-bold text-[#d4af37]">20-40%</p>
                      <p className="text-sm text-gray-300 mt-1">More Bookings</p>
                    </div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="text-center flex-1">
                      <p className="text-3xl font-bold text-[#d4af37]">100%</p>
                      <p className="text-sm text-gray-300 mt-1">Automated</p>
                    </div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="text-center flex-1">
                      <p className="text-3xl font-bold text-[#d4af37]">0</p>
                      <p className="text-sm text-gray-300 mt-1">Missed Leads</p>
                    </div>
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