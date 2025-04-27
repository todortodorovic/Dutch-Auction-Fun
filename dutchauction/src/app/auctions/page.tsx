'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function AuctionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Create a Dutch Auction
          </h1>
          <p className="text-xl text-indigo-200 mb-16">
            Start raising capital in minutes. Select your auction type, configure
            your tokens, and launch your project effortlessly on Solana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Fixed Price Card */}
          <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Fixed Price</h2>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-indigo-300 mb-2">Supported Networks</h3>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">SOL</span>
                </div>
              </div>
            </div>
            
            <p className="text-indigo-200 mb-6 h-24">
              A token sale where all participants purchase tokens at a set price, ensuring consistency
              throughout the sale. Ideal for projects seeking predictable fundraising.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Link href="/learn/fixed-price" className="text-center py-3 px-4 rounded-full border border-indigo-500 text-white hover:bg-indigo-800/50 transition-colors text-sm font-medium">
                Learn more
              </Link>
              <Link href="/create/fixed-price" className="text-center py-3 px-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-sm font-medium">
                Select
              </Link>
            </div>
          </div>
          
          {/* Dutch Auction Card */}
          <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Dutch Auction</h2>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-indigo-300 mb-2">Supported Networks</h3>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">SOL</span>
                </div>
              </div>
            </div>
            
            <p className="text-indigo-200 mb-6 h-24">
              A price discovery mechanism where the price starts high and gradually decreases
              until all tokens are sold, ensuring fair distribution and preventing front-running.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Link href="/learn/dutch-auction" className="text-center py-3 px-4 rounded-full border border-indigo-500 text-white hover:bg-indigo-800/50 transition-colors text-sm font-medium">
                Learn more
              </Link>
              <Link href="/create/dutch-auction" className="text-center py-3 px-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-sm font-medium">
                Select
              </Link>
            </div>
          </div>
          
          {/* Bonding Curve Card */}
          <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Bonding Curve</h2>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-indigo-300 mb-2">Supported Networks</h3>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">SOL</span>
                </div>
              </div>
            </div>
            
            <p className="text-indigo-200 mb-6 h-24">
              A dynamic pricing model where token price is determined by a mathematical formula 
              based on supply, providing continuous liquidity and price discovery.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Link href="/learn/bonding-curve" className="text-center py-3 px-4 rounded-full border border-indigo-500 text-white hover:bg-indigo-800/50 transition-colors text-sm font-medium">
                Learn more
              </Link>
              <div className="text-center py-3 px-4 rounded-full bg-gray-700/50 text-gray-400 cursor-not-allowed text-sm font-medium">
                Coming soon
              </div>
            </div>
          </div>
          
          {/* Overflow Card */}
          <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h8V5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Overflow</h2>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-indigo-300 mb-2">Supported Networks</h3>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">SOL</span>
                </div>
              </div>
            </div>
            
            <p className="text-indigo-200 mb-6 h-24">
              A token sale model where contributions can exceed the target cap, with any excess refunded
              proportionally. Ensures fair distribution while maximizing participation.
            </p>
            
            <div className="flex">
              <Link href="#" className="w-full text-center py-3 px-4 rounded-full bg-gray-700/50 text-gray-300 cursor-not-allowed text-sm font-medium">
                Coming Soon
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-block text-indigo-300 hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
} 