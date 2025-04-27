'use client'

import { FC, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

// Import wallet adapter styles
import '@solana/wallet-adapter-react-ui/styles.css'

const WalletConnectButton: FC = () => {
  const { publicKey, connected } = useWallet()
  
  return (
    <div className="wallet-button-container">
      <WalletMultiButton className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-6 py-2 rounded-full" />
      
      <style jsx>{`
        .wallet-button-container :global(.wallet-adapter-button) {
          background-color: rgb(79 70 229);
          border-radius: 9999px;
          height: auto;
          color: white;
          font-family: inherit;
          font-size: 0.875rem;
        }
        
        .wallet-button-container :global(.wallet-adapter-button:hover) {
          background-color: rgb(67 56 202);
        }
        
        .wallet-button-container :global(.wallet-adapter-button:not([disabled]):hover) {
          background-color: rgb(67 56 202);
        }
        
        .wallet-button-container :global(.wallet-adapter-dropdown-list) {
          background-color: rgb(17 24 39);
        }
        
        .wallet-button-container :global(.wallet-adapter-dropdown-list-item) {
          color: white;
        }
        
        .wallet-button-container :global(.wallet-adapter-button-end-icon) {
          margin-left: 8px;
        }
      `}</style>
    </div>
  )
}

export default WalletConnectButton 