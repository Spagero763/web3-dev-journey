// app/page.tsx
"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IdentityClaimCard } from "@/components/devhub/identity-claim-card";
import { ProjectSubmissionCard } from "@/components/devhub/project-submission-card";
import { ReputationBalanceCard } from "@/components/devhub/reputation-balance-card";
import TopBuilder from "@/components/devhub/TopBuilder";
import ClaimReputation from "@/components/devhub/ClaimReputation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                Web3 Dev Journey
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <ConnectButton />
            </div>
          </div>
        </div>
      </header>

      <main className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        <div className="md:col-span-2 space-y-8">
          <IdentityClaimCard />
          <ProjectSubmissionCard />
        </div>
        <aside className="space-y-8">
          <ReputationBalanceCard />
          <TopBuilder />
          <ClaimReputation />
        </aside>
      </main>

      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for your Web3 developer journey.
          </p>
        </div>
      </footer>
    </div>
  );
}
