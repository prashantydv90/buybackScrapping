# NSE Buyback Announcements Scraper

A real-time web application that scrapes and displays corporate buyback announcements from the National Stock Exchange (NSE) of India.

## Architecture

- **Backend**: Node.js + Express + MongoDB
- **Frontend**: React (Vite)
- **Scheduler**: CRON job runs every 2 minutes to fetch new announcements
- **Database**: MongoDB with deduplication based on broadcast datetime

## Features

- Automated scraping of NSE corporate announcements every 2 minutes
- Filters buyback-related announcements
- Stores data in MongoDB with automatic deduplication
- Live updating frontend table (refreshes every minute)
- Links to PDF reports and XBRL files

## Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or MongoDB Atlas connection string)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
# Create .env file
MONGODB_URI=mongodb://localhost:27017/buyback-scrapper
PORT=5000
```

4. Make sure MongoDB is running

5. Start the server:
```bash
npm run dev
# or
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Project Structure

```
BuybackScrapping/
├── backend/
│   ├── cron/
│   │   └── fetchNse.js          # CRON job (runs every 2 minutes)
│   ├── models/
│   │   └── Buyback.js           # MongoDB schema
│   ├── routes/
│   │   └── buybacks.js          # API routes
│   ├── services/
│   │   └── processAnnouncements.js  # Processing logic
│   ├── utils/
│   │   ├── nseClient.js         # NSE API client
│   │   ├── filterBuybacks.js    # Buyback filter
│   │   └── buildNseFileUrl.js   # URL builder
│   └── index.js                 # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── BuybackTable.jsx # Main table component
│   │   ├── api.js               # API client
│   │   ├── App.jsx              # App component
│   │   └── main.jsx             # Entry point
│   └── index.html
└── README.md
```

## API Endpoints

- `GET /api/buybacks` - Returns the latest 100 buyback announcements (sorted by broadcast time, descending)

## How It Works

1. CRON job triggers every 2 minutes
2. Fetches announcements from NSE API (with proper cookies and headers)
3. Filters for buyback-related announcements
4. Extracts PDF and XBRL links
5. Saves to MongoDB (with deduplication based on broadcast datetime)
6. Frontend polls the API every minute to display new data

## Notes

- The NSE API requires cookies and proper headers to work correctly
- The filter catches: "Buyback", "Post Buyback Public Announcement", "Letter of Offer for Buyback"
- MongoDB uses `broadcastAt` field as unique identifier to prevent duplicates

