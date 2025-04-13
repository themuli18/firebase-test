
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ExpertiseSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              We help you define what's next. Our strategic services blend
              technology insight with business thinking.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              Innovation is more than brainstorming—it's building. We
              specialize in AI, hardware development, and connected products.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cybersecurity</CardTitle>
            </CardHeader>
            <CardContent>
              Cybersecurity is baked into everything we do. We protect your
              ideas, your data, and your users—by design.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
