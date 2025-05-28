import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
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

const getRooms=async (req,res,next)=>{
    try{
        const rooms=await Room.find({}).populate({
            path:"hotel",
            populate:{
                path:"owner",
                select:"image"
            }
        }).sort({createdAt:-1})

        res.status(200).json(rooms)
    }catch(error){
        next(appError(error.message))
    }
}


const getOwnerRooms=async (req,res,next)=>{
    try{
        const hotel=await Hotel.findOne({owner:req.auth.userId});
        const rooms=await Room.find({hotel:hotel._id.toString()}).populate("hotel");
        res.status(200).json(rooms)
    }catch(error){
        next(appError(error.message))
    }
}

const toggleRoomAvailability=async (req,res,next)=>{
    try{
        const {roomId}=req.params;
        const hotel=await Hotel.findOne({owner:req.auth.userId});
        const room=await Room.findById(roomId);
        if(room.hotel.toString()!==hotel._id.toString()){
            return next(appError("Room not found",404))
        }
        room.isAvailable=!room.isAvailable;
        await room.save();
        res.status(200).json(room)
    }catch(error){
        next(appError(error.message))
    }
}

export {
    createRoom,
    getRooms,
    getOwnerRooms,
    toggleRoomAvailability
}