// hooks/useProofSubmission.ts
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { PROOF_OF_BUILD_CONTRACT } from '@/lib/contracts'
import type { Abi } from 'viem';

export function useProofSubmission(options: any = {}) {
  const { 
    writeContract, 
    data: hash, 
    isPending: isSubmitting, 
    error 
  } = useWriteContract()

  const { 
    isLoading: isConfirming, 
    isSuccess: isConfirmed 
  } = useWaitForTransactionReceipt({ hash })

  const submitProof = (args: any) => {
    writeContract({
      ...(PROOF_OF_BUILD_CONTRACT as { address: `0x${string}`; abi: Abi }),
      functionName: 'submitProof',
      ...args,
    }, options)
  }

  return {
    submitProof,
    hash,
    isSubmitting,
    isConfirming,
    isConfirmed,
    error,
  }
}
