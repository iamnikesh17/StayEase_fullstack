import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../utils/multer.js";
import { createRoom, getOwnerRooms, getRooms, toggleRoomAvailability } from "../controllers/roomController.js";

const roomRoutes=express.Router();

roomRoutes.post("/",protect,upload.array("images",4),createRoom);
roomRoutes.get("/",getRooms);
roomRoutes.get("/owner",protect,getOwnerRooms);
roomRoutes.post("toggle-availability/:roomId",protect,toggleRoomAvailability);

export default roomRoutes;