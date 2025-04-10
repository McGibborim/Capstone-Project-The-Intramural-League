import React, { useState, useEffect } from 'react'
import { collection, getDocs }      from 'firebase/firestore'
import { db }                       from '../firebase'
import NewsCard                     from './NewsCard'
import placeholderLogo              from '../assets/logos/placeholder.png'

export default function NewsFeed() {
  const [updates, setUpdates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    async function fetchUpdates() {
      try {
        const snap = await getDocs(collection(db, 'newsUpdates'))
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log('Loaded news updates:', data)
        setUpdates(data)
      } catch (err) {
        console.error('Error loading news updates:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchUpdates()
  }, [])

  if (loading) return <div>Loading news…</div>
  if (error)   return <div className="text-red-500">Error: {error.message}</div>

  // If no real updates, show 2 placeholder cards:
  if (updates.length === 0) {
    return (
      <div className="space-y-6">
        {[1, 2].map(i => (
          <article
            key={i}
            className="bg-charcoal text-white rounded-lg p-6 shadow"
          >
            <div className="flex items-center mb-4">
              <img
                src={placeholderLogo}
                alt="Placeholder"
                className="w-8 h-8 mr-2 opacity-50"
              />
              <h3 className="font-bold">Placeholder Update</h3>
            </div>
            <p className="mb-2">This is placeholder content.</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Placeholder bullet 1</li>
              <li>Placeholder bullet 2</li>
            </ul>
            <p className="italic">— Placeholder Author</p>
          </article>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {updates.map(update => (
        <NewsCard key={update.id} update={update} />
      ))}
    </div>
  )
}
