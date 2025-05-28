import express from "express";
import { checkAvailabilityAPI, createBooking, getHotelBookings, getUserBookings } from "../controllers/bookingController.js";
import { protect } from "../middlewares/authMiddleware.js";

const bookingRoutes=express.Router();

bookingRoutes.post("/check-availaility",checkAvailabilityAPI);
bookingRoutes.post("/book",protect,createBooking);
bookingRoutes.get('/user',protect,getUserBookings);
bookingRoutes.get("/hotel",protect,getHotelBookings);

export default bookingRoutes;