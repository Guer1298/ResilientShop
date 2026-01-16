import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { CiSearch } from "react-icons/ci"
import { RxCross2 } from "react-icons/rx"
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setVisible(location.pathname.includes('collection'))
  }, [location])

  if (!showSearch || !visible) return null

  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      
      <div className="max-w-4xl mx-auto flex items-center gap-4 px-4 py-4">

        {/* Search Input */}
        <div className="flex items-center flex-1 gap-3 px-5 py-3 rounded-full bg-gray-100 focus-within:bg-white focus-within:ring-1 focus-within:ring-gray-300 transition">
          <CiSearch className="text-gray-500 text-lg" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products"
            className="flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder-gray-400"
            autoFocus
          />
        </div>

        {/* Close */}
        <button
          onClick={() => setShowSearch(false)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Close search"
        >
          <RxCross2 className="text-gray-600 text-sm" />
        </button>

      </div>
    </div>
  )
}

export default SearchBar
