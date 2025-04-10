import React, { useState, useEffect } from 'react'
import { collection, getDocs }      from 'firebase/firestore'
import { db }                       from '../firebase'
import placeholderLogo              from '../assets/logos/placeholder.png'

export default function TeamList() {
  const [teams, setTeams]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    async function loadTeams() {
      try {
        const snap = await getDocs(collection(db, 'teams'))
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setTeams(data)
      } catch (err) {
        console.error('Error loading teams:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadTeams()
  }, [])

  if (loading) return <div>Loading teams…</div>
  if (error)   return <div className="text-red-500">Error: {error.message}</div>

  // Placeholder fallback when no teams exist
  if (teams.length === 0) {
    return (
      <ul className="space-y-4">
        {[1, 2].map(i => (
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
              <div className="font-semibold">Placeholder Team</div>
              <div className="text-sm">Placeholder League</div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="space-y-4">
      {teams.map(t => (
        <li
          key={t.id}
          className="flex items-center p-4 bg-charcoal text-white rounded-lg shadow"
        >
          <img
            src={t.logoUrl || placeholderLogo}
            alt={`${t.name} logo`}
            className="w-12 h-12 mr-4 rounded"
          />
          <div>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm">{t.league}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
