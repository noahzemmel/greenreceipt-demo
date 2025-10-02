import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vault - Digital Receipts for a Digital World",
  description: "All your receipts. Zero waste. Digital receipts that save money, time, and trees.",
  keywords: ["digital receipts", "sustainability", "paperless", "receipt management", "eco-friendly"],
  authors: [{ name: "Vault Team" }],
  openGraph: {
    title: "Vault - Digital Receipts for a Digital World",
    description: "All your receipts. Zero waste. Digital receipts that save money, time, and trees.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vault - Digital Receipts for a Digital World",
    description: "All your receipts. Zero waste. Digital receipts that save money, time, and trees.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}