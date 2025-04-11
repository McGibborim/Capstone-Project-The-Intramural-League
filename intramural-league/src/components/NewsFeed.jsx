import React, { useState, useEffect } from 'react'
import { collection, getDocs }      from 'firebase/firestore'
import { db }                       from '../firebase'
import NewsCard                     from './NewsCard'

export default function NewsFeed({ updates: propUpdates = [] }) {
  const [updates, setUpdates] = useState(propUpdates)
  const [loading, setLoading] = useState(propUpdates.length === 0)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (propUpdates.length) return

    getDocs(collection(db, 'newsUpdates'))
      .then(snap => setUpdates(snap.docs.map(d => ({ id: d.id, ...d.data() }))))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [propUpdates])

  if (loading) return <div>Loading news…</div>
  if (error)   return <div className="text-red-500">Error: {error.message}</div>

  const display = updates.length
    ? updates
    : [{ placeholder: true }, { placeholder: true }]

  return (
    <ul className="space-y-4">
      {display.map((u, i) => {
        if (u.placeholder) {
          return (
            <NewsCard
              key={i}
              update={{
                iconUrl: null,
                title: 'Placeholder Update',
                content: 'Placeholder paragraph.',
                bullets: ['Bullet one', 'Bullet two'],
                author: 'Placeholder',
              }}
            />
          )
        }
        return (
          <li key={u.id}>
            <a href={`#news/${u.id}`}>
              <NewsCard update={u} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
