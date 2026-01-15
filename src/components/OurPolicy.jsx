import React from 'react'
import { RiExchangeFundsLine } from "react-icons/ri"
import { PiSealCheckFill } from "react-icons/pi"
import { BiSupport } from "react-icons/bi"

const policies = [
  {
    icon: RiExchangeFundsLine,
    title: "Easy Exchange",
    description: "Hassle-free product exchanges with no extra steps."
  },
  {
    icon: PiSealCheckFill,
    title: "7-Day Returns",
    description: "Return your purchase within 7 days, no questions asked."
  },
  {
    icon: BiSupport,
    title: "24/7 Support",
    description: "Our team is always here to help you, anytime."
  }
]

const OurPolicy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {policies.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 mx-auto mb-6 text-gray-900 group-hover:text-black transition-colors" />
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurPolicy
