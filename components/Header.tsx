'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Why Choose Us', href: '#choose' },
  { name: 'How it Works', href: '#it-works' },
  { name: 'FAQ', href: '#faqs' },
  { name: 'Request a Quote', href: '#quote' },
]

const boxTypes = [
  { name: 'Mailer Boxes', href: '/products/mailer-boxes' },
  { name: 'Tuck Boxes', href: '/products/tuck-boxes' },
  { name: 'Rigid Boxes', href: '/products/rigid-boxes' },
  { name: 'Dispenser Boxes', href: '/products/dispenser-boxes' },
  { name: 'Cigarette Boxes', href: '/products/cigarette-boxes' },
  { name: 'Burger Boxes', href: '/products/burger-boxes' },
  { name: 'Magnetic Closure', href: '/products/magnetic-closure' },
  { name: 'Cosmetic Boxes', href: '/products/cosmetic-boxes' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative lg:px-[64px] lg:py-[18px] lg:gap-[12%] lg:justify-start">
        {/* Logo */}
        <div className="w-full text-center lg:text-left lg:w-auto">
          <Link href="/">
            <h1 className="text-xl sm:text-2xl font-bold cursor-pointer">
              Packify<span className="text-orange-500">CustomBoxes</span>
            </h1>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden absolute right-4 top-4 z-50 flex flex-col gap-1 focus:outline-none mt-[5px]"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-orange-400 transition"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Types of Boxes Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-orange-400 transition focus:outline-none">
              Types of Boxes
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
              {boxTypes.map((box) => (
                <Link
                  key={box.name}
                  href={box.href}
                  className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                >
                  {box.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 text-white py-6 text-lg flex flex-col space-y-3 items-center text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full hover:text-orange-400 transition"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-full">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full py-2 flex justify-center items-center gap-1 hover:text-orange-400 transition"
            >
              Types of Boxes
              <svg
                className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="flex flex-col bg-white text-gray-800 rounded-b-lg overflow-hidden">
                {boxTypes.map((box) => (
                  <Link
                    key={box.name}
                    href={box.href}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setDropdownOpen(false)
                    }}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {box.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}