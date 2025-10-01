'use client'

import { useState } from 'react'

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#f97316] text-white rounded-lg shadow-lg px-4 py-2 max-w-[90vw] sm:max-w-[18rem] md:max-w-[22rem] lg:max-w-[28rem] text-xs sm:text-sm">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2">
        <div className="flex-1 text-center sm:text-left whitespace-normal sm:whitespace-nowrap break-words animate-marquee sm:inline-block">
          🎉 Get <strong>15% OFF</strong> your first order — use code <strong>WELCOME15</strong>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 focus:outline-none text-sm"
          aria-label="Close promo banner"
        >
          ✕
        </button>
      </div>
    </div>
  )
}