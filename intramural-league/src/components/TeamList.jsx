import React from 'react'

export default function TeamList({ teams }) {
  return (
    <ul className="space-y-2">
      {teams.map(t => (
        <li key={t.id} className="flex items-center p-4 bg-white rounded-md">
          <img src={t.logo} alt="" className="w-12 h-12 mr-4" />
          <div>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-gray-600">{t.league}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
