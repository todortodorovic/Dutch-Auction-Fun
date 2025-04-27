'use client'

import React, { useCallback } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'

export default function DirectWalletConnect() {
  const { select, wallets, connecting, connected, publicKey, disconnect } = useWallet()
  
  // Direct connect to a specific wallet
  const connectDirectly = useCallback((walletName: string) => {
    const selectedWallet = wallets.find(w => w.adapter.name === walletName)
    if (selectedWallet) {
      select(selectedWallet.adapter.name)
      
      // Explicitly connect to the wallet
      setTimeout(() => {
        selectedWallet.adapter.connect().catch(error => {
          console.error(`Error connecting to ${walletName}:`, error)
        })
      }, 100)
    }
  }, [wallets, select])
  
  const handleDisconnect = useCallback(() => {
    disconnect().catch((error) => {
      console.error('Error disconnecting wallet:', error)
    })
  }, [disconnect])
  
  const truncatedAddress = publicKey ? 
    `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}` : 
    null

  if (connected) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-white bg-indigo-900/70 py-1 px-3 rounded-full text-sm">
          {truncatedAddress}
        </span>
        <button 
          onClick={handleDisconnect}
          className="flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-sm"
        >
          Disconnect
        </button>
      </div>
    )
  }
  
  return (
    <div className="flex space-x-2">
      <button 
        onClick={() => connectDirectly('Phantom')}
        className="flex items-center px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
        disabled={connecting}
      >
        {connecting ? 'Connecting...' : 'Phantom'}
      </button>
      
      <button 
        onClick={() => connectDirectly('Solflare')}
        className="flex items-center px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
        disabled={connecting}
      >
        {connecting ? 'Connecting...' : 'Solflare'}
      </button>
    </div>
  )
} 