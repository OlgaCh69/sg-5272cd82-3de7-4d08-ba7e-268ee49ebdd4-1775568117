import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50" style={{ backgroundImage: "url(\"/Screenshot_2026-04-07_at_7.52.39_PM.png\")", backgroundColor: "transparent", backgroundRepeat: "repeat-y", backgroundSize: "contain", backgroundPosition: "left center" }}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex flex-col group">
            <span className="text-2xl font-bold text-foreground">O.N.E.Tech</span>
            <span className="text-xs text-primary font-medium tracking-wider">AUTOMATE • ENGAGE • GROW</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/#investment" className="text-sm font-medium hover:text-primary transition-colors">
              Investment
            </Link>
            <Link href="/instagram-automation-ecommerce" className="text-sm font-medium hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link href="/whatsapp-automation-ecommerce" className="text-sm font-medium hover:text-primary transition-colors">
              WhatsApp
            </Link>
            <Link href="/telegram-automation-ecommerce" className="text-sm font-medium hover:text-primary transition-colors">
              Telegram
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen &&
        <div className="md:hidden mt-4 py-4 space-y-4 border-t border-border/50">
            <a href="#features" className="block text-sm hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="block text-sm hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="block text-sm hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#faq" className="block text-sm hover:text-primary transition-colors">
              FAQ
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-background font-semibold shadow-lg shadow-primary/50">
              Get Your Bot Demo
            </Button>
          </div>
        }
      </nav>
    </header>);

}