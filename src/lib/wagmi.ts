import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { baseSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "DevHub",
  projectId: "a67439a3f6f1a8b13919e535a8286f56", // Replace with your WalletConnect Project ID
  chains: [baseSepolia],
  ssr: true,
});
