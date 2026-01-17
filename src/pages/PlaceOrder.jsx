import React, {useContext, useState} from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { FaStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { ShopContext } from '../context/ShopContext.jsx'



const PlaceOrder = () => {

  const [method,setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);


  return (
          <div className="flex flex-col sm:flex-row justify-between gap-12 pt-16 min-h-[80vh] border-t border-gray-200">

        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full sm:max-w-[480px]">

          <div className="mb-6">
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>

          {/* Inputs */}
          <div className="flex gap-4">
            <input
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              type="text"
              placeholder="First name"
            />
            <input
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              type="text"
              placeholder="Last name"
            />
          </div>

          <input
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="email"
            placeholder="Email address"
          />

          <input
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="text"
            placeholder="Street"
          />

          <div className="flex gap-4">
            <input
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              type="text"
              placeholder="City"
            />
            <input
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              type="text"
              placeholder="State"
            />
          </div>

          <div className="flex gap-4">
            <input
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              type="number"
              placeholder="Zipcode"
            />
            <input
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              type="text"
              placeholder="Country"
            />
          </div>

          <input
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="number"
            placeholder="Phone"
          />

          {/* Payment Info */}
          <div className="mt-12 space-y-10">

            <CartTotal />

            <div>
              <Title text1={'PAYMENT'} text2={'METHOD'} />

              <div className="mt-6 space-y-4">

                {/* Stripe */}
                <div
                  onClick={() => setMethod('stripe')}
                  className="
                    flex items-center gap-4
                    rounded-xl border border-gray-300
                    px-4 py-3 cursor-pointer
                    hover:border-gray-400 transition
                  "
                >
                  <span
                    className={`h-4 w-4 rounded-full border border-gray-900 ${
                      method === 'stripe' ? 'bg-gray-900' : ''
                    }`}
                  />
                  <FaStripe className="h-5 text-gray-800" />
                </div>

                {/* PayPal */}
                <div
                  onClick={() => setMethod('paypal')}
                  className="
                    flex items-center gap-4
                    rounded-xl border border-gray-300
                    px-4 py-3 cursor-pointer
                    hover:border-gray-400 transition
                  "
                >
                  <span
                    className={`h-4 w-4 rounded-full border border-gray-900 ${
                      method === 'paypal' ? 'bg-gray-900' : ''
                    }`}
                  />
                  <FaCcPaypal className="h-5 text-gray-800" />
                </div>

                {/* COD */}
                <div
                  onClick={() => setMethod('cod')}
                  className="
                    flex items-center gap-4
                    rounded-xl border border-gray-300
                    px-4 py-3 cursor-pointer
                    hover:border-gray-400 transition
                  "
                >
                  <span
                    className={`h-4 w-4 rounded-full border border-gray-900 ${
                      method === 'cod' ? 'bg-gray-900' : ''
                    }`}
                  />
                  <p className="text-sm font-medium text-gray-700">
                    Cash on delivery
                  </p>
                </div>

              </div>
            </div>

            {/* Button */}
            <div className="text-right pt-6">
              <button
                onClick={() => navigate('/orders')}
                className="
                  rounded-full
                  bg-black text-white
                  px-10 py-3
                  text-sm font-medium
                  hover:bg-gray-900
                  transition
                "
              >
                Place order
              </button>
            </div>

          </div>
        </div>
      </div>

  )
}

export default PlaceOrder