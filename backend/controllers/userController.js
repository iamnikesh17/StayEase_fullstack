import appError from "../utils/appError.js"
const getUserData=async (req,res,next)=>{
    try{
        const role=req.user.role;
        const recentSearchedCities=req.user.recentSearchedCities;
        res.status(200).json({
            success:true,
            role,
            recentSearchedCities
        })

    }catch(error){
        next(appError(error.message,500))
    }
}


const storeRecentSearchedCities=async (req,res,next)=>{
    try{
        const {recentSearchedCity}=req.body;
        const user=await req.user;
        if(user.recentSearchedCities.length<3){
            user.recentSearchedCities.push(recentSearchedCity);
        }else{
            user.recentSearchedCities.shift();
            user.recentSearchedCities.push(recentSearchedCity);
        }
        res.json({
            success:true,
            message:"Recent searched cities stored successfully"
        })
    }catch(error){
        next(appError(error.message))
    }
}

export {
    getUserData,
    storeRecentSearchedCities
}