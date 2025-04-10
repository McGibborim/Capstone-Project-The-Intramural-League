// src/App.jsx
import React, { useState, useEffect } from 'react'
import LandingPage  from './pages/LandingPage'
import AboutPage    from './pages/AboutPage'
import PartnersPage from './pages/PartnersPage'
import UserHomePage from './pages/UserHomePage'
import LoginPage    from './pages/LoginPage'
import SignUpPage   from './pages/SignUpPage'

export default function App() {
  const getPageFromHash = () => window.location.hash.slice(1) || 'landing'
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  let Content
  switch (page) {
    case 'about':
      Content = AboutPage
      break
    case 'partners':
      Content = PartnersPage
      break
    case 'account':
      Content = UserHomePage
      break
    case 'login':
      Content = LoginPage
      break
    case 'signup':
      Content = SignUpPage
      break
    case 'landing':
    default:
      Content = LandingPage
  }

  return <Content />
}
