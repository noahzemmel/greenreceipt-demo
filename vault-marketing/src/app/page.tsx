"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { ArrowRight, Leaf, DollarSign, Zap, Users, Target, Globe, Shield, TrendingUp, Clock, CheckCircle, Sparkles, Star, Award, Heart } from "lucide-react"

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
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-200/40 to-green-300/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-300/30 to-green-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-100/30 to-green-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-green-500 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-300 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-3xl shadow-2xl mb-6 hover:scale-105 transition-all duration-300 relative">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1L2 7V17L12 23L22 17V7L12 1Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 7L12 13L22 7" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 23V13" />
                </svg>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-7xl md:text-9xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent animate-gradient">
                Vault
              </span>
            </h1>
            
            <p className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6 max-w-5xl mx-auto leading-relaxed">
              All your receipts.<br />
              <span className="text-green-600 relative">
                Zero waste.
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              </span>
            </p>
            
            <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Digital receipts that save money, time, and trees. Built by Cambridge students on a mission to revolutionize how we handle receipts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button asChild className="btn-primary text-xl px-12 py-8 text-lg">
                <a href="/contact" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="btn-secondary text-xl px-12 py-8 text-lg">
                <a href="/what-we-do" className="flex items-center">
                  Learn More
                  <Sparkles className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-green-600" />
                <span>Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-green-600" />
                <span>Cambridge Built</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/20 to-orange-100/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <span className="text-red-600 font-semibold text-lg">THE PROBLEM</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              The Receipt Problem is <span className="text-red-600">Massive</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Every year, billions of receipts are printed, wasted, and forgotten. The environmental and financial cost is staggering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover border-red-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl mb-6">
                  <span className="text-4xl font-bold text-red-600">300B+</span>
                </div>
                <CardTitle className="text-2xl font-bold text-red-600">Receipts Printed</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg">Every year worldwide, mostly unrecyclable thermal paper containing BPA and BPS chemicals.</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-red-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl mb-6">
                  <span className="text-4xl font-bold text-red-600">£857M</span>
                </div>
                <CardTitle className="text-2xl font-bold text-red-600">Wasted Money</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg">Annual cost of paper receipt production, printing, and disposal for retailers globally.</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-red-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl mb-6">
                  <span className="text-4xl font-bold text-red-600">1.5M</span>
                </div>
                <CardTitle className="text-2xl font-bold text-red-600">Tonnes CO₂</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg">Annual emissions from paper production that we can eliminate with digital receipts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-green-600 font-semibold text-lg">THE SOLUTION</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Digital Receipts for a <span className="text-green-600">Digital World</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Scan QR codes at checkout, get instant digital receipts, and never lose a receipt again. It&apos;s that simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Instant Digital Receipts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">Scan QR codes at checkout to instantly receive digital receipts in your Vault app. No waiting, no paper waste.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">No personal data exchanged at checkout. Your privacy is protected with anonymous device tokens and secure encryption.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Smart Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">AI-powered insights help you save money, track spending patterns, and make smarter financial decisions.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Return & Warranty Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">Never miss a return deadline or warranty expiration with smart alerts and automatic tracking.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">Eliminate paper waste and reduce environmental impact with every digital receipt.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl mb-6">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">Retailers save on printing costs while consumers get better spending insights.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-300/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-green-600 font-semibold text-lg">THE FOUNDERS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Meet the <span className="text-green-600">Founders</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Two Cambridge students on a mission to save money, time, and the planet — one receipt at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            <Card className="card-hover bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-full mb-8 shadow-2xl">
                  <span className="text-white font-bold text-4xl">NZ</span>
                </div>
                <CardTitle className="text-3xl font-bold">Noah Zemmel</CardTitle>
                <CardDescription className="text-xl text-green-600 font-semibold">Co-Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                    <Star className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">BA History, Trinity College, University of Cambridge</span>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  Noah brings deep understanding of consumer behavior and market dynamics. His passion for sustainability drives Vault&apos;s mission to eliminate paper waste while creating value for both consumers and retailers.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full mb-8 shadow-2xl">
                  <span className="text-white font-bold text-4xl">SH</span>
                </div>
                <CardTitle className="text-3xl font-bold">Sam Hillman</CardTitle>
                <CardDescription className="text-xl text-blue-600 font-semibold">Co-Founder & CTO</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">MA Economics, Kings College, University of Cambridge</span>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  Sam combines economic expertise with technical innovation. His background in economics helps shape Vault&apos;s business model and ensures we create sustainable value for all stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="card-hover max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <CardContent className="p-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl mb-8">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We believe that technology should make life simpler, not more complicated. By digitizing receipts, we&apos;re not just eliminating paper waste — we&apos;re creating a smarter, more sustainable way to manage personal finances and business operations.
                </p>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  <span className="text-green-600 font-semibold text-xl">Building the future of receipt management</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-green-600 font-semibold text-lg">THE IMPACT</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              The <span className="text-green-600">Impact</span> We&apos;re Creating
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              By digitizing receipts, we&apos;re creating positive change for consumers, retailers, and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <Card className="card-hover bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">For Consumers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">Paperless lifestyle with eco-friendly receipts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">Smart financial tools and AI-powered money tips</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">Never lose a receipt again with cloud backup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">Automatic return and warranty tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">For Retailers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">Lower operational costs by eliminating paper</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">Sustainability edge with eco-conscious branding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">AI-driven marketing insights from spending patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">Reduced customer service queries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">For the Planet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">Save countless trees by eliminating paper waste</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">Cut CO₂ emissions from paper production</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">Reduce overall environmental impact</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">Up to 1.5M tonnes CO₂ saved annually</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600/90 to-green-700/90"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Join the Digital Receipt Revolution
          </h2>
          <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Experience the future of receipt management. Secure, smart, and sustainable.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button asChild className="btn-secondary bg-white text-green-700 hover:bg-gray-100 text-2xl px-16 py-8">
              <a href="/contact" className="flex items-center">
                Get Early Access
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 text-2xl px-16 py-8">
              <a href="/what-we-do" className="flex items-center">
                Learn More
                <Sparkles className="ml-3 h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}