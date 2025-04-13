

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { HeroSection } from "@/components/hero-section";
import { AIConsultationSection } from "@/components/ai-consultation-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="expertise">
        <ExpertiseSection />
      </section>
      <section id="ai-consultation">
        <AIConsultationSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}

