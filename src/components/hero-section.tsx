"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618424154270-47995a6e3819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&quot')] bg-cover bg-center opacity-30"
        style={{ filter: "blur(5px)" }}
      ></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <Card className="max-w-3xl mx-auto glass-effect border-primary/20 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-4xl md:text-5xl font-bold transition-opacity duration-500 text-gradient">
              From Vision to Global Impact
            </CardTitle>
            <CardDescription className="text-muted-foreground text-lg md:text-xl transition-opacity duration-500 delay-200 mt-4">
              We are a boutique consulting firm helping companies turn ideas into
              scalable, secure, and future-proof solutions.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-6">
            <Link href="/#ai-consultation">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

