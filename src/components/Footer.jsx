import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-40 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 text-sm text-gray-600">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-xl font-semibold tracking-tight text-gray-900"
            >
              RESILIENT
            </Link>

            <p className="mt-4 max-w-md leading-relaxed text-gray-500">
              Thoughtfully designed products, built to last and made
              to support your everyday lifestyle.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-5">
              Company
            </p>

            <ul className="space-y-2">
              {['Home', 'About us', 'Delivery', 'Privacy policy'].map(item => (
                <li key={item}>
                  <Link
                    to="/"
                    className="hover:text-gray-900 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-5">
              Get in touch
            </p>

            <ul className="space-y-2">
              <li className="hover:text-gray-900 transition">
                +57 322 580 2582
              </li>
              <li className="hover:text-gray-900 transition">
                contact@resilient.com.co
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-200"></div>

        {/* Bottom */}
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Resilient. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
