import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-maroon text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} The Intramural League. All rights reserved.</p>
    </footer>
  )
}
