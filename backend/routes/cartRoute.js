import express from 'express'
import { addToCart,getUserCart,UpdateCart} from '../controller/cartController.js'
import isAuth from '../middleware/isAuth.js'

const cartRoute=express.Router()
cartRoute.post('/get',isAuth,getUserCart)
cartRoute.post('/add',isAuth,addToCart)
cartRoute.post('/update',isAuth,UpdateCart)
export default cartRoute