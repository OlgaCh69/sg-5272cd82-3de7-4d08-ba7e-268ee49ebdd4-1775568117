import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const solutionsLinks = [
    { label: "WhatsApp Automation", href: "/whatsapp-automation-ecommerce" },
    { label: "Instagram Automation", href: "/instagram-automation-ecommerce" },
    { label: "Telegram Automation", href: "/telegram-automation-ecommerce" },
    { label: "AI Chatbot", href: "/ai-chatbot-ecommerce" },
  ];

  const useCasesLinks = [
    { label: "Abandoned Cart Recovery", href: "/abandoned-cart-recovery-ecommerce" },
    { label: "Customer Support", href: "/ecommerce-customer-support-automation" },
  ];

  const companyLinks = [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-border/20">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Image 
                src="/onetech-logo.png" 
                alt="O.N.E.Tech Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span>O.N.E.Tech</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered automation solutions for high-growth ecommerce brands
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://www.instagram.com/o.n.e.tech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/o-n-e-tech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/ai-real-estate-automation" className="text-gray-400 hover:text-primary transition-colors">
                    Real Estate AI Assistant
                  </Link>
                </li>
                <li>
                  <Link href="/ai-receptionist-beauty-clinic" className="text-gray-400 hover:text-primary transition-colors">
                    AI Receptionist for Beauty
                  </Link>
                </li>
                <li>
                  <Link href="/ai-lead-capture-assistant" className="text-gray-400 hover:text-primary transition-colors">
                    AI Lead Capture System
                  </Link>
                </li>
                <li>
                  <Link href="/whatsapp-automation-ecommerce" className="text-gray-400 hover:text-primary transition-colors">
                    WhatsApp Automation
                  </Link>
                </li>
                <li>
                  <Link href="/instagram-automation-ecommerce" className="text-gray-400 hover:text-primary transition-colors">
                    Instagram Automation
                  </Link>
                </li>
                <li>
                  <Link href="/telegram-automation-ecommerce" className="text-gray-400 hover:text-primary transition-colors">
                    Telegram Automation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Use Cases</h3>
            <ul className="space-y-3">
              {useCasesLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Trust Badge */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-400">
                  © 2026 O.N.E.Tech Automation. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">500+</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">Trusted by 500+ Businesses</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 O.N.E.Tech. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/privacy-policy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}