// src/components/Header.jsx
import React, { useState, useEffect } from 'react'
import logo from '../assets/logos/logo.png'
import userPlaceholder from '../assets/logos/user-placeholder.png'
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg'  // or any svg

export default function Header({ user }) {
  const [isSticky, setIsSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Watch scroll to know when header is "stuck"
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
      // close menu if scrolling
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen])

  const avatarSrc = user?.photoURL || userPlaceholder
  const navItems = ['Account', 'My Leagues', 'My Teams']

  return (
    <header
      className={`
        sticky top-0 z-50 flex items-center justify-between
        px-6 py-3 bg-maroon transition-shadow
        ${isSticky ? 'shadow-lg' : ''}
      `}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="League Logo" className="h-12 w-auto" />
      </div>

      {/* Full nav (hidden once sticky) */}
      {!isSticky && (
        <nav className="flex space-x-4">
          {navItems.map(label => (
            <button
              key={label}
              className="px-4 py-2 bg-white text-maroon border-2 border-orange rounded hover:bg-gray-100 transition"
            >
              {label}
            </button>
          ))}
        </nav>
      )}

      {/* Right side: either avatar + hamburger or just avatar */}
      <div className="flex items-center space-x-4">
        {isSticky && (
          <button
            onClick={() => setMenuOpen(open => !open)}
            className="p-2 bg-white rounded border-2 border-orange focus:outline-none"
            aria-label="Toggle menu"
          >
            <MenuIcon className="w-6 h-6 text-maroon" />
          </button>
        )}

        {/* Avatar */}
        <button
          className="w-10 h-10 border-2 border-orange rounded-full overflow-hidden focus:outline-none"
          aria-label="User Settings"
        >
          <img
            src={avatarSrc}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Dropdown when hamburger is open */}
      {isSticky && menuOpen && (
        <div className="absolute right-6 top-full mt-2 w-48 bg-white rounded border-2 border-orange shadow-lg">
          {navItems.map(label => (
            <button
              key={label}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition text-maroon"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
