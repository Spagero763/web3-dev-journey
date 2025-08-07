// components/ClaimReputation.tsx
'use client'

import { useReputationMint } from '@/hooks/useReputation'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { parseEther } from 'viem'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export default function ClaimReputation() {
  const [amount, setAmount] = useState('')
  const { toast } = useToast();
  const { mintReputation, isPending, isSuccess, error } = useReputationMint({
    onSuccess: () => {
      toast({
        title: "Reputation Claimed!",
        description: `Successfully minted ${amount} reputation tokens.`,
      });
    },
    onError: (err) => {
       toast({
        variant: "destructive",
        title: "Claim Failed",
        description: err.message,
      });
    }
  })
  const { address } = useAccount()

  const handleClaim = () => {
    if (!amount || !address) return
    const amountInWei = parseEther(amount);
    mintReputation({ args: [address, amountInWei] })
  }

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Claim Reputation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount to claim"
          />
          <Button
            onClick={handleClaim}
            disabled={isPending || !address}
            className="w-full transition"
          >
            {isPending ? 'Claiming...' : 'Claim Reputation'}
          </Button>
          {isSuccess && (
            <p className="mt-2 text-green-600">Reputation claimed successfully!</p>
          )}
          {error && (
            <p className="mt-2 text-red-600">Error: {(error as any).shortMessage || (error as any).message}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
