// src/components/GameList.jsx
import React, { useState, useEffect } from 'react'
import { collection, getDocs }      from 'firebase/firestore'
import { db }                       from '../firebase'
import placeholderLogo              from '../assets/logos/placeholder.png'

export default function GameList() {
  const [games, setGames]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    async function loadGames() {
      try {
        const snap = await getDocs(collection(db, 'games'))
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log('Loaded games:', data)
        setGames(data)
      } catch (err) {
        console.error('Error loading games:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadGames()
  }, [])

  if (loading) return <div>Loading games…</div>
  if (error)   return <div className="text-red-500">Error: {error.message}</div>

  // Show 2 placeholders if no real games
  if (games.length === 0) {
    return (
      <ul className="space-y-4">
        {[1,2].map(i => (
          <li
            key={i}
            className="flex items-center p-4 bg-charcoal text-white rounded-lg shadow"
          >
            <img
              src={placeholderLogo}
              alt="No logo"
              className="w-12 h-12 mr-4 rounded"
            />
            <div>
              <div className="font-semibold">Placeholder Game</div>
              <div className="text-sm">—</div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="space-y-4">
      {games.map(g => (
        <li
          key={g.id}
          className="flex items-center p-4 bg-charcoal text-white rounded-lg shadow"
        >
          <img
            src={g.logoUrl || placeholderLogo}
            alt={`${g.team} logo`}
            className="w-12 h-12 mr-4 rounded"
          />
          <div>
            <div className="font-semibold">{g.team}</div>
            <div className="text-sm">{g.date}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
