import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import buybacksRouter from "./routes/buybacks.js";
import "./cron/fetchNse.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/buyback-scrapper";

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/buybacks", buybacksRouter);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Buyback Scrapper API is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

