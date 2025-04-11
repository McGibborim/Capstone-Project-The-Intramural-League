import React from 'react'
import LandingHeader from '../components/LandingHeader'
import FeatureCard from '../components/FeatureCard'
import Footer from '../components/Footer'

export default function LandingPage() {
  // Dummy features array; update with real text and icons as needed
  const features = [
    {
      id: 1,
      icon: '/assets/icons/customization.svg', // ensure these icons are in public/assets/icons/
      title: 'Customizable Events',
      description: 'Easily schedule and track events with our fully customizable interface.',
    },
    {
      id: 2,
      icon: '/assets/icons/communication.svg',
      title: 'Improved Communication',
      description: 'Seamlessly communicate with players and staff with integrated messaging.',
    },
    {
      id: 3,
      icon: '/assets/icons/statistics.svg',
      title: 'Real-Time Stats',
      description: 'Access up-to-date team stats and league standings in real time.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with sticky behavior already built */}
      <LandingHeader />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[80vh] bg-cover bg-center" 
               style={{ backgroundImage: `url('/assets/background.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to The Intramural League</h1>
          <p className="text-lg md:text-2xl mb-8">
            Organize, compete, and connect—your intramural sports community starts here.
          </p>
          <button className="px-8 py-3 bg-charcoal text-white font-bold border-tan rounded-lg hover:bg-tan/90 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(feature => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action (CTA) Section */}
      <section className="py-16 bg-maroon">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to join?</h2>
          <p className="mb-8">
            Sign up today and be part of the most dynamic intramural sports community around.
          </p>
          <a
            href="#signup"
            className="inline-block px-8 py-3 bg-ivory text-maroon font-bold rounded-lg hover:bg-tan hover:text-ivory transition">
            Sign Up Now
            </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
