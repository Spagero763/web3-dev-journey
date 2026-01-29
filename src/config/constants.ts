export const CHAIN_IDS = {
  MAINNET: 1,
  GOERLI: 5,
  SEPOLIA: 11155111,
  POLYGON: 137,
  POLYGON_MUMBAI: 80001,
  ARBITRUM: 42161,
  OPTIMISM: 10,
  BASE: 8453,
} as const;

export const RPC_ENDPOINTS: Record<number, string> = {
  [CHAIN_IDS.MAINNET]: 'https://eth.llamarpc.com',
  [CHAIN_IDS.SEPOLIA]: 'https://sepolia.drpc.org',
  [CHAIN_IDS.POLYGON]: 'https://polygon.llamarpc.com',
  [CHAIN_IDS.ARBITRUM]: 'https://arbitrum.llamarpc.com',
  [CHAIN_IDS.OPTIMISM]: 'https://optimism.llamarpc.com',
  [CHAIN_IDS.BASE]: 'https://base.llamarpc.com',
};

export const BLOCK_EXPLORERS: Record<number, string> = {
  [CHAIN_IDS.MAINNET]: 'https://etherscan.io',
  [CHAIN_IDS.SEPOLIA]: 'https://sepolia.etherscan.io',
  [CHAIN_IDS.POLYGON]: 'https://polygonscan.com',
  [CHAIN_IDS.ARBITRUM]: 'https://arbiscan.io',
  [CHAIN_IDS.OPTIMISM]: 'https://optimistic.etherscan.io',
  [CHAIN_IDS.BASE]: 'https://basescan.org',
};

export const NATIVE_TOKENS: Record<number, { symbol: string; decimals: number }> = {
  [CHAIN_IDS.MAINNET]: { symbol: 'ETH', decimals: 18 },
  [CHAIN_IDS.POLYGON]: { symbol: 'MATIC', decimals: 18 },
  [CHAIN_IDS.ARBITRUM]: { symbol: 'ETH', decimals: 18 },
  [CHAIN_IDS.OPTIMISM]: { symbol: 'ETH', decimals: 18 },
  [CHAIN_IDS.BASE]: { symbol: 'ETH', decimals: 18 },
};

export const APP_CONFIG = {
  name: 'Web3 Dev Journey',
  description: 'Learning Web3 development step by step',
  version: '1.0.0',
  defaultChainId: CHAIN_IDS.MAINNET,
  supportedChains: [CHAIN_IDS.MAINNET, CHAIN_IDS.POLYGON, CHAIN_IDS.ARBITRUM, CHAIN_IDS.BASE],
};
