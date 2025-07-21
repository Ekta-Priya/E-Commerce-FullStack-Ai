import express from 'express'
import { PlaceOrder ,updateStatus,userOrders,allOrders, placeOrderRazorpay, verifyRazorpay} from '../controller/orderController.js'
import isAuth from '../middleware/isAuth.js'
import adminAuth from '../middleware/adminAuth.js'

const orderRoute=express.Router()

//for user
orderRoute.post("/placeorder",isAuth,PlaceOrder)
orderRoute.post("/razorpay",isAuth,placeOrderRazorpay)
orderRoute.post("/userorders",isAuth,userOrders)
orderRoute.post("/verifyrazorpay",isAuth,verifyRazorpay)

//for admin
orderRoute.post("/list",adminAuth,allOrders)
orderRoute.post("/status",adminAuth,updateStatus)

export default orderRoute