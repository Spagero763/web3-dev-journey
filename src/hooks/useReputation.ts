// hooks/useReputation.ts
import { useContractWrite } from 'wagmi'
import { CONTRACTS } from '@/lib/contracts'

export function useReputationMint() {
  const { write, data, isLoading, isSuccess, error } = useContractWrite({
    address: CONTRACTS.reputationToken.address as `0x${string}`,
    abi: CONTRACTS.reputationToken.abi,
    functionName: 'mint',
  })

  return {
    mintReputation: write,
    data,
    isLoading,
    isSuccess,
    error,
  }
}
