"use client";

import { useAccount } from "wagmi";
import { IdentityClaimCard } from "./identity-claim-card";
import { ProjectSubmissionCard } from "./project-submission-card";
import { ReputationBalanceCard } from "./reputation-balance-card";
import { Wallet } from "lucide-react";

export function MainDashboard() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="container py-10 flex flex-col items-center justify-center text-center">
        <Wallet className="w-16 h-16 mb-4 text-muted-foreground" />
        <h2 className="text-2xl font-bold mb-2">Connect Your Wallet</h2>
        <p className="text-muted-foreground">
          Please connect your wallet to claim your identity, submit projects, and
          view your reputation.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <IdentityClaimCard />
          <ProjectSubmissionCard />
        </div>
        <div className="lg:col-span-1">
          <ReputationBalanceCard />
        </div>
      </div>
    </div>
  );
}
