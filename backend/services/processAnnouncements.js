// services/processAnnouncements.js
import { Buyback } from "../models/Buyback.js";
import { isBuyback } from "../utils/filterBuybacks.js";
import { buildNseFileUrl } from "../utils/buildNseFileUrl.js";

export async function processAnnouncements(data) {
  for (const item of data) {
    if (!isBuyback(item)) continue;
    
    const broadcastAt = new Date(item.broadcast_date_time);
    const exists = await Buyback.findOne({ broadcastAt });
    if (exists) continue;
    
    await Buyback.create({
      symbol: item.symbol,
      companyName: item.company_name,
      subject: item.subject,
      details: item.details,
      broadcastAt,
      pdfUrl: buildNseFileUrl(item.attachment),
      xbrlUrl: buildNseFileUrl(item.xbrl)
    });
    
    console.log("X NEW BUYBACK:", item.symbol, broadcastAt);
  }
}

