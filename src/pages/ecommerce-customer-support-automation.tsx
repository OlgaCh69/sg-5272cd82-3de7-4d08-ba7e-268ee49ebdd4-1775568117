import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SupportHero } from "@/components/support/SupportHero";
import { SupportProblem } from "@/components/support/SupportProblem";
import { SupportSolution } from "@/components/support/SupportSolution";
import { SupportBenefits } from "@/components/support/SupportBenefits";
import { WhatCanBeAutomated } from "@/components/support/WhatCanBeAutomated";
import { MultiChannelSupport } from "@/components/support/MultiChannelSupport";
import { ResponseTimeImpact } from "@/components/support/ResponseTimeImpact";
import { SupportHowItWorks } from "@/components/support/SupportHowItWorks";
import { SupportWhoItsFor } from "@/components/support/SupportWhoItsFor";
import { SupportDifferentiation } from "@/components/support/SupportDifferentiation";
import { SupportSocialProof } from "@/components/support/SupportSocialProof";
import { SupportROI } from "@/components/support/SupportROI";
import { Investment } from "@/components/Investment";
import { SupportFAQ } from "@/components/support/SupportFAQ";
import { ContactForm } from "@/components/ContactForm";
import { SupportFinalCTA } from "@/components/support/SupportFinalCTA";

export default function EcommerceCustomerSupportAutomation() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ecommerce customer support automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ecommerce customer support automation uses AI to handle customer inquiries, order issues, shipping questions, returns, and product support automatically across multiple channels (WhatsApp, Instagram, Telegram, email). It responds instantly 24/7 without human intervention."
        }
      },
      {
        "@type": "Question",
        "name": "What types of support questions can it handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The AI can handle order tracking, shipping updates, return/exchange requests, product questions, sizing inquiries, payment issues, account management, and general FAQs. It escalates complex cases to human agents when needed."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work across multiple channels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our support automation works on WhatsApp, Instagram DM, Telegram, email, and website chat—all from one unified system. Customers get consistent, instant support regardless of where they reach out."
        }
      },
      {
        "@type": "Question",
        "name": "Can it access order information?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The AI integrates with your ecommerce platform (Shopify, WooCommerce, etc.) to access real-time order data, inventory levels, shipping status, and customer history to provide accurate, personalized support."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it reduce support costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most ecommerce stores reduce support costs by 50-70% while improving response times from hours to seconds. The AI handles 70-85% of inquiries automatically, freeing your team to focus on complex issues and high-value customers."
        }
      },
      {
        "@type": "Question",
        "name": "How long does implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Setup typically takes 2-4 weeks depending on complexity. We integrate with your platforms, train the AI on your products and policies, set up multi-channel support, test thoroughly, and launch. Our team handles all technical setup."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Ecommerce Customer Support Automation | AI Multi-Channel Support 24/7"
        description="Automate ecommerce customer support with AI. Handle orders, shipping, returns, and product questions instantly across WhatsApp, Instagram, Telegram, and email."
        url="https://onetechautomation.com/ecommerce-customer-support-automation"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="bg-[#0a0a0a]">
        <SupportHero />
        <SupportProblem />
        <SupportSolution />
        <SupportBenefits />
        <WhatCanBeAutomated />
        <MultiChannelSupport />
        <ResponseTimeImpact />
        <SupportHowItWorks />
        <SupportWhoItsFor />
        <SupportDifferentiation />
        <SupportSocialProof />
        <SupportROI />
        <Investment />
        <SupportFAQ />
        <ContactForm />
        <SupportFinalCTA />
      </main>
      <Footer />
    </>
  );
}