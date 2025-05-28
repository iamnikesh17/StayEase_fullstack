import Hotel from "../models/Hotel.js";
import  appError from "../utils/appError.js"
import {uploadMedia} from "../utils/cloudinary.js"
const createRoom=async (req,res,next)=>{
    try{
        const {roomType,pricePerNight,amenities}=req.body;
        const hotel=await Hotel.findOne({owner:req.auth.userId})
        if(!hotel){
            return next(appError("Hotel not found",404))
        }

        const files=req.files;
        let imageUrls=[];
        if(files.length>0){
            imageUrls=await Promise.all(
                files.map(async (file)=>{
                    const uploadResponse=await uploadMedia(file.path);
                    return uploadResponse.secure_url
                })
            )
        }

        const newRoom=await Room.create({
            roomType,
            pricePerNight,
            amenities,
            images:imageUrls,
            hotel:hotel._id
        })

        res.status(201).json({
            success:true,
            message:"Room created successfully",
            newRoom
        })
    }catch(error){
        next(appError)
    }
}

export {
    createRoom
}