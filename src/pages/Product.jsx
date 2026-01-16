import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { CiStar } from "react-icons/ci";
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async() => {
    
    const product = products.find((item) => item.id.toString() === productId);
    
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }

  }

  useEffect(() => {
    fetchProductData();
  }, [productId,products]);

  return productData ? (
    <div className="pt-16 transition-opacity duration-500 opacity-100">

  {/* Product Section */}
  <div className="flex flex-col lg:flex-row gap-16">

    {/* Images */}
    <div className="flex-1 flex flex-col-reverse lg:flex-row gap-4">

      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:w-24">
        {productData.image.map((item, index) => (
          <img
            key={index}
            src={item}
            onClick={() => setImage(item)}
            alt=""
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition 
              ${image === item 
                ? 'ring-2 ring-gray-900' 
                : 'opacity-70 hover:opacity-100'
              }`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 rounded-2xl overflow-hidden bg-gray-100">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

    </div>

    {/* Product Info */}
    <div className="flex-1 max-w-xl">

      <h1 className="text-3xl font-semibold tracking-tight">
        {productData.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-3 text-gray-500 text-sm">
        {[...Array(4)].map((_, i) => (
          <CiStar key={i} />
        ))}
        <span className="ml-2">(123 reviews)</span>
      </div>

      {/* Price */}
      <p className="mt-6 text-3xl font-semibold">
        {currency}{productData.price}
      </p>

      {/* Description */}
      <p className="mt-6 text-gray-600 leading-relaxed">
        {productData.description}
      </p>

      {/* Sizes */}
      <div className="mt-10">
        <p className="text-sm font-medium mb-4">Select size</p>
        <div className="flex gap-3">
          {productData.sizes.map((item, index) => (
            <button
              key={index}
              onClick={() => setSize(item)}
              className={`px-4 py-2 rounded-full text-sm transition
                ${
                  size === item
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button className="mt-10 w-full sm:w-auto bg-gray-900 text-white px-10 py-4 rounded-full text-sm hover:bg-black transition">
        Add to Cart
      </button>

      {/* Info */}
      <div className="mt-10 text-xs text-gray-500 space-y-2">
        <p>• 100% original product</p>
        <p>• Cash on delivery available</p>
        <p>• Easy returns within 7 days</p>
      </div>

    </div>
  </div>

  {/* Details */}
  <div className="mt-24 max-w-4xl">

    {/* Tabs */}
    <div className="flex gap-8 border-b text-sm">
      <button className="pb-4 border-b-2 border-gray-900 font-medium">
        Description
      </button>
      <button className="pb-4 text-gray-500 hover:text-gray-900 transition">
        Reviews (123)
      </button>
    </div>

    {/* Content */}
    <div className="mt-8 text-gray-600 text-sm leading-relaxed space-y-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        provident officiis tempore fugit ex vitae quidem asperiores.
      </p>
      <p>
        Impedit quod inventore saepe pariatur. Earum harum corrupti sit
        dolor facilis soluta hic iste dignissimos.
      </p>
    </div>

  </div>

  {/* Related */}
  <div className="mt-32">
    <RelatedProducts
      category={productData.category}
      subCategory={productData.subCategory}
    />
  </div>

</div>

  ): <div className='opacity-0'></div>
}

export default Product