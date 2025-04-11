import React, { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import AdminHeader from '../components/AdminHeader'

export default function AdminDashboardPage() {
  const [counts, setCounts] = useState({ leagues:0, teams:0, games:0 })
  const [note, setNote]     = useState('')
  const [busy, setBusy]     = useState(false)
  const [error, setError]   = useState(null)

  useEffect(() => {
    async function fetchCounts() {
      const [ls, ts, gs] = await Promise.all([
        getDocs(collection(db,'leagues')),
        getDocs(collection(db,'teams')),
        getDocs(collection(db,'games')),
      ])
      setCounts({
        leagues: ls.size,
        teams:   ts.size,
        games:   gs.size,
      })
    }
    fetchCounts()
  }, [])

  const submitNote = async e => {
    e.preventDefault()
    setBusy(true)
    try {
      await addDoc(collection(db,'newsUpdates'), {
        title: 'Admin Note',
        content: note,
        author: 'Admin',
        createdAt: serverTimestamp(),
      })
      setNote('')
      alert('Note posted!')
    } catch (err) {
      console.error(err)
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen bg-charcoal text-text">
      <AdminHeader />
    
    <div className="p-6 space-y-8">
      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['leagues','teams','games'].map(key => (
          <div
            key={key}
            className="
              bg-ivory text-text rounded-lg p-6 text-center
              font-semibold shadow
            "
          >
            {key.charAt(0).toUpperCase()+key.slice(1)}<br/>
            <span className="text-2xl">{counts[key]}</span>
          </div>
        ))}
      </div>

      {/* Post a league update */}
      <div className="bg-ivory text-text rounded-lg p-6 shadow">
        <h3 className="font-bold mb-2">Post a League Update</h3>
        <form onSubmit={submitNote} className="space-y-4">
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            rows={4}
            placeholder="Enter your note here..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
          />
          {error && <div className="text-red-500">{error}</div>}
          <button
            type="submit"
            disabled={busy || !note.trim()}
            className="
              px-6 py-2 bg-tan text-text font-bold rounded-lg
              disabled:opacity-50 disabled:cursor-not-allowed
              hover:bg-tan/90 transition
            "
          >
            {busy ? 'Posting…' : 'Post Update'}
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}
