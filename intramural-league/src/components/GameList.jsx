import React from 'react'

export default function GameList({ games }) {
  return (
    <ul className="space-y-2">
      {games.map(g => (
        <li key={g.id} className="flex items-center p-4 bg-charcoal text-white rounded-md">
          <img src={g.logo} alt="" className="w-12 h-12 mr-4" />
          <div>
            <div className="font-semibold">{g.team}</div>
            <div className="text-sm">{g.date}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
