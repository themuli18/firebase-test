
"use client";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {useToast} from "@/hooks/use-toast";
import {initialConsultation} from "@/ai/flows/initial-consultation";
import {useState} from "react";

export const AIConsultationSection = () => {
  const {toast} = useToast();
  const [businessChallenge, setBusinessChallenge] = useState("");
  const [strategicInsights, setStrategicInsights] = useState<string | null>(null);
  const [potentialSolutions, setPotentialSolutions] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const result = await initialConsultation({businessChallenge});
      setStrategicInsights(result.strategicInsights);
      setPotentialSolutions(result.potentialSolutions);
      toast({
        title: "AI Consultation Complete",
        description: "Check out the insights and solutions below.",
      });
    } catch (error: any) {
      console.error("AI Consultation Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error.message || "Failed to get AI Consultation. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">AI-Driven Initial Consultation</h2>
        <p className="mb-4">
          Describe your business challenges, and our AI will provide preliminary strategic
          insights and potential solutions based on RMBG's expertise.
        </p>
        <div className="space-y-4">
          <Textarea
            placeholder="Enter your business challenges here..."
            rows={4}
            value={businessChallenge}
            onChange={e => setBusinessChallenge(e.target.value)}
            disabled={isLoading}
          />
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Consulting..." : "Get Initial Consultation"}
          </Button>
          {strategicInsights && potentialSolutions && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Strategic Insights:</h3>
              <p className="mb-4">{strategicInsights}</p>
              <h3 className="text-xl font-semibold mb-2">Potential Solutions:</h3>
              <p>{potentialSolutions}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
