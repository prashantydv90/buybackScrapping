import { fetchAnnouncements } from "./ann.js";


export const insertBuybacks = async (req, res) => {
  try {
    await fetchAnnouncements();
    res.json({ success: true, message: "Data synced" });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};
