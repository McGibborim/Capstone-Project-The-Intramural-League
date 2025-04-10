// src/components/LandingHeader.jsx
import React, { useState, useEffect } from 'react'
import logo from '../assets/logos/logo.png'
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg'

export default function LandingHeader() {
  const [isSticky, setIsSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Define your nav items with a type
  const navItems = [
    { label: 'Home',     hash: '#landing', type: 'main' },
    { label: 'Partners', hash: '#partners', type: 'main' },
    { label: 'About',    hash: '#about',    type: 'main' },
    { label: 'Log In',   hash: '#login',    type: 'auth-secondary' },
    { label: 'Sign Up',  hash: '#signup',   type: 'auth-primary' },
  ]

  useEffect(() => {
    const onScroll = () => {
      const sticky = window.scrollY > 0
      setIsSticky(sticky)
      if (menuOpen && sticky) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  // Helper to pick classes based on type
  const linkClasses = {
    main: 'text-white hover:text-gray-300 transition',
    'auth-secondary':
      'px-4 py-2 bg-white text-maroon border-2 border-orange rounded hover:bg-gray-100 transition',
    'auth-primary':
      'px-4 py-2 bg-orange text-white border-2 border-orange rounded hover:bg-orange/90 transition',
  }

  return (
    <header
      className={`
        relative sticky top-0 z-50 flex items-center justify-between
        px-6 py-3 bg-maroon transition-shadow
        ${isSticky ? 'shadow-lg' : ''}
      `}
    >
      {/* Logo */}
      <a href="#landing" className="flex-shrink-0">
        <img src={logo} alt="League Logo" className="h-12 w-auto" />
      </a>

      {/* Full nav (hidden when sticky) */}
      {!isSticky && (
        <nav className="flex items-center space-x-4">
          {navItems.map(item => (
            <a
              key={item.hash}
              href={item.hash}
              className={linkClasses[item.type]}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Hamburger (shown when sticky) */}
      {isSticky && (
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="p-2 bg-white rounded border-2 border-orange focus:outline-none"
          aria-label="Toggle menu"
        >
          <MenuIcon className="w-6 h-6 text-maroon" />
        </button>
      )}

      {/* Dropdown menu */}
      {isSticky && menuOpen && (
        <div className="absolute right-6 top-full mt-2 w-48 bg-white rounded border-2 border-orange shadow-lg">
          {navItems.map(item => (
            <a
              key={item.hash}
              href={item.hash}
              className={`block px-4 py-2 ${
                item.type === 'main'
                  ? 'text-maroon hover:bg-gray-100'
                  : linkClasses[item.type]
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
