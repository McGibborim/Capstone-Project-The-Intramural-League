import React from 'react'

export default function LeagueList({ leagues }) {
  return (
    <ul className="space-y-2">
      {leagues.map(l => (
        <li key={l.id} className="flex items-start p-4 bg-charcoal text-white rounded-md">
          <img src={l.logo} alt="" className="w-12 h-12 mr-4" />
          <div>
            <a href={l.link} className="font-semibold underline">{l.name}</a>
            <div className="text-sm">Registration: {l.registration}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
