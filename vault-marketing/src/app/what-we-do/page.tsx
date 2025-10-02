"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Shield, TrendingUp, Clock, Leaf, DollarSign, Smartphone, QrCode, Cloud, BarChart3, Bell, Search, ArrowRight, CheckCircle, Star, Users, Globe, Target, Award, Sparkles } from "lucide-react"

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        {/* Floating elements */}
        <div className="absolute top-[15%] left-[8%] w-6 h-6 bg-green-300 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-[35%] right-[12%] w-8 h-8 bg-blue-300 rounded-full animate-float animation-delay-2500"></div>
        <div className="absolute bottom-[20%] left-[18%] w-7 h-7 bg-purple-300 rounded-full animate-float animation-delay-3000"></div>
        <div className="absolute top-[65%] left-[25%] w-5 h-5 bg-yellow-300 rounded-full animate-float animation-delay-1500"></div>
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-transparent to-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn animation-delay-100">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl mb-8 animate-pulseGlow">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-none mb-8 text-gradient-green animate-fadeIn animation-delay-200">
              Digital Receipts
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fadeIn animation-delay-300">
              for a <span className="text-green-600">Digital World</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto mb-12 animate-fadeIn animation-delay-400 leading-relaxed">
              Scan QR codes at checkout, get instant digital receipts, and never lose a receipt again. 
              It&apos;s that simple.
            </p>
            <div className="flex flex-wrap justify-center gap-6 animate-fadeIn animation-delay-500">
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-green-200 animate-float animation-delay-1000">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700 font-medium">Instant Receipts</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-green-200 animate-float animation-delay-1500">
                <Shield className="h-6 w-6 text-green-600" />
                <span className="text-gray-700 font-medium">Privacy Protected</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-green-200 animate-float animation-delay-2000">
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-gray-700 font-medium">Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-white to-blue-50 shadow-inner-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeIn animation-delay-100">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
              How <span className="text-gradient-green">Vault</span> Works
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Three simple steps to revolutionize how you handle receipts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <Card className="card-hover bg-gradient-to-br from-green-50 to-white border-green-200 p-8 text-center animate-slideInFromBottom animation-delay-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/30 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl mb-6 shadow-xl animate-pulseGlow">
                  <QrCode className="h-10 w-10 text-white" />
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-lg font-bold mb-4">1</div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Scan QR Code</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-lg text-gray-600 leading-relaxed">At checkout, simply scan the QR code displayed by the retailer. No personal data exchanged.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-blue-50 to-white border-blue-200 p-8 text-center animate-slideInFromBottom animation-delay-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-6 shadow-xl animate-pulseGlow animation-delay-2000">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-lg font-bold mb-4">2</div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Instant Receipt</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-lg text-gray-600 leading-relaxed">Your digital receipt appears instantly in your Vault app, stored securely and permanently.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-purple-50 to-white border-purple-200 p-8 text-center animate-slideInFromBottom animation-delay-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/30 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl mb-6 shadow-xl animate-pulseGlow animation-delay-4000">
                  <BarChart3 className="h-10 w-10 text-white" />
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-lg font-bold mb-4">3</div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Smart Insights</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-lg text-gray-600 leading-relaxed">Get AI-powered spending insights, budgeting tips, and never miss a return deadline.</p>
              </CardContent>
            </Card>
          </div>

          {/* Process Flow Visualization */}
          <div className="flex justify-center items-center space-x-8 animate-fadeIn animation-delay-800">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <ArrowRight className="h-8 w-8 text-gray-400" />
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <ArrowRight className="h-8 w-8 text-gray-400" />
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 shadow-inner-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeIn animation-delay-100">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
              Powerful <span className="text-gradient-green">Features</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to manage receipts smarter, not harder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Instant Digital Receipts", description: "Scan QR codes at checkout to instantly receive digital receipts in your Vault app. No waiting, no paper waste.", color: "green" },
              { icon: Shield, title: "Privacy First", description: "No personal data exchanged at checkout. Your privacy is protected with anonymous device tokens and secure encryption.", color: "blue" },
              { icon: Cloud, title: "Cloud Backup", description: "Never lose a receipt again. All your digital receipts are securely backed up and accessible from any device.", color: "purple" },
              { icon: TrendingUp, title: "Smart Analytics", description: "AI-powered insights help you save money, track spending patterns, and make smarter financial decisions.", color: "green" },
              { icon: Clock, title: "Return & Warranty Tracking", description: "Never miss a return deadline or warranty expiration with smart alerts and automatic tracking.", color: "orange" },
              { icon: Search, title: "Smart Search", description: "Find any receipt instantly with powerful search and filtering by merchant, date, amount, or category.", color: "blue" },
              { icon: Bell, title: "Smart Alerts", description: "Get notified about upcoming returns, warranty expirations, and spending insights tailored to your habits.", color: "purple" },
              { icon: Leaf, title: "Eco Impact", description: "Track your environmental impact and see how many trees you've saved by going paperless.", color: "green" },
              { icon: DollarSign, title: "Budgeting Tools", description: "Automatic categorization and budgeting tools help you understand and control your spending patterns.", color: "blue" },
            ].map((feature, index) => (
              <Card key={index} className={`card-hover bg-gradient-to-br from-${feature.color}-50 to-white border-${feature.color}-200 p-6 animate-scaleIn animation-delay-${index * 100} relative overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-24 h-24 bg-${feature.color}-100/20 rounded-full -translate-y-12 translate-x-12`}></div>
                <CardHeader className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl mb-4 shadow-lg`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Consumers */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-inner-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeIn animation-delay-100">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
              For <span className="text-gradient-blue">Consumers</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Take control of your receipts and spending with powerful tools designed for modern life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slideInFromLeft animation-delay-200">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Centralized Receipt Management</h3>
              <div className="space-y-6">
                {[
                  "All receipts in one secure, searchable location",
                  "Automatic categorization by merchant and spending type", 
                  "Cloud backup ensures you never lose important receipts",
                  "Easy sharing for expense reports and tax purposes"
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl text-gray-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center animate-slideInFromRight animation-delay-400">
              <div className="inline-flex items-center justify-center w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-8 shadow-2xl animate-pulseGlow">
                <Smartphone className="h-20 w-20 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-6">Mobile-First Design</h4>
              <p className="text-xl text-gray-600 leading-relaxed">Built for the way you shop — quick, easy, and always accessible.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:order-2 animate-slideInFromRight animation-delay-600">
              <div className="inline-flex items-center justify-center w-40 h-40 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-8 shadow-2xl animate-pulseGlow animation-delay-2000">
                <BarChart3 className="h-20 w-20 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-6">Smart Financial Insights</h4>
              <p className="text-xl text-gray-600 leading-relaxed">AI-powered analytics help you understand and optimize your spending habits.</p>
            </div>
            <div className="lg:order-1 animate-slideInFromLeft animation-delay-800">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">AI-Powered Spending Insights</h3>
              <div className="space-y-6">
                {[
                  "Personalized spending recommendations and money-saving tips",
                  "Monthly and yearly spending trends and patterns",
                  "Budget tracking and overspending alerts",
                  "Merchant comparison and price tracking"
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl text-gray-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Retailers */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-green-50 via-white to-orange-50 shadow-inner-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeIn animation-delay-100">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
              For <span className="text-gradient-green">Retailers</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Reduce costs, enhance sustainability, and improve customer experience with digital receipts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="card-hover bg-gradient-to-br from-green-50 to-white border-green-200 p-8 text-center animate-slideInFromBottom animation-delay-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/30 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl mb-6 shadow-xl animate-pulseGlow">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-lg text-gray-600 leading-relaxed">Eliminate paper, printing, and maintenance costs. Save thousands annually on receipt paper and thermal printers.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-orange-50 to-white border-orange-200 p-8 text-center animate-slideInFromBottom animation-delay-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/30 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl mb-6 shadow-xl animate-pulseGlow animation-delay-2000">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Sustainability</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-lg text-gray-600 leading-relaxed">Enhance your brand with a strong sustainability message. Appeal to eco-conscious customers.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-blue-50 to-white border-blue-200 p-8 text-center animate-slideInFromBottom animation-delay-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-6 shadow-xl animate-pulseGlow animation-delay-4000">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Customer Insights</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-lg text-gray-600 leading-relaxed">Gain anonymized insights into customer behavior and spending patterns to improve your business.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="card-hover max-w-5xl mx-auto bg-gradient-to-br from-white to-gray-50 border-gray-200 animate-scaleIn animation-delay-800">
            <CardContent className="p-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Easy Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <Target className="h-8 w-8 text-green-600 mr-4" />
                    Simple Setup
                  </h4>
                  <div className="space-y-4">
                    {[
                      "Works with existing POS systems",
                      "No hardware changes required", 
                      "Quick implementation and training"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-lg text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <Users className="h-8 w-8 text-blue-600 mr-4" />
                    Customer Benefits
                  </h4>
                  <div className="space-y-4">
                    {[
                      "Faster checkout process",
                      "Never lose receipts again",
                      "Better customer experience"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-lg text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white shadow-inner-top">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn animation-delay-100">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-full mb-8 animate-pulseGlow">
              <Award className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              Ready to Go <span className="text-yellow-300">Digital?</span>
            </h2>
            <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of consumers and retailers already using Vault to revolutionize receipt management.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fadeIn animation-delay-200">
              <Button asChild className="btn-secondary bg-white text-green-700 hover:bg-gray-100 text-xl px-12 py-7 group">
                <a href="/contact">
                  Get Started <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 text-xl px-12 py-7 group">
                <a href="/founders">
                  Meet the Team <Users className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}