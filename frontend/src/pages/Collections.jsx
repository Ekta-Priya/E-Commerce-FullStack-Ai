import React, { useContext, useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import Card from "../component/Card";


function Collections() {
    let [showFilter, setShowFilter] = useState(false)
    let { products, search, showSearch } = useContext(shopDataContext)
    let [filterProduct, setFilterProduct] = useState([])
    let [category, setCategory] = useState([])
    let [subCategory, setSubCategory] = useState([])
    let [sortType, setSortType] = useState("relevant")

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setCategory(prev => [...prev, e.target.value])
        }
    }
    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }

    const applyFilter = () => {
        let productCopy = products.slice()
        if (showSearch && search) {
            productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length > 0) {
            productCopy = productCopy.filter(item => category.includes(item.category))
        }
        if (subCategory.length > 0) {
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProduct(productCopy)
    }

    const sortProduct = (e) => {
        let fbCopy = filterProduct.slice()
        switch (sortType) {
            case 'low-high':
                setFilterProduct(fbCopy.sort((a, b) => (a.price - b.price)))
                break;
            case 'high-low':
                setFilterProduct(fbCopy.sort((a, b) => (b.price - a.price)))
                break;
            default:
                applyFilter()
                break;
        }
    }

    useEffect(() => {
        sortProduct()
    }, [sortType])

    useEffect(() => {
        setFilterProduct(products)
    }, [products])

    useEffect(() => {
        applyFilter()
    }, [category, subCategory, search, showSearch])

  return (
  <div className="w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col pt-[70px] overflow-x-hidden z-[2] pb-[110px]">
    
    <div className="w-full px-[20px] lg:px-[50px] flex flex-col gap-[20px] mb-4">
      <Title text1={"ALL"} text2={"COLLECTIONS"} />
      <div className="flex justify-end md:justify-between">
        <select
          className="bg-slate-600 w-[60%] md:w-[200px] h-[50px] px-[10px] text-[white] rounded-lg hover:border-[#46d1f7] border-[2px]"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="relevant">Sort by: Relevant</option>
          <option value="low-high">Sort by: Low-High</option>
          <option value="high-low">Sort by: High-Low</option>
        </select>
      </div>
    </div>

    
    <div className="flex flex-col md:flex-row">
      
      <div
        className={`md:w-[30w] lg:w-[20vw] w-[100vw] ${
          showFilter ? "h-[45vh]" : "h-[8vh]"
        } p-[20px] border-r-[1px] border-gray-400 text-[#aaf5fa] lg:fixed`}
      >
        <p
          className="text-[25px] font-semibold flex gap-[5px] items-center justigy-start cursor-pointer"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          FILTERS
          {!showFilter && <FaAngleDoubleRight className="text-[18px] md:hidden" />}
          {showFilter && <FaAngleDown className="text-[18px] md:hidden" />}
        </p>

        
        <div
          className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${
            showFilter ? "" : "hidden"
          } md:block`}
        >
          <p className="text-[18px] text-[#f8fafa]">CATEGORIES</p>
          <div className="w-[230px] h-[120px] flex flex-col items-start justify-center gap-[10px]">
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex items-center gap-[10px] text-[16px] font-light cursor-pointer">
                <input type="checkbox" value={cat} className="w-3" onChange={toggleCategory} />
                {cat}
              </label>
            ))}
          </div>
        </div>

        
        <div
          className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${
            showFilter ? "" : "hidden"
          } md:block`}
        >
          <p className="text-[18px] text-[#f8fafa]">SUBCATEGORIES</p>
          <div className="w-[230px] h-[120px] flex flex-col items-start justify-center gap-[10px]">
            {["TopWear", "BottomWear", "WinterWear", "TraditionalWear"].map((sub) => (
              <label key={sub} className="flex items-center gap-[10px] text-[16px] font-light cursor-pointer">
                <input type="checkbox" value={sub} className="w-3" onChange={toggleSubCategory} />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      
      <div className="lg:pl-[20%] md:py-[10px]">
        <div className="lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]">
          {filterProduct.map((item, index) => (
            <Card key={index} id={item._id} name={item.name} price={item.price} image={item.image1} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

}
export default Collections
