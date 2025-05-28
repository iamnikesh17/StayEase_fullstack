import appError from "../utils/appError.js"
import User from "../models/User.js"
const protect=async (req,res,next)=>{
    try{
        const {userId} =req.auth;
        if(!userId){
            return next(appError("You are not logged in",401))
        }else{
            const user=await User.findById(userId);
            req.user=user;
            next()
        }
    }catch(error){
        next(appError)
    }
}

export {protect}