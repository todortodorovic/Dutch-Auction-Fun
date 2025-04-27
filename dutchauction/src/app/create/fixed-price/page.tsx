'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WalletConnect from '@/components/WalletConnect'
import { IconRocket } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export default function CreateFixedPricePage() {
  const router = useRouter()
  const [projectName, setProjectName] = useState('')
  const [tokenAddress, setTokenAddress] = useState('')
  const [roundType, setRoundType] = useState<'' | 'seed' | 'private' | 'public'>('')
  const [description, setDescription] = useState('')
  const [bannerUrl, setBannerUrl] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [tokenType, setTokenType] = useState("existing")
  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [tokenBalance, setTokenBalance] = useState("1000000")
  
  // Load data from localStorage on component mount
  useEffect(() => {
    const savedProjectName = localStorage.getItem('projectName')
    const savedTokenAddress = localStorage.getItem('tokenAddress')
    const savedRoundType = localStorage.getItem('roundType') as '' | 'seed' | 'private' | 'public'
    const savedDescription = localStorage.getItem('description')
    const savedBannerUrl = localStorage.getItem('bannerUrl')
    const savedLogoUrl = localStorage.getItem('logoUrl')
    const savedTokenName = localStorage.getItem('tokenName')
    const savedTokenSymbol = localStorage.getItem('tokenSymbol')
    const savedTokenBalance = localStorage.getItem('tokenBalance')
    
    if (savedProjectName) setProjectName(savedProjectName)
    if (savedTokenAddress) setTokenAddress(savedTokenAddress)
    if (savedRoundType) setRoundType(savedRoundType)
    if (savedDescription) setDescription(savedDescription)
    if (savedBannerUrl) setBannerUrl(savedBannerUrl)
    if (savedLogoUrl) setLogoUrl(savedLogoUrl)
    if (savedTokenName) setTokenName(savedTokenName)
    if (savedTokenSymbol) setTokenSymbol(savedTokenSymbol)
    if (savedTokenBalance) setTokenBalance(savedTokenBalance)
    
    // Save current step to localStorage
    localStorage.setItem('currentStep', '1')
  }, [])
  
  const roundTypes: Record<'' | 'seed' | 'private' | 'public', string> = {
    '': 'Not selected',
    'seed': 'Seed Round',
    'private': 'Private Round',
    'public': 'Public Round'
  }
  
  // For demo purposes, set some default token values when tokenAddress changes
  useEffect(() => {
    if (tokenAddress && !tokenName) {
      // This would normally be fetched from the blockchain
      setTokenName("Sample Token")
      setTokenSymbol("SMPL")
    }
  }, [tokenAddress, tokenName])
  
  // Handle the next button click
  const handleNext = () => {
    // Save all form data to localStorage
    localStorage.setItem('projectName', projectName)
    localStorage.setItem('tokenAddress', tokenAddress)
    localStorage.setItem('roundType', roundType)
    localStorage.setItem('description', description)
    localStorage.setItem('bannerUrl', bannerUrl)
    localStorage.setItem('logoUrl', logoUrl)
    localStorage.setItem('tokenName', tokenName)
    localStorage.setItem('tokenSymbol', tokenSymbol)
    localStorage.setItem('tokenBalance', tokenBalance)
    
    // Navigate to the next page
    router.push('/create/fixed-price/structure')
  }
  
  // Validate if we can proceed
  const canProceed = tokenAddress && projectName && roundType
  
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
                  <div className="w-8 h-8 rounded-full bg-gray-700/70 flex items-center justify-center">
                    <span className="text-white font-medium">2.</span>
                  </div>
                  <span className="text-gray-400">Sale Structure</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700/70 flex items-center justify-center">
                    <span className="text-white font-medium">3.</span>
                  </div>
                  <span className="text-gray-400">Sale Configuration</span>
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
          <div className="lg:col-span-2">
            <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 h-full">
              <h2 className="text-2xl font-bold text-white mb-6">Add Project Information</h2>
              <p className="text-indigo-200 mb-8">
                Enter your project details to create a Fixed Price auction.
              </p>

              <div className="space-y-8">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Project Token
                    <div className="inline-flex items-center ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter token address" 
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                    className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="mt-1 text-right text-sm text-red-500">
                    {tokenAddress ? '' : 'Token address is required'}
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Project Name</label>
                  <input 
                    type="text" 
                    placeholder="Write your project name" 
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                  />
                  <div className="mt-1 flex justify-between">
                    <span className="text-sm text-red-500">{projectName ? '' : 'Required'}</span>
                    <span className="text-sm text-indigo-300">{projectName.length} / 20</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Round Type</label>
                  <p className="text-indigo-200 text-sm mb-2">
                    Select the round type that best fits your project's current stage.
                    <Link href="#" className="ml-1 text-indigo-300 inline-flex items-center">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </p>
                  <div className="relative">
                    <select 
                      className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={roundType}
                      onChange={(e) => setRoundType(e.target.value as '' | 'seed' | 'private' | 'public')}
                    >
                      <option value="">Choose One</option>
                      <option value="seed">Seed Round</option>
                      <option value="private">Private Round</option>
                      <option value="public">Public Round</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-red-500">
                    {roundType ? '' : 'Please select a round type'}
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Short Description</label>
                  <textarea 
                    placeholder="Type here" 
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-xl py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Load Sale Banner</label>
                  <p className="text-indigo-200 text-sm mb-2">
                    Supported formats: *.jpg *.png *.webp
                    <br />
                    Images will be optimized to under 2mb.
                  </p>
                  <input 
                    type="text" 
                    placeholder="Paste URL" 
                    value={bannerUrl}
                    onChange={(e) => setBannerUrl(e.target.value)}
                    className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="mt-1 text-sm text-red-500">
                    {bannerUrl ? '' : 'Please enter a banner URL'}
                  </div>
                  <div className="mt-1 text-sm text-indigo-300">
                    Recommended Size: 1600x900
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Project Token Logo</label>
                  <input 
                    type="text" 
                    placeholder="Paste URL" 
                    value={logoUrl}
                    onChange={(e) => setLogoUrl(e.target.value)}
                    className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="mt-1 text-sm text-red-500">
                    {logoUrl ? '' : 'Please enter a logo URL'}
                  </div>
                  <div className="mt-1 text-sm text-indigo-300">
                    Recommended Size: 400x400
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex justify-between">
                <Link 
                  href="/auctions"
                  className="py-3 px-6 rounded-full border border-indigo-500 text-white hover:bg-indigo-800/50 transition-colors"
                >
                  Cancel
                </Link>
                <button 
                  onClick={handleNext}
                  disabled={!canProceed}
                  className={`py-3 px-8 rounded-full ${canProceed ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-600/50 cursor-not-allowed'} text-white transition-colors flex items-center`}
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Preview Card */}
          <div className="lg:col-span-1">
            <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Preview Project Card</h3>
              
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative">
                  <div className="h-48 w-full overflow-hidden">
                    {bannerUrl ? (
                      <Image
                        src={bannerUrl}
                        alt="Banner"
                        className="h-full w-full object-cover"
                        width={500}
                        height={200}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder-banner.jpg';
                        }}
                      />
                    ) : (
                      <div className="h-full w-full bg-indigo-900/50"></div>
                    )}
                  </div>
                  <div className="absolute -bottom-8 left-4">
                    <div className="h-16 w-16 overflow-hidden rounded-xl border-4 border-slate-900 bg-slate-900">
                      {logoUrl ? (
                        <Image
                          src={logoUrl}
                          alt="Logo"
                          className="h-full w-full object-cover"
                          width={64}
                          height={64}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/placeholder-logo.jpg';
                          }}
                        />
                      ) : (
                        <div className="h-full w-full bg-indigo-500/20"></div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="rounded-b-2xl bg-slate-900 p-4 pt-10">
                  <div className="mb-2 text-sm text-indigo-400">{roundType ? roundTypes[roundType] : 'Fixed Price'}</div>
                  <div className="mb-4 text-xl font-semibold text-white">{projectName || 'Your Project'}</div>
                  <p className="mb-4 text-sm text-slate-400 line-clamp-3">{description || 'Your project description will appear here. Make sure to provide a clear and concise explanation of your project.'}</p>
                  <div className="flex space-x-2">
                    <div className="rounded-full bg-indigo-500/10 px-6 py-2 text-sm font-medium text-indigo-400">
                      {tokenSymbol || '$TOKEN'}
                    </div>
                    <div className="rounded-full bg-emerald-500/10 px-6 py-2 text-sm font-medium text-emerald-400">
                      Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 