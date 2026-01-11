import axios from "axios";

const client = axios.create({
  baseURL: "https://www.nseindia.com",
  timeout: 15000,
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120",
    "Accept": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://www.nseindia.com",
    "Connection": "keep-alive"
  }
});

export async function fetchAnnouncements() {
  // Step 1: get cookies
  await client.get("/");
  
  // Step 2: actual data
  const res = await client.get("/api/corporate-announcements?index=equities");
  
  return res.data;
}

