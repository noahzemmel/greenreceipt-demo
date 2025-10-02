export type Receipt = {
  id: string;
  imageUrl?: string;       // placeholder image for scanned receipt
  parsed: {
    merchant: string;
    date: string;          // ISO date
    totalGBP: number;
    category: "Work Meals" | "Train Travel" | "Brussels Trip" | "Office Supplies" | "Team Coffee" | "Client Lunch" | "Other";
    lineItems?: Array<{ name: string; qty?: number; priceGBP: number }>;
  };
  createdAt: string;       // ISO
};

export type ExpenseRequest = {
  id: string;
  receiptId: string;
  merchant: string;
  date: string;            // from Receipt.parsed.date
  amountGBP: number;
  category: Receipt["parsed"]["category"];
  status: "Submitted" | "Approved" | "Rejected" | "Needs Info";
  submittedAt: string;
  updatedAt: string;
  notes?: string;
};

export type Notification = {
  id: string;
  createdAt: string;
  title: string;
  body: string;
  requestId?: string;
  read: boolean;
};

export type ExpenseItem = {
  id: string;
  categoryId: string;
  merchant: string;
  date: string;   // ISO, e.g. "2025-10-02"
  amountGBP: number; // e.g. 16.99
  receiptId?: string; // link to a receipt if user "Adds to Vault"
  notes?: string;
};

export type ExpenseCategory = {
  id: string;
  name: string;           // e.g., "Work Meals"
  icon: string;           // emoji or icon name
};

export type ExpenseReport = {
  id: string;
  month: string; // "2025-10"
  categoryId?: string; // optional category-scoped report
  itemIds: string[];
  status: "draft" | "submitted" | "approved";
  generatedAt?: string;
};
