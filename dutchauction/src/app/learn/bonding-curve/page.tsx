'use client'

import React from 'react'
import Link from 'next/link'

export default function BondingCurveLearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Liquidity Bootstrapping Pool (LBP)</h1>
            <p className="text-lg text-indigo-200 mb-6">
              A revolutionary approach for fair and transparent token launches
            </p>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/80">
              A Liquidity Bootstrapping Pool (LBP) is a revolutionary approach in the digital asset space, designed to facilitate fair and transparent token launches. It operates on a high-to-low pricing mechanism, akin to a Dutch Auction, where prices start high and decrease over time. This mechanism is a strategic choice by project and LBP creators to mitigate the influence of sniper bots and large investor (whale) manipulation. Participants have the opportunity to engage in community-driven price discovery, buying tokens at a price point they find equitable. LBPs represent a significant advancement in creating a balanced and inclusive environment for token distribution.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-6">Key Features</h2>
            
            <div className="space-y-8">
              <div className="bg-indigo-800/40 p-6 rounded-xl border border-indigo-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">Dynamic Pricing and Weight Shifting</h3>
                <p className="text-white/80">
                  LBPs are characterised by their dynamic pricing, similar to Dutch Auctions, where token prices start high and gradually decrease. This pricing shift is driven by changing token weights within the pool, influencing the price over time and making the price discovery process fairer and transparent.
                </p>
              </div>
              
              <div className="bg-indigo-800/40 p-6 rounded-xl border border-indigo-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">Reduced Impact of Sniper Bots and Bad Actors</h3>
                <p className="text-white/80">
                  LBPs effectively reduce the influence of sniper bots and bad actors through their high-to-low pricing strategy and dynamic token weight adjustments. This pricing model discourages the quick, profit-seeking purchases typical of these entities in general LP launches. Instead, it encourages participation from individuals genuinely interested in the project, ensuring a more equitable and intentional distribution of tokens.
                </p>
              </div>
              
              <div className="bg-indigo-800/40 p-6 rounded-xl border border-indigo-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">Fair and Equitable Distribution</h3>
                <p className="text-white/80">
                  LBPs are designed to ensure a balanced token distribution, setting them apart from traditional launch methods. By employing a structured, transparent pricing mechanism, LBPs enable a wider range of participants to engage in the process. This approach helps in distributing tokens not just based on speed or investment size, but in a manner that considers the broader community's opportunity to participate, fostering inclusivity and equity in the token distribution process.
                </p>
              </div>
              
              <div className="bg-indigo-800/40 p-6 rounded-xl border border-indigo-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">Community Engagement and Trust Building</h3>
                <p className="text-white/80">
                  LBPs foster a deeper level of community engagement and trust. By providing a transparent and fair token distribution process, they enable project creators to build a strong, supportive community around their project. Participants, on the other hand, gain confidence in the project's commitment to fairness and long-term value, leading to more sustained and meaningful engagement.
                </p>
              </div>
              
              <div className="bg-indigo-800/40 p-6 rounded-xl border border-indigo-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">Enhanced Liquidity and Reduced Initial Capital Requirement</h3>
                <p className="text-white/80">
                  LBPs offer an efficient way for project creators to bootstrap liquidity with reduced initial capital. The model allows creators to start with a high token-to-collateral ratio, reducing the need for substantial upfront capital. This aspect not only benefits creators but also enhances the overall market liquidity for participants, making it easier for them to trade tokens within the pool. This improved liquidity in the pool leads to a more efficient and user-friendly experience for buyers and sellers alike.
                </p>
              </div>
              
              <div className="bg-indigo-800/40 p-6 rounded-xl border border-indigo-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">Democratising Access to Early Opportunities</h3>
                <p className="text-white/80">
                  LBPs are instrumental in democratising access to early-stage opportunities, allowing virtually anyone with a novel idea to quickly initiate a token launch and generate liquidity in minutes. This accessibility empowers a wide spectrum of creators, from emerging enterprises to independent innovators, to efficiently bring their concepts to a broader audience. For participants, this opens the door to a variety of promising opportunities, broadening the range of projects and ideas they can engage with and support from their inception.
                </p>
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
            <div className="inline-block bg-gray-600/50 text-gray-300 px-6 py-2 rounded-full cursor-not-allowed">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 