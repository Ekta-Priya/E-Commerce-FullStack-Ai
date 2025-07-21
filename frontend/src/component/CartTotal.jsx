import React, { useContext } from "react";
import Title from "./Title";
import { shopDataContext } from "../context/ShopContext";

function CartTotal() {
    const { currency, delivery_fee, getCartAmount, cartItem } = useContext(shopDataContext);

    const subtotal = getCartAmount();
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee;
    const getTotalQuantity = () => {
        let totalQty = 0;
        for (let itemId in cartItem) {
            for (let size in cartItem[itemId]) {
                totalQty += cartItem[itemId][size];
            }
        }
        return totalQty;
    };


    return (
        <div className="w-full bg-[#2d3f44] text-white p-5 rounded-lg shadow-md border border-[#4d8890]">
            <div className="text-xl mb-4">
                <Title text1={"CART"} text2={"TOTAL"} />
            </div>
            <div className="flex flex-col gap-4 text-[16px] md:text-[18px]">
                <div className="flex justify-between">
                    <span>Total Quantity</span>
                    <span>{getTotalQuantity()}</span>
                </div>

                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{currency}{subtotal}.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping Fee</span>
                    <span>{currency}{delivery_fee}</span>
                </div>
                <div className="border-t border-gray-400 my-2"></div>
                <div className="flex justify-between text-[18px] font-bold">
                    <span>Total</span>
                    <span>{currency}{total}</span>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;
