# 🔒 Vault Demo

## 🎉 Demo is Running!

### Services Status
- ✅ **API Server**: http://localhost:3001 (Health: http://localhost:3001/health)
- ✅ **Retailer Simulator**: http://localhost:3002
- ✅ **Mobile App**: Expo development server running
- ✅ **Database**: PostgreSQL with seeded data

### 🚀 Demo Flow

#### 1. Create a Receipt (Retailer Simulator)
1. Open http://localhost:3002 in your browser
2. Fill in the receipt form:
   - Select a merchant (Tesco Express, Apple Store, etc.)
   - Add line items with quantities and prices
   - Set totals and optional return/warranty dates
3. Click "Generate QR Code"
4. A QR code will appear that customers can scan

#### 2. Scan Receipt (Mobile App)
1. Install Expo Go on your phone from App Store/Google Play
2. Run the mobile app: `cd apps/mobile && pnpm start`
3. Scan the QR code from the terminal with Expo Go
4. Or scan the QR code displayed in the retailer simulator

#### 3. View Receipts and Analytics
1. In the mobile app, navigate through the tabs:
   - **Dashboard**: Overview of spending and alerts
   - **Receipts**: Browse all your digital receipts
   - **Insights**: Charts showing spending patterns
   - **Settings**: Privacy controls and data management

### 🔧 API Testing

Test the API endpoints directly:

```bash
# Health check
curl http://localhost:3001/health

# Get merchants
curl http://localhost:3001/api/v1/merchants

# Create anonymous session
curl -X POST http://localhost:3001/api/v1/auth/anonymous \
  -H "Content-Type: application/json" \
  -d '{"deviceId":"test-device-123"}'

# Get stats (requires auth token from above)
curl http://localhost:3001/api/v1/stats/overview \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### 📱 Mobile App Features

- **Anonymous Authentication**: No personal data required
- **QR Code Scanning**: Instant receipt claiming
- **Receipt Management**: Search, filter, and categorize
- **Spending Analytics**: Monthly trends, category breakdowns
- **Return/Warranty Tracking**: Alerts for upcoming deadlines
- **Privacy Controls**: Export data, clear local storage

### 🏪 Retailer Simulator Features

- **Receipt Creation**: Form-based receipt builder
- **QR Generation**: Real-time QR code display
- **Merchant Management**: Pre-configured sample merchants
- **Line Item Management**: Dynamic item addition/removal
- **Deep Link Support**: QR codes work with mobile app

### 🎯 Key Demo Points

1. **Anonymous QR Handoff**: No email/phone exchanged at checkout
2. **Instant Receipt Claiming**: Scan QR → receipt appears immediately
3. **Comprehensive Analytics**: Spending insights and trends
4. **Privacy-First Design**: All data stored locally on device
5. **Real-time Updates**: Changes reflect immediately across all views

### 🔍 Sample Data

The database is seeded with:
- 5 merchants (Tesco, Apple, Costa, Boots, John Lewis)
- 20+ sample receipts across different categories
- Realistic line items and pricing
- Return/warranty dates for testing alerts

### 🛠️ Troubleshooting

If services aren't running:
```bash
# Check API health
curl http://localhost:3001/health

# Restart API
cd services/api && npx tsx src/index.ts

# Restart retailer simulator
cd apps/retailer-sim && PORT=3002 pnpm dev

# Restart mobile app
cd apps/mobile && pnpm start
```

### 📊 Database

- **Host**: localhost:5433
- **Database**: vault
- **User**: postgres
- **Password**: password

Access with: `psql postgresql://postgres:password@localhost:5433/vault`

---

**Vault** - Making receipts digital, anonymous, and insightful! 🔒
