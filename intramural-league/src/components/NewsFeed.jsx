import React from 'react'
import NewsCard from './NewsCard'

export default function NewsFeed({ updates }) {
  return <div className="space-y-6">{updates.map(u => <NewsCard key={u.id} update={u} />)}</div>
}
