// hooks/useProofSubmission.ts
import { useWriteContract } from 'wagmi'
import { CONTRACTS } from '@/lib/contracts'

export function useProofSubmission(options: any = {}) {
  const { writeContract, data, isPending, isSuccess, error } = useWriteContract()
  
  const submitProof = (args: any) => {
    writeContract({
      address: CONTRACTS.proofOfBuild.address as `0x${string}`,
      abi: CONTRACTS.proofOfBuild.abi,
      functionName: 'submitProof',
      ...args,
    }, options)
  }

  return {
    submitProof,
    data,
    isPending,
    isSuccess,
    error,
  }
}
