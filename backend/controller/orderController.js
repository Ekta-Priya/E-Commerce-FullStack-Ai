import Order from "../model/orderModel.js";
import User from "../model/userModel.js";
import razorpay from 'razorpay'
import dotenv from 'dotenv'
dotenv.config()

const currency = 'inr'
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

//for User
export const PlaceOrder = async (req, res) => {
    try {
        const { items, amount, address } = req.body;
        const userId = req.userId;

        if (!userId) {
            console.log("User ID missing in request.");
            return res.status(401).json({ message: "Unauthorized - userId missing" });
        }

        const orderData = {
            items,
            amount,
            userId,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        };

        console.log("Saving Order:", orderData);
        const newOrder = new Order(orderData);
        await newOrder.save();

        await User.findByIdAndUpdate(userId, { cartData: {} });

        return res.status(201).json({ message: "Order Placed" });
    } catch (error) {
        console.error("Order Save Error:", error);
        res.status(500).json({ message: "Order placed error!!" });
    }
};

export const verifyRazorpay = async (req, res) => {
    try {
        const userId = req.userId
        const { razorpay_order_id } = req.body
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if (orderInfo.status === 'paid') {
            await Order.findByIdAndUpdate(orderInfo.receipt, { payment: true });
            await User.findByIdAndUpdate(userId, { cartData: {} })
            res.status(200).json({ message: "payment successful" })
        }
        else {
            res.json({ message: "Payment Failed!" })
        }
    }
    catch (error) {

    }
}


export const placeOrderRazorpay = async (req, res) => {
    try {
        const { items, amount, address } = req.body;
        const userId = req.userId;
        const orderData = {
            items,
            amount,
            userId,
            address,
            paymentMethod: 'Razorpay',
            payment: false,
            date: Date.now()
        }
        const newOrder = new Order(orderData)
        await newOrder.save()

        const options = {
            amount: amount * 100,
            currency: currency.toUpperCase(),
            receipt: newOrder._id.toString()
        }
        await razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error)
                return res.status(500).json(error)
            }
            res.status(200).json(order)
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

export const userOrders = async (req, res) => {
    try {
        const userId = req.userId
        const orders = await Order.find({ userId })
        return res.status(200).json(orders)
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ message: "userOrders errror!" })
    }
}

// for ADMIN

export const allOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
        res.status(200).json(orders)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "adminAllOrders error" })
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body
        await Order.findByIdAndUpdate(orderId, { status })
        return res.status(201).json({ message: "status update" })
    } catch (error) {
        return res.status(500).json({ message: "error message" })
    }
}