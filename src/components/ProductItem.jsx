import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link
      to={`/product/${id}`}
      className="group block text-gray-900"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-50">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="mt-4">
        <p className="text-sm font-medium leading-snug text-gray-900">
          {name}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          {currency}{price}
        </p>
      </div>
    </Link>
  )
}

export default ProductItem
