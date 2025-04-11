import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db }                 from '../firebase'
import placeholderLogo        from '../assets/logos/placeholder.png'

export default function AdminLeaguesPage() {
  const [leagues, setLeagues] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    getDocs(collection(db,'leagues'))
      .then(snap => setLeagues(snap.docs.map(d=>({id:d.id,...d.data()}))))
      .catch(err=>setError(err.message))
      .finally(()=>setLoading(false))
  },[])

  if(loading) return <div>Loading leagues…</div>
  if(error)   return <div className="text-red-500">{error}</div>

  return (
    <ul className="p-6 space-y-4">
      {leagues.map(l => (
        <li key={l.id} className="
          flex items-center p-4
          bg-ivory text-text
          rounded-lg shadow
          hover:bg-ivory/90 transition transform duration-150 hover:scale-102
        ">
          <img
            src={l.logoUrl||placeholderLogo}
            alt=""
            className="w-12 h-12 mr-4 rounded-full border-2 border-tan"
          />
          <div>
            <div className="font-semibold">{l.name}</div>
            <div className="text-sm">{l.league || 'No league field'}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
