import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineShopping } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Collection', path: '/collection' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const navLinkClass = ({ isActive }) =>
  `relative text-sm tracking-wide transition-all duration-300
   ${isActive ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'}
  `

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="
        sticky top-0 z-40
        backdrop-blur-xl bg-white/70
        border-b border-black/5
      ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Brand */}
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight"
          >
            RESILIENT
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map(item => (
              <li key={item.path}>
                <NavLink to={item.path} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-5">

            <button
              aria-label="Search"
              className="p-2 rounded-full hover:bg-black/5 transition"
            >
              <CiSearch size={18} />
            </button>

            {/* Profile */}
            <div className="relative group">
              <button
                aria-label="User menu"
                className="p-2 rounded-full hover:bg-black/5 transition"
              >
                <CgProfile size={18} />
              </button>

              <div className="
                absolute right-0 mt-3 w-44
                opacity-0 scale-95
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-200
              ">
                <div className="rounded-xl bg-white shadow-xl border border-black/5 overflow-hidden text-sm">
                  {['My Profile', 'Orders', 'Logout'].map(item => (
                    <button
                      key={item}
                      className="
                        w-full text-left px-4 py-3
                        hover:bg-black/5 transition
                      "
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-black/5 transition"
            >
              <AiOutlineShopping size={18} />
              <span className="
                absolute -right-1 -bottom-1
                h-4 w-4 rounded-full
                bg-black text-white text-[10px]
                flex items-center justify-center
              ">
                10
              </span>
            </Link>

            {/* Mobile Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-black/5 transition"
              aria-label="Open menu"
            >
              <HiOutlineMenuAlt4 size={20} />
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <aside
            className="
              absolute right-0 top-0 h-full w-72
              bg-white rounded-l-2xl
              p-8
              animate-slide-in
            "
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mb-10 text-sm text-gray-400 hover:text-black transition"
            >
              Close
            </button>

            <ul className="flex flex-col gap-6 text-lg font-medium">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-black transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </>
  )
}

export default Navbar
