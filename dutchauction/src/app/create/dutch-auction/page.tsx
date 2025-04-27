'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WalletConnect from '@/components/WalletConnect'

export default function CreateDutchAuctionPage() {
  const [projectName, setProjectName] = useState('')
  
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
                  <span className="text-gray-400">Token Vesting</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700/70 flex items-center justify-center">
                    <span className="text-white font-medium">5.</span>
                  </div>
                  <span className="text-gray-400">Project Info</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700/70 flex items-center justify-center">
                    <span className="text-white font-medium">6.</span>
                  </div>
                  <span className="text-gray-400">Review</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700/70 flex items-center justify-center">
                    <span className="text-white font-medium">7.</span>
                  </div>
                  <span className="text-gray-400">Confirm</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 h-full">
              <h2 className="text-2xl font-bold text-white mb-6">Add Project Information</h2>
              <p className="text-indigo-200 mb-8">
                Enter your project details to create a Dutch Auction.
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
                    placeholder="Enter token" 
                    className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="mt-1 text-right text-sm text-red-500">
                    Token address is required
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
                    <span className="text-sm text-red-500">Required</span>
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
                    Please select a round type
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Short Description</label>
                  <textarea 
                    placeholder="Type here" 
                    rows={3}
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
                    className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="mt-1 text-sm text-red-500">
                    Please enter a banner URL
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
                    className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="mt-1 text-sm text-red-500">
                    Please enter a logo URL
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
                  type="button"
                  className="py-3 px-8 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          
          {/* Preview Card */}
          <div className="lg:col-span-1">
            <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Preview Project Card</h3>
              
              <div className="rounded-xl overflow-hidden border border-indigo-500/30">
                <div className="h-36 bg-gradient-to-r from-purple-600 to-indigo-600 relative">
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white font-medium">$</div>
                  </div>
                </div>
                
                <div className="p-4 bg-indigo-900/70">
                  <div className="flex items-center mb-3">
                    <div className="flex-1">
                      <h4 className="text-white font-medium truncate">
                        {projectName || "Your Project"}
                      </h4>
                    </div>
                    <div>
                      <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                        TL
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-white">Dutch Auction</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium text-indigo-300 mb-2">
                  Auction Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Format:</span>
                    <span className="text-white">Dutch Auction</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Network:</span>
                    <span className="text-white">Solana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Round:</span>
                    <span className="text-white">Not selected</span>
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