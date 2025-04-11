import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db }                 from '../firebase'

export default function AdminSportsPage() {
  const [sports, setSports]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    getDocs(collection(db,'sports'))
      .then(snap => setSports(snap.docs.map(d=>({id:d.id,...d.data()}))))
      .catch(err=>setError(err.message))
      .finally(()=>setLoading(false))
  },[])

  if(loading) return <div>Loading sports…</div>
  if(error)   return <div className="text-red-500">{error}</div>

  return (
    <ul className="p-6 space-y-4">
      {sports.map(s => (
        <li key={s.id} className="
          bg-ivory text-text p-4 rounded-lg shadow
        ">
          {s.name || 'Unnamed Sport'}
        </li>
      ))}
    </ul>
  )
}
