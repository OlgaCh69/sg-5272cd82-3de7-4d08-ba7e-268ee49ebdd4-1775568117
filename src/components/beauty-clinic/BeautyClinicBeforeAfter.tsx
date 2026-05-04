import { XCircle, CheckCircle2, ArrowRight, MessageSquareOff, Clock, PhoneOff, UserX, CalendarX, TrendingDown, Zap, Calendar, MessageCircle, Brain, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BeautyClinicBeforeAfter() {
  const before = [
    {
      icon: MessageSquareOff,
      title: "Missed Instagram DMs",
      description: "Clients go to competitors"
    },
    {
      icon: Clock,
      title: "Slow or late replies",
      description: "Lost booking intent"
    },
    {
      icon: PhoneOff,
      title: "Missed calls = lost clients",
      description: "No follow-up system"
    },
    {
      icon: UserX,
      title: "No conversation tracking",
      description: "Leads forgotten"
    },
    {
      icon: CalendarX,
      title: "Empty calendar gaps",
      description: "Unfilled slots"
    },
    {
      icon: TrendingDown,
      title: "No follow-up on inquiries",
      description: "20–40% bookings lost"
    }
  ];

  const after = [
    {
      icon: Zap,
      title: "Instant DM replies (24/7)",
      description: "Capture every client instantly"
    },
    {
      icon: Calendar,
      title: "Smart booking automation",
      description: "Appointments booked in seconds"
    },
    {
      icon: MessageCircle,
      title: "Missed call → SMS recovery",
      description: "Turn calls into bookings"
    },
    {
      icon: Brain,
      title: "AI remembers every lead",
      description: "Personalized conversations"
    },
    {
      icon: Target,
      title: "Automated follow-ups",
      description: "No lead left behind"
    },
    {
      icon: TrendingUp,
      title: "Recover 20–40% of lost bookings",
      description: "Fill your calendar consistently"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#f5f5dc] to-[#ffb6c1] bg-clip-text text-transparent">
              From Missed Messages to Fully Booked Days
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              See how AI automation transforms your front desk into a revenue engine.
            </p>
          </div>

          {/* Before vs After Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 relative">
            {/* Center Divider - Desktop Only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-10">
              <div className="relative h-full flex flex-col items-center justify-center">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-[#d4af37] to-transparent opacity-30"></div>
                <div className="absolute top-1/2 transform -translate-y-1/2 bg-[#1a1a1a] px-4 py-2 rounded-full border-2 border-[#d4af37] shadow-lg shadow-[#d4af37]/20">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-[#d4af37]" />
                    <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider">Transformation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BEFORE Side */}
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-red-950/20 to-pink-950/20 rounded-2xl p-8 border-2 border-red-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center border-2 border-red-500/30">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    ❌ Before: Manual Reception Chaos
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  {before.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-red-950/30 rounded-xl p-4 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-[1.02] group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/30 transition-colors">
                          <item.icon className="h-4 w-4 text-red-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-400">→ {item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-red-500/20">
                  <p className="text-sm italic text-red-300/80">
                    "Your team is busy, but revenue is slipping."
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Arrow */}
            <div className="lg:hidden flex justify-center py-4">
              <div className="bg-[#1a1a1a] px-6 py-3 rounded-full border-2 border-[#d4af37] shadow-lg shadow-[#d4af37]/20">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#d4af37] rotate-90" />
                  <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider">Transformation</span>
                </div>
              </div>
            </div>

            {/* AFTER Side */}
            <div className="animate-fade-in-delayed">
              <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#2d5016]/20 rounded-2xl p-8 border-2 border-[#d4af37]/30 backdrop-blur-sm shadow-xl shadow-[#d4af37]/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941f] flex items-center justify-center shadow-lg shadow-[#d4af37]/30">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] bg-clip-text text-transparent">
                    ✅ After: AI-Powered Receptionist
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  {after.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-r from-[#d4af37]/5 to-[#2d5016]/10 rounded-xl p-4 border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#d4af37]/20 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941f] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                          <item.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-300">→ {item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-[#d4af37]/20">
                  <p className="text-sm italic text-[#d4af37]">
                    "Your calendar fills itself—without extra staff."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-[#d4af37]/20 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Stop Losing Clients?
            </h3>
            <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
              Transform your front desk into a 24/7 revenue engine that never misses an opportunity.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#9a7a1a] text-white font-semibold px-8 py-6 text-lg shadow-xl shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-gray-500">
                Most salons recover 20–40% more bookings within the first 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
}