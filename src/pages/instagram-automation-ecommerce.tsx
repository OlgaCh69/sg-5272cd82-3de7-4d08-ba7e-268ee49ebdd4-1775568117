import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstagramHero } from "@/components/instagram/InstagramHero";
import { InstagramProblem } from "@/components/instagram/InstagramProblem";
import { InstagramSolution } from "@/components/instagram/InstagramSolution";
import { InstagramBenefits } from "@/components/instagram/InstagramBenefits";
import { CommentAutomation } from "@/components/instagram/CommentAutomation";
import { DMAutomation } from "@/components/instagram/DMAutomation";
import { InstagramUseCases } from "@/components/instagram/InstagramUseCases";
import { InstagramCustomerJourney } from "@/components/instagram/InstagramCustomerJourney";
import { InstagramHowItWorks } from "@/components/instagram/InstagramHowItWorks";
import { InstagramWhoItsFor } from "@/components/instagram/InstagramWhoItsFor";
import { InstagramDifferentiation } from "@/components/instagram/InstagramDifferentiation";
import { InstagramSocialProof } from "@/components/instagram/InstagramSocialProof";
import { InstagramROI } from "@/components/instagram/InstagramROI";
import { Investment } from "@/components/Investment";
import { InstagramFAQ } from "@/components/instagram/InstagramFAQ";
import { ContactForm } from "@/components/ContactForm";
import { InstagramFinalCTA } from "@/components/instagram/InstagramFinalCTA";

export default function InstagramAutomationEcommerce() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Instagram automation for ecommerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Instagram automation for ecommerce uses AI to automatically respond to comments, DMs, and inquiries on your Instagram account. It can answer product questions, handle orders, provide support, and guide followers to purchase—all while maintaining your brand voice."
        }
      },
      {
        "@type": "Question",
        "name": "Can it respond to Instagram comments automatically?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The AI monitors your posts and responds to comments in real-time. It can answer questions, provide product links, handle objections, and engage with your audience 24/7 without manual intervention."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work with Instagram DMs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The system handles Instagram Direct Messages automatically, responding to inquiries about products, orders, shipping, and support. It can also initiate conversations based on triggers like story replies or product tags."
        }
      },
      {
        "@type": "Question",
        "name": "How does it integrate with my ecommerce store?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We connect your Instagram Business account to your Shopify, WooCommerce, or other ecommerce platform. This allows the AI to access product information, inventory levels, and order data to provide accurate, helpful responses."
        }
      },
      {
        "@type": "Question",
        "name": "What results can I expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most ecommerce brands see 20-35% more conversions from Instagram traffic, 50-70% reduction in response time, and significant increases in follower engagement. The AI captures sales opportunities that would otherwise be lost to slow or missed responses."
        }
      },
      {
        "@type": "Question",
        "name": "How long does setup take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Setup typically takes 2-3 weeks. We connect your Instagram Business account, integrate with your ecommerce platform, train the AI on your products and brand voice, and test the automation before going live."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Instagram Automation for Ecommerce | AI Comment & DM Management"
        description="Automate your Instagram for ecommerce with AI. Respond to comments and DMs instantly, convert followers to customers, and never miss a sale opportunity."
        url="https://onetechautomation.com/instagram-automation-ecommerce"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="bg-[#0a0a0a]">
        <InstagramHero />
        <InstagramProblem />
        <InstagramSolution />
        <InstagramBenefits />
        <CommentAutomation />
        <DMAutomation />
        <InstagramUseCases />
        <InstagramCustomerJourney />
        <InstagramHowItWorks />
        <InstagramWhoItsFor />
        <InstagramDifferentiation />
        <InstagramSocialProof />
        <InstagramROI />
        <Investment />
        <InstagramFAQ />
        <ContactForm />
        <InstagramFinalCTA />
      </main>
      <Footer />
    </>
  );
}