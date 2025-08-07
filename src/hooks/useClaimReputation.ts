// hooks/useClaimReputation.ts
import { useContractWrite } from 'wagmi'
import { CONTRACTS } from '@/lib/contracts'

export function useClaimReputation() {
  const { write, data, isLoading, isSuccess, error } = useContractWrite({
    address: CONTRACTS.reputationToken.address as `0x${string}`,
    abi: CONTRACTS.reputationToken.abi,
    functionName: 'mintReputation',
  })

  return {
    claimReputation: write,
    data,
    isLoading,
    isSuccess,
    error,
  }
}
