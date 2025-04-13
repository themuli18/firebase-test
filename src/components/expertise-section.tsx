import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ExpertiseSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Our Expertise</h2>
        <p className="mb-4">
          Bridging strategy, technology, and security for impactful innovation.
        </p>
        <p className="mb-4">
          <strong>Core Service Areas</strong>
        </p>
        <p className="mb-6">
          We provide end-to-end support, from initial concept validation to
          full-scale development and deployment, always with security
          integrated from the start.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI & Machine Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Developing trustworthy, explainable AI solutions tailored to
                your business needs.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Machine learning model development</li>
                <li>Explainable AI implementation</li>
                <li>Ethical AI governance frameworks</li>
                <li>AI integration with existing systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hardware & IoT Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Designing and building secure, connected hardware from
                prototype to production.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>IoT device prototyping</li>
                <li>Embedded systems design</li>
                <li>PCB design and manufacturing</li>
                <li>Production-ready hardware development</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connected Products & Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Integrating software, hardware, and connectivity for seamless
                user experiences.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Cloud-connected device development</li>
                <li>Mobile app integration</li>
                <li>Sensor fusion and data processing</li>
                <li>User experience design for connected products</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Strategy & Digital Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Guiding your organization through complex technological shifts
                and opportunities.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Digital maturity assessment</li>
                <li>Technology roadmap development</li>
                <li>Legacy system modernization</li>
                <li>Digital-first business model innovation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Build the Future?
          </h3>
          <p className="mb-4">
            Let's discuss how our expertise can accelerate your innovation
            journey. Schedule a consultation today.
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </div>
    </section>
  );
};
