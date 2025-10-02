import { Receipt, ExpenseRequest, Notification, ExpenseItem, ExpenseCategory, ExpenseReport } from '../types/expenses';

// Storage keys
const STORAGE_KEYS = {
  RECEIPTS: 'vault_receipts',
  REQUESTS: 'vault_expense_requests',
  NOTIFICATIONS: 'vault_notifications',
  EXPENSE_ITEMS: 'vault_expense_items',
  EXPENSE_CATEGORIES: 'vault_expense_categories',
  EXPENSE_REPORTS: 'vault_expense_reports'
};

// Local storage helpers
function getFromStorage<T>(key: string, defaultValue: T[]): T[] {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function saveToStorage<T>(key: string, data: T[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to storage:', error);
  }
}

// Seed data
const seedCategories: ExpenseCategory[] = [
  { id: 'work-meals', name: 'Work Meals', icon: '🍽️' },
  { id: 'brussels-trip', name: 'Brussels Trip', icon: '🧳' },
  { id: 'train-travel', name: 'Train Travel', icon: '🚆' },
  { id: 'office-supplies', name: 'Office Supplies', icon: '📦' },
  { id: 'team-coffee', name: 'Team Coffee', icon: '☕' },
  { id: 'client-lunch', name: 'Client Lunch', icon: '🍝' }
];

const seedItems: ExpenseItem[] = [
  // Work Meals
  { id: '1', categoryId: 'work-meals', merchant: 'Nando\'s', date: '2025-10-02', amountGBP: 16.99 },
  { id: '2', categoryId: 'work-meals', merchant: 'Wondy\'s', date: '2025-10-10', amountGBP: 12.60 },
  { id: '3', categoryId: 'work-meals', merchant: 'Pizza Express', date: '2025-10-20', amountGBP: 9.25 },
  { id: '4', categoryId: 'work-meals', merchant: 'Itsu', date: '2025-10-21', amountGBP: 8.90 },
  
  // Brussels Trip
  { id: '5', categoryId: 'brussels-trip', merchant: 'Eurostar', date: '2025-10-03', amountGBP: 247.50 },
  { id: '6', categoryId: 'brussels-trip', merchant: 'Hotel Midi', date: '2025-10-03', amountGBP: 168.00 },
  { id: '7', categoryId: 'brussels-trip', merchant: 'City Taxi', date: '2025-10-04', amountGBP: 12.00 },
  
  // Train Travel
  { id: '8', categoryId: 'train-travel', merchant: 'GWR Ticket', date: '2025-10-06', amountGBP: 61.00 },
  { id: '9', categoryId: 'train-travel', merchant: 'TfL Top-up', date: '2025-10-07', amountGBP: 12.50 },
  { id: '10', categoryId: 'train-travel', merchant: 'LNER Ticket', date: '2025-10-15', amountGBP: 22.50 },
  
  // Office Supplies
  { id: '11', categoryId: 'office-supplies', merchant: 'Ryman', date: '2025-10-05', amountGBP: 34.20 },
  { id: '12', categoryId: 'office-supplies', merchant: 'Amazon Basics', date: '2025-10-09', amountGBP: 19.99 },
  
  // Team Coffee
  { id: '13', categoryId: 'team-coffee', merchant: 'Pret', date: '2025-10-08', amountGBP: 11.30 },
  { id: '14', categoryId: 'team-coffee', merchant: 'Costa', date: '2025-10-12', amountGBP: 9.10 },
  
  // Client Lunch
  { id: '15', categoryId: 'client-lunch', merchant: 'Dishoom', date: '2025-10-14', amountGBP: 43.80 },
  { id: '16', categoryId: 'client-lunch', merchant: 'Franco Manca', date: '2025-10-22', amountGBP: 28.40 }
];

const seedReceipts: Receipt[] = [
  {
    id: 'receipt-1',
    imageUrl: '/public/placeholder-receipt.svg',
    parsed: {
      merchant: 'Nando\'s',
      date: '2025-10-02',
      totalGBP: 16.99,
      category: 'Work Meals',
      lineItems: [
        { name: 'Chicken Burger', qty: 1, priceGBP: 12.99 },
        { name: 'Chips', qty: 1, priceGBP: 4.00 }
      ]
    },
    createdAt: '2025-10-02T12:30:00Z'
  },
  {
    id: 'receipt-2',
    imageUrl: '/public/placeholder-receipt.svg',
    parsed: {
      merchant: 'Eurostar',
      date: '2025-10-03',
      totalGBP: 247.50,
      category: 'Brussels Trip',
      lineItems: [
        { name: 'Standard Ticket', qty: 1, priceGBP: 247.50 }
      ]
    },
    createdAt: '2025-10-03T08:00:00Z'
  }
];

const seedRequests: ExpenseRequest[] = [
  {
    id: 'req-1',
    receiptId: 'receipt-1',
    merchant: 'Nando\'s',
    date: '2025-10-02',
    amountGBP: 16.99,
    category: 'Work Meals',
    status: 'Approved',
    submittedAt: '2025-10-02T12:35:00Z',
    updatedAt: '2025-10-02T14:20:00Z'
  },
  {
    id: 'req-2',
    receiptId: 'receipt-2',
    merchant: 'Eurostar',
    date: '2025-10-03',
    amountGBP: 247.50,
    category: 'Brussels Trip',
    status: 'Approved',
    submittedAt: '2025-10-03T08:05:00Z',
    updatedAt: '2025-10-03T10:15:00Z'
  },
  {
    id: 'req-3',
    receiptId: 'receipt-3',
    merchant: 'LNER Ticket',
    date: '2025-10-15',
    amountGBP: 22.50,
    category: 'Train Travel',
    status: 'Needs Info',
    submittedAt: '2025-10-15T16:30:00Z',
    updatedAt: '2025-10-15T16:30:00Z',
    notes: 'Please add receipt photo'
  }
];

const seedNotifications: Notification[] = [
  {
    id: 'notif-1',
    createdAt: '2025-10-02T14:20:00Z',
    title: 'Request Approved',
    body: 'Work Meals (Nando\'s £16.99)',
    requestId: 'req-1',
    read: false
  },
  {
    id: 'notif-2',
    createdAt: '2025-10-15T16:35:00Z',
    title: 'Needs Info',
    body: 'Train Travel (LNER Ticket £22.50) — please add receipt photo',
    requestId: 'req-3',
    read: false
  }
];

// Initialize storage with seed data if empty
function initializeStorage() {
  const categories = getFromStorage(STORAGE_KEYS.EXPENSE_CATEGORIES, seedCategories);
  const items = getFromStorage(STORAGE_KEYS.EXPENSE_ITEMS, seedItems);
  const receipts = getFromStorage(STORAGE_KEYS.RECEIPTS, seedReceipts);
  const requests = getFromStorage(STORAGE_KEYS.REQUESTS, seedRequests);
  const notifications = getFromStorage(STORAGE_KEYS.NOTIFICATIONS, seedNotifications);
  
  saveToStorage(STORAGE_KEYS.EXPENSE_CATEGORIES, categories);
  saveToStorage(STORAGE_KEYS.EXPENSE_ITEMS, items);
  saveToStorage(STORAGE_KEYS.RECEIPTS, receipts);
  saveToStorage(STORAGE_KEYS.REQUESTS, requests);
  saveToStorage(STORAGE_KEYS.NOTIFICATIONS, notifications);
}

// CRUD Operations for Receipts
export function getReceipts(): Receipt[] {
  return getFromStorage(STORAGE_KEYS.RECEIPTS, []);
}

export function addReceipt(receipt: Omit<Receipt, 'id'>): Receipt {
  const receipts = getReceipts();
  const newReceipt: Receipt = {
    ...receipt,
    id: `receipt-${Date.now()}`
  };
  receipts.push(newReceipt);
  saveToStorage(STORAGE_KEYS.RECEIPTS, receipts);
  return newReceipt;
}

// CRUD Operations for Expense Requests
export function getExpenseRequests(): ExpenseRequest[] {
  return getFromStorage(STORAGE_KEYS.REQUESTS, []);
}

export function addExpenseRequest(request: Omit<ExpenseRequest, 'id' | 'submittedAt' | 'updatedAt'>): ExpenseRequest {
  const requests = getExpenseRequests();
  const now = new Date().toISOString();
  const newRequest: ExpenseRequest = {
    ...request,
    id: `req-${Date.now()}`,
    submittedAt: now,
    updatedAt: now
  };
  requests.push(newRequest);
  saveToStorage(STORAGE_KEYS.REQUESTS, requests);
  return newRequest;
}

export function updateExpenseRequest(id: string, updates: Partial<ExpenseRequest>): ExpenseRequest | null {
  const requests = getExpenseRequests();
  const index = requests.findIndex(req => req.id === id);
  if (index === -1) return null;
  
  requests[index] = {
    ...requests[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  saveToStorage(STORAGE_KEYS.REQUESTS, requests);
  return requests[index];
}

// CRUD Operations for Notifications
export function getNotifications(): Notification[] {
  return getFromStorage(STORAGE_KEYS.NOTIFICATIONS, []);
}

export function addNotification(notification: Omit<Notification, 'id' | 'createdAt' | 'read'>): Notification {
  const notifications = getNotifications();
  const newNotification: Notification = {
    ...notification,
    id: `notif-${Date.now()}`,
    createdAt: new Date().toISOString(),
    read: false
  };
  notifications.push(newNotification);
  saveToStorage(STORAGE_KEYS.NOTIFICATIONS, notifications);
  return newNotification;
}

export function markNotificationAsRead(id: string): void {
  const notifications = getNotifications();
  const notification = notifications.find(n => n.id === id);
  if (notification) {
    notification.read = true;
    saveToStorage(STORAGE_KEYS.NOTIFICATIONS, notifications);
  }
}

export function markAllNotificationsAsRead(): void {
  const notifications = getNotifications();
  notifications.forEach(n => n.read = true);
  saveToStorage(STORAGE_KEYS.NOTIFICATIONS, notifications);
}

// CRUD Operations for Expense Items
export function getExpenseItems(): ExpenseItem[] {
  return getFromStorage(STORAGE_KEYS.EXPENSE_ITEMS, []);
}

export function addExpenseItem(item: Omit<ExpenseItem, 'id'>): ExpenseItem {
  const items = getExpenseItems();
  const newItem: ExpenseItem = {
    ...item,
    id: `item-${Date.now()}`
  };
  items.push(newItem);
  saveToStorage(STORAGE_KEYS.EXPENSE_ITEMS, items);
  return newItem;
}

// CRUD Operations for Expense Categories
export function getExpenseCategories(): ExpenseCategory[] {
  return getFromStorage(STORAGE_KEYS.EXPENSE_CATEGORIES, []);
}

// Derived selectors
export function getRequestsByStatus(status: ExpenseRequest['status']): ExpenseRequest[] {
  return getExpenseRequests().filter(req => req.status === status);
}

export function getUnreadNotifications(): Notification[] {
  return getNotifications().filter(n => !n.read);
}

export function getUnreadNotificationCount(): number {
  return getUnreadNotifications().length;
}

export function getTotalByMonth(month: string): number {
  const items = getExpenseItems().filter(item => item.date.startsWith(month));
  return items.reduce((sum, item) => sum + item.amountGBP, 0);
}

export function getTotalByCategory(categoryId: string): number {
  const items = getExpenseItems().filter(item => item.categoryId === categoryId);
  return items.reduce((sum, item) => sum + item.amountGBP, 0);
}

export function getApprovedTotalByMonth(month: string): number {
  const requests = getExpenseRequests().filter(req => 
    req.status === 'Approved' && req.date.startsWith(month)
  );
  return requests.reduce((sum, req) => sum + req.amountGBP, 0);
}

export function getPendingRequestsCount(): number {
  return getExpenseRequests().filter(req => req.status === 'Submitted').length;
}

// Initialize storage on module load
initializeStorage();
