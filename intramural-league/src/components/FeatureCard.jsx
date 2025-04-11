import React from 'react'

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-ivory rounded-lg shadow-lg p-6 text-center">
      {icon && (
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 mx-auto mb-4"
        />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
