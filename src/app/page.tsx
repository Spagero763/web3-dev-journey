// app/page.tsx
'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useProofSubmission } from '@/hooks/useProofSubmission';
import { useTopBuilder } from '@/hooks/useLeaderboard';
import { useReputationMint } from '@/hooks/useReputation';
import { useToast } from '@/hooks/use-toast';
import { parseEther } from 'viem';

export default function Home() {
  const { isConnected, address } = useAccount();
  const { toast } = useToast();

  // State and logic for SubmitProof
  const [repo, setRepo] = useState('');
  const {
    submitProof,
    isPending: isSubmitting,
    isSuccess: isSubmitSuccess,
    error: submitError,
  } = useProofSubmission({
    onSuccess: () => {
      toast({
        title: 'Proof Submitted!',
        description: 'Your GitHub repository has been submitted.',
      });
      setRepo('');
    },
    onError: (err: any) => {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: err.shortMessage || err.message,
      });
    },
  });

  const handleSubmit = () => {
    if (!repo || !address) return;
    submitProof({ args: [repo] });
  };

  // State and logic for Leaderboard
  const { data: leaderboardData, isLoading: isLeaderboardLoading, isError: isLeaderboardError } = useTopBuilder();

  // State and logic for ClaimReputation
  const [amount, setAmount] = useState('');
  const {
    mintReputation,
    isPending: isClaiming,
    isSuccess: isClaimSuccess,
    error: claimError,
  } = useReputationMint({
    onSuccess: () => {
      toast({
        title: 'Reputation Claimed!',
        description: `Successfully minted ${amount} reputation tokens.`,
      });
      setAmount('');
    },
    onError: (err: any) => {
      toast({
        variant: 'destructive',
        title: 'Claim Failed',
        description: err.shortMessage || err.message,
      });
    },
  });

  const handleClaim = () => {
    if (!amount || !address) return;
    const amountInWei = parseEther(amount);
    mintReputation({ args: [address, amountInWei] });
  };


  return (
    <div className="min-h-screen bg-background p-6">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">🚀 Proof of Build</h1>
        <ConnectButton />
      </header>

      <main className="max-w-3xl mx-auto space-y-8">
        {/* Submit Proof */}
        <section className="bg-card text-card-foreground shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">📤 Submit Your GitHub Proof</h2>
          <input
            type="text"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            placeholder="https://github.com/your-repo"
            className="w-full border border-input rounded-lg p-3 mb-4 bg-background"
            disabled={!isConnected || isSubmitting}
          />
          <button
            onClick={handleSubmit}
            disabled={!isConnected || isSubmitting || !repo}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Proof'}
          </button>
           {isSubmitSuccess && (
            <p className="mt-2 text-green-600">Proof submitted successfully!</p>
          )}
          {submitError && (
            <p className="mt-2 text-red-600">Error: {(submitError as any).shortMessage || (submitError as any).message}</p>
          )}
        </section>

        {/* Top Builder */}
        <section className="bg-card text-card-foreground shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">🏆 Top Builder</h2>
          {isLeaderboardLoading && <p>Loading leaderboard...</p>}
          {isLeaderboardError && <div className="text-red-600 italic">Failed to load leaderboard.</div>}
          {leaderboardData && (
             <div className="text-sm break-all space-y-2">
                <div>
                  <p className="font-semibold">Address:</p> 
                  <p className="text-muted-foreground">{leaderboardData[0]}</p>
                </div>
                <div>
                  <p className="font-semibold">Points:</p>
                  <p className="text-muted-foreground">{leaderboardData[1].toString()}</p>
                </div>
              </div>
          )}
        </section>

        {/* Claim Reputation */}
        <section className="bg-card text-card-foreground shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">🎖️ Claim Reputation</h2>
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount to claim"
            className="w-full border border-input rounded-lg p-3 mb-4 bg-background"
            disabled={!isConnected || isClaiming}
          />
          <button
            onClick={handleClaim}
            disabled={!isConnected || isClaiming || !amount}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition disabled:opacity-50"
          >
            {isClaiming ? 'Claiming...' : 'Claim Reputation'}
          </button>
           {isClaimSuccess && (
            <p className="mt-2 text-green-600">Reputation claimed successfully!</p>
          )}
          {claimError && (
            <p className="mt-2 text-red-600">Error: {(claimError as any).shortMessage || (claimError as any).message}</p>
          )}
        </section>
      </main>

      <footer className="text-center mt-12 text-sm text-muted-foreground">
        Built for your Web3 developer journey.
      </footer>
    </div>
  );
}
