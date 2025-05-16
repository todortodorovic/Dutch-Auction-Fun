'use client'

import React, { useState, useRef, useEffect, ReactNode, forwardRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WalletConnect from '@/components/WalletConnect'
import { IconInfoCircle, IconChevronDown, IconCalendar, IconCheck } from '@tabler/icons-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { createPortal } from 'react-dom'

// Create a Portal component to render content at the root level
const Portal = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted ? createPortal(
    children,
    document.getElementById('portal-root') || document.body
  ) : null
}

type Token = {
  id: string
  name: string
  symbol: string
  fallbackIcon: React.ReactNode
}

// Create a separate portal for datepicker to avoid z-index conflicts
const DatePickerPortal = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted ? createPortal(
    children,
    document.getElementById('datepicker-portal-root') || document.body
  ) : null
}

// Available tokens
const tokens = [
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    icon: '/images/sol.png',
    fallbackIcon: '🪙'
  },
  {
    id: 'usdc',
    name: 'USD Coin on Solana',
    symbol: 'USDC',
    icon: '/images/usdc.png',
    fallbackIcon: '💵'
  }
]

export default function SaleStructurePage() {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [duration, setDuration] = useState<string>('')
  const [tokenClaimDelay, setTokenClaimDelay] = useState('no')  
  const startDatePickerRef = useRef<DatePicker>(null)
  const [selectedToken, setSelectedToken] = useState<string | null>(null)
  const [isTokenDropdownOpen, setIsTokenDropdownOpen] = useState(false)
  const tokenButtonRef = useRef<HTMLButtonElement>(null)

  // Create portal container on mount
  useEffect(() => {
    // Create a div for the portal if it doesn't exist
    if (!document.getElementById('portal-root')) {
      const portalRoot = document.createElement('div')
      portalRoot.id = 'portal-root'
      portalRoot.style.position = 'relative'
      portalRoot.style.zIndex = '99999'
      document.body.appendChild(portalRoot)
    }

    // Create a separate portal for datepicker
    if (!document.getElementById('datepicker-portal-root')) {
      const datePickerPortalRoot = document.createElement('div')
      datePickerPortalRoot.id = 'datepicker-portal-root'
      datePickerPortalRoot.style.position = 'fixed'
      datePickerPortalRoot.style.zIndex = '999999' // Higher z-index than token dropdown
      datePickerPortalRoot.style.top = '0'
      datePickerPortalRoot.style.left = '0'
      datePickerPortalRoot.style.width = '100%'
      datePickerPortalRoot.style.height = '100%'
      datePickerPortalRoot.style.pointerEvents = 'none'
      document.body.appendChild(datePickerPortalRoot)
    }

    return () => {
      // Clean up on unmount
      const portalRoot = document.getElementById('portal-root')
      if (portalRoot && portalRoot.parentNode) {
        portalRoot.parentNode.removeChild(portalRoot)
      }

      const datePickerPortalRoot = document.getElementById('datepicker-portal-root')
      if (datePickerPortalRoot && datePickerPortalRoot.parentNode) {
        datePickerPortalRoot.parentNode.removeChild(datePickerPortalRoot)
      }
    }
  }, [])

  // Handle click outside to close token dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tokenButtonRef.current &&
        !tokenButtonRef.current.contains(event.target as Node)
      ) {
        setIsTokenDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const formatDate = (date: Date | null) => {
    if (!date) return ''
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const handleStartIconClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    // Find the input element and focus/click it directly
    const dateInputs = document.querySelectorAll('.react-datepicker__input-container input')
    if (dateInputs.length > 0) {
      const dateInput = dateInputs[0] as HTMLElement
      dateInput.click()
    }
  }

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date)
  }

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only positive numbers
    const value = e.target.value.replace(/[^0-9]/g, '')
    setDuration(value)
  }

  const handleTokenSelect = (tokenId: string) => {
    console.log('Selected token ID:', tokenId)
    setSelectedToken(tokenId)
    setIsTokenDropdownOpen(false)
  }


  const getSelectedTokenDisplay = () => {
    const token = tokens.find(t => t.id === selectedToken)
    if (!token) return 'Select Token'
    return (
      <div className="flex items-center">
        <div className="w-6 h-6 mr-2 flex items-center justify-center">
          {token.fallbackIcon}
        </div>
        <span>{token.name} ({token.symbol})</span>
      </div>
    )
  }


  // Calculate the end date based on start date and duration
  const calculateEndDate = () => {
    if (!startDate || !duration || isNaN(Number(duration))) return null

    const durationDays = Number(duration)
    const endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + durationDays)

    return endDate
  }

  // Get dropdown position based on button
  const getDropdownPosition = () => {
    if (!tokenButtonRef.current) return { top: 0, left: 0, width: 0 }

    const rect = tokenButtonRef.current.getBoundingClientRect()
    return {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width
    }
  }

  const position = getDropdownPosition()

  // Save data to localStorage when next is clicked
  const handleNext = () => {
    if (startDate) {
      localStorage.setItem('startDate', startDate.toISOString())
    }

    localStorage.setItem('duration', duration)

    const endDate = calculateEndDate()
    if (endDate) {
      localStorage.setItem('endDate', endDate.toISOString())
    }

    localStorage.setItem('selectedToken', selectedToken)
    localStorage.setItem('tokenClaimDelay', tokenClaimDelay)

    // Navigate to the next page
    window.location.href = '/create/fixed-price/configuration'
  }

  // Check if we can proceed
  const canProceed = startDate && duration && Number(duration) > 0 && selectedToken;

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
          <div className="lg:col-span-3">
            <div className="bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 h-full">
              <h2 className="text-2xl font-bold text-white mb-6">Review Sale</h2>

              <div className="space-y-8">
                {/* Duration Configuration */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-semibold text-white">Configure Duration</h3>
                    <IconInfoCircle size={20} className="ml-2 text-indigo-300" />
                  </div>
                  <p className="text-indigo-200 text-sm mb-6">
                    All times are displayed in your local timezone based on your device settings.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Starting Date & Time</label>
                      <div className="relative">
                        <DatePicker
                          selected={startDate}
                          onChange={handleStartDateChange}
                          showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15}
                          dateFormat="MMMM d, yyyy h:mm aa"
                          placeholderText="Select a date"
                          className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12"
                          wrapperClassName="w-full"
                          calendarClassName="bg-indigo-900 text-white border border-indigo-500/30 rounded-lg shadow-lg"
                          popperClassName="z-[999999]"
                          portalId="datepicker-portal-root"
                          // @ts-ignore - react-datepicker has incomplete types
                          popperProps={{
                            positionFixed: false,
                            modifiers: [
                              {
                                name: "offset",
                                options: {
                                  offset: [0, 10],
                                },
                              },
                            ],
                          }}
                          popperModifiers={[{
                            name: 'preventOverflow',
                            options: {
                              rootBoundary: 'viewport',
                              tether: false,
                              altAxis: true,
                            },
                          }]}
                          popperPlacement="top-start"
                        />
                        <div
                          className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                          onClick={handleStartIconClick}
                        >
                          <IconCalendar className="h-6 w-6 text-indigo-300" />
                        </div>
                      </div>
                      <div className="mt-1 text-sm text-red-500">
                        {!startDate && 'Select an initial date'}
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Duration (Days)</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={duration}
                          onChange={handleDurationChange}
                          placeholder="Enter number of days"
                          className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="mt-1 text-sm text-red-500">
                        {!duration && 'Enter the sale duration in days'}
                      </div>

                      {startDate && duration && Number(duration) > 0 && (
                        <div className="mt-3 text-indigo-300 text-sm">
                          Sale will end on: {formatDate(calculateEndDate())}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Collateral Token */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <h3 className="text-xl font-semibold text-white mb-3">Collateral Token</h3>
                  <p className="text-indigo-200 text-sm mb-6">
                    This is the token participants will deposit in exchange for your project's token.
                  </p>

                  <div className="relative">
                    <button
                      ref={tokenButtonRef}
                      className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-full py-3 px-6 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-between"
                      onClick={() => setIsTokenDropdownOpen(prev => !prev)}
                    >
                      {getSelectedTokenDisplay()}
                      <IconChevronDown
                        size={20}
                        className={`text-indigo-300 transition-transform ${isTokenDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isTokenDropdownOpen && (
                      <ul className="absolute z-50 mt-2 w-full bg-indigo-800 border border-indigo-500/30 rounded-xl shadow-lg">
                        {tokens.map(token => (
                          <li
                            key={token.id}
                            className="px-4 py-2 text-white hover:bg-indigo-700 cursor-pointer flex items-center"
                            onClick={() => handleTokenSelect(token.id)}
                          >
                            <div className="w-5 h-5 mr-2">{token.fallbackIcon}</div>
                            {token.name} ({token.symbol})
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-1 text-sm text-red-500">
                    {!selectedToken && 'Select a collateral token'}
                  </div>
                </div>

                {/* Token Claim Delay */}
                <div className="bg-indigo-900/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <h3 className="text-xl font-semibold text-white mb-3">Token Claim Delay</h3>

                  <div className="flex space-x-4 mb-6">
                    <button
                      className={`rounded-full px-8 py-3 font-medium ${tokenClaimDelay === 'no' ? 'bg-indigo-600 text-white' : 'bg-indigo-900/50 text-indigo-300 border border-indigo-500/30'}`}
                      onClick={() => setTokenClaimDelay('no')}
                    >
                      No
                    </button>
                    <button
                      className={`rounded-full px-8 py-3 font-medium ${tokenClaimDelay === 'yes' ? 'bg-indigo-600 text-white' : 'bg-indigo-900/50 text-indigo-300 border border-indigo-500/30'}`}
                      onClick={() => setTokenClaimDelay('yes')}
                    >
                      Yes
                    </button>
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
          </div>
        </div>
      </div>
    </div >
  )
}