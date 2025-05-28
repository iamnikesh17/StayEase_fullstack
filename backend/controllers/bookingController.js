// function to check Availability fo Room

import Booking from "../models/Booking.js"
import Hotel from "../models/Hotel.js";

const checkAvailability=async ({checkInDate,checkOutDate,room})=>{
    try{
        const bookings=await Booking.find({
            room,
            checkInDate:{$gte:checkInDate,$lt:checkOutDate},
            checkOutDate:{$lte:checkOutDate,$gt:checkInDate}
        })
        const isAvailable=bookings.length===0;
        return isAvailable
    }catch(error){
        console.log(error,message)
    }
}

// api to check availability of room
const checkAvailabilityAPI=async (req,res,next)=>{
    try{
        const {room,checkInDate,checkOutDate}=req.body;
        const isAvailable=await checkAvailability({checkInDate,checkOutDate,room});
        res.status(200).json({
            success:true,
            isAvailable
        })
    }catch(error){
        next(appError(error.message))
    }
}


const createBooking=async (req,res,next)=>{
    try{
        const {room,checkInDate,checkOutDate,guests}=req.body;
        // check room availablity first
        const bookings=await Booking.find({
            room,
            checkInDate:{$gte:checkInDate,$lt:checkOutDate},
            checkOutDate:{$lte:checkOutDate,$gt:checkInDate}
        })

        if(bookings.length>0){
            return next(appError("Room is not available",400))
        }   

        // get the totalPrice

        const roomData=await Room.findById(room).populate("hotel");


        const checkIn=new Date(checkInDate);
        const checkOut=new Date(checkOutDate);
        const timediff=checkIn.getTime()-checkOut.getTime();
        const days=Math.ceil(timediff/(1000*60*60*24));
        const pricePerNight=roomData.pricePerNight;
        const totalPrice=days*pricePerNight;
        
        const newBooking=await Booking.create({
            user:req.user._id,
            room,
            checkInDate,
            checkOutDate,
            guests:+guests,
            totalPrice,
            hotel:roomData.hotel._id
        })

        res.status(201).json({
            success:true,
            message:"Booking created successfully",
            newBooking
        })
    
    }catch(error){
        next(appError(error.message))
    }
}

// api to get all bookings for a user

const getUserBookings=async (req,res,next)=>{
    try{
        const bookings=await Booking.find({user:req.user._id}).populate("hotel room").sort({createdAt:-1})
        res.status(200).json({
            success:true,
            bookings
        })
    }catch(error){
        next(appError(error))
    }
}

const getHotelBookings=async (req,res,next)=>{
    try{
        const hotel=await Hotel.findOne({owner:req.user._id})
        if(!hotel){
            return next(appError("Hotel not found",404))
        }
        const bookings=await Booking.find({hotel:hotel._id}).populate("hotel room user").sort({createdAt:-1})

        // total bookings
        const totalBookings=booking.length;

        // totalRevenue
        const totalRevenue=bookings.reduce((acc,booking)=>acc+booking.totalPrice,0);
        res.status(200).json({
            success:true,
            dashboardData:{totalBookings,totalRevenue,bookings}
        })
    }catch(error){
        next(appError(error.message))
    }
}


export {
    checkAvailabilityAPI,
    createBooking,
    getUserBookings,
    getHotelBookings
}