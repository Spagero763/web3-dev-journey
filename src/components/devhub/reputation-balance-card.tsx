
"use client";

import { useAccount, useReadContract } from "wagmi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { REPUTATION_TOKEN_CONTRACT } from "@/lib/contracts";
import { Skeleton } from "@/components/ui/skeleton";
import { Medal } from "lucide-react";
import { formatUnits } from "viem";

export function ReputationBalanceCard() {
  const { address, isConnected } = useAccount();

  const { data: balance, isLoading } = useReadContract({
    ...REPUTATION_TOKEN_CONTRACT,
    functionName: "balanceOf",
    args: [address!],
    query: {
      enabled: isConnected && !!address,
      refetchInterval: 5000,
    },
  });

  const formattedBalance =
    typeof balance !== "undefined"
      ? parseFloat(formatUnits(balance, 18)).toFixed(2)
      : "0.00";

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="flex items-center text-base font-medium">
          <Medal className="w-4 h-4 mr-2 text-accent" />
          Your Reputation
        </CardTitle>
        <CardDescription>
          Your DEVREP token balance reflects your contributions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="w-3/4 h-10" />
        ) : (
          <p className="text-3xl font-bold">{formattedBalance}</p>
        )}
        <p className="text-sm text-muted-foreground">DEVREP</p>
      </CardContent>
    </Card>
  );
}
