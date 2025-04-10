// src/components/UserHeader.jsx
import React, { useState, useEffect } from 'react'
import logo from '../assets/logos/logo.png'
import userPlaceholder from '../assets/logos/user-placeholder.png'
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg'

export default function UserHeader({ user }) {
  const [isSticky, setIsSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Account',    hash: '#account' },
    { label: 'My Leagues', hash: '#leagues' },
    { label: 'My Teams',   hash: '#teams' },
  ]

  useEffect(() => {
    const onScroll = () => {
      const sticky = window.scrollY > 0
      setIsSticky(sticky)
      // auto‑close menu if we scroll
      if (menuOpen && sticky) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  const avatarSrc = user?.photoURL || userPlaceholder

  return (
    <header
      className={`
        relative sticky top-0 z-50 flex items-center justify-between
        px-6 py-3 bg-maroon transition-shadow
        ${isSticky ? 'shadow-lg' : ''}
      `}
    >
      {/* Logo */}
      <a href="#account" className="flex-shrink-0">
        <img src={logo} alt="League Logo" className="h-12 w-auto" />
      </a>

      {/* Full nav (hidden once sticky) */}
      {!isSticky && (
        <nav className="flex space-x-4">
          {navItems.map(item => (
            <a
              key={item.hash}
              href={item.hash}
              className="px-4 py-2 bg-white text-maroon rounded hover:bg-gray-100 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Right side: hamburger (when sticky) + avatar */}
      <div className="flex items-center space-x-4">
        {isSticky && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="p-2 bg-white rounded border-2 border-orange focus:outline-none"
            aria-label="Toggle menu"
          >
            <MenuIcon className="w-6 h-6 text-maroon" />
          </button>
        )}
        <a href="#account" aria-label="User Settings">
          <img
            src={avatarSrc}
            alt="User Avatar"
            className="h-10 w-10 rounded-full border-2 border-orange object-cover"
          />
        </a>
      </div>

      {/* Dropdown menu */}
      {isSticky && menuOpen && (
        <div className="absolute right-6 top-full mt-2 w-40 bg-white rounded border-2 border-orange shadow-lg">
          {navItems.map(item => (
            <a
              key={item.hash}
              href={item.hash}
              className="block px-4 py-2 text-maroon hover:bg-gray-100 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
