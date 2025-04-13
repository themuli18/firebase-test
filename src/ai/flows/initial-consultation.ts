'use server';
/**
 * @fileOverview An AI-powered initial consultation flow that analyzes user-submitted business challenges
 * and provides preliminary strategic insights and potential solutions based on RMBG's expertise.
 *
 * - initialConsultation - A function that handles the initial consultation process.
 * - InitialConsultationInput - The input type for the initialConsultation function.
 * - InitialConsultationOutput - The return type for the initialConsultation function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const InitialConsultationInputSchema = z.object({
  businessChallenge: z
    .string()
    .describe('A description of the business challenges faced by the client.'),
});
export type InitialConsultationInput = z.infer<typeof InitialConsultationInputSchema>;

const InitialConsultationOutputSchema = z.object({
  strategicInsights: z
    .string()
    .describe('Preliminary strategic insights based on the business challenges.'),
  potentialSolutions: z
    .string()
    .describe('Potential solutions based on RMBG expertise.'),
});
export type InitialConsultationOutput = z.infer<typeof InitialConsultationOutputSchema>;

export async function initialConsultation(
  input: InitialConsultationInput
): Promise<InitialConsultationOutput> {
  return initialConsultationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'initialConsultationPrompt',
  input: {
    schema: z.object({
      businessChallenge: z
        .string()
        .describe('A description of the business challenges faced by the client.'),
    }),
  },
  output: {
    schema: z.object({
      strategicInsights: z
        .string()
        .describe('Preliminary strategic insights based on the business challenges.'),
      potentialSolutions: z
        .string()
        .describe('Potential solutions based on RMBG expertise.'),
    }),
  },
  prompt: `You are a strategic consultant at RMBG, a boutique advisory and development firm.

You will analyze the client's business challenges and provide preliminary strategic insights and potential solutions based on RMBG's expertise in strategy, innovation, and cybersecurity.

Business Challenge: {{{businessChallenge}}}

Provide strategic insights and potential solutions.
`,
});

const initialConsultationFlow = ai.defineFlow<
  typeof InitialConsultationInputSchema,
  typeof InitialConsultationOutputSchema
>(
  {
    name: 'initialConsultationFlow',
    inputSchema: InitialConsultationInputSchema,
    outputSchema: InitialConsultationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
