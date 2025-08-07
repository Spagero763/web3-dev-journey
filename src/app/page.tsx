import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Code2 } from "lucide-react";
import SubmitProof from "@/components/SubmitProof";
import Leaderboard from "@/components/Leaderboard";
import ClaimReputation from "@/components/ClaimReputation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <Code2 className="h-6 w-6 mr-2 text-primary" />
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold sm:inline-block">
                Web3 Dev Journey
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <ConnectButton />
          </div>
        </div>
      </header>
      <main className="flex-1 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Proof of Build 🧱
        </h1>
        <SubmitProof />
        <Leaderboard />
        <ClaimReputation />
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Built for your Web3 developer journey.
          </p>
        </div>
      </footer>
    </div>
  );
}
