import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

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
        </main>
      </div>
    </>
  );
}