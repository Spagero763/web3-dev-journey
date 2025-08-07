"use client";

import { useState } from "react";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PROOF_OF_BUILD_CONTRACT } from "@/lib/contracts";
import { summarizeGithubRepo } from "@/ai/flows/github-repo-summarizer";
import { useToast } from "@/hooks/use-toast";
import { Loader2, FileCode, Sparkles, BookText } from "lucide-react";

export function ProjectSubmissionCard() {
  const { isConnected } = useAccount();
  const [repoUrl, setRepoUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [isSummarizing, setIsSummarizing] = useState(false);
  const { toast } = useToast();

  const {
    data: hash,
    writeContract,
    isPending: isSubmitting,
  } = useWriteContract({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Transaction Sent",
          description: "Your proof of build has been submitted.",
        });
      },
      onError: (err) => {
        toast({
          variant: "destructive",
          title: "Transaction Failed",
          description: err.message,
        });
      },
    },
  });

  const { isLoading: isConfirming } = useWaitForTransactionReceipt({
    hash,
    onSuccess: async () => {
      try {
        setIsSummarizing(true);
        const result = await summarizeGithubRepo({ repoUrl });
        setSummary(result.summary);
        toast({
          title: "Project Summarized!",
          description: "AI has successfully generated a summary for your repo.",
        });
      } catch (e) {
        toast({
          variant: "destructive",
          title: "AI Summarization Failed",
          description: "Could not generate a summary for the repository.",
        });
      } finally {
        setIsSummarizing(false);
      }
    },
  });

  const handleSubmitProof = () => {
    if (!repoUrl) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please provide a GitHub repository URL.",
      });
      return;
    }
    writeContract({
      ...PROOF_OF_BUILD_CONTRACT,
      functionName: "submitProof",
      args: [repoUrl],
    });
  };

  const isLoading = isSubmitting || isConfirming || isSummarizing;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Proof of Build</CardTitle>
        <CardDescription>
          Showcase your work by submitting a GitHub repository. Your contribution
          will be recorded on-chain.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="repo-url">GitHub Repository URL</Label>
          <div className="relative">
            <FileCode className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="repo-url"
              placeholder="https://github.com/user/repo"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              disabled={isLoading}
              className="pl-10"
            />
          </div>
        </div>
        <Button
          onClick={handleSubmitProof}
          disabled={!isConnected || isLoading}
        >
          {isConfirming ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Confirming Tx...
            </>
          ) : isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Project"
          )}
        </Button>

        {(isSummarizing || summary) && (
          <div className="pt-4 space-y-2">
            <h3 className="font-semibold flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-accent" />
              AI Project Summary
            </h3>
            {isSummarizing ? (
              <div className="flex items-center text-muted-foreground">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <p>Analyzing repository and generating summary...</p>
              </div>
            ) : (
              <div className="p-4 bg-muted/50 rounded-lg border text-sm flex items-start space-x-3">
                <BookText className="w-5 h-5 mt-1 text-primary shrink-0" />
                <p className="text-muted-foreground">{summary}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
