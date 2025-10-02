# Vault 🔒

A mobile app where shoppers scan QR codes at checkout to receive digital receipts. The app stores all receipts and shows spending stats while maintaining complete anonymity - no email or phone numbers exchanged at checkout.

## 🎯 Project Overview

Vault addresses the problem of paper receipt waste while providing valuable spending insights to consumers. The key innovation is the **anonymous QR handoff** - no personal data is exchanged at checkout, matching our "no personal data barrier" approach.

### Key Features

- **Anonymous QR Scanning**: Scan QR codes at checkout without sharing personal data
- **Digital Receipt Storage**: All receipts stored securely on your device
- **Spending Analytics**: Track spending by category, merchant, and time period
- **Return & Warranty Tracking**: Get alerts for upcoming return deadlines and warranty expirations
- **Privacy-First**: No personal data collection, anonymous device tokens only
- **Retailer Simulator**: Web app for retailers to generate receipt QR codes

## 🏗️ Architecture

### Monorepo Structure
```
vault/
├── apps/
│   ├── mobile/          # React Native/Expo mobile app
│   └── retailer-sim/    # Vite + React web simulator
├── services/
│   └── api/            # Node.js + Express API
├── packages/
│   └── shared/         # Shared TypeScript types
└── docker-compose.yml  # PostgreSQL database
```

### Tech Stack

**Mobile App (React Native + Expo)**
- React Native with Expo SDK 49
- TypeScript for type safety
- React Navigation for routing
- TanStack Query for data fetching
- Victory Native for charts
- Expo SecureStore for token storage
- Expo Barcode Scanner for QR code scanning

**Backend API (Node.js + Express)**
- Node.js 20+ with TypeScript
- Express.js with middleware
- PostgreSQL database with Prisma ORM
- JWT authentication
- HMAC signature verification for QR codes
- Zod for request validation

**Retailer Simulator (Web)**
- Vite + React + TypeScript
- QR Code generation
- Form-based receipt creation
- Real-time QR code display

**Database**
- PostgreSQL 15 with Docker
- Prisma ORM for type-safe database access
- Comprehensive data model for receipts, merchants, and analytics

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm 8+
- Docker and Docker Compose
- Expo CLI (for mobile development)

### 1. Clone and Install

```bash
git clone <repository-url>
cd vault
pnpm install
```

### 2. Database Setup

```bash
# Start PostgreSQL
pnpm db:up

# Run migrations and seed data
pnpm db:migrate
pnpm db:seed
```

### 3. Environment Setup

Copy environment files and configure:

```bash
# API service
cp services/api/env.example services/api/.env

# Mobile app
cp apps/mobile/env.example apps/mobile/.env

# Retailer simulator
cp apps/retailer-sim/env.example apps/retailer-sim/.env
```

### 4. Start Development Servers

```bash
# Start all services
pnpm dev

# Or start individually:
pnpm --filter services/api dev      # API on :3001
pnpm --filter apps/retailer-sim dev # Web simulator on :3000
pnpm --filter apps/mobile start     # Mobile app (Expo)
```

## 📱 Mobile App Usage

### First Launch
1. Open the mobile app
2. Complete onboarding (creates anonymous device token)
3. Start scanning QR codes from the retailer simulator

### Scanning Receipts
1. Go to the "Scan" tab
2. Point camera at QR code from retailer
3. Receipt is automatically claimed and stored
4. View receipt details and analytics

### Features
- **Dashboard**: Overview of spending, top categories, alerts
- **Receipts**: Browse all receipts with search and filtering
- **Insights**: Charts showing spending patterns and trends
- **Settings**: Export data, privacy controls, app info

## 🏪 Retailer Simulator Usage

### Creating Receipts
1. Open http://localhost:3000
2. Fill in merchant details and line items
3. Set totals, tax, and optional return/warranty dates
4. Generate QR code
5. Scan with mobile app to test

