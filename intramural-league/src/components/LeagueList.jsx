import React, { useState, useEffect } from 'react'
import { collection, getDocs }      from 'firebase/firestore'
import { db }                       from '../firebase'
import placeholderLogo              from '../assets/logos/placeholder.png'

export default function LeagueList({ leagues: propLeagues = [] }) {
  const [leagues, setLeagues] = useState(propLeagues)
  const [loading, setLoading] = useState(propLeagues.length === 0)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (propLeagues.length) return

    getDocs(collection(db, 'leagues'))
      .then(snap => setLeagues(snap.docs.map(d => ({ id: d.id, ...d.data() }))))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [propLeagues])

  if (loading) return <div>Loading leagues…</div>
  if (error)   return <div className="text-red-500">Error: {error.message}</div>

  const display = leagues.length
    ? leagues
    : [{ placeholder: true }, { placeholder: true }]

  return (
    <ul className="space-y-4">
      {display.map((l, i) => {
        const isPh = l.placeholder
        const href = isPh ? '#' : `#leagues/${l.id}`

        return (
          <li key={i}>
            <a
              href={href}
              className="flex items-center p-4 bg-ivory text-text rounded-lg shadow
              transform transition-transform duration-150
              hover:scale-105 hover:bg-ivory/90"
            >
              <img
                src={isPh ? placeholderLogo : l.logoUrl || placeholderLogo}
                alt=""
                className="w-12 h-12 mr-4 rounded-full border-2 border-tan"
              />
              <div>
                <div className="font-semibold">
                  {isPh ? 'Placeholder League' : l.name}
                </div>
                {l.registration && (
                  <div className="text-sm">{l.registration}</div>
                )}
              </div>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
