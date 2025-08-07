// hooks/useProofSubmission.ts
import { useContractWrite } from 'wagmi'
import { CONTRACTS } from '@/lib/contracts'

export function useProofSubmission() {
  const { write, data, isLoading, isSuccess, error } = useContractWrite({
    address: CONTRACTS.proofOfBuild.address as `0x${string}`,
    abi: CONTRACTS.proofOfBuild.abi,
    functionName: 'submitProof',
  })

  return {
    submitProof: write,
    data,
    isLoading,
    isSuccess,
    error,
  }
}
