import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WalletContextProvider } from "@/contexts/WalletContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dutch Auction | Transparent Auctions on Solana',
  description: 'Participate in or create Dutch auctions on Solana with complete transparency and efficiency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletContextProvider>
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}
