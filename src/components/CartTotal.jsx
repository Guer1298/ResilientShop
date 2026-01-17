import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title.jsx';

const CartTotal = () => {
    const {currency,deliveryFee,getCartAmount} = useContext(ShopContext);
  return (
    <div className="w-full">

  <div className="mb-8">
    <Title text1={'CART'} text2={'TOTAL'} />
  </div>

  <div className="
    rounded-2xl
    border border-gray-200
    p-6
    text-sm
    text-gray-700
    space-y-4
  ">

    <div className="flex justify-between">
      <span className="text-gray-500">Subtotal</span>
      <span className="font-medium text-gray-900">
        {currency}{getCartAmount()}.00
      </span>
    </div>

    <div className="h-px bg-gray-200" />

    <div className="flex justify-between">
      <span className="text-gray-500">Shipping</span>
      <span className="font-medium text-gray-900">
        {currency}{deliveryFee}
      </span>
    </div>

    <div className="h-px bg-gray-200" />

    <div className="flex justify-between items-center pt-2">
      <span className="text-base font-medium text-gray-900">
        Total
      </span>
      <span className="text-base font-semibold text-gray-900">
        {currency}{
          getCartAmount() === 0
            ? 0
            : getCartAmount() + deliveryFee
        }
      </span>
    </div>

  </div>

</div>

  )
}

export default CartTotal