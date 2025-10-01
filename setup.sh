#!/bin/bash

# GreenReceipt Setup Script
echo "🌱 Setting up GreenReceipt..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install pnpm first:"
    echo "npm install -g pnpm"
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Copy environment files
echo "⚙️ Setting up environment files..."
cp services/api/env.example services/api/.env
cp apps/mobile/env.example apps/mobile/.env
cp apps/retailer-sim/env.example apps/retailer-sim/.env

echo "✅ Environment files created"

# Start database
echo "🗄️ Starting PostgreSQL database..."
pnpm db:up

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
sleep 10

# Run database migrations
echo "🔄 Running database migrations..."
pnpm db:migrate

# Seed database
echo "🌱 Seeding database with sample data..."
pnpm db:seed

echo ""
echo "🎉 Setup complete! You can now start the development servers:"
echo ""
echo "To start all services:"
echo "  pnpm dev"
echo ""
echo "Or start individually:"
echo "  pnpm --filter services/api dev      # API on :3001"
echo "  pnpm --filter apps/retailer-sim dev # Web simulator on :3000"
echo "  pnpm --filter apps/mobile start     # Mobile app (Expo)"
echo ""
echo "📱 Mobile App:"
echo "  - Install Expo Go on your phone"
echo "  - Scan the QR code from the terminal"
echo ""
echo "🌐 Retailer Simulator:"
echo "  - Open http://localhost:3000"
echo "  - Create receipts and generate QR codes"
echo ""
echo "🔧 API:"
echo "  - Health check: http://localhost:3001/health"
echo "  - API docs: http://localhost:3001/api"
echo ""
echo "Happy coding! 🌱"
