import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from '../components/Title.jsx'

const Orders = () => {
  const {products,currency} = useContext(ShopContext);
  return (
    <div className="border-t border-gray-200 pt-20">

  <div className="mb-12">
    <Title text1={'YOUR'} text2={'ORDERS'} />
  </div>

  <div className="divide-y divide-gray-200">
    {products.slice(1, 4).map((item, index) => (
      <div
        key={index}
        className="
          py-8
          flex flex-col md:flex-row
          justify-between
          items-start md:items-center
          gap-8
          text-gray-800
        "
      >
        {/* Product */}
        <div className="flex items-start gap-6 text-sm">
          <img
            src={item.image[0]}
            alt=""
            className="
              w-16 sm:w-20
              rounded-xl
              bg-gray-100
              object-cover
            "
          />

          <div className="space-y-2">
            <p className="text-base font-medium text-gray-900">
              {item.name}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="font-medium text-gray-900">
                {currency}{item.price}
              </span>
              <span>Qty 1</span>
              <span>Size M</span>
            </div>

            <p className="text-xs text-gray-400">
              Order date · 25 Jul 2026
            </p>
          </div>
        </div>

        {/* Status + Action */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-6">

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm text-gray-700">
              Ready to ship
            </span>
          </div>

          <button
            className="
              rounded-full
              border border-gray-300
              px-6 py-2
              text-sm font-medium
              text-gray-900
              hover:border-gray-400
              transition
            "
          >
            Track order
          </button>

        </div>
      </div>
    ))}
  </div>

</div>

  )
}

export default Orders