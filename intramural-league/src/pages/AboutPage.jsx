import React from 'react'
import LandingHeader from '../components/LandingHeader'
import FeatureCard   from '../components/FeatureCard'
import InfoSection   from '../components/InfoSection'
import Footer        from '../components/Footer'


export default function AboutPage() {
  const aboutFeatures = [
    {
      id: 1,
      icon: '/assets/icons/mission.svg',
      title: 'Our Mission',
      description:
        'To empower students and staff with a seamless intramural sports platform that fosters community, competition, and fun.',
    },
    {
      id: 2,
      icon: '/assets/icons/vision.svg',
      title: 'Our Vision',
      description:
        'A world where every campus has an engaging, inclusive, and data‑driven intramural experience for all.',
    },
    {
      id: 3,
      icon: '/assets/icons/values.svg',
      title: 'Our Values',
      description:
        'Collaboration, Fair Play, Innovation, and Growth—guiding everything we build and how we serve our community.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <LandingHeader />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[80vh] bg-cover bg-center" 
               style={{ backgroundImage: `url('/assets/background.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About The Intramural League</h1>
        </div>
      </section>

      <InfoSection
        title="About The Intramural League"
        subtitle="Connecting campuses through sport"
        paragraphs={[
          'At The Intramural League, we believe intramurals should be accessible, fun, and meaningful. Whether you’re a player, referee, or organizer, our platform gives you the tools to schedule games, track stats, and connect with your campus community.',
          'Founded in 2024 by a group of student‑athletes and tech enthusiasts, we set out to redefine how intramural sports are managed—from registration to real‑time score updates and post‑game analytics.',
        ]}
      />

      {/* Who we are grid */}
      <InfoSection
        title="Who We Are"
        paragraphs={[]}
        imageSrc={null} // no image, but you could pass an icon or illustration here
      />

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutFeatures.map(f => (
              <FeatureCard
                key={f.id}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-maroon">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to learn more?</h2>
          <p className="mb-8">Get in touch with our team to see how we can help your campus.</p>
          <a
            href="#partners"
            className="px-8 py-3 bg-ivory text-maroon font-bold rounded-lg hover:bg-tan hover:text-ivory transition"
          >
            Partner With Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
