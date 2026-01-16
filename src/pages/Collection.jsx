import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { RiArrowDropDownLine } from "react-icons/ri";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

   const {products, search,showSearch} = useContext(ShopContext);
   const [showFilter,setShowFilter] =useState(false);
   const [filterProducts,setFilterProducts] = useState([]);
   const [category,setCategory] = useState([]);
   const [subCategory,setSubCategory] = useState([]);
   const [sortType,setSortType] = useState('relevant')

   const toggleCategory =(e)=>{
    if (category.includes(e.target.value)){
      setCategory(prev =>prev.filter(item => item !== e.target.value))

    }else{
      setCategory(prev => [...prev,e.target.value])
    }
   }

   const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev,e.target.value])
    }
   }

   const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    }

    if(category.length>0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length>0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
   }

   const sortProduct = () =>{
    let fpCopy = filterProducts.slice();

    switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break

      default:
        applyFilter();
        break
    }
   }

   useEffect(()=>{

    applyFilter();

   },[category,subCategory,search,showSearch])

   useEffect(()=>{
    sortProduct();

   },[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-12 pt-16 border-t border-gray-200">

  {/* Filters */}
  <aside className="w-full sm:w-64">

    {/* Mobile Toggle */}
    <button
      onClick={() => setShowFilter(!showFilter)}
      className="flex items-center justify-between w-full sm:hidden text-sm font-medium text-gray-900 mb-6"
    >
      Filters
      <RiArrowDropDownLine
        className={`text-xl transition-transform ${
          showFilter ? 'rotate-180' : ''
        }`}
      />
    </button>

    <div className={`${showFilter ? 'block' : 'hidden'} sm:block space-y-10`}>

      {/* Categories – TOP */}
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">
          Categories
        </p>

        <div className="space-y-3 text-sm text-gray-700">
          {['Women', 'Men', 'Kids'].map(item => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                value={item}
                className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-0"
                onChange={toggleCategory}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Type */}
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">
          Type
        </p>

        <div className="space-y-3 text-sm text-gray-700">
          {['Topwear', 'Bottomwear', 'Winterwear'].map(item => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                value={item}
                className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-0"
                onClick={toggleSubCategory}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

    </div>
  </aside>

  {/* Right Side */}

  <div className='flex-1'>

    <div className='flex justify-between text-base sm:text-2xl mb-4'>
      <Title text1={'ALL'} text2={'COLLECTION'} /> 
      {/* Product sort*/}
      <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
        <option value="relevant">Sort by : Relevant</option>
        <option value="low-high">Sort by : Low to High</option>
        <option value="high-low">Sort by : High to low </option>
      </select>

    </div>

    {/* Map product*/}

    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

      {
        filterProducts.map((item,index)=>(
          <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image} />

        ))
      }

    </div>

  </div>

</div>

    

    




  )
}

export default Collection