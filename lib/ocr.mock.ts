import { Receipt } from '../types/expenses';

// Mock merchants for different categories
const mockMerchants = {
  'Work Meals': ['Nando\'s', 'Wondy\'s', 'Pizza Express', 'Itsu', 'Pret A Manger', 'Costa Coffee', 'Starbucks', 'Subway'],
  'Train Travel': ['GWR Ticket', 'TfL Top-up', 'LNER Ticket', 'Virgin Trains', 'CrossCountry', 'Thameslink'],
  'Brussels Trip': ['Eurostar', 'Hotel Midi', 'City Taxi', 'Brussels Metro', 'Airbnb', 'Uber'],
  'Office Supplies': ['Ryman', 'Amazon Basics', 'Staples', 'Office Depot', 'WHSmith', 'Paperchase'],
  'Team Coffee': ['Pret', 'Costa', 'Starbucks', 'Caffè Nero', 'Tim Hortons', 'Greggs'],
  'Client Lunch': ['Dishoom', 'Franco Manca', 'Wagamama', 'Nando\'s', 'Zizzi', 'Pizza Express'],
  'Other': ['Tesco', 'Sainsbury\'s', 'Boots', 'Superdrug', 'Argos', 'Currys']
};

// Mock amounts by category
const mockAmountRanges = {
  'Work Meals': { min: 7, max: 22 },
  'Train Travel': { min: 12, max: 150 },
  'Brussels Trip': { min: 50, max: 300 },
  'Office Supplies': { min: 15, max: 80 },
  'Team Coffee': { min: 3, max: 15 },
  'Client Lunch': { min: 20, max: 60 },
  'Other': { min: 5, max: 50 }
};

// Mock line items by category
const mockLineItems = {
  'Work Meals': [
    ['Chicken Burger', 'Chips', 'Drink'],
    ['Pizza Margherita', 'Garlic Bread', 'Coke'],
    ['Chicken Teriyaki', 'Rice', 'Miso Soup'],
    ['Sandwich', 'Crisps', 'Coffee']
  ],
  'Train Travel': [
    ['Standard Ticket', 'Booking Fee'],
    ['Oyster Top-up', 'Service Charge'],
    ['Advance Ticket', 'Reservation Fee']
  ],
  'Brussels Trip': [
    ['Eurostar Ticket', 'Booking Fee'],
    ['Hotel Room', 'City Tax'],
    ['Taxi Fare', 'Tip']
  ],
  'Office Supplies': [
    ['Notebooks', 'Pens', 'Staplers'],
    ['Printer Paper', 'Ink Cartridges'],
    ['Desk Organizer', 'Post-it Notes']
  ],
  'Team Coffee': [
    ['Coffee', 'Pastry'],
    ['Latte', 'Sandwich'],
    ['Cappuccino', 'Muffin']
  ],
  'Client Lunch': [
    ['Main Course', 'Side', 'Drink'],
    ['Starter', 'Main', 'Dessert'],
    ['Business Lunch', 'Wine']
  ],
  'Other': [
    ['Item 1', 'Item 2'],
    ['Product A', 'Product B'],
    ['Service', 'Tax']
  ]
};

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomAmount(category: keyof typeof mockAmountRanges): number {
  const range = mockAmountRanges[category];
  const amount = Math.random() * (range.max - range.min) + range.min;
  return Math.round(amount * 100) / 100; // Round to 2 decimal places
}

function getRandomLineItems(category: keyof typeof mockLineItems): Array<{ name: string; qty?: number; priceGBP: number }> {
  const possibleItems = mockLineItems[category];
  const selectedItems = getRandomElement(possibleItems);
  
  return selectedItems.map(item => ({
    name: item,
    qty: Math.random() > 0.5 ? Math.floor(Math.random() * 3) + 1 : undefined,
    priceGBP: Math.round((Math.random() * 20 + 5) * 100) / 100
  }));
}

export function mockScanReceipt(): Receipt {
  // Randomly select a category
  const categories = Object.keys(mockMerchants) as Array<keyof typeof mockMerchants>;
  const category = getRandomElement(categories);
  
  // Get random merchant for that category
  const merchant = getRandomElement(mockMerchants[category]);
  
  // Generate amount
  const totalGBP = getRandomAmount(category);
  
  // Generate line items
  const lineItems = getRandomLineItems(category);
  
  // Generate date (within last 30 days)
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
  
  return {
    id: `receipt-${Date.now()}`,
    imageUrl: '/public/placeholder-receipt.svg',
    parsed: {
      merchant,
      date: date.toISOString().split('T')[0],
      totalGBP,
      category,
      lineItems
    },
    createdAt: new Date().toISOString()
  };
}

// Simulate OCR processing delay
export function scanReceiptWithDelay(): Promise<Receipt> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockScanReceipt());
    }, 1500 + Math.random() * 1000); // 1.5-2.5 seconds delay
  });
}
