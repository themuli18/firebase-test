"use client";

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { HeroSection } from "@/components/hero-section";
import { AIConsultationSection } from "@/components/ai-consultation-section";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <div className="flex-grow">
        <section id="about" className="py-16">
          <AboutSection />
        </section>
        <section id="expertise" className="py-16 bg-secondary">
          <ExpertiseSection />
        </section>
        <section id="ai-consultation" className="py-16">
          <AIConsultationSection />
        </section>
        <section id="contact" className="py-16 bg-secondary">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}

