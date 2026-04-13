import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <nav className="hidden lg:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Platforms
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/whatsapp-automation-ecommerce" className="w-full cursor-pointer">
                    WhatsApp Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/instagram-automation-ecommerce" className="w-full cursor-pointer">
                    Instagram Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/telegram-automation-ecommerce" className="w-full cursor-pointer">
                    Telegram Automation
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link 
              href="/ai-chatbot-ecommerce" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              AI Chatbot
            </Link>
            <Link 
              href="/abandoned-cart-recovery-ecommerce" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cart Recovery
            </Link>
            <Link 
              href="/ecommerce-customer-support-automation" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </Link>
            <Link 
              href="/ecommerce-automation-case-studies" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Studies
            </Link>
            <Link 
              href="/#pricing" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild>
              <Link href="/contact">Book Your Strategy Demo</Link>
            </Button>
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
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Platforms
                    </p>
                    <Link 
                      href="/whatsapp-automation-ecommerce" 
                      className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      WhatsApp Automation
                    </Link>
                    <Link 
                      href="/instagram-automation-ecommerce" 
                      className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Instagram Automation
                    </Link>
                    <Link 
                      href="/telegram-automation-ecommerce" 
                      className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Telegram Automation
                    </Link>
                  </div>

                  <Link 
                    href="/ai-chatbot-ecommerce" 
                    className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    AI Chatbot
                  </Link>
                </div>
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
                  href="/#pricing" 
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
                <Link 
                  href="/contact" 
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
                <div className="pt-6 border-t">
                  <Button className="w-full" asChild>
                    <Link href="/contact">
                      Book Your Strategy Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}