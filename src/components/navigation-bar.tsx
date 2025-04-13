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

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-background py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold">
          RMBG Digital Consulting
        </Link>
        <div className="hidden md:space-x-6 md:flex">
          <Link href="/#about" className={`hover:text-accent ${pathname === '/#about' ? 'text-accent' : ''}`}>
            About
          </Link>
          <Link href="/#expertise" className={`hover:text-accent ${pathname === '/#expertise' ? 'text-accent' : ''}`}>
            Expertise
          </Link>
          <Link href="/#ai-consultation" className={`hover:text-accent ${pathname === '/#ai-consultation' ? 'text-accent' : ''}`}>
            Get Started
          </Link>
          <Link href="/#contact" className={`hover:text-accent ${pathname === '/#contact' ? 'text-accent' : ''}`}>
            Contact Us
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>RMBG Digital Consulting</SheetTitle>
              <SheetDescription>
                Explore our services and get in touch.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link href="/#about" className="hover:text-accent block py-2">
                About
              </Link>
              <Link href="/#expertise" className="hover:text-accent block py-2">
                Expertise
              </Link>
              <Link
                href="/#ai-consultation"
                className="hover:text-accent block py-2"
              >
                Get Started
              </Link>
              <Link href="/#contact" className="hover:text-accent block py-2">
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
