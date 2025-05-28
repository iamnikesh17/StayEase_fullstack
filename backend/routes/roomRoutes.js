import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../utils/multer.js";
import { createRoom } from "../controllers/roomController.js";

const roomRoutes=express.Router();

roomRoutes.post("/",protect,upload.array("images",4),createRoom)

export default roomRoutes;