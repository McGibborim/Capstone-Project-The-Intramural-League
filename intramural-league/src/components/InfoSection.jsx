import React from 'react'

/**
 * @param {string}        title       Optional section title
 * @param {string}        subtitle    Optional subtitle / lead‑in text
 * @param {string[]}      paragraphs  Array of paragraph strings
 * @param {string}        imageSrc    Optional image URL
 * @param {string}        imageAlt    Alt text for image
 * @param {boolean}       reverse     If true, image appears on right
 */
export default function InfoSection({
  title,
  subtitle,
  paragraphs = [],
  imageSrc,
  imageAlt = '',
  reverse = false,
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Title + subtitle */}
      {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

      {/* If imageSrc provided, render side‑by‑side; else just text */}
      {imageSrc ? (
        <div
          className={`flex flex-col md:flex-row items-center gap-8 ${
            reverse ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="md:w-1/2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-4 text-gray-700">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4 text-gray-700">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </section>
  )
}
