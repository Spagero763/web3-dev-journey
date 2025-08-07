// lib/contracts.ts

import ReputationTokenABI from '@/abi/ReputationToken.json'
import ProofOfBuildABI from '@/abi/ProofOfBuild.json'
import LeaderboardManagerABI from '@/abi/LeaderboardManager.json'

export const REPUTATION_TOKEN_CONTRACT = {
  address: '0x73a93b3b4273BeBaeE530f9F037Bf111CeCc31F2' as const,
  abi: ReputationTokenABI,
};

export const PROOF_OF_BUILD_CONTRACT = {
  address: '0x0Dcbdd09C92e8Cf449e3bf058b7Bd50b0677268a' as const,
  abi: ProofOfBuildABI,
};

export const LEADERBOARD_CONTRACT = {
  address: '0xE26B41F1A90B140eFC08D3204d453DAD74c34839' as const,
  abi: LeaderboardManagerABI,
};
