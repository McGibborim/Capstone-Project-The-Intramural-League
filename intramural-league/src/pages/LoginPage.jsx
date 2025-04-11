import React, { useState } from 'react'
import AuthHeader from '../components/AuthHeader'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-maroon">
      {/* Sticky header */}
      <AuthHeader />

      {/* Centered form card */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-ivory border-4 border-tan rounded-2xl p-8">
          <h1 className="text-3xl font-semibold mb-2">Welcome back</h1>
          <p className="text-gray-600 mb-6">
            Don’t already have an account?{' '}
            <a href="#signup" className="text-tan hover:underline">
              Register
            </a>
          </p>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tan"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tan"
              />
            </div>

            {/* Show password */}
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(v => !v)}
                className="form-checkbox h-5 w-5 text-tan"
              />
              <span className="text-gray-700 text-sm">Show password</span>
            </label>

            {/* Actions */}
            <div className="flex items-center justify-between mt-6">
              <a href="#signup" className="text-gray-600 hover:underline text-sm">
                register instead
              </a>
              <button
                type="submit"
                disabled
                className="px-8 py-3 bg-gray-300 text-white rounded-full opacity-50 cursor-not-allowed"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Bottom controls */}
      <footer className="flex justify-between px-6 py-4">
        <select className="px-4 py-2 bg-ivory border-4 border-tan rounded-full focus:outline-none">
          <option>English (United States)</option>
        </select>
        <div className="flex space-x-4">
          {['Help', 'Privacy', 'Terms'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 bg-ivory border-4 border-tan rounded-full text-maroon hover:bg-gray-100 transition"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
