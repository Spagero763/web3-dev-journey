# 🧱 Proof of Build Protocol

A decentralized builder reputation system on the Base Sepolia testnet that allows developers to:

- ✅ Submit GitHub project proofs
- 📊 View leaderboard of top contributors
- 🏅 Claim reputation tokens (ERC-20)

Built with **Solidity**, **Next.js**, **Wagmi**, **RainbowKit**, and **Tailwind CSS**.

---

## 🚀 Live Demo

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com)

---

## 📦 Smart Contracts

Deployed to **Base Sepolia Testnet**

| Contract | Address | Description |
|---------|---------|-------------|
| `ProofOfBuild` | `0x0Dcbdd09C92e8Cf449e3bf058b7Bd50b0677268a` | Lets builders submit GitHub repo proof |
| `LeaderboardManager` | `0xE26B41F1A90B140eFC08D3204d453DAD74c34839` | Tracks and ranks builders |
| `ReputationToken` | `0x73a93b3b4273BeBaeE530f9F037Bf111CeCc31F2` | ERC-20 mintable reputation token |

All contracts are verified on BaseScan.

---

## 🧠 Features

- Connect wallet via [RainbowKit](https://rainbowkit.com)
- Submit GitHub repo as proof of build
- Track leaderboard of contributors
- Admin-only reputation token minting (via `Ownable`)

---

## 🛠 Tech Stack

- **Frontend**: Next.js App Router, Tailwind CSS
- **Wallet Integration**: RainbowKit + Wagmi (v2)
- **Smart Contracts**: Solidity + OpenZeppelin
- **Deployment**: Vercel, Remix IDE, BaseScan

---

## 📁 Project Structure

```bash
├── app/
│   ├── page.tsx           # Homepage
│
├── components/
│   ├── SubmitProof.tsx    # Submit GitHub repo
│   ├── Leaderboard.tsx    # Display leaderboard
│   └── ClaimReputation.tsx# Mint tokens
│
├── hooks/
│   ├── useProof.ts        # ProofOfBuild hooks
│   ├── useLeaderboard.ts  # LeaderboardManager hooks
│   └── useReputation.ts   # ReputationToken hooks
│
├── public/
├── styles/
├── tailwind.config.js
├── wagmi.ts               # Wagmi config
└── README.md
```

---

## 🧪 Local Development

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

> You must have a wallet connected to **Base Sepolia**. Use [Base Faucet](https://sepoliafaucet.com/base/goerli) for test ETH.

---

## 📸 Screenshots

> Add screenshots here of each section (optional, but recommended)

---

## 🧑‍💻 Author

Built by [@Spagero](https://talentprotocol.com/spagero) for Talent Protocol's **Builder Leaderboard** 🏆

---

## 📜 License

MIT
