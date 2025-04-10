import React from 'react'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-maroon">
      <div className="text-white font-bold text-xl">The Intermural League</div>
      <nav className="space-x-4">
        <button className="px-4 py-2 bg-white text-maroon rounded">Account</button>
        <button className="px-4 py-2 text-white">My Leagues</button>
        <button className="px-4 py-2 text-white">My Teams</button>
      </nav>
    </header>
  )
}
