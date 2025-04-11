import React, { useState, useEffect } from 'react'
import { collection, getDocs }      from 'firebase/firestore'
import { db }                       from '../firebase'
import placeholderLogo              from '../assets/logos/placeholder.png'

export default function GameList({ games: propGames = [] }) {
  const [games, setGames]     = useState(propGames)
  const [loading, setLoading] = useState(propGames.length === 0)
  const [error, setError]     = useState(null)

  useEffect(() => {
    // Only fetch if no propGames were provided
    if (propGames.length) return

    async function loadGames() {
      try {
        const snap = await getDocs(collection(db, 'games'))
        setGames(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadGames()
  }, [propGames])

  if (loading) return <div>Loading games…</div>
  if (error)   return <div className="text-red-500">Error: {error.message}</div>

  // Always show at least 2 placeholders if still empty
  const display = games.length
    ? games
    : [{ placeholder: true }, { placeholder: true }]

  return (
    <ul className="space-y-4">
      {display.map((g, i) => {
        const isPh = g.placeholder
        const href = isPh ? '#' : `#games/${g.id}`

        return (
          <li key={i}>
            <a
              href={href}
              className="
                flex items-center p-4
                bg-ivory text-text
                rounded-lg shadow
                transform transition-transform duration-150
                hover:scale-105 hover:bg-ivory/90
              "
            >      
              <img
                src={isPh ? placeholderLogo : g.logoUrl || placeholderLogo}
                alt=""
                className="w-12 h-12 mr-4 rounded-full border-2 border-tan"
              />
              <div>
                <div className="font-semibold">
                  {isPh ? 'Placeholder Game' : g.team}
                </div>
                <div className="text-sm">
                  {isPh ? '—' : g.date}
                </div>
              </div>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
