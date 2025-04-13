import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618424154270-47995a6e3819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&quot')] bg-cover bg-center opacity-30"
        style={{ filter: 'blur(5px)' }}
      ></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6">From Vision to Global Impact</h1>
        <p className="text-lg mb-8">
          We are a boutique consulting firm helping companies turn ideas into scalable, secure, and future-proof solutions.
        </p>
        <Link href="/#ai-consultation">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </section>
  );
};
