// lib/contracts.ts

import ReputationTokenABI from '@/abi/ReputationToken.json'
import ProofOfBuildABI from '@/abi/ProofOfBuild.json'
import LeaderboardABI from '@/abi/LeaderboardManager.json'

export const CONTRACTS = {
  reputationToken: {
    address: '0x73a93b3b4273BeBaeE530f9F037Bf111CeCc31F2',
    abi: ReputationTokenABI,
  },
  proofOfBuild: {
    address: '0x0Dcbdd09C92e8Cf449e3bf058b7Bd50b0677268a',
    abi: ProofOfBuildABI,
  },
  leaderboard: {
    address: '0xE26B41F1A90B140eFC08D3204d453DAD74c34839',
    abi: LeaderboardABI,
  },
};

export const LEADERBOARD_CONTRACT = CONTRACTS.leaderboard;
export const PROOF_OF_BUILD_CONTRACT = CONTRACTS.proofOfBuild;
export const REPUTATION_TOKEN_CONTRACT = CONTRACTS.reputationToken;
