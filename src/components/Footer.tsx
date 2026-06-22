import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const solutionsLinks = [
    { label: "Operational Infrastructure", href: "/solutions#operational" },
    { label: "Revenue Infrastructure", href: "/solutions#revenue" },
    { label: "Real Estate Infrastructure", href: "/solutions#real-estate" },
    { label: "Forex Infrastructure", href: "/solutions#forex" },
    { label: "Workforce Intelligence", href: "/solutions#workforce" },
  ];

  const industriesLinks = [
    { label: "Energy & Oil/Gas", href: "/industries#energy" },
    { label: "Infrastructure & Construction", href: "/industries#construction" },
    { label: "Real Estate", href: "/industries#real-estate" },
    { label: "Financial Services", href: "/industries#financial" },
    { label: "Forex Brokerage", href: "/industries#forex" },
    { label: "Government & Enterprise", href: "/industries#government" },
  ];

  const companyLinks = [
    { label: "Infrastructure Platform", href: "/infrastructure" },
    { label: "Founder", href: "/founder" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">O.N.E.Tech</h3>
              <p className="text-sm text-primary font-semibold mb-4">
                Governance-First AI Infrastructure
              </p>
              <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                Enterprise AI infrastructure for operational excellence across GCC and Cyprus. Transform fragmented operations into intelligent, governed ecosystems.
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg inline-block">
              <p className="text-xs text-muted-foreground mb-2">Serving Enterprises Across</p>
              <div className="flex flex-wrap gap-2">
                {["Cyprus", "Saudi Arabia", "UAE", "Qatar", "Bahrain", "Kuwait", "Oman"].map((country) => (
                  <span key={country} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/o.n.e.tech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/o-n-e-tech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@onetechautomation.com" 
                className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-3">
              {industriesLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 O.N.E.Tech. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/privacy-policy" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <a 
                href="/sitemap.xml" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}