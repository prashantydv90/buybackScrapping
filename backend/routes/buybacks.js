// routes/buybacks.js
import express from "express";
import { Buyback } from "../models/Buyback.js";
import { fetchAnnouncements } from "../ann.js";
import { insertBuybacks } from "../insert.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Buyback.find()
    .sort({ broadcastAt: -1 })
    .limit(100);
  res.json(data);
});

router.post('/insert',insertBuybacks);

export default router;

