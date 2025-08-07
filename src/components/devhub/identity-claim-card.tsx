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
import { LEADERBOARD_CONTRACT } from "@/lib/contracts";
import { useToast } from "@/hooks/use-toast";
import { Github, User, Loader2 } from "lucide-react";

export function IdentityClaimCard() {
  const { isConnected } = useAccount();
  const [farcaster, setFarcaster] = useState("");
  const [github, setGithub] = useState("");
  const { toast } = useToast();

  const {
    data: hash,
    writeContract,
    isPending: isClaiming,
    error,
  } = useWriteContract({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Transaction Sent",
          description: "Your identity claim has been submitted.",
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

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const handleClaimIdentity = () => {
    if (!farcaster || !github) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please provide both Farcaster and GitHub usernames.",
      });
      return;
    }
    writeContract({
      ...LEADERBOARD_CONTRACT,
      functionName: "claimIdentity",
      args: [farcaster, github],
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Claim Your Dev Identity</CardTitle>
        <CardDescription>
          Link your Farcaster and GitHub profiles to start building your on-chain
          reputation.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="farcaster">Farcaster Username</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="farcaster"
              placeholder="e.g., vitalik"
              value={farcaster}
              onChange={(e) => setFarcaster(e.target.value)}
              disabled={isClaiming || isConfirming}
              className="pl-10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="github">GitHub Username</Label>
          <div className="relative">
            <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="github"
              placeholder="e.g., satoru-nakamoto"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              disabled={isClaiming || isConfirming}
              className="pl-10"
            />
          </div>
        </div>
        <Button
          onClick={handleClaimIdentity}
          disabled={!isConnected || isClaiming || isConfirming}
        >
          {isConfirming ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Confirming...
            </>
          ) : isClaiming ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Claiming...
            </>
          ) : (
            "Claim Identity"
          )}
        </Button>
        {isConfirmed && (
          <p className="text-sm text-green-600">
            Successfully claimed identity!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
