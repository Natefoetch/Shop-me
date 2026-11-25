# 🛒 SmartCart — Local Grocery Price & Loyalty Deal Recommender

**SmartCart** is a location-aware web application that aggregates live grocery prices across nearby supermarkets and shopping centres—factoring in **Pick n Pay Smart Shopper** and other loyalty card discounts to recommend the cheapest place to buy your shopping list.

---

## ✨ Features

- **📍 Location-Based Scanning**: Set your address, suburb, postal code, or use GPS to automatically detect supermarkets and shopping centres within your chosen radius.
- **💳 Loyalty & Smart Shopper Integration**:
  - Toggle your **Pick n Pay Smart Shopper** card (plus Xtra Savings, WRewards, etc.) to calculate true checkout prices rather than standard shelf prices.
  - Highlights exclusive Smart Shopper instant cash-off deals, combo specials, and points-earning promotions.
- **🔍 Cross-Store Price Aggregation**: Scrapes and syncs real-time product pricing and weekly catalogues from supported local retailers.
- **💡 Smart Cart Optimization**:
  - **Single-Store Mode**: Finds the single cheapest store for your entire basket to save on travel time.
  - **Multi-Store Split Mode**: Recommends splitting your list across 2–3 nearby stores in the same shopping centre to maximize savings.
- **📉 Price History & Alerts**: Track historical price trends for staple items and get notified when your favorite products go on Smart Shopper promotion.
- **🧾 Smart Shopping Lists**: Save recurring weekly lists, compare unit prices (per kg/L), and substitute out-of-stock items automatically.

---

## 🛠️ Tech Stack

- **Frontend**: React / Next.js, Tailwind CSS, Leaflet / Google Maps API
- **Backend**: Node.js (Express) or Python (FastAPI)
- **Database**: PostgreSQL + PostGIS (for geospatial radius queries)
- **Data Ingestion**: Playwright / Puppeteer web scrapers, Retailer APIs, Redis (caching & rate limiting)
- **Task Scheduling**: Celery / BullMQ for automated daily price and promo refreshes

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+) or Python (v3.10+)
- PostgreSQL (v14+) with the `PostGIS` extension enabled
- Redis (for caching store searches and scraping queues)
- Maps & Geocoding API Key (Google Maps, Mapbox, or OpenStreetMap/Nominatim)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd smartcart
   ```

2. **Install dependencies**
   ```bash
   # Install frontend & backend packages
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/smartcart
   REDIS_URL=redis://localhost:6379
   MAPS_API_KEY=your_maps_api_key_here
   DEFAULT_SEARCH_RADIUS_KM=10
   CURRENCY=ZAR
   ```

4. **Initialize the database**
   ```bash
   npx prisma migrate dev
   # Or run your SQL schema setup including PostGIS extensions
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ How It Works

1. **Geolocation & Store Discovery**: When a user enters their location, the backend queries spatial data to identify all supported supermarkets and malls within the selected radius.
2. **Product Normalization**: Identical products across different retailers (e.g., *2L Full Cream Milk*) are matched using barcodes (EAN/UPC), brand names, and weight/volume normalization.
3. **Loyalty & Pricing Engine**:
   - Stores both `standard_price` and `loyalty_price` (e.g., Smart Shopper promotional price) per SKU.
   - Evaluates basket totals based on the loyalty cards enabled in the user's profile.
   - Ranks stores by net checkout cost, distance, and item availability.

---

## 📂 Project Structure

```text
smartcart/
├── client/                 # Frontend UI (Next.js / React)
├── server/                 # REST / GraphQL API & recommendation logic
├── scrapers/               # Modular retailer & loyalty promo crawlers
├── database/               # Migrations, PostGIS queries, and seed data
├── docker-compose.yml      # Local setup for Postgres, Redis, and workers
└── README.md
```

---

## 🗺️ Roadmap

- [ ] **Smart Shopper Points Estimator**: Calculate estimated Smart Shopper points earned per basket
- [ ] **Multi-Card Wallet**: Support toggling Checkers Xtra Savings, Woolworths WRewards, and Spar Rewards simultaneously
- [ ] **Barcode Scanner**: Mobile web barcode scanner for quick in-store price checks
- [ ] **OCR Receipt Scanning**: Crowdsource in-store-only loyalty specials from user receipts
- [ ] **Fuel Cost Estimator**: Weigh travel distance against basket savings

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you would like to change, or submit a pull request with clear documentation.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewRetailerScraper`)
3. Commit your Changes (`git commit -m 'Add scraper for Retailer X'`)
4. Push to the Branch (`git push origin feature/NewRetailerScraper`)
5. Open a Pull Request
