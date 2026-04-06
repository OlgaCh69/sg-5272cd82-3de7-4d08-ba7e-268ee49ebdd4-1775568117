import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Trust } from "@/components/Trust";
import { ContactForm } from "@/components/ContactForm";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <SEO
        title="O.N.E.Tech - Turn Conversations Into Sales. 24/7."
        description="Create smart bots for Telegram, WhatsApp, Instagram, and more. Automate support, showcase products, and increase conversions."
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Features />
          <HowItWorks />
          <Pricing />
          <Trust />
          <ContactForm />
          <FinalCTA />
        </main>
        <footer className="border-t border-border/50 py-12 px-4">
          <div className="container mx-auto max-w-7xl text-center">
            <p className="text-sm text-muted-foreground">© 2023 O.N.E.Tech. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}