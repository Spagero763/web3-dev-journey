
"use client";

import { useState } from "react";
import { useClaimReputation } from "@/hooks/useReputation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Award } from "lucide-react";
import { useAccount } from "wagmi";

export default function ClaimReputation() {
  const [amount, setAmount] = useState(0);
  const { toast } = useToast();
  const { isConnected } = useAccount();

  const { claimReputation, isSubmitting, isConfirming, isConfirmed, error } = useClaimReputation({
    onSuccess: () => {
      toast({
        title: "Transaction Sent",
        description: "Your reputation claim has been submitted.",
      });
    },
    onError: (err: Error) => {
      toast({
        variant: "destructive",
        title: "Transaction Failed",
        description: (err as any).shortMessage || err.message,
      });
    },
  });

  const handleClaim = () => {
    if (amount <= 0) {
        toast({
            variant: "destructive",
            title: "Invalid Amount",
            description: "Please enter an amount greater than zero.",
        });
        return;
    }
    claimReputation({ amount: BigInt(amount) });
  };
  
  const isLoading = isSubmitting || isConfirming;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-base font-medium">
          <Award className="w-4 h-4 mr-2 text-primary" />
          Claim Reputation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Input
            type="number"
            placeholder="Amount to claim"
            value={amount === 0 ? '' : amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            onClick={handleClaim}
            disabled={!isConnected || isLoading}
            className="w-auto"
            size="sm"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isSubmitting ? 'Claiming...' : 'Confirming...'}
              </>
            ) : (
              "Claim DEVREP"
            )}
          </Button>
        </div>
        {isConfirmed && <p className="text-green-600 text-sm">✅ Claimed successfully!</p>}
        {error && <p className="text-red-600 text-sm mt-2">❌ {(error as any).shortMessage || error.message}</p>}
      </CardContent>
    </Card>
  );
}
