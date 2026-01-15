import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="relative">
        <Hero />
      </section>

      {/* Latest Collection */}
      <section className="mt-32">
        <LatestCollection />
      </section>

      {/* Best Sellers */}
      <section className="mt-32">
        <BestSeller />
      </section>

      {/* Policies */}
      <section className="mt-40">
        <OurPolicy />
      </section>

      {/* Newsletter */}
      <section className="mt-40">
        <NewsletterBox />
      </section>

      {/* Footer */}
      <Footer />

    </main>
  )
}

export default Home
