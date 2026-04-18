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
    <footer className="bg-muted/30 border-t border-border">
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
            <h3 className="font-semibold text-foreground mb-4">Platform Solutions</h3>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
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
              <p className="text-xs text-muted-foreground mb-2 font-medium">Trusted By</p>
              <p className="text-sm text-foreground">High-Growth Ecommerce Brands</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2023 O.N.E.Tech. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/contact" 
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