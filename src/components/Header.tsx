import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/onetech-logo.png"
              alt="O.N.E.Tech Logo"
              width={240}
              height={100}
              className="h-14 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">
              FAQ
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-background font-semibold shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all">
              Get Your Bot Demo
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
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
        )}
      </nav>
    </header>
  );
}