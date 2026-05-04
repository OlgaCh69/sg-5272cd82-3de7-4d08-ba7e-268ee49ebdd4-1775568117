import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { RealEstateHero } from "@/components/real-estate/RealEstateHero";
import { RealEstateProblem } from "@/components/real-estate/RealEstateProblem";
import { RealEstateSolution } from "@/components/real-estate/RealEstateSolution";
import { RealEstateFeatures } from "@/components/real-estate/RealEstateFeatures";
import { BeforeAfter } from "@/components/real-estate/BeforeAfter";
import { RealEstateResults } from "@/components/real-estate/RealEstateResults";
import { RealEstatePricing } from "@/components/real-estate/RealEstatePricing";
import { RealEstateFAQ } from "@/components/real-estate/RealEstateFAQ";
import { RealEstateFinalCTA } from "@/components/real-estate/RealEstateFinalCTA";

export default function RealEstateAutomation() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI real estate automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI real estate automation uses artificial intelligence to respond to leads, qualify buyers, recommend properties, schedule viewings, and update your CRM automatically. It works 24/7 to handle repetitive tasks so your agents can focus on closing deals."
        }
      },
      {
        "@type": "Question",
        "name": "Can the AI match buyers with properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The system can scan your website listings and match buyers with suitable properties based on location, budget, requirements, and preferences. It learns from your inventory and buyer conversations to make smart recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work after hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The AI agent handles inquiries 24/7, including evenings, weekends, and holidays. Buyers get instant responses regardless of when they reach out, dramatically improving your lead capture rate."
        }
      },
      {
        "@type": "Question",
        "name": "Can it connect to our CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The system can capture and sync lead details directly into your CRM. Every conversation, property interest, viewing booking, and buyer detail is automatically logged, keeping your pipeline updated without manual data entry."
        }
      },
      {
        "@type": "Question",
        "name": "Does it replace real estate agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. It handles repetitive lead intake and qualification so agents can focus on serious buyers, viewings, and closing deals. Think of it as a smart assistant that ensures no opportunity slips through the cracks."
        }
      },
      {
        "@type": "Question",
        "name": "How long does implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Setup typically takes 2-4 weeks depending on the plan. This includes AI training, CRM integration, property data import, and testing. Our team handles the technical setup so you can focus on your business."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="AI Real Estate Automation for Agencies | 24/7 Lead Capture & Property Matching"
        description="Automate your real estate agency with AI. Capture leads 24/7, qualify buyers instantly, match properties, book viewings, and sync every lead to your CRM."
        url="https://onetechautomation.com/ai-real-estate-automation"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <RealEstateHero />
        <RealEstateProblem />
        <RealEstateSolution />
        <RealEstateFeatures />
        <BeforeAfter />
        <RealEstateResults />
        <RealEstatePricing />
        <RealEstateFAQ />
        <ContactForm />
        <RealEstateFinalCTA />
      </main>
      <Footer />
    </>
  );
}