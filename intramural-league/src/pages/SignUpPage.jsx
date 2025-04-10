import React, { useState } from 'react'
import AuthHeader from '../components/AuthHeader'

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-maroon">
      {/* Sticky header */}
      <AuthHeader />

      {/* Centered form card */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-white border-4 border-orange rounded-2xl p-8">
          <h1 className="text-3xl font-semibold mb-2">Create an account</h1>
          <p className="text-gray-600 mb-6">
            Already have an account?{' '}
            <a href="#login" className="text-orange hover:underline">
              Log in
            </a>
          </p>

          <form className="space-y-6">
            {/* Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">First name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Last name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Confirm your password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                />
              </div>
            </div>

            {/* Helper text */}
            <p className="text-gray-500 text-sm">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>

            {/* Show password */}
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(v => !v)}
                className="form-checkbox h-5 w-5 text-orange"
              />
              <span className="text-gray-700 text-sm">Show password</span>
            </label>

            {/* Actions */}
            <div className="flex items-center justify-between mt-6">
              <a href="#login" className="text-gray-600 hover:underline text-sm">
                log in instead
              </a>
              <button
                type="submit"
                disabled
                className="px-8 py-3 bg-gray-300 text-white rounded-full opacity-50 cursor-not-allowed"
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Bottom controls */}
      <footer className="flex justify-between px-6 py-4">
        <select className="px-4 py-2 bg-white border-4 border-orange rounded-full focus:outline-none">
          <option>English (United States)</option>
        </select>
        <div className="flex space-x-4">
          {['Help', 'Privacy', 'Terms'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 bg-white border-4 border-orange rounded-full text-maroon hover:bg-gray-100 transition"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
