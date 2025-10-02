"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { ArrowRight, Leaf, DollarSign, Zap, Users, Target, Globe, Shield, TrendingUp, Clock, CheckCircle } from "lucide-react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-100/40 to-green-200/40 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-2xl mb-6 hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1L2 7V17L12 23L22 17V7L12 1Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 7L12 13L22 7" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 23V13" />
                </svg>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent">
                Vault
              </span>
            </h1>
            
            <p className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 max-w-4xl mx-auto leading-relaxed">
              All your receipts.<br />
              <span className="text-green-600">Zero waste.</span>
            </p>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Digital receipts that save money, time, and trees. Built by Cambridge students on a mission to revolutionize how we handle receipts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild className="btn-primary text-lg px-10 py-6">
                <a href="/contact">Get Started</a>
              </Button>
              <Button asChild variant="outline" className="btn-secondary text-lg px-10 py-6">
                <a href="/what-we-do">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Receipt Problem is <span className="text-red-600">Massive</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every year, billions of receipts are printed, wasted, and forgotten. We're changing that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6">
                <span className="text-3xl font-bold text-red-600">300B+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Receipts Printed</h3>
              <p className="text-gray-600">Every year worldwide, mostly unrecyclable</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6">
                <span className="text-3xl font-bold text-red-600">£857M</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wasted Money</h3>
              <p className="text-gray-600">Annual cost of paper receipt production</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6">
                <span className="text-3xl font-bold text-red-600">1.5M</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tonnes CO₂</h3>
              <p className="text-gray-600">Annual emissions we can eliminate</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Receipts for a <span className="text-green-600">Digital World</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scan QR codes at checkout, get instant digital receipts, and never lose a receipt again.
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
                <p className="text-gray-600">Scan QR codes at checkout to instantly receive digital receipts in your Vault app.</p>
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
                <p className="text-gray-600">No personal data exchanged at checkout. Your privacy is protected with anonymous device tokens.</p>
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
                <p className="text-gray-600">AI-powered insights help you save money and track spending patterns across all merchants.</p>
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
                <p className="text-gray-600">Never miss a return deadline or warranty expiration with smart alerts.</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Eliminate paper waste and reduce environmental impact with every digital receipt.</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Retailers save on printing costs while consumers get better spending insights.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the <span className="text-green-600">Founders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Two Cambridge students on a mission to save money, time, and the planet — one receipt at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6">
                  <span className="text-white font-bold text-2xl">NZ</span>
                </div>
                <CardTitle className="text-2xl font-bold">Noah Zemmel</CardTitle>
                <CardDescription className="text-lg text-green-600 font-semibold">Co-Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  <strong>BA History, Trinity College, University of Cambridge</strong>
                </p>
                <p className="text-gray-600">
                  Noah brings deep understanding of consumer behavior and market dynamics. His passion for sustainability drives Vault&apos;s mission to eliminate paper waste while creating value for both consumers and retailers.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6">
                  <span className="text-white font-bold text-2xl">SH</span>
                </div>
                <CardTitle className="text-2xl font-bold">Sam Hillman</CardTitle>
                <CardDescription className="text-lg text-green-600 font-semibold">Co-Founder & CTO</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  <strong>MA Economics, Kings College, University of Cambridge</strong>
                </p>
                <p className="text-gray-600">
                  Sam combines economic expertise with technical innovation. His background in economics helps shape Vault&apos;s business model and ensures we create sustainable value for all stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="card-hover max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that technology should make life simpler, not more complicated. By digitizing receipts, we&apos;re not just eliminating paper waste — we&apos;re creating a smarter, more sustainable way to manage personal finances and business operations.
                </p>
                <div className="flex items-center justify-center mt-6">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  <span className="text-green-600 font-semibold">Building the future of receipt management</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The <span className="text-green-600">Impact</span> We&apos;re Creating
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every digital receipt makes a difference. Here&apos;s how we&apos;re changing the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">For Consumers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Centralized storage for all digital and digitized receipts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Smart budgeting and AI-powered insights to help you save money</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Contribute to an eco-friendly lifestyle by going paperless</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Never lose a receipt again with cloud backup</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">For Retailers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Lower operational costs by eliminating paper and printing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Enhance your brand with a strong sustainability message</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Gain smarter, anonymized marketing insights from spending patterns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Reduce customer service queries about lost receipts</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Card className="card-hover max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-green-100">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For the Planet</h3>
                <p className="text-lg text-gray-600 mb-6">
                  By eliminating paper receipts, we&apos;re making a real environmental impact:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">Save Trees</div>
                    <p className="text-gray-600">Countless trees saved by eliminating paper receipt waste</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">Cut CO₂</div>
                    <p className="text-gray-600">Significantly reduce emissions from paper production</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">Reduce Waste</div>
                    <p className="text-gray-600">Minimize overall environmental impact, one receipt at a time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Digital Receipt Revolution
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Experience the future of receipt management. Secure, smart, and sustainable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="btn-secondary bg-white text-green-700 hover:bg-gray-100 text-xl px-12 py-7">
              <a href="/contact">Get Early Access</a>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 text-xl px-12 py-7">
              <a href="/what-we-do">Learn More</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}