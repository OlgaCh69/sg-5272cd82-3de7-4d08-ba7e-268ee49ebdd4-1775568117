import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Moon } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 glass-card">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
              O
            </div>
            <div>
              <div className="font-heading font-bold text-xl text-foreground">
                O.N.E.Tech
              </div>
              <div className="text-xs text-muted-foreground tracking-wider">
                AUTOMATE • ENGAGE • GROW
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#examples"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Examples
            </Link>
            <Link
              href="#faq"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Globe className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Moon className="h-4 w-4" />
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-button font-medium">
              Get Your Bot Demo
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}