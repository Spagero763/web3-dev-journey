// hooks/useProofSubmission.ts
import { useWriteContract } from 'wagmi'
import { PROOF_OF_BUILD_CONTRACT } from '@/lib/contracts'
import type { Abi } from 'viem';

export function useProofSubmission(options: any = {}) {
  const { writeContract, isPending, isSuccess, error, data } = useWriteContract()
  
  const submitProof = (args: any) => {
    writeContract({
      ...(PROOF_OF_BUILD_CONTRACT as { address: `0x${string}`; abi: Abi }),
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
