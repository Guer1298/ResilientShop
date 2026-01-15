import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem.jsx'

const BestSeller = () => {

  const { products } = useContext(ShopContext)
  const [bestSellers, setBestSellers] = useState([])

  useEffect(() => {
    const bestProducts = products
      .filter(item => item.bestseller)
      .slice(0, 5)

    setBestSellers(bestProducts)
  }, [products])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <Title text1="Best" text2="Sellers" />

          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
            Our most loved pieces — chosen by our community for their
            design, quality, and everyday comfort.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <ProductItem
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BestSeller
