// hooks/useReputation.ts
import { useWriteContract } from 'wagmi'
import { REPUTATION_TOKEN_CONTRACT } from '@/lib/contracts'
import type { Abi } from 'viem';

export function useReputationMint(options: any = {}) {
  const { writeContract, isPending, isSuccess, error, data } = useWriteContract()

  const mintReputation = (args: any) => {
     writeContract({
      ...(REPUTATION_TOKEN_CONTRACT as { address: `0x${string}`; abi: Abi }),
      functionName: 'mint',
      ...args,
    }, options)
  }

  return {
    mintReputation,
    data,
    isPending,
    isSuccess,
    error,
  }
}
