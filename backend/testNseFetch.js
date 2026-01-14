import { fetchAnnouncements } from "./ann.js";


(async () => {
  try {
    await fetchAnnouncements();
    console.log("Done");
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
