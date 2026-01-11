// cron/fetchNse.js
import cron from "node-cron";
import { fetchAnnouncements } from "../utils/nseClient.js";
import { processAnnouncements } from "../services/processAnnouncements.js";

cron.schedule("*/2 * * * *", async () => {
  try {
    const data = await fetchAnnouncements();
    await processAnnouncements(data);
  } catch (err) {
    console.error("NSE fetch error:", err.message);
  }
});

