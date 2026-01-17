import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from '../components/Title.jsx'
import { RiDeleteBin5Line } from "react-icons/ri";
import CartTotal from '../components/CartTotal.jsx'

const Cart = () => {

  const {products,currency,cartItems, updateQuantity,navigate} = useContext(ShopContext);

  const [cartData,setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    
    for (const items in cartItems){
      for (const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
            
          });
        }

      }
    }
    
    setCartData(tempData);

  }, [cartItems])


  return (
    <div className="border-t border-gray-200 pt-16">

  <div className="mb-10">
    <Title text1={'YOUR'} text2={'CART'} />
  </div>

  <div className="divide-y divide-gray-200">
    {cartData.map((item, index) => {
      const productData = products.find(
        product => product.id == item._id
      )

      if (!productData) return null

      return (
        <div
          key={index}
          className="
            py-6
            grid
            grid-cols-[4fr_1fr_0.5fr]
            sm:grid-cols-[4fr_2fr_0.5fr]
            items-center
            gap-6
            text-gray-800
          "
        >
          {/* Product */}
          <div className="flex items-start gap-6">
            <img
              src={productData.image[0]}
              alt=""
              className="
                w-16 sm:w-20
                rounded-xl
                bg-gray-100
                object-cover
              "
            />

            <div className="space-y-2">
              <p className="text-sm sm:text-lg font-medium text-gray-900">
                {productData.name}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{currency}{productData.price}</span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-xs">
                  {item.size}
                </span>
              </div>
            </div>
          </div>

          {/* Quantity */}
          <input
            type="number"
            min="1"
            defaultValue={item.quantity}
            onChange={(e) =>
              e.target.value === '' || e.target.value === '0'
                ? null
                : updateQuantity(
                    item._id,
                    item.size,
                    Number(e.target.value)
                  )
            }
            className="
              w-14 sm:w-20
              rounded-lg
              border border-gray-300
              text-center
              py-1
              text-sm
              focus:outline-none
              focus:ring-1 focus:ring-gray-400
            "
          />

          {/* Delete */}
          <RiDeleteBin5Line
            onClick={() =>
              updateQuantity(item._id, item.size, 0)
            }
            className="
              w-4 sm:w-5
              cursor-pointer
              text-gray-400
              hover:text-gray-900
              transition-colors
            "
          />
        </div>
      )
    })}
  </div>

  <div className="flex justify-end mt-24">
    <div className="w-full sm:w-[450px]">
      <CartTotal />
      <div className='w-full text-end'>
        <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>Proceed to Checkout</button>

      </div>
    </div>
  </div>

</div>


    
  )
}

export default Cart