import React, { useState, useEffect } from 'react'
import { collection, getDocs }      from 'firebase/firestore'
import { db }                       from '../firebase'
import placeholderLogo              from '../assets/logos/placeholder.png'

export default function LeagueList() {
  const [leagues, setLeagues] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    async function fetchLeagues() {
      try {
        const snap = await getDocs(collection(db, 'leagues'))
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setLeagues(data)
      } catch (err) {
        console.error('Error loading leagues:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchLeagues()
  }, [])

  if (loading) return <div>Loading leagues…</div>
  if (error)   return <div className="text-red-500">Error: {error.message}</div>

  // If no real data, show 2 placeholders:
  if (leagues.length === 0) {
    return (
      <ul className="space-y-4">
        {[1, 2].map(i => (
          <li
            key={i}
            className="flex items-start p-4 bg-charcoal text-white rounded-lg shadow"
          >
            <img
              src={placeholderLogo}
              alt="No logo"
              className="w-12 h-12 mr-4 rounded"
            />
            <div>
              <h4 className="font-semibold">Placeholder League</h4>
              <p className="text-sm">Registration: —</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="space-y-4">
      {leagues.map(l => (
        <li
          key={l.id}
          className="flex items-start p-4 bg-charcoal text-white rounded-lg shadow"
        >
          <img
            src={l.logoUrl || placeholderLogo}
            alt={`${l.name} logo`}
            className="w-12 h-12 mr-4 rounded"
          />
          <div>
            <h4 className="font-semibold">{l.name}</h4>
            {l.registration && (
              <p className="text-sm">Registration: {l.registration}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
