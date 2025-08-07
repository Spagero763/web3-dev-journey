// hooks/useLeaderboard.ts
import { useReadContract } from 'wagmi'
import { LEADERBOARD_CONTRACT } from '@/lib/contracts'
import type { Abi } from 'viem';

export function useTopBuilder() {
  return useReadContract({
    ...(LEADERBOARD_CONTRACT as { address: `0x${string}`; abi: Abi }),
    functionName: 'getTopBuilder',
  })
}

export function useBuilder(address: `0x${string}`) {
  return useReadContract({
    ...(LEADERBOARD_CONTRACT as { address: `0x${string}`; abi: Abi }),
    functionName: 'getBuilder',
    args: [address],
  })
}
