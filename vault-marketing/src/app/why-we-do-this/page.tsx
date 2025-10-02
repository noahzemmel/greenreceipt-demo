"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, TrendingUp, Users, Globe, Target, Heart, Lightbulb, CheckCircle } from "lucide-react"

export default function WhyWeDoThis() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why We Do <span className="text-red-600">This</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The receipt problem is massive, but the solution is simple. Here&apos;s why we&apos;re building Vault.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The <span className="text-red-600">Problem</span> is Massive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every year, billions of receipts are printed, wasted, and forgotten. The environmental and financial cost is staggering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover text-center border-red-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
                  <span className="text-3xl font-bold text-red-600">300B+</span>
                </div>
                <CardTitle className="text-xl font-semibold text-red-600">Receipts Printed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Every year worldwide, mostly unrecyclable thermal paper containing BPA and BPS chemicals.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center border-red-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
                  <span className="text-3xl font-bold text-red-600">£857M</span>
                </div>
                <CardTitle className="text-xl font-semibold text-red-600">Wasted Money</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Annual cost of paper receipt production, printing, and disposal for retailers globally.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center border-red-200">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
                  <span className="text-3xl font-bold text-red-600">1.5M</span>
                </div>
                <CardTitle className="text-xl font-semibold text-red-600">Tonnes CO₂</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Annual emissions from paper production that we can eliminate with digital receipts.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="card-hover max-w-4xl mx-auto border-red-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">The Hidden Costs</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">For Consumers</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Lost receipts mean lost money on returns and warranties</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">No spending insights or budgeting tools</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Environmental guilt from paper waste</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">For Retailers</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">High printing and maintenance costs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Customer service queries about lost receipts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Missed marketing opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The <span className="text-green-600">Impact</span> We&apos;re Creating
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              By digitizing receipts, we&apos;re creating positive change for consumers, retailers, and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">For Consumers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Paperless lifestyle with eco-friendly receipts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Smart financial tools and AI-powered money tips</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Never lose a receipt again with cloud backup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Automatic return and warranty tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">For Retailers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Lower operational costs by eliminating paper</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Sustainability edge with eco-conscious branding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">AI-driven marketing insights from spending patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Reduced customer service queries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">For the Planet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Save countless trees by eliminating paper waste</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Cut CO₂ emissions from paper production</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Reduce overall environmental impact</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Up to 1.5M tonnes CO₂ saved annually</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We envision a world where every transaction is digital, every receipt is valuable, and every purchase contributes to a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">A Digital-First Future</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe that technology should make life simpler, not more complicated. By digitizing receipts, 
                we&apos;re not just eliminating paper waste — we&apos;re creating a smarter, more sustainable way 
                to manage personal finances and business operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Every receipt becomes a data point for better decisions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">AI-powered insights help people save money and time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Retailers gain valuable customer insights without compromising privacy</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-8">
                <Target className="h-16 w-16 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Mission-Driven Innovation</h4>
              <p className="text-gray-600">Every feature we build serves our mission to eliminate paper waste and create value for all stakeholders.</p>
            </div>
          </div>

          <Card className="card-hover max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why This Matters</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Receipts might seem small, but they represent a massive opportunity for positive change. Every day, 
                billions of people interact with receipts, and every interaction is a chance to make a difference.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Simple</div>
                  <p className="text-gray-600">Easy to use, easy to understand, easy to adopt</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Scalable</div>
                  <p className="text-gray-600">Works for individuals, small businesses, and global enterprises</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Sustainable</div>
                  <p className="text-gray-600">Positive impact on people, planet, and profit</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The <span className="text-green-600">Opportunity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re at the perfect intersection of technology, sustainability, and consumer demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Perfect Timing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Consumers are ready for digital solutions, and retailers need cost savings.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Market Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">QR codes are ubiquitous, smartphones are universal, and sustainability is essential.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Win-Win-Win</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Benefits consumers, retailers, and the planet simultaneously.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Scalable solution that can make a real difference worldwide.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Revolution
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Be part of the solution. Help us build a more sustainable, efficient, and intelligent future for receipt management.
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