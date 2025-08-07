import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Web3 Dev Journey",
  projectId: "a67439a3f6f1a8b13919e535a8286f56", // Replace with your WalletConnect Project ID
  chains: [sepolia],
  ssr: true,
});
