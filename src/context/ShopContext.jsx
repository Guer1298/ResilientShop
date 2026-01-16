import React, { useState } from 'react'
import { createContext } from 'react'
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const deliveryFee = 5.99;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(true);


    const value = {
        products,
        currency,
        deliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch
    };
    
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;