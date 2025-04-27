'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import WalletConnect from '@/components/WalletConnect'

export default function SaleConfigurationPage() {
  // State for token data from first page
  const [projectName, setProjectName] = useState('')
  const [tokenName, setTokenName] = useState('')
  const [tokenSymbol, setTokenSymbol] = useState('')
  const [tokenBalance, setTokenBalance] = useState('')
  
  // Form state
  const [tokenQuantity, setTokenQuantity] = useState('')
  const [tokenPrice, setTokenPrice] = useState('')
  const [minAllocation, setMinAllocation] = useState('')
  const [maxAllocation, setMaxAllocation] = useState('')
  const [softCap, setSoftCap] = useState<'no' | 'yes'>('no')
  
  // Load data from localStorage on component mount
  useEffect(() => {
    const savedProjectName = localStorage.getItem('projectName')
    const savedTokenName = localStorage.getItem('tokenName')
    const savedTokenSymbol = localStorage.getItem('tokenSymbol')
    const savedTokenBalance = localStorage.getItem('tokenBalance')
    const savedTokenQuantity = localStorage.getItem('tokenQuantity')
    const savedTokenPrice = localStorage.getItem('tokenPrice')
    const savedMinAllocation = localStorage.getItem('minAllocation')
    const savedMaxAllocation = localStorage.getItem('maxAllocation')
    const savedSoftCap = localStorage.getItem('softCap')
    
    if (savedProjectName) setProjectName(savedProjectName)
    if (savedTokenName) setTokenName(savedTokenName)
    if (savedTokenSymbol) setTokenSymbol(savedTokenSymbol)
    if (savedTokenBalance) setTokenBalance(savedTokenBalance)
    if (savedTokenQuantity) setTokenQuantity(savedTokenQuantity)
    if (savedTokenPrice) setTokenPrice(savedTokenPrice)
    if (savedMinAllocation) setMinAllocation(savedMinAllocation)
    if (savedMaxAllocation) setMaxAllocation(savedMaxAllocation)
    if (savedSoftCap && (savedSoftCap === 'yes' || savedSoftCap === 'no')) 
      setSoftCap(savedSoftCap as 'yes' | 'no')
    
    // Save current step to localStorage
    localStorage.setItem('currentStep', '3')
  }, [])
  
  // Save form data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('tokenQuantity', tokenQuantity)
    localStorage.setItem('tokenPrice', tokenPrice)
    localStorage.setItem('minAllocation', minAllocation)
    localStorage.setItem('maxAllocation', maxAllocation)
    localStorage.setItem('softCap', softCap)
  }, [tokenQuantity, tokenPrice, minAllocation, maxAllocation, softCap])
  
  // Validate inputs
  const isTokenQuantityValid = tokenQuantity !== '' && !isNaN(Number(tokenQuantity)) && Number(tokenQuantity) > 0
  const isTokenPriceValid = tokenPrice !== '' && !isNaN(Number(tokenPrice)) && Number(tokenPrice) > 0
  const isMinAllocationValid = minAllocation !== '' && !isNaN(Number(minAllocation)) && Number(minAllocation) >= 0
  const isMaxAllocationValid = maxAllocation !== '' && !isNaN(Number(maxAllocation)) && Number(maxAllocation) > 0
  
  // Calculate the simulation values
  const simulationQuantity = isTokenQuantityValid ? Number(tokenQuantity) : 0
  const simulationPrice = isTokenPriceValid ? Number(tokenPrice) : 0
  const simulationTotal = simulationQuantity * simulationPrice
  
  // Currency preferences (these could also be set in previous steps)
  const [currency, setCurrency] = useState('USDC')
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-8">
      <div className="container mx-auto px-4">
        {/* Wallet Connect Button */}
        <div className="flex justify-end mb-6">
          <WalletConnect />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-white font-medium">1.</span>
                  </div>
                  <span className="text-white font-medium">Creation & Branding</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-white font-medium">2.</span>
                  </div>
                  <span className="text-white font-medium">Sale Structure</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-white font-medium">3.</span>
                  </div>
                  <span className="text-white font-medium">Sale Configuration</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700/70 flex items-center justify-center">
                    <span className="text-white font-medium">4.</span>
                  </div>
                  <span className="text-gray-400">Project Info</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700/70 flex items-center justify-center">
                    <span className="text-white font-medium">5.</span>
                  </div>
                  <span className="text-gray-400">Review</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Form */}
          <div className="lg:col-span-3">
            <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 h-full">
              <h2 className="text-2xl font-bold text-white mb-6">Fixed Price Sale Configuration</h2>
              <p className="text-indigo-200 mb-8">
                Configure your fixed price sale setting including the number of tokens being sold, the price per token, minimum and maximum allocations per wallet.
              </p>

              <div className="space-y-8">
                {/* Token Quantity Section */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">Token Quantity For Sale</h3>
                    <div className="text-white">
                      <span>Balance: </span>
                      <span className="font-bold">{tokenBalance || '0'}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-1">
                      <div className="relative">
                        <p className="absolute text-sm text-indigo-300 -top-6 left-2">Project Token</p>
                        <input 
                          type="text" 
                          placeholder="Enter quantity"
                          value={tokenQuantity}
                          onChange={(e) => setTokenQuantity(e.target.value)}
                          className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      {!isTokenQuantityValid && tokenQuantity !== '' && (
                        <div className="mt-1 text-red-500 text-sm">Invalid shares for sale</div>
                      )}
                    </div>
                    <div className="ml-4 bg-indigo-900/50 border border-indigo-500/30 rounded-full px-6 py-3 text-white font-medium flex items-center space-x-2">
                      <span>{tokenName || 'Token'}</span>
                      <span className="ml-2 text-xl font-bold">{tokenSymbol || ''}</span>
                    </div>
                  </div>
                </div>
                
                {/* Price Configuration */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <h3 className="text-xl font-semibold text-white mb-3">Configure Price Per ONE token</h3>
                  <p className="text-indigo-200 text-sm mb-6">Configure price for a single token</p>
                  
                  <div className="flex items-center">
                    <div className="flex-1">
                      <input 
                        type="text" 
                        placeholder="Enter price"
                        value={tokenPrice}
                        onChange={(e) => setTokenPrice(e.target.value)}
                        className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      {!isTokenPriceValid && tokenPrice !== '' && (
                        <div className="mt-1 text-red-500 text-sm">Enter a valid amount</div>
                      )}
                    </div>
                    <div className="ml-4 bg-indigo-900/50 border border-indigo-500/30 rounded-full px-6 py-3 text-white font-medium flex items-center space-x-2">
                      <span>{currency}</span>
                      <div className="ml-2 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                        <span className="text-white font-bold">$</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Simulation */}
                  <div className="mt-8 text-center">
                    <p className="text-indigo-200 mb-2">Simulation based on your Quantities</p>
                    <div className="flex items-center justify-center space-x-4">
                      <span className="text-white text-lg">{simulationQuantity}</span>
                      <span className="text-white">=</span>
                      <span className="text-white text-lg">{simulationTotal}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4 mt-2">
                      <div className="flex items-center">
                        <span className="text-white mr-2">{tokenName || 'Token'}</span>
                        <span className="font-bold text-white">{tokenSymbol || ''}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                          <span className="text-white font-bold">$</span>
                        </div>
                        <span className="text-white">{currency}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Allocation Section */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <h3 className="text-xl font-semibold text-white mb-3">Minimum and Maximum Allocation Per Wallet</h3>
                  <p className="text-indigo-200 text-sm mb-6">How many tokens your users would potentially buy</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-white mb-2">Min Allocation per Wallet</p>
                      <div className="flex items-center">
                        <input 
                          type="text" 
                          placeholder="Enter minimum"
                          value={minAllocation}
                          onChange={(e) => setMinAllocation(e.target.value)}
                          className="flex-1 bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <div className="ml-4 bg-indigo-900/50 border border-indigo-500/30 rounded-full px-6 py-3 text-white font-medium flex items-center space-x-2">
                          <span>{tokenName || 'Token'}</span>
                          <span className="ml-2 text-xl font-bold">{tokenSymbol || ''}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-white mb-2">Max Allocation per Wallet</p>
                      <div className="flex items-center">
                        <input 
                          type="text" 
                          placeholder="Enter maximum"
                          value={maxAllocation}
                          onChange={(e) => setMaxAllocation(e.target.value)}
                          className="flex-1 bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <div className="ml-4 bg-indigo-900/50 border border-indigo-500/30 rounded-full px-6 py-3 text-white font-medium flex items-center space-x-2">
                          <span>{tokenName || 'Token'}</span>
                          <span className="ml-2 text-xl font-bold">{tokenSymbol || ''}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Soft Cap Section */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <h3 className="text-xl font-semibold text-white mb-3">Soft Cap - Amount Raised</h3>
                  
                  <div className="flex space-x-4 mb-6">
                    <button 
                      className={`rounded-full px-8 py-3 font-medium ${softCap === 'no' ? 'bg-indigo-600 text-white' : 'bg-indigo-900/50 text-indigo-300 border border-indigo-500/30'}`}
                      onClick={() => setSoftCap('no')}
                    >
                      No
                    </button>
                    <button 
                      className={`rounded-full px-8 py-3 font-medium ${softCap === 'yes' ? 'bg-indigo-600 text-white' : 'bg-indigo-900/50 text-indigo-300 border border-indigo-500/30'}`}
                      onClick={() => setSoftCap('yes')}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex justify-between">
                <Link 
                  href="/create/fixed-price/structure"
                  className="py-3 px-6 rounded-full border border-indigo-500 text-white hover:bg-indigo-800/50 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back
                </Link>
                <Link 
                  href="/create/fixed-price/project-info"
                  className="py-3 px-8 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center"
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 