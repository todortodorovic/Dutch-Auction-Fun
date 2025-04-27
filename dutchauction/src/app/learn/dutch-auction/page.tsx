'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function DutchAuctionLearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white">Dutch Auctions</h1>
          </div>
          
          <p className="text-indigo-200 mb-8 text-lg">
            A price discovery mechanism that starts high and decreases over time until tokens are purchased or the sale ends.
          </p>
          
          <div className="space-y-6 mb-8">
            <div>
              <h2 className="text-xl text-white font-semibold mb-3">How It Works</h2>
              <p className="text-indigo-200">
                Dutch auctions start with a high initial price that gradually decreases over time. Participants can purchase tokens at any point, but they face a trade-off: buy early at a higher price to ensure acquisition, or wait for a lower price but risk missing out if others buy first. The auction ends when all tokens are sold or when it reaches its end time. The price discovery mechanism operates based on participant demand, creating an efficient market where tokens are sold at a price the market is willing to pay.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl text-white font-semibold mb-3">Advantages & Disadvantages</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-indigo-100 font-medium mb-2">Pros</h3>
                  <ul className="list-disc pl-5 text-indigo-200 space-y-2">
                    <li>More inclusive for all participants regardless of capital resources</li>
                    <li>Reduces harmful competition with bots</li>
                    <li>Efficient capital allocation: nobody pays more than necessary</li>
                    <li>Participants acquire tokens at a price they are willing to pay</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-indigo-100 font-medium mb-2">Cons</h3>
                  <ul className="list-disc pl-5 text-indigo-200 space-y-2">
                    <li>Risk of low turnout if price curve is not optimally set</li>
                    <li>Potential for overbidding if participants fear missing out (FOMO)</li>
                    <li>Complex to explain to new users unfamiliar with auction mechanics</li>
                    <li>Price discovery may not be optimal in illiquid markets</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl text-white font-semibold mb-3">Balancer LBPs</h2>
              <p className="text-indigo-200">
                Balancer's Liquidity Bootstrapping Pools (LBPs) represent a notable iteration of the Dutch auction model. LBPs dynamically adjust weights between tokens in a pool over time, effectively creating a Dutch auction mechanism within a liquidity pool. This approach has proven successful in projects like Perpetual Protocol, Radicle, and Gitcoin, allowing for fair launches while minimizing the impact of frontrunning bots and whales.
              </p>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-medium text-indigo-300 mb-2">Supported Networks</h3>
            <div className="flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center">
                <span className="text-xs font-bold text-white">SOL</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <Link 
              href="/auctions"
              className="py-3 px-6 rounded-full border border-indigo-500 text-white hover:bg-indigo-800/50 transition-colors text-sm font-medium"
            >
              ← Back to auction types
            </Link>
            <Link 
              href="/create/dutch-auction"
              className="py-3 px-6 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              Create Dutch Auction
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 