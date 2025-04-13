"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="glass-effect py-4 shadow-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold text-gradient">
          RMBG Digital Consulting
        </Link>
        <div className="hidden md:space-x-6 md:flex">
          <Link 
            href="/#about" 
            className={`hover:text-accent transition-colors duration-200 ${
              pathname === '/#about' ? 'text-accent font-medium' : 'text-foreground'
            }`}
          >
            About
          </Link>
          <Link 
            href="/#expertise" 
            className={`hover:text-accent transition-colors duration-200 ${
              pathname === '/#expertise' ? 'text-accent font-medium' : 'text-foreground'
            }`}
          >
            Expertise
          </Link>
          <Link 
            href="/#ai-consultation" 
            className={`hover:text-accent transition-colors duration-200 ${
              pathname === '/#ai-consultation' ? 'text-accent font-medium' : 'text-foreground'
            }`}
          >
            Get Started
          </Link>
          <Link 
            href="/#contact" 
            className={`hover:text-accent transition-colors duration-200 ${
              pathname === '/#contact' ? 'text-accent font-medium' : 'text-foreground'
            }`}
          >
            Contact Us
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="hover:bg-accent/10">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="glass-effect">
            <SheetHeader>
              <SheetTitle className="text-gradient">RMBG Digital Consulting</SheetTitle>
              <SheetDescription className="text-muted-foreground">
                Explore our services and get in touch.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link 
                href="/#about" 
                className="hover:text-accent transition-colors duration-200 block py-2 text-foreground"
              >
                About
              </Link>
              <Link 
                href="/#expertise" 
                className="hover:text-accent transition-colors duration-200 block py-2 text-foreground"
              >
                Expertise
              </Link>
              <Link
                href="/#ai-consultation"
                className="hover:text-accent transition-colors duration-200 block py-2 text-foreground"
              >
                Get Started
              </Link>
              <Link 
                href="/#contact" 
                className="hover:text-accent transition-colors duration-200 block py-2 text-foreground"
              >
                Contact Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export { NavigationBar };

