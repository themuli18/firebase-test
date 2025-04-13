"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="mb-4">
            RMBG is a boutique advisory and development firm based in Amsterdam,
            The Netherlands. For over a decade, we've been helping companies turn
            ideas into scalable, secure, and future-proof solutions.
          </p>
          <p className="mb-4">
            We specialize in identifying disruption potential—whether through new
            technologies, business models, or user experiences—and rapidly
            translating it into prototypes, hardware, AI models, and commercial
            products.
          </p>
          <p className="mb-4">We don't just advise. We build.</p>
          <p>
            Our clients range from global corporations and mission-driven NGOs to
            ambitious startups. Our work spans industries such as consumer
            electronics, industrial hardware, AI, cybersecurity, and
            sustainability.
          </p>
          <p className="mt-4">
            <em>
              "From early-stage R&D to full product development and go-to-market
              execution, we partner closely with your team to make innovation
              real."
            </em>
          </p>
          <div className="flex items-center mt-4">
            <Avatar className="mr-4">
              <AvatarImage src="https://picsum.photos/id/222/50/50" alt="Aike Müller" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Aike Müller</p>
              <p className="text-sm">Founder and CEO</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="About RMBG"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
