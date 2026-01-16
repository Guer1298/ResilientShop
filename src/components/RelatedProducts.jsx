import React, { use, useState,useContext,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';


const RelatedProducts = ({category,subCategory}) => {
    const {products} = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=>{
        if(products.length>0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=> category ===item.category);
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);
            setRelated(productsCopy.slice(0,5));
        }
    },[products]);

  return (
    <div className="mt-32">

  {/* Section Header */}
  <div className="text-center mb-16">
    <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
      You may also like
    </p>
    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
      Related Products
    </h2>
  </div>

  {/* Products Grid */}
  <div className="
    grid 
    grid-cols-2 
    sm:grid-cols-3 
    md:grid-cols-4 
    lg:grid-cols-5 
    gap-x-6 
    gap-y-12
  ">
    {related.map((item, index) => (
      <ProductItem
        key={index}
        id={item._id}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    ))}
  </div>

</div>

  )
}

export default RelatedProducts