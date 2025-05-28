import Hotel from "../models/Hotel.js";
import User from "../models/User.js";
import appError from "../utils/appError.js";

const registerHotel=async (req,res)=>{
    try{
        const {name,address,contact,city}=req.body;
        const owner=req.user._id;
        const hotel=await Hotel.findOne({owner});
        if(hotel){
            return next(appError("Hotel already registered",400))
        }
        const newHotel=await Hotel.create({
            name,
            address,
            contact,
            owner,
            city
        })

        await User.findByIdAndUpdate(owner,{role:"hotelOwner"},{new:true});
        res.status(201).json({
            success:true,
            message:"Hotel registered successfully",
            newHotel
        })
    }catch(error){
        next(appError(error.message))
    }
}

export {registerHotel}