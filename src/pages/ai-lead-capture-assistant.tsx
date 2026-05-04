import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { LeadCaptureHero } from "@/components/lead-capture/LeadCaptureHero";
import { LeadCaptureProblem } from "@/components/lead-capture/LeadCaptureProblem";
import { LeadCaptureSolution } from "@/components/lead-capture/LeadCaptureSolution";
import { LeadCaptureFeatures } from "@/components/lead-capture/LeadCaptureFeatures";
import { LeadCaptureHowItWorks } from "@/components/lead-capture/LeadCaptureHowItWorks";
import { LeadCaptureUseCases } from "@/components/lead-capture/LeadCaptureUseCases";
import { LeadCaptureBenefits } from "@/components/lead-capture/LeadCaptureBenefits";
import { LeadCaptureBeforeAfter } from "@/components/lead-capture/LeadCaptureBeforeAfter";
import { LeadCapturePricing } from "@/components/lead-capture/LeadCapturePricing";
import { LeadCaptureFAQ } from "@/components/lead-capture/LeadCaptureFAQ";
import { LeadCaptureFinalCTA } from "@/components/lead-capture/LeadCaptureFinalCTA";
import Link from "next/link";

export default function LeadCaptureAssistant() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an AI lead capture assistant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI lead capture assistant is a smart chatbot that talks to visitors, answers questions, collects contact details, qualifies leads, and guides prospects toward booking or buying."
        }
      },
      {
        "@type": "Question",
        "name": "Can it work on WhatsApp and Instagram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The assistant can be connected to your website, WhatsApp, and Instagram DMs so all key conversations are handled instantly."
        }
      },
      {
        "@type": "Question",
        "name": "Can it remember returning visitors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The AI memory feature allows the assistant to recognize returning users and continue conversations with context."
        }
      },
      {
        "@type": "Question",
        "name": "Can it learn from my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The assistant can scrape your website content, including services, FAQs, pricing, and blogs, to answer questions accurately."
        }
      },
      {
        "@type": "Question",
        "name": "Does it replace my sales team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. It handles first replies, qualification, and basic questions so your sales team can focus on high-value conversations."
        }
      },
      {
        "@type": "Question",
        "name": "Can it send leads to my CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Qualified leads can be sent to your CRM with source, intent level, contact details, and conversation notes."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="AI Lead Capture Assistant for Website, WhatsApp & Instagram"
        description="Capture, qualify, and convert leads automatically with an AI lead capture assistant for your website, WhatsApp, and Instagram DMs."
        url="https://onetechautomation.com/ai-lead-capture-assistant"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <LeadCaptureHero />
        <LeadCaptureProblem />
        <LeadCaptureSolution />
        <LeadCaptureFeatures />
        <LeadCaptureHowItWorks />
        <LeadCaptureUseCases />
        <LeadCaptureBenefits />
        <LeadCaptureBeforeAfter />
        <LeadCapturePricing />
        <LeadCaptureFAQ />
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-[#1a2332]">Related Resources</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/ai-real-estate-automation" className="p-6 bg-[#f0f4f8] rounded-xl border border-gray-200 hover:border-[#0ea5e9] transition-all">
                  <h4 className="font-bold text-[#1a2332] mb-2">AI Real Estate Automation</h4>
                  <p className="text-sm text-gray-600">Lead capture for real estate agencies</p>
                </Link>
                <Link href="/ecommerce-customer-support-automation" className="p-6 bg-[#f0f4f8] rounded-xl border border-gray-200 hover:border-[#0ea5e9] transition-all">
                  <h4 className="font-bold text-[#1a2332] mb-2">Ecommerce Support Automation</h4>
                  <p className="text-sm text-gray-600">Automate customer support with AI</p>
                </Link>
                <Link href="/blog" className="p-6 bg-[#f0f4f8] rounded-xl border border-gray-200 hover:border-[#0ea5e9] transition-all">
                  <h4 className="font-bold text-[#1a2332] mb-2">Latest Blog Posts</h4>
                  <p className="text-sm text-gray-600">Learn more about AI automation</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
        <LeadCaptureFinalCTA />
      </main>
      <Footer />
    </>
  );
}