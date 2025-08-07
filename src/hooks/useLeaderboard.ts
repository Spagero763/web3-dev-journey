// hooks/useLeaderboard.ts
import { useContractRead } from 'wagmi'
import { CONTRACTS } from '@/lib/contracts'

export function useTopBuilder() {
  return useContractRead({
    address: CONTRACTS.leaderboard.address as `0x${string}`,
    abi: CONTRACTS.leaderboard.abi,
    functionName: 'getTopBuilder',
  })
}

export function useBuilder(address: `0x${string}`) {
  return useContractRead({
    address: CONTRACTS.leaderboard.address as `0x${string}`,
    abi: CONTRACTS.leaderboard.abi,
    functionName: 'getBuilder',
    args: [address],
  })
}
