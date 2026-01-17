import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineShopping } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { ShopContext } from '../context/ShopContext'
import MenteDigital from '../assets/MenteDigital.svg';

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
  const {setShowSearch,getCartCount} = useContext(ShopContext);

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
              onClick={()=>setShowSearch?.(true)}
            >
              <CiSearch size={18} />
            </button>

            {/* Profile */}

            <Link to={'/login'}>
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

            </Link>
            
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
                {getCartCount()}
              </span>
            </Link>

            {/* Sponsor */}
              <div className="hidden lg:flex items-center pl-6 border-l border-black/10">
                <a
                  href="https://www.mentedigital.com.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Mente Digital website"
                  className="flex items-center"
                >
                  <img
                    src={MenteDigital}
                    alt="Mente Digital sponsor logo"
                    className="
                      h-10
                      opacity-90
                      hover:opacity-100
                      hover:scale-105
                      transition
                      duration-300
                    "
                  />
                </a>
              </div>





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
                flex flex-col
              "
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mb-10 text-sm text-gray-400 hover:text-black transition"
              >
                Close
              </button>

              {/* Navigation */}
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

              {/* Spacer */}
              <div className="flex-1" />

              {/* Mobile Sponsor */}
              <div className="pt-6 border-t border-black/10 text-center">
                <p className="text-[11px] text-gray-400 tracking-widest uppercase mb-4">
                  In partnership with
                </p>
                <img
                  href="https://www.mentedigital.com.co"
                  src={MenteDigital}
                  alt="Sponsor logo"
                  className="
                    mx-auto
                    h-10
                    opacity-90
                    transition
                    duration-300
                  "
                />
              </div>
            </aside>
          </div>
        )}

    </>
  )
}

export default Navbar
