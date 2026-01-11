// routes/buybacks.js
import express from "express";
import { Buyback } from "../models/Buyback.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Buyback.find()
    .sort({ broadcastAt: -1 })
    .limit(100);
  res.json(data);
});

export default router;

