import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Trust } from "@/components/Trust";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <SEO
        title="O.N.E.Tech - Turn Conversations Into Sales. 24/7."
        description="Create smart bots for Telegram, WhatsApp, Instagram, and more. Automate support, showcase products, and increase conversions — all in one place."
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Features />
          <HowItWorks />
          <Pricing />
          <Trust />
          <FinalCTA />
        </main>
        <footer className="py-8 px-4 border-t border-glass-border">
          <div className="container mx-auto text-center text-sm text-muted-foreground">
            <p>© 2026 O.N.E.Tech. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}