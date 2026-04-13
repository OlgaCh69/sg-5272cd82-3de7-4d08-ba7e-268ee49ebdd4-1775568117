import Link from "next/link";
import { Mail } from "lucide-react";
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
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                src="/onetech-logo.png" 
                alt="OneTech Automation Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-foreground">OneTech Automation</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              AI chatbot and automation platform for high-growth ecommerce brands. Turn conversations into predictable revenue.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:support@onetechautomation.com" className="hover:text-foreground transition-colors">
                  support@onetechautomation.com
                </a>
              </div>
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
              © 2023 OneTech Automation. All rights reserved.
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