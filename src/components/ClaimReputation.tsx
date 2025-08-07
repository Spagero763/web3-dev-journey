// components/ClaimReputation.tsx
'use client'

import { useReputationMint } from '@/hooks/useReputation'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { parseEther } from 'viem'

export default function ClaimReputation() {
  const [amount, setAmount] = useState('')
  const { mintReputation, isLoading, isSuccess, error } = useReputationMint()
  const { address } = useAccount()

  const handleClaim = () => {
    if (!amount || !address) return
    // Convert amount to the appropriate format (e.g., wei)
    const amountInWei = parseEther(amount);
    mintReputation({ args: [address, amountInWei] })
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-2xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Claim Reputation</h2>
      <input
        type="number"
        min="1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount to claim"
        className="w-full p-2 border rounded mb-3"
      />
      <button
        onClick={handleClaim}
        disabled={isLoading || !address}
        className="w-full p-2 bg-black text-white rounded hover:bg-gray-800 disabled:bg-gray-400"
      >
        {isLoading ? 'Claiming...' : 'Claim Reputation'}
      </button>

      {isSuccess && (
        <p className="mt-2 text-green-600">Reputation claimed successfully!</p>
      )}
      {error && (
        <p className="mt-2 text-red-600">Error: {(error as any).message}</p>
      )}
    </div>
  )
}
