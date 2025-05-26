import mongoose from "mongoose";

const dbConnect=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo db connected successfully");
    }catch(error){
        console.log("mongo db connection unsuccessful");
    }
}

export default dbConnect