import React, { useState, useEffect } from 'react'
import logo from '../assets/logos/logo.png'

export default function AdminHeader() {
  const [sticky, setSticky] = useState(false)
  const tabs = [
    { label: 'Dashboard', hash: '#admin/dashboard' },
    { label: 'Leagues',   hash: '#admin/leagues' },
    { label: 'Sports',    hash: '#admin/sports' },
  ]

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`
      sticky top-0 z-50 flex items-center justify-between
      px-6 py-3 bg-maroon border-b-2 border-tan
      transition-shadow ${sticky ? 'shadow-lg' : ''}
    `}>
      <a href="#landing">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </a>
      <nav className="flex space-x-4">
        {tabs.map(t => (
          <a
            key={t.hash}
            href={t.hash}
            className="
              px-4 py-2 bg-ivory text-text
              border-2 border-tan rounded-lg
              hover:bg-tan/20 transition
            "
          >
            {t.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
