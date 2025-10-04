'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Types of Boxes', href: '#boxes' }, 
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
  const router = useRouter()
  const searchParams = useSearchParams()

  // Handle scroll if query param exists
  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo')
    if (scrollTo) {
      const el = document.querySelector(scrollTo)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [searchParams])

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname === '/') {
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(`/?scrollTo=${href}`)
      }
    } else {
      router.push(href)
    }
    setMobileMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative lg:px-[64px] lg:py-[18px] lg:gap-[12%] lg:justify-start">
        {/* Logo */}
        <div className="w-full text-center lg:text-left lg:w-auto">
          <h1 className="text-xl sm:text-2xl font-bold cursor-pointer" onClick={() => handleNavClick('/')}>
            Packify<span className="text-orange-500">CustomBoxes</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center font-medium">
          {navLinks.map((link) =>
            link.name === 'Types of Boxes' ? (
              <div key={link.name} className="group relative">
                <button className="flex items-center gap-1 hover:text-orange-400 transition focus:outline-none">
                  {link.name}
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
                    <button
                      key={box.name}
                      onClick={() => handleNavClick(box.href)}
                      className="block px-4 py-2 w-full text-left hover:bg-gray-100 rounded-lg"
                    >
                      {box.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-orange-400 transition"
              >
                {link.name}
              </button>
            )
          )}
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/0.1 backdrop-blur shadow-md text-white py-6 text-lg flex flex-col space-y-3 items-center text-center">
            {navLinks.map((link) =>
              link.name === 'Types of Boxes' ? (
                <div key={link.name} className="w-full">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full py-2 flex justify-center items-center gap-1 hover:text-orange-400 transition"
                  >
                    {link.name}
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
                        <button
                          key={box.name}
                          onClick={() => handleNavClick(box.href)}
                          className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                        >
                          {box.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full hover:text-orange-400 transition"
                >
                  {link.name}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </header>
  )
}
