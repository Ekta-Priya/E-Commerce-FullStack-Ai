import React, { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { IoTrashBinSharp } from "react-icons/io5";
import CartTotal from "../component/CartTotal";
import cart from '../assets/cart.jpg';

function Cart() {
    const { products, currency, cartItem, updateQuantity } = useContext(shopDataContext);
    const [cartData, setCartData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const tempData = [];
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItem[items][item]
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItem]);

    return (
        <div className="relative w-full min-h-screen p-4 pb-32 overflow-hidden">
            {/* Blurred background layer */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center blur-[8px] brightness-[0.4]"
                style={{ backgroundImage: `url(${cart})` }}
            ></div>

            {/* Main content above the blur */}
            <div className="relative z-10">
                <div className="text-center mt-[80px] mb-6">
                    <Title text1={"YOUR"} text2={"CART"} />
                </div>

                <div className="flex flex-col gap-4 mb-10">
                    {cartData.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id);
                        return (
                            <div key={index} className="w-full border-t border-b">
                                <div className="w-full flex items-start gap-6 bg-[#51808048] py-4 px-5 rounded-2xl relative">
                                    <img className="w-[100px] h-[100px] rounded-md" src={productData.image1} alt="" />
                                    <div className="flex flex-col gap-2">
                                        <p className="md:text-[25px] text-[20px] text-[#f3f9fc]">{productData.name}</p>
                                        <div className="flex items-center gap-4">
                                            <p className="text-[20px] text-[#aaf4e7]">{currency}{productData.price}</p>
                                            <p className="w-[40px] h-[40px] text-white bg-[#518080b4] rounded-md flex items-center justify-center border border-[#9ff9f9]">
                                                {item.size}
                                            </p>
                                        </div>
                                    </div>

                                    <input
                                        type="number"
                                        min={1}
                                        defaultValue={item.quantity}
                                        className="absolute top-[46%] md:top-[40%] left-[75%] md:left-[50%] md:max-w-20 max-w-10 px-2 py-1 text-white bg-[#518080b4] rounded-md border border-[#9ff9f9] text-[18px] font-semibold"
                                        onChange={(e) =>
                                            e.target.value === '' || e.target.value === '0'
                                                ? null
                                                : updateQuantity(item._id, item.size, Number(e.target.value))
                                        }
                                    />
                                    <IoTrashBinSharp
                                        className="text-[#9ff9f9] w-[25px] h-[25px] absolute top-[50%] md:top-[40%] md:right-[5%] right-1 cursor-pointer"
                                        onClick={() => updateQuantity(item._id, item.size, 0)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="w-full max-w-[500px] mx-auto">
                    <CartTotal />
                    <button
                        className="w-full text-[18px] hover:bg-slate-500 bg-[#51808048] py-3 mt-6 rounded-2xl text-white border border-[#80808049]"
                        onClick={() => {
                            if (cartData.length > 0) {
                                navigate("/placeorder");
                            } else {
                                console.log("Your cart is empty");
                            }
                        }}
                    >
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
