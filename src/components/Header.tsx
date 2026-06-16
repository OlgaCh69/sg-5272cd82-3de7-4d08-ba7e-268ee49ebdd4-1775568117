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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 glass-panel backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/onetech-logo.png" 
              alt="O.N.E.Tech Logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">O.N.E.Tech</span>
              <span className="text-xs text-muted-foreground">AI Infrastructure</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/solutions" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Solutions
            </Link>
            <Link 
              href="/industries" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Industries
            </Link>
            <Link 
              href="/infrastructure" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Infrastructure
            </Link>
            <Link 
              href="/founder" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Founder
            </Link>
            <Link 
              href="/blog" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-primary hover:bg-accent">
              <Link href="/contact">Book Executive Briefing</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                <Link href="/" className="flex items-center gap-3">
                  <Image 
                    src="/onetech-logo.png" 
                    alt="O.N.E.Tech Logo" 
                    width={40} 
                    height={40}
                    className="w-10 h-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-foreground">O.N.E.Tech</span>
                    <span className="text-xs text-muted-foreground">AI Infrastructure</span>
                  </div>
                </Link>
                
                <div className="space-y-4">
                  <Link 
                    href="/" 
                    className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/solutions" 
                    className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Solutions
                  </Link>
                  <Link 
                    href="/industries" 
                    className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Industries
                  </Link>
                  <Link 
                    href="/infrastructure" 
                    className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Infrastructure
                  </Link>
                  <Link 
                    href="/founder" 
                    className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Founder
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                  <div className="pt-6 border-t">
                    <Button className="w-full bg-primary hover:bg-accent" asChild>
                      <Link href="/contact">
                        Book Executive Briefing
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}