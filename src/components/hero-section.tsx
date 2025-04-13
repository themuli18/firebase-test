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
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618424154270-47995a6e3819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&quot')] bg-cover bg-center opacity-30"
        style={{ filter: "blur(5px)" }}
      ></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.Card
          className="max-w-3xl mx-auto bg-background border-primary shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardHeader>
            <motion.CardTitle
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From Vision to Global Impact
            </motion.CardTitle>
            <motion.CardDescription
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We are a boutique consulting firm helping companies turn ideas into
              scalable, secure, and future-proof solutions.
            </motion.CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/#ai-consultation">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button size="lg">Get Started</Button>
              </motion.div>
            </Link>
          </CardContent>
        </motion.Card>
      </div>
    </section>
  );
};
