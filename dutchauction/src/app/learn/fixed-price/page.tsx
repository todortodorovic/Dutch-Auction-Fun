'use client'

import React from 'react'
import Link from 'next/link'

export default function FixedPriceLearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Fixed Price Sale</h1>
            <p className="text-lg text-indigo-200">
              Learn more about Fixed Price Sales and why they are an effective method for token distribution.
            </p>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/80">
              A Fixed Price Sale offers a simple and transparent method for token distribution. This structure provides clarity for both project teams and participants by ensuring that all tokens are sold at a predetermined, consistent price. It's an ideal format for projects that want a predictable fundraising process without the volatility of dynamic pricing.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">How does a Fixed Price Sale Work</h2>
            <p className="text-white/80">
              In a Fixed Price Sale, you define a set price per token and decide how many tokens will be available for sale. Here's how it works:
            </p>
            
            <div className="mt-6 space-y-6">
              <div className="bg-indigo-800/40 p-6 rounded-xl border border-indigo-500/30">
                <h3 className="text-xl font-semibold text-white mb-2">1. Set the Token Price</h3>
                <p className="text-white/80">
                  You choose a fixed price for your token that will remain the same throughout the entire sale.
                </p>
              </div>
              
              <div className="bg-indigo-800/40 p-6 rounded-xl border border-indigo-500/30">
                <h3 className="text-xl font-semibold text-white mb-2">2. Determine Token Quantity</h3>
                <p className="text-white/80">
                  You specify the number of tokens to be sold. This defines the maximum amount participants can collectively purchase.
                </p>
              </div>
              
              <div className="bg-indigo-800/40 p-6 rounded-xl border border-indigo-500/30">
                <h3 className="text-xl font-semibold text-white mb-2">3. Define Your Fundraising Goal</h3>
                <p className="text-white/80">
                  Your raise target is automatically calculated based on price × supply.
                  <br />
                  Example: Selling 10,000 tokens at $10 each = $100,000 fundraising goal.
                </p>
              </div>
              
              <div className="bg-indigo-800/40 p-6 rounded-xl border border-indigo-500/30">
                <h3 className="text-xl font-semibold text-white mb-2">4. Run the Sale</h3>
                <p className="text-white/80">
                  Participants can purchase tokens at the fixed price until the total allocation is sold out or the sale period ends.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Choose a Fixed Price Sale?</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Simplicity and Predictability</h3>
                  <p className="text-white/80">
                    Every buyer pays the same price. This avoids price fluctuations and keeps the sale fair and easy to understand.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Easy to Set Up</h3>
                  <p className="text-white/80">
                    With no need for bonding curves or dynamic pricing algorithms, fixed price sales are quick to configure and launch.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Clear Fundraising Targets</h3>
                  <p className="text-white/80">
                    Because the token price and supply are predetermined, your fundraising goal is transparent from the start—making communication with your community and investors easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-between">
            <Link 
              href="/auctions"
              className="inline-block text-indigo-300 hover:text-white transition-colors"
            >
              ← Back to auction types
            </Link>
            <Link 
              href="/create/fixed-price"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
              Create Fixed Price Auction
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 