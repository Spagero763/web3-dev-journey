'use server';

/**
 * @fileOverview A GitHub repository summarization AI agent.
 *
 * - summarizeGithubRepo - A function that handles the GitHub repository summarization process.
 * - SummarizeGithubRepoInput - The input type for the summarizeGithubRepo function.
 * - SummarizeGithubRepoOutput - The return type for the summarizeGithubRepo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeGithubRepoInputSchema = z.object({
  repoUrl: z.string().describe('The URL of the GitHub repository.'),
});
export type SummarizeGithubRepoInput = z.infer<typeof SummarizeGithubRepoInputSchema>;

const SummarizeGithubRepoOutputSchema = z.object({
  summary: z.string().describe('A short summary of the GitHub repository.'),
});
export type SummarizeGithubRepoOutput = z.infer<typeof SummarizeGithubRepoOutputSchema>;

export async function summarizeGithubRepo(input: SummarizeGithubRepoInput): Promise<SummarizeGithubRepoOutput> {
  return summarizeGithubRepoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeGithubRepoPrompt',
  input: {schema: SummarizeGithubRepoInputSchema},
  output: {schema: SummarizeGithubRepoOutputSchema},
  prompt: `You are an AI expert in summarizing GitHub repositories.

You will be given a GitHub repository URL. You will summarize the repository in a short paragraph.

Repository URL: {{{repoUrl}}}`,
});

const summarizeGithubRepoFlow = ai.defineFlow(
  {
    name: 'summarizeGithubRepoFlow',
    inputSchema: SummarizeGithubRepoInputSchema,
    outputSchema: SummarizeGithubRepoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
