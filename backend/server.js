import express from "express";
import dotenv from "dotenv";
import cors  from "cors"
import dbConnect from "./config/dbConnect.js";
import { clerkMiddleware } from '@clerk/express'
import globalErrorHandler from "./middlewares/errorMiddleware.js";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

dotenv.config()
dbConnect();
const app=express();
// middlewares
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(clerkMiddleware());


// routes
app.use("/api/v1/clerk",clerkWebhooks)

// global error handler
app.use(globalErrorHandler)
// listen to the server
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})