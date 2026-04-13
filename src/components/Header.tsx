import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image 
              src="/onetech-logo.png" 
              alt="O.N.E.Tech Logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <span>O.N.E.Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/instagram-automation-ecommerce" className="text-sm font-medium hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link href="/ai-chatbot-ecommerce" className="text-sm font-medium hover:text-primary transition-colors">
              AI Chatbot
            </Link>
            <Link href="/abandoned-cart-recovery-ecommerce" className="text-sm font-medium hover:text-primary transition-colors">
              Cart Recovery
            </Link>
            <Link href="/ecommerce-customer-support-automation" className="text-sm font-medium hover:text-primary transition-colors">
              Support
            </Link>
            <Link href="/ecommerce-automation-case-studies" className="text-sm font-medium hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                  <Image 
                    src="/onetech-logo.png" 
                    alt="O.N.E.Tech Logo" 
                    width={40} 
                    height={40}
                    className="w-10 h-10"
                  />
                  <span>O.N.E.Tech</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  href="/#features" 
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  Features
                </Link>
                <Link 
                  href="/#pricing" 
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
                <Link 
                  href="/instagram-automation-ecommerce" 
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  Instagram Automation
                </Link>
                <Link 
                  href="/ai-chatbot-ecommerce" 
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  AI Chatbot
                </Link>
                <Link 
                  href="/abandoned-cart-recovery-ecommerce" 
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  Abandoned Cart Recovery
                </Link>
                <Link 
                  href="/ecommerce-customer-support-automation" 
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  Customer Support Automation
                </Link>
                <Link 
                  href="/ecommerce-automation-case-studies" 
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
                <Link 
                  href="/contact" 
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
                <div className="mt-4 pt-4 border-t border-border">
                  <Link href="/contact" className="w-full">
                    <Button className="w-full" size="lg">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}