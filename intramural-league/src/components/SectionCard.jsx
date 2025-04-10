import React from 'react'

export default function SectionCard({ title, children }) {
  return (
    <section className="bg-white border-4 border-orange rounded-lg overflow-hidden">
      <h2 className="bg-charcoal text-white text-center py-2 font-semibold">{title}</h2>
      <div className="p-4 space-y-2">{children}</div>
    </section>
  )
}
