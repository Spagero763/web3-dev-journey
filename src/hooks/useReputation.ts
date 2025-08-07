// hooks/useReputation.ts
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { REPUTATION_TOKEN_CONTRACT } from '@/lib/contracts'
import type { Abi } from 'viem';
import { useAccount } from 'wagmi';

export function useClaimReputation(options: any = {}) {
  const { address } = useAccount();
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

  const claimReputation = (args: { amount: bigint }) => {
    if (!address) return;
    writeContract({
      ...(REPUTATION_TOKEN_CONTRACT as { address: `0x${string}`; abi: Abi }),
      functionName: 'mint',
      args: [address, args.amount],
    }, options)
  }

  return {
    claimReputation,
    hash,
    isSubmitting,
    isConfirming,
    isConfirmed,
    error,
  }
}
