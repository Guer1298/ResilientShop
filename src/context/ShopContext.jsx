import React, { use, useEffect, useState } from 'react'
import { createContext } from 'react'
import { products } from '../assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const deliveryFee = 5.99;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(true);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId,size) => {

        if(!size){
            toast.error('Please select a size before adding to cart.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        let cartData = structuredClone(cartItems);


        if (cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems){
            for (const item in cartItems[itemId]){
                if(cartItems[itemId][item]>0){
                    totalCount += cartItems[itemId][item];
                }
            }
        }
        return totalCount;
    }

const updateQuantity = (itemId,size,quantity) => {
      let cartData = structuredClone(cartItems);

      cartData[itemId][size] = quantity;
      setCartItems(cartData);
}

const getCartAmount = () => {
    let totalAmount = 0;
    for(const items in cartItems){
        let itemInfo = products.find((product) => product.id == items);
        if (!itemInfo) continue;
        for(const item in cartItems[items]){
            try{
                if(cartItems[items][item]>0){
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            }catch(error){

            }
        }
    }
    return totalAmount;

}
    

    const value = {
        products,
        currency,
        deliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    };
    
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;