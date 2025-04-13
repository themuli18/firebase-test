"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export const ExpertiseSection = () => {
  return (
    <section className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Expertise</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Bridging strategy, technology, and security for impactful innovation.
          </p>
          <p className="text-lg font-semibold mb-4">
            Core Service Areas
          </p>
          <p className="text-lg text-muted-foreground">
            We provide end-to-end support, from initial concept validation to
            full-scale development and deployment, always with security
            integrated from the start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Card className="glass-effect hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">AI & Machine Learning</CardTitle>
              <CardDescription className="text-lg">
                Developing trustworthy, explainable AI solutions tailored to
                your business needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47a0f98185c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                alt="AI & Machine Learning"
                className="rounded-lg mb-4 h-48 object-cover shadow-md"
              />
              <ul className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground">
                <li>Machine learning model development</li>
                <li>Explainable AI implementation</li>
                <li>Ethical AI governance frameworks</li>
                <li>AI integration with existing systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-effect hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Hardware & IoT Development</CardTitle>
              <CardDescription className="text-lg">
                Designing and building secure, connected hardware from
                prototype to production.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1518770660439-464c4c52ef3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                alt="Hardware & IoT Development"
                className="rounded-lg mb-4 h-48 object-cover shadow-md"
              />
              <ul className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground">
                <li>IoT device prototyping</li>
                <li>Embedded systems design</li>
                <li>PCB design and manufacturing</li>
                <li>Production-ready hardware development</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-effect hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Connected Products & Systems</CardTitle>
              <CardDescription className="text-lg">
                Integrating software, hardware, and connectivity for seamless
                user experiences.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1560525796-e46e6103fa45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                alt="Connected Products & Systems"
                className="rounded-lg mb-4 h-48 object-cover shadow-md"
              />
              <ul className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground">
                <li>Cloud-connected device development</li>
                <li>Mobile app integration</li>
                <li>Sensor fusion and data processing</li>
                <li>User experience design for connected products</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-effect hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Strategy & Digital Transformation</CardTitle>
              <CardDescription className="text-lg">
                Guiding your organization through complex technological shifts
                and opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1542744166-e342ae66ab9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                alt="Strategy & Digital Transformation"
                className="rounded-lg mb-4 h-48 object-cover shadow-md"
              />
              <ul className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground">
                <li>Digital maturity assessment</li>
                <li>Technology roadmap development</li>
                <li>Legacy system modernization</li>
                <li>Digital-first business model innovation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Ready to Build the Future?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can accelerate your innovation
            journey. Schedule a consultation today.
          </p>
          <Link href="/#ai-consultation">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

