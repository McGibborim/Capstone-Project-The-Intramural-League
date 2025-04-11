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
      if (menuOpen && sticky) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  const avatarSrc = user?.photoURL || userPlaceholder

  return (
    <header
      className={`
        sticky top-0 z-50 flex items-center justify-between
        px-6 py-3 bg-maroon border-b-4 border-tan
        transition-shadow ${isSticky ? 'shadow-lg' : ''}
      `}
    >
      {/* Logo */}
      <a href="#landing" className="flex-shrink-0">
        <img src={logo} alt="League Logo" className="h-12 w-auto" />
      </a>

      {/* Full nav (hidden once sticky) */}
      {!isSticky && (
        <nav className="flex space-x-4">
          {navItems.map(item => (
            <a
              key={item.hash}
              href={item.hash}
              className="
                px-4 py-2
                bg-ivory text-text
                border-2 border-tan
                rounded-lg
                hover:bg-tan hover:text-ivory
                transition
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Hamburger + Avatar */}
      <div className="flex items-center space-x-4">
        {isSticky && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="
              p-2 bg-ivory
              rounded-lg border-2 border-tan
              focus:outline-none
            "
            aria-label="Toggle menu"
          >
            <MenuIcon className="w-6 h-6 text-maroon" />
          </button>
        )}

        <a href="#account" aria-label="User Settings">
          <img
            src={avatarSrc}
            alt="User Avatar"
            className="h-10 w-10 rounded-full border-2 border-tan object-cover"
          />
        </a>
      </div>

      {/* Dropdown menu */}
      {isSticky && menuOpen && (
        <div className="
          absolute right-6 top-full mt-2
          w-40 bg-ivory rounded-lg border-2 border-tan shadow-lg
        ">
          {navItems.map(item => (
            <a
              key={item.hash}
              href={item.hash}
              className="
                block px-4 py-2
                text-text
                hover:bg-tan/20 transition
              "
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
