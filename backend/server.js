import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import globalErrorHandler from "./middlewares/errorMiddleware.js";

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

// Global error handler
app.use(globalErrorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
