import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Calendar, MessageCircle, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact O.N.E.Tech | Book Your Ecommerce Automation Demo"
        description="Ready to automate your ecommerce store? Book a demo and see how AI chatbots, WhatsApp automation, and support automation drive revenue."
      />
      <div className="min-h-screen bg-[#0a0a0a]">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/90"></div>

            <div className="container mx-auto px-4 relative z-10 py-24">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-[#c9a961] animate-pulse"></div>
                  <span className="text-sm text-white/80 font-light tracking-wide">Get Started</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1]">
                  <span className="text-white font-light">Let's Build Your</span>
                  <br />
                  <span className="text-[#c9a961] font-normal">Revenue Engine</span>
                </h1>

                <p className="text-xl sm:text-2xl text-white/70 mb-12 font-light leading-relaxed">
                  Book a demo and see exactly how AI automation will grow your ecommerce revenue.
                </p>

                {/* Contact Options */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-6 h-6 text-[#c9a961]" />
                    </div>
                    <h3 className="text-white font-medium mb-2">Book a Demo</h3>
                    <p className="text-white/60 text-sm font-light">30-minute consultation</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-6 h-6 text-[#c9a961]" />
                    </div>
                    <h3 className="text-white font-medium mb-2">Quick Questions</h3>
                    <p className="text-white/60 text-sm font-light">Get answers fast</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-[#c9a961]" />
                    </div>
                    <h3 className="text-white font-medium mb-2">Partnership Inquiries</h3>
                    <p className="text-white/60 text-sm font-light">support@onetechautomation.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <ContactForm />

          {/* Info Section */}
          <section className="py-24 bg-[#faf8f5]">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-serif font-light text-[#1a1a1a] mb-8">
                  What Happens <span className="text-[#c9a961] font-normal">Next?</span>
                </h2>

                <div className="space-y-6 text-left">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-serif font-light text-[#1a1a1a] mb-3">
                      1. Discovery Call
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      We'll discuss your ecommerce store, current challenges, and automation goals. This typically takes 30 minutes.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-serif font-light text-[#1a1a1a] mb-3">
                      2. Custom Proposal
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      We'll design a tailored automation system for your specific needs—cart recovery, support, multi-channel engagement.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-serif font-light text-[#1a1a1a] mb-3">
                      3. Implementation
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Most stores go live in 7-14 days. We handle the technical setup, you focus on running your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}