"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Shield, TrendingUp, Clock, Leaf, DollarSign, Smartphone, QrCode, Cloud, BarChart3, Bell, Search } from "lucide-react"

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Digital Receipts for a <span className="text-green-600">Digital World</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Scan QR codes at checkout, get instant digital receipts, and never lose a receipt again. 
            It&apos;s that simple.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How <span className="text-green-600">Vault</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to revolutionize how you handle receipts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <QrCode className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">1. Scan QR Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">At checkout, simply scan the QR code displayed by the retailer. No personal data exchanged.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Smartphone className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">2. Instant Receipt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your digital receipt appears instantly in your Vault app, stored securely and permanently.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">3. Smart Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get AI-powered spending insights, budgeting tips, and never miss a return deadline.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful <span className="text-green-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage receipts smarter, not harder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Instant Digital Receipts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Scan QR codes at checkout to instantly receive digital receipts in your Vault app. No waiting, no paper waste.</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No personal data exchanged at checkout. Your privacy is protected with anonymous device tokens and secure encryption.</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                  <Cloud className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Cloud Backup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Never lose a receipt again. All your digital receipts are securely backed up and accessible from any device.</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Smart Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">AI-powered insights help you save money, track spending patterns, and make smarter financial decisions.</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Return & Warranty Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Never miss a return deadline or warranty expiration with smart alerts and automatic tracking.</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                  <Search className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Smart Search</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Find any receipt instantly with powerful search and filtering by merchant, date, amount, or category.</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                  <Bell className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Smart Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get notified about upcoming returns, warranty expirations, and spending insights tailored to your habits.</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Eco Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Track your environmental impact and see how many trees you&apos;ve saved by going paperless.</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Budgeting Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Automatic categorization and budgeting tools help you understand and control your spending patterns.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Consumers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              For <span className="text-green-600">Consumers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take control of your receipts and spending with powerful tools designed for modern life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Centralized Receipt Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600">All receipts in one secure, searchable location</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600">Automatic categorization by merchant and spending type</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600">Cloud backup ensures you never lose important receipts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600">Easy sharing for expense reports and tax purposes</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-8">
                <Smartphone className="h-16 w-16 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Mobile-First Design</h4>
              <p className="text-gray-600">Built for the way you shop — quick, easy, and always accessible.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:order-2">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-8">
                <BarChart3 className="h-16 w-16 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Smart Financial Insights</h4>
              <p className="text-gray-600">AI-powered analytics help you understand and optimize your spending habits.</p>
            </div>
            <div className="lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">AI-Powered Spending Insights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600">Personalized spending recommendations and money-saving tips</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600">Monthly and yearly spending trends and patterns</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600">Budget tracking and overspending alerts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600">Merchant comparison and price tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Retailers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              For <span className="text-green-600">Retailers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reduce costs, enhance sustainability, and improve customer experience with digital receipts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Eliminate paper, printing, and maintenance costs. Save thousands annually on receipt paper and thermal printers.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Enhance your brand with a strong sustainability message. Appeal to eco-conscious customers.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Customer Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Gain anonymized insights into customer behavior and spending patterns to improve your business.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="card-hover max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Easy Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Simple Setup</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Works with existing POS systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">No hardware changes required</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Quick implementation and training</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Customer Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Faster checkout process</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Never lose receipts again</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Better customer experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Go Digital?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join thousands of consumers and retailers already using Vault to revolutionize receipt management.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="btn-secondary bg-white text-green-700 hover:bg-gray-100 text-xl px-12 py-7">
              <a href="/contact">Get Started</a>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 text-xl px-12 py-7">
              <a href="/founders">Meet the Team</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}