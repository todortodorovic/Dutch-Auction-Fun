'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import WalletConnect from '@/components/WalletConnect'
import { IconInfoCircle, IconExternalLink, IconCheck } from '@tabler/icons-react'

export default function ProjectInfoPage() {
  // State for project data
  const [projectName, setProjectName] = useState('')
  const [description, setDescription] = useState('')
  const [wordCount, setWordCount] = useState(0)
  
  // State for links
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [twitterHandle, setTwitterHandle] = useState('')
  const [youtubeChannel, setYoutubeChannel] = useState('')
  const [discordGroup, setDiscordGroup] = useState('')
  const [telegramGroup, setTelegramGroup] = useState('')
  
  // Load data from localStorage on component mount
  useEffect(() => {
    const savedProjectName = localStorage.getItem('projectName')
    const savedDescription = localStorage.getItem('description')
    const savedWebsiteUrl = localStorage.getItem('websiteUrl')
    const savedTwitterHandle = localStorage.getItem('twitterHandle')
    const savedYoutubeChannel = localStorage.getItem('youtubeChannel')
    const savedDiscordGroup = localStorage.getItem('discordGroup')
    const savedTelegramGroup = localStorage.getItem('telegramGroup')
    
    if (savedProjectName) setProjectName(savedProjectName)
    if (savedDescription) {
      setDescription(savedDescription)
      setWordCount(savedDescription.split(/\s+/).filter(word => word.length > 0).length)
    }
    if (savedWebsiteUrl) setWebsiteUrl(savedWebsiteUrl)
    if (savedTwitterHandle) setTwitterHandle(savedTwitterHandle)
    if (savedYoutubeChannel) setYoutubeChannel(savedYoutubeChannel)
    if (savedDiscordGroup) setDiscordGroup(savedDiscordGroup)
    if (savedTelegramGroup) setTelegramGroup(savedTelegramGroup)
    
    // Save current step to localStorage
    localStorage.setItem('currentStep', '4')
  }, [])
  
  // Save form data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('description', description)
    localStorage.setItem('websiteUrl', websiteUrl)
    localStorage.setItem('twitterHandle', twitterHandle)
    localStorage.setItem('youtubeChannel', youtubeChannel)
    localStorage.setItem('discordGroup', discordGroup)
    localStorage.setItem('telegramGroup', telegramGroup)
  }, [description, websiteUrl, twitterHandle, youtubeChannel, discordGroup, telegramGroup])
  
  // Handle description change
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setDescription(text)
    setWordCount(text.split(/\s+/).filter(word => word.length > 0).length)
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
                  <div className="w-8 h-8 rounded-full bg-gray-700/70 flex items-center justify-center">
                    <span className="text-white font-medium">5.</span>
                  </div>
                  <span className="text-gray-400">Review</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700/70 flex items-center justify-center">
                    <span className="text-white font-medium">6.</span>
                  </div>
                  <span className="text-gray-400">Confirm</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Form */}
          <div className="lg:col-span-3">
            <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 h-full">
              <h2 className="text-2xl font-bold text-white mb-6">Sale Details</h2>
              
              <div className="space-y-8">
                {/* Sale Description */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <h3 className="text-xl font-semibold text-white">Sale Description</h3>
                      <IconInfoCircle size={20} className="ml-2 text-indigo-300" />
                    </div>
                    <Link href="#" className="text-indigo-300 text-sm flex items-center">
                      Learn more
                      <IconExternalLink size={16} className="ml-1" />
                    </Link>
                  </div>
                  
                  <div className="mb-4">
                    <div className="relative">
                      <textarea 
                        placeholder="Write a detailed description of your sale..."
                        rows={7}
                        value={description}
                        onChange={handleDescriptionChange}
                        className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-xl py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      ></textarea>
                      <div className="absolute bottom-3 right-3 text-sm text-indigo-300">
                        {wordCount} / 5000
                      </div>
                    </div>
                    <div className="mt-1 text-indigo-300/70 text-sm flex items-center">
                      <IconInfoCircle size={14} className="mr-1" />
                      Markdown support.
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="py-2 px-6 rounded-full bg-indigo-700 text-white hover:bg-indigo-600 transition-colors">
                      Edit
                    </button>
                    <button className="py-2 px-6 rounded-full border border-indigo-500 text-white hover:bg-indigo-800/50 transition-colors">
                      Preview
                    </button>
                  </div>
                </div>
                
                {/* Links */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <h3 className="text-xl font-semibold text-white mb-6">Links</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Website Link (Required)</label>
                      <input 
                        type="text" 
                        placeholder="Website URL" 
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Twitter (Required)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                          <span className="text-indigo-300">@</span>
                        </div>
                        <input 
                          type="text" 
                          placeholder="Twitter handle" 
                          value={twitterHandle}
                          onChange={(e) => setTwitterHandle(e.target.value)}
                          className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 pl-10 pr-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Youtube (Optional)</label>
                      <input 
                        type="text" 
                        placeholder="Youtube channel URL" 
                        value={youtubeChannel}
                        onChange={(e) => setYoutubeChannel(e.target.value)}
                        className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Discord (Optional)</label>
                      <input 
                        type="text" 
                        placeholder="Discord invite URL" 
                        value={discordGroup}
                        onChange={(e) => setDiscordGroup(e.target.value)}
                        className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Telegram (Optional)</label>
                      <input 
                        type="text" 
                        placeholder="Telegram group URL" 
                        value={telegramGroup}
                        onChange={(e) => setTelegramGroup(e.target.value)}
                        className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Custom Whitelist */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">Custom Whitelist</h3>
                    <span className="text-indigo-300 text-sm">(Optional)</span>
                  </div>
                  
                  <p className="text-indigo-200 text-sm mb-4">
                    Upload a CSV file to whitelist participants for your sale. 
                    <Link href="#" className="ml-1 text-indigo-300 hover:text-indigo-200">
                      Download example csv
                    </Link>
                  </p>
                  
                  <div className="mt-4">
                    <Link href="#" className="text-indigo-300 text-sm flex items-center">
                      Learn more
                      <IconExternalLink size={16} className="ml-1" />
                    </Link>
                  </div>
                  
                  <button className="w-full mt-6 py-3 px-8 rounded-full border border-indigo-500 text-white hover:bg-indigo-800/50 transition-colors flex items-center justify-center">
                    Upload
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="mt-10 flex justify-between">
                <Link 
                  href="/create/fixed-price/configuration"
                  className="py-3 px-6 rounded-full border border-indigo-500 text-white hover:bg-indigo-800/50 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back
                </Link>
                <Link 
                  href="/create/fixed-price/review"
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