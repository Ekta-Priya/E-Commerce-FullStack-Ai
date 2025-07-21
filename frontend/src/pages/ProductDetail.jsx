import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopDataContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from "../component/RelatedProduct";
import { userDataContext } from "../context/UserContext";


function ProductDetail() {
    let { productId } = useParams();
    let { products, currency, addtoCart } = useContext(shopDataContext);
    let [productData, setProductData] = useState(false);

    const [image, setImage] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [size, setSize] = useState('');

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage1(item.image1);
                setImage2(item.image2);
                setImage3(item.image3);
                setImage4(item.image4);
                setImage(item.image1);
                return null;
            }
        });
    };

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    return productData ? (
        <div>
            <div className="w-[99vw] min-h-[130vh] md:min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col lg:flex-row items-center gap-[20px]">
                <div className="lg:w-[50vw] w-[90vw] flex flex-col-reverse lg:flex-row gap-[20px] mt-[70px]">
                    <div className="lg:w-[20%] md:w-[80%] h-auto flex flex-wrap lg:flex-col items-center justify-center gap-[20px]">
                        {[image1, image2, image3, image4].map((img, idx) => (
                            <div key={idx} className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
                                <img src={img} alt="" className="w-full h-full cursor-pointer rounded-md object-cover" onClick={() => setImage(img)} />
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-[60%] w-[100%] h-auto border-[1px] border-[#80808049] rounded-md overflow-hidden">
                        <img src={image} alt="" className="w-full h-full text-[30px] text-white text-center rounded-md object-cover" />
                    </div>
                </div>

                <div className="lg:w-[50vw] w-[100vw] lg:h-[75vh] h-auto lg:mt-[80px] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] lg:pl-[0px] lg:px-[0px] lg:py-[0px] gap-[10px]">
                    <h1 className="text-[30px] md:text-[40px] font-semibold text-[aliceblue]">{productData.name.toUpperCase()}</h1>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-[20px] fill-[#FFD700]" />
                        <FaStar className="text-[20px] fill-[#FFD700]" />
                        <FaStar className="text-[20px] fill-[#FFD700]" />
                        <FaStar className="text-[20px] fill-[#FFD700]" />
                        <FaStarHalfAlt className="text-[20px] fill-[#FFD700]" />
                        <p className="text-[18px] font-semibold pl-[5px] text-[white]"> (128)</p>
                    </div>
                    <p className="text-[24px] md:text-[30px] font-semibold pl-[5px] text-[white]">{currency} {productData.price}</p>
                    <p className="w-full md:w-[90%] text-[16px] md:text-[20px] font-semibold pl-[5px] text-[white]">{productData.description}</p>
                    <div className="flex flex-col gap-[10px] my-[10px]">
                        <p className="text-[20px] md:text-[25px] font-semibold pl-[5px] text-[white]">Select Size</p>
                        <div className="flex flex-wrap gap-2">
                            {
                                productData.size.map((item, index) => (
                                    <button key={index} className={`border py-2 px-4 bg-slate-300 rounded-md ${item === size ? 'bg-black text-[#2f97f1] text-[20px]' : ''}`} onClick={() => setSize(item)}>{item}</button>
                                ))
                            }
                        </div>
                        <button className="text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#80808049] text-white shadow-md shadow-black" onClick={() => addtoCart(productData._id, size)}>Add to Cart</button>

                        <button className="bg-pink-500 text-white px-3 py-1 rounded-md"
                        >
                            Wishlist
                        </button>




                    </div>
                    <div className="w-[90%] h-[1px] bg-slate-700"></div>
                    <div className="w-full text-[14px] md:text-[16px] text-white">
                        <p>100% Original Product</p>
                        <p>Cash on delivery is available</p>
                        <p>Easy exchange within 7 days</p>
                    </div>
                </div>
            </div>

            <div className="w-[100%] min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start justify-start flex-col overflow-x-hidden">
                <div className="w-full max-w-[1000px] flex flex-wrap gap-4 justify-start md:justify-start px-4 md:px-10 mt-[60px] mx-auto">
                    <p className="border border-white px-6 py-3 text-sm md:text-base text-white rounded-md cursor-pointer hover:bg-white hover:text-black transition">
                        Description
                    </p>
                    <p className="border border-white px-6 py-3 text-sm md:text-base text-white rounded-md cursor-pointer hover:bg-white hover:text-black transition">
                        Reviews (128)
                    </p>
                </div>
                <div className="w-[90%] max-w-[900px] min-h-[150px] bg-[#3336397c] border border-gray-600 text-white text-[15px] md:text-[17px] leading-relaxed px-[20px] py-[30px] mx-auto mt-[20px] rounded-lg shadow-md">
                    <p className="text-center">
                        Upgrade your wardrobe with stylish fits that enhance your beauty and make you look super chic — all at a decent price without burning a hole in your pocket. Available now on OneCart. Crafted from breathable fabric that's easy to maintain, perfect for any occasion, and super comfortable to wear and accessorize.
                    </p>
                </div>
                <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id} />
            </div>
        </div>
    ) : <div className="opacity-0"></div>;
}

export default ProductDetail