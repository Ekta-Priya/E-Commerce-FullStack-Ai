import React, { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

function Order() {
    const [orders, setOrders] = useState([]);
    const { currency } = useContext(shopDataContext);
    const { serverUrl } = useContext(authDataContext);

    const loadOrderData = async () => {
        try {
            const result = await axios.post(serverUrl + '/api/order/userorders', {}, { withCredentials: true });
            if (result.data) {
                setOrders(result.data.reverse());
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadOrderData();
    }, []);

    return (
        <div className="w-[99vw] min-h-[100vh] p-[20px] pb-[150px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]">
            <div className="text-center mt-[80px]">
                <Title text1={"MY"} text2={"ORDER"} />
            </div>

            <div className="flex flex-col gap-10 mt-6">
                {orders.map((order, index) => (
                    <div key={index} className="border border-gray-700 rounded-xl p-5 bg-[#22343477] text-white">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div>
                                <p className="text-[14px] md:text-[16px]"><strong>Order ID:</strong> {order._id}</p>
                                <p className="text-[14px] md:text-[16px]"><strong>Date:</strong> {new Date(order.date).toDateString()}</p>
                                <p className="text-[14px] md:text-[16px]"><strong>Payment:</strong> {order.paymentMethod}</p>
                                <p className="text-[14px] md:text-[16px]"><strong>Status:</strong> <span className="text-green-400">{order.status}</span></p>
                            </div>
                            <button
                                onClick={loadOrderData}
                                className="mt-4 md:mt-0 px-4 py-2 bg-[#101919] text-white rounded-md hover:bg-slate-600"
                            >
                                Track Order
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {order.items.map((item, i) => (
                                <div key={i} className="flex gap-4 bg-[#2a3a3a] p-3 rounded-md">
                                    <img src={item.image1} alt="" className="h-[100px] w-[100px] object-cover rounded-md" />
                                    <div>
                                        <p className="text-[16px]">{item.name}</p>
                                        <p className="text-[14px]">Price: {currency}{item.price}</p>
                                        <p className="text-[14px]">Quantity: {item.quantity}</p>
                                        <p className="text-[14px]">Size: {item.size}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Order;
