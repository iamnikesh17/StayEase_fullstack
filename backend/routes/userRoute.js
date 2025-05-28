import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { getUserData, storeRecentSearchedCities } from "../controllers/userController.js";

const userRoute=express.Router();

userRoute.get("/",protect,getUserData);
userRoute.post("/store-recent-search",protect,storeRecentSearchedCities)

export default userRoute