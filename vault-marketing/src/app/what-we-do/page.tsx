import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Digital Receipts for a Digital World
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform how receipts work with our innovative QR-based system that eliminates paper waste while providing powerful insights.
          </p>
        </div>
      </section>

      {/* Core Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scan QR Code</h3>
              <p className="text-gray-600">Customers scan QR codes at checkout to instantly receive digital receipts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">☁️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Store Securely</h3>
              <p className="text-gray-600">Receipts are automatically stored in the Vault app with full privacy protection</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
              <p className="text-gray-600">AI-powered analytics help you save money and make smarter financial decisions</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Optional: Digitise Old Receipts
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Have paper receipts lying around? Simply scan them with your phone to add them to your digital collection.
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <span>✨</span>
              <span className="font-medium">Eliminates printing costs and reduces environmental impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage receipts and gain financial insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consumer Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Consumers</h3>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Centralised Receipt Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All your receipts in one secure, searchable location. Never lose a receipt again.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Automatic Categorisation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    AI automatically categorises your purchases for better budgeting and expense tracking.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">AI-Powered Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get personalised spending tips, budget recommendations, and money-saving suggestions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Smart Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Never miss a return deadline or warranty expiration with intelligent notifications.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Retailer Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Retailers</h3>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Anonymised Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Understand customer spending patterns without compromising privacy or collecting personal data.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">AI Marketing Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get AI-powered recommendations for personalised promotions and marketing strategies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Cost Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Eliminate paper receipt printing costs and reduce environmental impact.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Sustainability Branding</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Enhance your green credentials and appeal to environmentally conscious customers.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Future of Receipts?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who are already saving money, time, and the environment with Vault.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Start Free Trial
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
