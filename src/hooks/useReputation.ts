// hooks/useReputation.ts
import { useWriteContract } from 'wagmi'
import { CONTRACTS } from '@/lib/contracts'

export function useReputationMint(options: any = {}) {
  const { writeContract, isPending, isSuccess, error, data } = useWriteContract()

  const mintReputation = (args: any) => {
     writeContract({
      address: CONTRACTS.reputationToken.address as `0x${string}`,
      abi: CONTRACTS.reputationToken.abi,
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
