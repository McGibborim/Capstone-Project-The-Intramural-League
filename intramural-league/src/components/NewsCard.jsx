import React from 'react'
import placeholderLogo from '../assets/logos/placeholder.png'

export default function NewsCard({ update }) {
  const {
    iconUrl,
    title,
    content = '',
    bullets = [],
    author = 'League Administration',
  } = update

  return (
    <article className="bg-ivory text-text rounded-lg p-6 shadow">
      <div className="flex items-center mb-4">
        <img
          src={iconUrl || placeholderLogo}
          alt=""
          className="w-8 h-8 mr-2 rounded-full border-2 border-tan"
        />
        <h3 className="font-bold">{title}</h3>
      </div>

      {content.split('\n\n').map((p, i) => (
        <p key={i} className="mb-2">{p}</p>
      ))}

      {bullets.length > 0 && (
        <ul className="list-disc list-inside mb-4">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      <p className="italic">— {author}</p>
    </article>
  )
}
