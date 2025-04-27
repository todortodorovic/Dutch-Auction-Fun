'use client'

import React, { useCallback, useState, useEffect } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'

export default function WalletConnect() {
  const { select, wallet, disconnect, connecting, connected, publicKey, wallets } = useWallet()
  const { setVisible } = useWalletModal()
  const [selectedWalletName, setSelectedWalletName] = useState<string | null>(null)
  
  // Open wallet extension when a wallet is selected in the modal
  useEffect(() => {
    if (selectedWalletName && wallet && !connected) {
      try {
        wallet.adapter.connect()
          .catch(error => {
            console.error('Error connecting to wallet:', error)
          })
      } catch (error) {
        console.error('Error during wallet connection:', error)
      }
    }
  }, [selectedWalletName, wallet, connected])
  
  const openWalletModal = useCallback(() => {
    setVisible(true)
  }, [setVisible])
  
  const handleDisconnect = useCallback(() => {
    disconnect().catch((error) => {
      console.error('Error disconnecting wallet:', error)
    })
    setSelectedWalletName(null)
  }, [disconnect])
  
  // Listen for wallet selection
  useEffect(() => {
    const onSelectWallet = (walletName: string) => {
      setSelectedWalletName(walletName)
    }
    
    // Add event listener for wallet selection
    const walletSelectEvent = (event: CustomEvent<string>) => {
      if (event.detail) {
        onSelectWallet(event.detail)
      }
    }
    
    window.addEventListener('wallet-select' as any, walletSelectEvent)
    
    return () => {
      window.removeEventListener('wallet-select' as any, walletSelectEvent)
    }
  }, [])
  
  // When wallet is selected via the adapter, set the selected wallet name
  useEffect(() => {
    if (wallet && wallet.adapter.name) {
      setSelectedWalletName(wallet.adapter.name)
    }
  }, [wallet])
  
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
    <button 
      onClick={openWalletModal}
      className="flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
      disabled={connecting}
    >
      <span>{connecting ? 'Connecting...' : 'Connect Wallet'}</span>
    </button>
  )
} 