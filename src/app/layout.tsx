import type { Metadata } from "next";
import "./globals.css";
import { Web3Providers } from "@/app/providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Web3 Dev Journey",
  description: "Build. Prove. Earn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={cn("font-body antialiased")}>
        <Web3Providers>
          {children}
          <Toaster />
        </Web3Providers>
      </body>
    </html>
  );
}
