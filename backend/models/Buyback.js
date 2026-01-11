// models/Buyback.js
import mongoose from "mongoose";

const buybackSchema = new mongoose.Schema({
  symbol: String,
  companyName: String,
  subject: String,
  details: String,
  broadcastAt: { type: Date, required: true, unique: true },
  pdfUrl: String,
  xbrlUrl: String
}, { timestamps: true });

export const Buyback = mongoose.model("Buyback", buybackSchema);

