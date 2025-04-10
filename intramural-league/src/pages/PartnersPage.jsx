import React from 'react'
import LandingHeader from '../components/LandingHeader'
import InfoSection   from '../components/InfoSection'
import FeatureCard   from '../components/FeatureCard'
import Footer        from '../components/Footer'

export default function PartnersPage() {
  const partnerBenefits = [
    {
      id: 1,
      icon: '/assets/icons/integration.svg',
      title: 'Seamless Integration',
      description:
        'Plug our platform into your existing campus systems with single sign‑on and automated scheduling.',
    },
    {
      id: 2,
      icon: '/assets/icons/support.svg',
      title: 'Dedicated Support',
      description:
        'Our team provides 24/7 onboarding, training, and technical support to ensure your success.',
    },
    {
      id: 3,
      icon: '/assets/icons/analytics.svg',
      title: 'Advanced Analytics',
      description:
        'Gain insights with real‑time dashboards, custom reports, and data exports tailored to your needs.',
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Partner With Us</h1>
        </div>
      </section>

      {/* Plain‑text intro */}
      <InfoSection
        paragraphs={[
          'Join dozens of colleges who trust The Intramural League to power their campus sports programs. Our platform scales from small rec centers to large universities, offering flexibility and reliability.',
          'Fill out the form below to schedule a demo or get pricing details. We’ll work with you to tailor a solution that fits your institution’s unique needs.',
        ]}
      />

      {/* Image + text section */}
      <InfoSection
        title="Partner with Us"
        subtitle="Creating Unique Experiences for Every College"
        paragraphs={[
          'We’re dedicated to tailoring The Intramural League to fit the unique sports culture of each college we partner with. Whether it’s flag football in the fall, basketball tournaments in the winter, or softball under the spring sun, we’ll work with you to deliver an app that meets your students’ needs.',
          'By focusing on your school’s traditions, sports lineup, and community spirit, we aim to create unforgettable moments that bring players, fans, and organizers together. Let’s redefine intramural sports on your campus, one game at a time.',
        ]}
        imageSrc="/assets/images/partner.jpg"
        imageAlt="Students playing flag football"
        reverse={false}
      />

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits for Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerBenefits.map(b => (
              <FeatureCard
                key={b.id}
                icon={b.icon}
                title={b.title}
                description={b.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-maroon">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Let’s get started</h2>
          <p className="mb-8">Fill out our partner inquiry form and we’ll be in touch.</p>
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-maroon font-bold rounded hover:bg-gray-200 transition"
          >
            Contact Sales
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
