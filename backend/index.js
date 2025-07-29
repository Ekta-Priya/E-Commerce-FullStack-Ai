import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDb from './config/db.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import cors from "cors"
import userRoutes from './routes/userRoutes.js';
import productRoute from './routes/productRoute.js';
import cartRoute from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js';
import chatbotRoutes from "./routes/chatbot.js";

let app = express();
let port = process.env.PORT || 6000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:["https://e-commerce-fullstack-ai-frontend4.onrender.com","https://e-commerce-fullstack-ai-admin.onrender.com"],
  credentials:true
}))

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)

app.use("/api/chatbot", chatbotRoutes); 

app.get('/',(req,res)=>{
  res.send("hello from server")
});
app.listen(port, () => {
  console.log("port:", port);
  console.log("hello from server");
  connectDb();
});

