import React from 'react'
import placeholderLogo from '../assets/logos/placeholder.png'

export default function NewsCard({ update }) {
  // Expect your Firestore docs to have these fields:
  // update.iconUrl (string), update.title (string),
  // update.content (string with “\n\n” paragraphs),
  // update.bullets (array of strings), update.author (string)
  const {
    iconUrl,
    title,
    content = '',
    bullets = [],
    author = 'League Administration',
  } = update

  return (
    <article className="bg-charcoal text-white rounded-lg p-6 shadow">
      <div className="flex items-center mb-4">
        <img
          src={iconUrl || placeholderLogo}
          alt=""
          className="w-8 h-8 mr-2 rounded"
        />
        <h3 className="font-bold">{title || 'Untitled Update'}</h3>
      </div>

      {/* Split content on double‑newline for paragraphs */}
      {content.split('\n\n').map((para, i) => (
        <p key={i} className="mb-2">{para}</p>
      ))}

      {/* Bullets list */}
      {bullets.length > 0 && (
        <ul className="list-disc list-inside mb-4 space-y-1">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}

      <p className="italic">— {author}</p>
    </article>
  )
}
