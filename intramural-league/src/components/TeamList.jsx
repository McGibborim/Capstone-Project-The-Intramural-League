import React, { useState, useEffect } from 'react'
import { collection, getDocs }      from 'firebase/firestore'
import { db }                       from '../firebase'
import placeholderLogo              from '../assets/logos/placeholder.png'

export default function TeamList({ teams: propTeams = [] }) {
  const [teams, setTeams]     = useState(propTeams)
  const [loading, setLoading] = useState(propTeams.length === 0)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (propTeams.length) return

    async function loadTeams() {
      try {
        const snap = await getDocs(collection(db, 'teams'))
        setTeams(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadTeams()
  }, [propTeams])

  if (loading) return <div>Loading teams…</div>
  if (error)   return <div className="text-red-500">Error: {error.message}</div>

  const display = teams.length
    ? teams
    : [{ placeholder: true }, { placeholder: true }]

  return (
    <ul className="space-y-4">
      {display.map((t, i) => {
        const isPh = t.placeholder
        const href = isPh ? '#' : `#teams/${t.id}`

        return (
          <li key={i}>
            <a
              href={href}
              className="flex items-center p-4 bg-ivory text-text rounded-lg shadow
              transform transition-transform duration-150
              hover:scale-105 hover:bg-ivory/90"
            >
              <img
                src={isPh ? placeholderLogo : t.logoUrl || placeholderLogo}
                alt=""
                className="w-12 h-12 mr-4 rounded-full border-2 border-tan"
              />
              <div>
                <div className="font-semibold">
                  {isPh ? 'Placeholder Team' : t.name}
                </div>
                <div className="text-sm">
                  {isPh ? 'Placeholder League' : t.league}
                </div>
              </div>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
