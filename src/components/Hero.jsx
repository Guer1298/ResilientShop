import React from 'react'
import heroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="flex flex-col sm:flex-row items-center gap-20">

          {/* Content */}
          <div className="w-full sm:w-1/2 order-1">
            <div className="max-w-md text-[#1d1d1f]">

              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-gray-400" />
                <p className="text-xs tracking-widest uppercase text-gray-500">
                  Our Bestsellers
                </p>
              </div>

              {/* Headline */}
              <h1 className="Prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold">
                Latest arrivals,<br />
                designed to last.
              </h1>

              {/* CTA */}
              <div className="mt-12 flex items-center gap-4 cursor-pointer group w-fit">
                <span className="text-sm font-medium tracking-wide text-gray-900">
                  Shop now
                </span>
                <span className="w-10 h-px bg-gray-900 transition-all duration-300 group-hover:w-14" />
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="w-full sm:w-1/2 order-2">
            <div className="relative h-[380px] sm:h-[520px] rounded-3xl overflow-hidden bg-gray-100">
              <img
                src={heroImage}
                alt="Latest fashion arrivals"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
