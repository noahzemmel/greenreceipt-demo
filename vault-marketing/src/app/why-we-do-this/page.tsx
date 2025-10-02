import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhyWeDoThis() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The Receipt Problem
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Every year, billions of paper receipts are printed, creating massive waste and environmental damage.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Scale of the Problem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-red-200 bg-red-50">
              <CardHeader>
                <div className="text-4xl mb-4">📄</div>
                <CardTitle className="text-2xl text-red-800">300+ Billion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Receipts printed yearly worldwide
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 bg-orange-50">
              <CardHeader>
                <div className="text-4xl mb-4">💰</div>
                <CardTitle className="text-2xl text-orange-800">£857M</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Wasted annually on receipt printing
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-yellow-200 bg-yellow-50">
              <CardHeader>
                <div className="text-4xl mb-4">🚫</div>
                <CardTitle className="text-2xl text-yellow-800">Most Unrecyclable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Receipt paper contains BPA and can&apos;t be recycled
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              The Impact
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💸</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Financial Drain</h4>
                <p className="text-gray-600">Massive costs for businesses and consumers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Environmental Harm</h4>
                <p className="text-gray-600">Deforestation, pollution, and waste</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Brand Risk</h4>
                <p className="text-gray-600">Sustainability concerns affect reputation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600">
              A world where receipts are digital, smart, and sustainable
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* For Consumers */}
            <Card className="card-hover border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <CardTitle className="text-xl">For Consumers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="space-y-3">
                  <p><strong>Paperless Lifestyle:</strong> No more receipt clutter</p>
                  <p><strong>Smart Financial Tools:</strong> AI-powered budgeting and insights</p>
                  <p><strong>Eco-Conscious Living:</strong> Reduce environmental footprint</p>
                  <p><strong>AI Money Tips:</strong> Personalised saving recommendations</p>
                </CardDescription>
              </CardContent>
            </Card>

            {/* For Retailers */}
            <Card className="card-hover border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <CardTitle className="text-xl">For Retailers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="space-y-3">
                  <p><strong>Lower Costs:</strong> Eliminate printing expenses</p>
                  <p><strong>Sustainability Edge:</strong> Enhance green credentials</p>
                  <p><strong>AI Marketing:</strong> Data-driven customer insights</p>
                  <p><strong>Future-Ready:</strong> Stay ahead of digital trends</p>
                </CardDescription>
              </CardContent>
            </Card>

            {/* For the Planet */}
            <Card className="card-hover border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <CardTitle className="text-xl">For the Planet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="space-y-3">
                  <p><strong>Massive CO₂ Reduction:</strong> Up to 1.5M tonnes saved annually</p>
                  <p><strong>Deforestation Prevention:</strong> Protect forests from paper production</p>
                  <p><strong>Waste Elimination:</strong> No more unrecyclable receipt waste</p>
                  <p><strong>Cleaner Future:</strong> Sustainable digital solutions</p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Potential Impact
            </h2>
            <p className="text-xl text-gray-600">
              The numbers speak for themselves
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">1.5M</div>
              <div className="text-lg text-gray-600">Tonnes CO₂ saved annually</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">300B</div>
              <div className="text-lg text-gray-600">Receipts digitised</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">£857M</div>
              <div className="text-lg text-gray-600">Cost savings</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-lg text-gray-600">Privacy protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the Digital Receipt Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the solution. Together, we can save money, time, and the planet — one receipt at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Get Started Today
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-gray-300 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
