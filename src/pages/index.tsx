import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Investment } from "@/components/Investment";
import { Trust } from "@/components/Trust";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { UseCases } from "@/components/UseCases";
import { Results } from "@/components/Results";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <UseCases />
        <Results />
        <HowItWorks />
        <Investment />
        <Trust />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}