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
import { Investment } from "@/components/Investment";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

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
        <Testimonials />
        <Investment />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}