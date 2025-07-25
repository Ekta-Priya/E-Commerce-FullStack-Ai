import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";
import { userDataContext } from "../context/UserContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const shopDataContext = createContext()
function ShopContext({ children }) {

    let [products, setProducts] = useState([])
    let { serverUrl } = useContext(authDataContext)
    const { userData } = useContext(userDataContext)
    let [search, setSearch] = useState('')
    let [showSearch, setShowSearch] = useState(false)
    let [cartItem, setCartItem] = useState({})
    let currency = 'Rs';
    let delivery_fee = 30;
    const getProducts = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/product/list")
            console.log(result.data)
            setProducts(result.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const addtoCart = async (itemId, size) => {
        if (!size) {
            console.log("Select Product Size");
            return;
        }
        let cartData = structuredClone(cartItem);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData)

        if (userData) {
            try {
                let result = await axios.post(serverUrl + '/api/cart/add', { itemId, size }, { withCredentials: true })
                console.log(result.data)
            }
            catch (error) {
                console.log(error)

            }
        }

    }

    const getUserCart = async () => {
        try {
            const result = await axios.post(serverUrl + '/api/cart/get', {}, { withCredentials: true })
            setCartItem(result.data)
        }
        catch (error) {
            console.log(error)
            toast.error(error.messsage)
        }
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity
        setCartItem(cartData)
        if (userData) {
            try {
                await axios.post(serverUrl + "/api/cart/update", { itemId, size, quantity }, { withCredentials: true })
            }
            catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    
                        totalCount += cartItem[items][item]
                    
                }
                catch (error) {
                    console.log("error:", error)
                }
            }
        }
        return totalCount
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItem) {
            let itemInfo = products.find((products) => products._id === items);
            for (const item in cartItem[items]) {
                try {
                    if(cartItem[items][item]>0){
                        totalAmount+=itemInfo.price*cartItem[items][item];
                    }
                }
                catch (error) {

                }
            }
        }
        return totalAmount
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        getUserCart()
    }, [])



    let value = {
        products, currency, delivery_fee, getProducts, search, setSearch, showSearch, setShowSearch, cartItem, addtoCart, getCartCount, setCartItem, updateQuantity,getCartAmount
    }
    return (
        <div>
            <shopDataContext.Provider value={value}>
                {children}
            </shopDataContext.Provider>

        </div>
    )
}
export default ShopContext
