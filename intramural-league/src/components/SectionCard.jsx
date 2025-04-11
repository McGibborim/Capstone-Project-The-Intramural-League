import React from 'react'

export default function SectionCard({ title, children }) {
  return (
    <section className="bg-tan rounded-2xl overflow-hidden">
      {title && (
        <h2 className="
            text-center py-3
            text-ivory
            font-bold
            text-lg md:text-xl
        ">
          {title}
        </h2>
      )}
      <div className="p-4">
        {children}
      </div>
    </section>
  )
}
