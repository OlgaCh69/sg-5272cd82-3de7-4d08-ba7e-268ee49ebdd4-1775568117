import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppHero } from "@/components/whatsapp/WhatsAppHero";
import { WhatsAppProblem } from "@/components/whatsapp/WhatsAppProblem";
import { WhatsAppSolution } from "@/components/whatsapp/WhatsAppSolution";
import { WhatsAppBenefits } from "@/components/whatsapp/WhatsAppBenefits";
import { WhatsAppUseCases } from "@/components/whatsapp/WhatsAppUseCases";
import { AbandonedCartFocus } from "@/components/whatsapp/AbandonedCartFocus";
import { ProductQuestions } from "@/components/whatsapp/ProductQuestions";
import { WhatsAppHowItWorks } from "@/components/whatsapp/WhatsAppHowItWorks";
import { WhoItsFor } from "@/components/whatsapp/WhoItsFor";
import { WhatsAppDifferentiation } from "@/components/whatsapp/WhatsAppDifferentiation";
import { WhatsAppSocialProof } from "@/components/whatsapp/WhatsAppSocialProof";
import { WhatsAppROI } from "@/components/whatsapp/WhatsAppROI";
import { Investment } from "@/components/Investment";
import { WhatsAppFAQ } from "@/components/whatsapp/WhatsAppFAQ";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppFinalCTA } from "@/components/whatsapp/WhatsAppFinalCTA";

export default function WhatsAppAutomationEcommerce() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is WhatsApp automation for ecommerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WhatsApp automation for ecommerce uses AI to handle customer conversations on WhatsApp automatically. It can answer product questions, send cart reminders, process orders, provide shipping updates, and handle support inquiries 24/7 without human intervention."
        }
      },
      {
        "@type": "Question",
        "name": "How does WhatsApp cart recovery work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When a customer abandons their cart, our AI system automatically sends a personalized WhatsApp message within minutes. It can offer discounts, answer questions about products, and guide them back to complete their purchase—all conversationally."
        }
      },
      {
        "@type": "Question",
        "name": "Can it handle multiple customer conversations at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The AI can handle unlimited simultaneous conversations on WhatsApp, responding to each customer instantly and personally. Unlike human agents, there's no waiting in queue or delayed responses during peak hours."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work with my existing ecommerce platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our WhatsApp automation integrates with Shopify, WooCommerce, Magento, and other major ecommerce platforms. We connect to your store to access product catalogs, inventory, orders, and customer data for personalized automation."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most ecommerce stores see measurable improvements within 2-4 weeks: recovered carts increase by 15-30%, support tickets drop by 40-60%, and overall conversion rates improve as customers get instant answers when they're ready to buy."
        }
      },
      {
        "@type": "Question",
        "name": "What's the setup process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Setup typically takes 2-3 weeks. We connect to your WhatsApp Business API, integrate with your ecommerce platform, train the AI on your products and policies, test conversations, and launch. Our team handles the technical setup."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="WhatsApp Automation for Ecommerce | AI Cart Recovery & 24/7 Customer Service"
        description="Automate your ecommerce store with WhatsApp AI. Recover abandoned carts, answer product questions instantly, and provide 24/7 customer support that converts."
        url="https://onetechautomation.com/whatsapp-automation-ecommerce"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="bg-[#0a0a0a]">
        <WhatsAppHero />
        <WhatsAppProblem />
        <WhatsAppSolution />
        <WhatsAppBenefits />
        <WhatsAppUseCases />
        <AbandonedCartFocus />
        <ProductQuestions />
        <WhatsAppHowItWorks />
        <WhoItsFor />
        <WhatsAppDifferentiation />
        <WhatsAppSocialProof />
        <WhatsAppROI />
        <Investment />
        <WhatsAppFAQ />
        <ContactForm />
        <WhatsAppFinalCTA />
      </main>
      <Footer />
    </>
  );
}