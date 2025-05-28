import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import globalErrorHandler from "./middlewares/errorMiddleware.js";
import userRoute from "./routes/userRoute.js";
import hotelRoute from "./routes/hotelRoute.js";
import roomRoutes from "./routes/roomRoutes.js";

dotenv.config();
dbConnect();

const app = express();

app.use(cors());

app.use(express.json());
app.use(clerkMiddleware());


// Routes

app.use("/api/v1/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("Home page");
});
app.use("/api/v1/users",userRoute)
app.use("/api/v1/hotels",hotelRoute);
app.use("/api/v1/rooms",roomRoutes)
// Global error handler
app.use(globalErrorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
