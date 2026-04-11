import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { Results } from "@/components/Results";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";
import { ContactForm } from "@/components/ContactForm";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <SEO 
        title="AI Chatbot for Ecommerce Brands | WhatsApp & Instagram Automation"
        description="Automate ecommerce sales with AI chatbots. Increase conversions, recover abandoned carts, and scale support across WhatsApp and Instagram."
        image="/og-image.png"
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <UseCases />
        <Results />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <section id="contact" className="scroll-mt-20">
          <ContactForm />
        </section>
        <FinalCTA />
      </main>
    </>
  );
}