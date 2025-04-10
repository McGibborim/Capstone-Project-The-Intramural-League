import React from 'react'

export default function NewsCard({ update }) {
  return (
    <article className="bg-charcoal text-white rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img src={update.icon} alt="" className="w-8 h-8 mr-2" />
        <h3 className="font-bold">{update.title}</h3>
      </div>
      {update.content.split('\n\n').map((para, i) => (
        <p key={i} className="mb-2">{para}</p>
      ))}
      {update.bullets && (
        <ul className="list-disc list-inside mb-4 space-y-1">
          {update.bullets.map((b,i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      <p className="italic">— {update.author}</p>
    </article>
  )
}
