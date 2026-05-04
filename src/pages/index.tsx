import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Positioning } from "@/components/Positioning";
import { RevenueProblem } from "@/components/RevenueProblem";
import { RevenueSolution } from "@/components/RevenueSolution";
import { RevenueServices } from "@/components/RevenueServices";
import { RevenueFeatures } from "@/components/RevenueFeatures";
import { RevenueResults } from "@/components/RevenueResults";
import { RevenueBeforeAfter } from "@/components/RevenueBeforeAfter";
import { RevenueHowItWorks } from "@/components/RevenueHowItWorks";
import { RevenueIndustries } from "@/components/RevenueIndustries";
import { BlogPreview } from "@/components/BlogPreview";
import { ContactForm } from "@/components/ContactForm";
import { RevenueFinalCTA } from "@/components/RevenueFinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO 
        title="AI Revenue Systems That Turn Conversations Into Sales | O.N.E.Tech Automation"
        description="We don't build basic automation. We build AI systems that capture leads, book clients, and recover lost revenue across your website, WhatsApp, and Instagram."
        image="/og-image.png"
      />
      <Header />
      <main>
        <Hero />
        <Positioning />
        <RevenueProblem />
        <RevenueSolution />
        <RevenueServices />
        <RevenueFeatures />
        <RevenueResults />
        <RevenueBeforeAfter />
        <RevenueHowItWorks />
        <RevenueIndustries />
        <BlogPreview />
        <ContactForm />
        <RevenueFinalCTA />
      </main>
    </>
  );
}