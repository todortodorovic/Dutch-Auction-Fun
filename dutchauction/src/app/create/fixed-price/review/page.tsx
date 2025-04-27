'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import WalletConnect from '@/components/WalletConnect'
import { IconExternalLink } from '@tabler/icons-react'

export default function ReviewPage() {
  // States for all data from previous steps
  const [projectName, setProjectName] = useState('')
  const [saleType, setSaleType] = useState('')
  const [tokenAddress, setTokenAddress] = useState('')
  const [tokenName, setTokenName] = useState('')
  const [tokenSymbol, setTokenSymbol] = useState('')
  const [tokenDecimals, setTokenDecimals] = useState(0)
  const [startPrice, setStartPrice] = useState('')
  const [endPrice, setEndPrice] = useState('')
  const [saleAmount, setSaleAmount] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [twitterHandle, setTwitterHandle] = useState('')
  const [youtubeChannel, setYoutubeChannel] = useState('')
  const [discordGroup, setDiscordGroup] = useState('')
  const [telegramGroup, setTelegramGroup] = useState('')

  // Load data from localStorage on component mount
  useEffect(() => {
    // Creation & Branding data
    const savedProjectName = localStorage.getItem('projectName')
    const savedSaleType = localStorage.getItem('saleType') || 'Fixed Price'
    const savedTokenAddress = localStorage.getItem('tokenAddress')
    const savedTokenName = localStorage.getItem('tokenName')
    const savedTokenSymbol = localStorage.getItem('tokenSymbol')
    const savedTokenDecimals = localStorage.getItem('tokenDecimals')
    
    // Sale Structure & Configuration data
    const savedStartPrice = localStorage.getItem('startPrice')
    const savedEndPrice = localStorage.getItem('endPrice')
    const savedSaleAmount = localStorage.getItem('saleAmount')
    const savedStartDate = localStorage.getItem('startDate')
    const savedEndDate = localStorage.getItem('endDate')
    
    // Project Info data
    const savedDescription = localStorage.getItem('description')
    const savedWebsiteUrl = localStorage.getItem('websiteUrl')
    const savedTwitterHandle = localStorage.getItem('twitterHandle')
    const savedYoutubeChannel = localStorage.getItem('youtubeChannel')
    const savedDiscordGroup = localStorage.getItem('discordGroup')
    const savedTelegramGroup = localStorage.getItem('telegramGroup')
    
    if (savedProjectName) setProjectName(savedProjectName)
    if (savedSaleType) setSaleType(savedSaleType)
    if (savedTokenAddress) setTokenAddress(savedTokenAddress)
    if (savedTokenName) setTokenName(savedTokenName)
    if (savedTokenSymbol) setTokenSymbol(savedTokenSymbol)
    if (savedTokenDecimals) setTokenDecimals(Number(savedTokenDecimals))
    if (savedStartPrice) setStartPrice(savedStartPrice)
    if (savedEndPrice) setEndPrice(savedEndPrice)
    if (savedSaleAmount) setSaleAmount(savedSaleAmount)
    if (savedStartDate) setStartDate(savedStartDate)
    if (savedEndDate) setEndDate(savedEndDate)
    if (savedDescription) setDescription(savedDescription)
    if (savedWebsiteUrl) setWebsiteUrl(savedWebsiteUrl)
    if (savedTwitterHandle) setTwitterHandle(savedTwitterHandle)
    if (savedYoutubeChannel) setYoutubeChannel(savedYoutubeChannel)
    if (savedDiscordGroup) setDiscordGroup(savedDiscordGroup)
    if (savedTelegramGroup) setTelegramGroup(savedTelegramGroup)

    // Save current step to localStorage
    localStorage.setItem('currentStep', '5')
  }, [])

  // Handle sale creation
  const handleCreateSale = () => {
    // Here you would implement the logic to create the sale
    console.log('Creating sale...')
    // You could redirect to a success page or dashboard after creation
  }

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
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-white font-medium">4.</span>
                  </div>
                  <span className="text-white font-medium">Project Info</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-white font-medium">5.</span>
                  </div>
                  <span className="text-white font-medium">Review</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 h-full">
              <h2 className="text-2xl font-bold text-white mb-6">Review Your Sale</h2>
              
              <div className="space-y-8">
                {/* Token & Sale Information */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <h3 className="text-xl font-semibold text-white mb-6">Token & Sale Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">Project Name</p>
                      <p className="text-white font-medium">{projectName || "Not specified"}</p>
                    </div>
                    
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">Sale Type</p>
                      <p className="text-white font-medium">{saleType}</p>
                    </div>
                    
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">Token Address</p>
                      <p className="text-white font-medium">
                        {tokenAddress ? (
                          <span className="flex items-center">
                            {`${tokenAddress.substring(0, 6)}...${tokenAddress.substring(tokenAddress.length - 4)}`}
                            <button className="ml-2 text-indigo-300 hover:text-indigo-200">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                              </svg>
                            </button>
                          </span>
                        ) : "Not specified"}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">Token Name</p>
                      <p className="text-white font-medium">{tokenName || "Not specified"}</p>
                    </div>
                    
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">Token Symbol</p>
                      <p className="text-white font-medium">{tokenSymbol || "Not specified"}</p>
                    </div>
                    
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">Token Decimals</p>
                      <p className="text-white font-medium">{tokenDecimals || "Not specified"}</p>
                    </div>
                  </div>
                </div>
                
                {/* Sale Structure & Configuration */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <h3 className="text-xl font-semibold text-white mb-6">Sale Structure & Configuration</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">Price</p>
                      <p className="text-white font-medium">{startPrice || "Not specified"}</p>
                    </div>
                    
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">Sale Amount</p>
                      <p className="text-white font-medium">{saleAmount || "Not specified"}</p>
                    </div>
                    
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">Start Date</p>
                      <p className="text-white font-medium">{startDate || "Not specified"}</p>
                    </div>
                    
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">End Date</p>
                      <p className="text-white font-medium">{endDate || "Not specified"}</p>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <h3 className="text-xl font-semibold text-white mb-6">Project Information</h3>
                  
                  <div className="mb-6">
                    <p className="text-indigo-300 text-sm mb-2">Description</p>
                    <div className="bg-indigo-900/50 border border-indigo-500/30 rounded-xl p-4 text-white">
                      {description || "No description provided."}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-white mb-4">Links</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">Website</p>
                      <p className="text-white font-medium flex items-center">
                        {websiteUrl || "Not specified"}
                        {websiteUrl && (
                          <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-300 hover:text-indigo-200">
                            <IconExternalLink size={16} />
                          </a>
                        )}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-indigo-300 text-sm mb-1">Twitter</p>
                      <p className="text-white font-medium flex items-center">
                        {twitterHandle ? `@${twitterHandle}` : "Not specified"}
                        {twitterHandle && (
                          <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-300 hover:text-indigo-200">
                            <IconExternalLink size={16} />
                          </a>
                        )}
                      </p>
                    </div>
                    
                    {youtubeChannel && (
                      <div>
                        <p className="text-indigo-300 text-sm mb-1">YouTube</p>
                        <p className="text-white font-medium flex items-center">
                          {youtubeChannel}
                          <a href={youtubeChannel} target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-300 hover:text-indigo-200">
                            <IconExternalLink size={16} />
                          </a>
                        </p>
                      </div>
                    )}
                    
                    {discordGroup && (
                      <div>
                        <p className="text-indigo-300 text-sm mb-1">Discord</p>
                        <p className="text-white font-medium flex items-center">
                          {discordGroup}
                          <a href={discordGroup} target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-300 hover:text-indigo-200">
                            <IconExternalLink size={16} />
                          </a>
                        </p>
                      </div>
                    )}
                    
                    {telegramGroup && (
                      <div>
                        <p className="text-indigo-300 text-sm mb-1">Telegram</p>
                        <p className="text-white font-medium flex items-center">
                          {telegramGroup}
                          <a href={telegramGroup} target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-300 hover:text-indigo-200">
                            <IconExternalLink size={16} />
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex justify-between">
                <Link 
                  href="/create/fixed-price/project-info"
                  className="py-3 px-6 rounded-full border border-indigo-500 text-white hover:bg-indigo-800/50 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back
                </Link>
                <button 
                  onClick={handleCreateSale}
                  className="py-3 px-8 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center"
                >
                  Create Sale
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 