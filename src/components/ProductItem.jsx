import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext.jsx';
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
        <div className='overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <img src={image} alt={name} className='w-full h-auto object-cover'/>
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
    
  )
}

export default ProductItem