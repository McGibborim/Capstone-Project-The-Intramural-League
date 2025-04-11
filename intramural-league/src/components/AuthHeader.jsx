import React from 'react'
import logo from '../assets/logos/logo.png'

export default function AuthHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-maroon">
      {/* League Logo */}
      <a href="#landing" className="flex-shrink-0">
        <img src={logo} alt="League Logo" className="h-12 w-auto" />
      </a>

      {/* Home Button */}
      <a
        href="#landing"
        className="px-4 py-2 bg-ivory text-maroon border-2 border-tan rounded-lg hover:bg-gray-100 transition"
      >
        Home
      </a>
    </header>
  )
}