### Features
- Pre-configured merchants (Tesco, Apple, Costa, etc.)
- Dynamic line item management
- Automatic total calculations
- QR code generation with deep links
- Receipt history (future feature)

## 🔧 API Endpoints

### Authentication
- `POST /api/v1/auth/anonymous` - Create anonymous session

### Receipts
- `POST /api/v1/receipts/claim` - Claim receipt from QR code
- `GET /api/v1/receipts` - List user's receipts
- `GET /api/v1/receipts/:id` - Get specific receipt

### Analytics
- `GET /api/v1/stats/overview` - Get spending statistics

### Retailer
- `POST /api/v1/retailer/receipts/draft` - Create draft receipt
- `POST /api/v1/retailer/receipts/:id/finalize` - Finalize receipt

### Merchants
- `GET /api/v1/merchants` - List all merchants

## 🔐 Security & Privacy

### QR Code Security
- HMAC-SHA256 signatures prevent tampering
- Time-limited QR codes (2-minute TTL)
- One-time use nonces prevent replay attacks
- No personal data in QR payload

### Data Privacy
- Anonymous device tokens only
- No email/phone collection
- Local data storage on device
- Optional data export and deletion

### API Security
- JWT authentication with short-lived tokens
- Rate limiting on all endpoints
- CORS protection
- Input validation with Zod schemas

## 📊 Data Model

### Core Entities
- **User**: Anonymous device tokens
- **Merchant**: Store information and categories
- **Receipt**: Transaction details with line items
- **LineItem**: Individual products/services
- **InsightEvent**: Analytics and tracking events

### Key Relationships
- User has many Receipts
- Merchant has many Receipts
- Receipt has many LineItems
- Receipts track return/warranty dates

## 🧪 Testing the Demo

### End-to-End Flow
1. Start all services (`pnpm dev`)
2. Open retailer simulator (http://localhost:3000)
3. Create a receipt with line items
4. Generate QR code
5. Open mobile app and scan QR code
6. View receipt in mobile app
7. Check analytics and insights

### Sample Data
The seed script creates:
- 5 sample merchants (Tesco, Apple, Costa, Boots, John Lewis)
- 20+ sample receipts across different categories
- Realistic line items and pricing
- Return/warranty dates for testing alerts

## 🛠️ Development

### Adding New Features
1. Update shared types in `packages/shared`
2. Add API endpoints in `services/api`
3. Update mobile app screens
4. Test with retailer simulator

### Database Changes
```bash
# Create migration
pnpm --filter services/api prisma migrate dev --name feature-name

# Reset database
pnpm db:reset
```

### Mobile Development
```bash
# Start Expo development server
cd apps/mobile
pnpm start

# Run on specific platform
pnpm android  # Android
pnpm ios      # iOS
pnpm web      # Web
```

## 📝 Environment Variables

### API Service (.env)
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/vault"
JWT_SECRET="your-jwt-secret"
RETAILER_SIGNING_SECRET="your-retailer-secret"
QR_TTL_SECONDS=120
PORT=3001
```

### Mobile App (.env)
```env
EXPO_PUBLIC_API_BASE_URL="http://localhost:3001/api"
```

### Retailer Simulator (.env)
```env
VITE_API_BASE_URL="http://localhost:3001/api"
```

## 🚀 Deployment

### API Deployment
1. Set up PostgreSQL database
2. Configure environment variables
3. Run migrations: `pnpm prisma migrate deploy`
4. Deploy to your preferred platform (Railway, Heroku, etc.)

### Mobile App Deployment
1. Build for production: `expo build`
2. Submit to app stores
3. Configure production API endpoints

### Web Simulator Deployment
1. Build: `pnpm build`
2. Deploy to Vercel, Netlify, or similar
3. Configure production API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with React Native, Expo, and Node.js
- Database powered by PostgreSQL and Prisma
- Charts by Victory Native
- QR code generation by qrcode.react
- Icons by Expo Vector Icons

---

**Vault** - Making receipts digital, anonymous, and insightful. 🔒
