import React from 'react'
import heroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse sm:flex-row items-center gap-16">

        {/* Left / Content */}
        <div className="w-full sm:w-1/2">
          <div className="max-w-md text-[#1d1d1f]">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gray-400" />
              <p className="text-xs tracking-widest uppercase text-gray-500">
                Our Bestsellers
              </p>
            </div>

            {/* Headline */}
            <h1 className="Prata-regular text-4xl sm:text-5xl leading-tight font-semibold">
              Latest arrivals,<br />designed to last.
            </h1>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-4 cursor-pointer group">
              <span className="text-sm font-medium tracking-wide">
                Shop now
              </span>
              <span className="w-8 h-px bg-black transition-all duration-300 group-hover:w-12" />
            </div>

          </div>
        </div>

        {/* Right / Image */}
        <div className="w-full sm:w-1/2 h-[420px] sm:h-[520px] relative">
          <img
            src={heroImage}
            alt="Latest fashion arrivals"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
