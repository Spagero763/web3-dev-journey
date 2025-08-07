# 🛠️ Builder Reputation Dashboard

A decentralized dApp to submit proof of contributions, track top builders, and claim onchain reputation — powered by three smart contracts deployed on Base Sepolia.

## 🧱 Smart Contracts

- `ProofOfBuild.sol` – Allows users to submit GitHub repo links as contributions
- `LeaderboardManager.sol` – Tracks builder scores and top contributor
- `ReputationToken.sol` – Lets users claim reputation tokens onchain

All contracts are deployed on **Base Sepolia testnet** and verified on BaseScan.

## 🌐 Live dApp

> [Visit Live App (Vercel)](https://your-dapp.vercel.app)

## 🧰 Tech Stack

- Next.js (App Router)
- TypeScript + Tailwind CSS
- RainbowKit + Wagmi
- Base Sepolia Smart Contracts
- WalletConnect (via RainbowKit)

## 📁 Project Structure

```bash
├── src/
│   ├── app/
│   │   └── page.tsx (Home layout)
│   ├── components/
│   │   ├── devhub/
│   │   │   ├── ProjectSubmissionCard.tsx
│   │   │   ├── TopBuilder.tsx
│   │   │   └── ClaimReputation.tsx
│   ├── hooks/
│   │   ├── useProofSubmission.ts
│   │   ├── useLeaderboard.ts
│   │   └── useReputation.ts
│   ├── abi/
│   │   ├── ProofOfBuild.json
│   │   ├── LeaderboardManager.json
│   │   └── ReputationToken.json
│   └── lib/
│       ├── contracts.ts
│       └── wagmi.ts
└── public/
```

## 🚀 Local Development

```bash
git clone https://github.com/yourusername/builder-dapp.git
cd builder-dapp
npm install
npm run dev
```

## 🌍 Deployment

Deployed via [Vercel](https://vercel.com) with environment:

```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_id
```

---

## 🏆 How it Works

| Feature             | Description                              |
| ------------------- | ---------------------------------------- |
| 🧾 Submit Proof     | Add your GitHub repo to earn points      |
| 🏅 Top Builder      | View the highest scoring contributor     |
| 🔓 Claim Reputation | Redeem earned points into onchain tokens |

---

## 📜 License

MIT — use it freely!
