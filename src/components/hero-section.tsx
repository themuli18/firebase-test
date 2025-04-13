
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">From Vision to Global Impact</h1>
        <p className="text-lg mb-8">
          Curious what disruption looks like—done right? Let's build something
          extraordinary together.
        </p>
        <Button size="lg">Learn More</Button>
      </div>
    </section>
  );
};
