export const DEV_IDENTITY_CONTRACT = {
  address: "0xE26B41F1A90B140eFC08D3204d453DAD74c34839",
  abi: [
    {
      inputs: [
        { internalType: "string", name: "_farcasterUsername", type: "string" },
        { internalType: "string", name: "_githubUsername", type: "string" },
      ],
      name: "claimIdentity",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
} as const;

export const PROOF_OF_BUILD_CONTRACT = {
  address: "0x0Dcbdd09C92e8Cf449e3bf058b7Bd50b0677268a",
  abi: [
    {
      inputs: [{ internalType: "string", name: "repoUrl", type: "string" }],
      name: "submitProof",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
} as const;

export const REPUTATION_TOKEN_CONTRACT = {
  address: "0x73a93b3b4273BeBaeE530f9F037Bf111CeCc31F2",
  abi: [
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
  ],
} as const;
