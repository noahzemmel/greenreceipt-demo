import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Founders() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Meet the Founders
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Two Cambridge students on a mission to save money, time, and the planet — one receipt at a time.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Noah Zemmel */}
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">NZ</span>
                </div>
                <CardTitle className="text-2xl">Noah Zemmel</CardTitle>
                <CardDescription className="text-lg">
                  Co-Founder & CEO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Education</h4>
                    <p className="text-green-700">BA History, Trinity College, University of Cambridge</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Background</h4>
                    <p className="text-blue-700">Passionate about sustainable technology and financial innovation. Led multiple student initiatives focused on environmental impact and digital transformation.</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Vision</h4>
                    <p className="text-purple-700">Believes that technology should solve real-world problems while protecting our environment for future generations.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sam Hillman */}
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">SH</span>
                </div>
                <CardTitle className="text-2xl">Sam Hillman</CardTitle>
                <CardDescription className="text-lg">
                  Co-Founder & CTO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Education</h4>
                    <p className="text-green-700">MA Economics, Kings College, University of Cambridge</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Background</h4>
                    <p className="text-blue-700">Expert in economic systems and data analysis. Specialises in building scalable solutions that balance business needs with environmental responsibility.</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Vision</h4>
                    <p className="text-purple-700">Focused on creating economic incentives that drive positive environmental change through innovative technology solutions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Story Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600">
              <p>
                While studying at Cambridge, Noah and Sam noticed a growing disconnect between our digital-first world and the persistent use of paper receipts. Every coffee, every purchase, every transaction still generated physical waste that couldn&apos;t be recycled.
              </p>
              <p>
                As they researched the problem, the numbers were staggering: 300+ billion receipts printed annually, £857 million wasted on printing costs, and most receipt paper containing BPA and other chemicals that make it unrecyclable.
              </p>
              <p>
                The solution seemed obvious — digitise receipts — but existing solutions required personal data collection, creating privacy concerns. That&apos;s when the idea for Vault was born: a system that could digitise receipts while maintaining complete anonymity and privacy.
              </p>
              <p>
                Today, Vault represents more than just a receipt management app. It&apos;s a vision of a world where technology serves both people and the planet, where every small action contributes to a larger environmental impact, and where privacy and sustainability go hand in hand.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <CardTitle>Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe technology should solve environmental problems, not create them. Every feature we build considers its impact on our planet.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <CardTitle>Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your data belongs to you. We&apos;ve built Vault from the ground up to protect your privacy while delivering powerful insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We&apos;re constantly pushing the boundaries of what&apos;s possible, using AI and cutting-edge technology to create better solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Cambridge Connection */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Proud Cambridge Alumni
            </h2>
            <p className="text-xl mb-6">
              Building the future of sustainable technology from the heart of innovation
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold">Trinity College</div>
                <div className="text-green-200">Noah&apos;s College</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Kings College</div>
                <div className="text-green-200">Sam&apos;s College</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Want to Connect?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re always excited to meet fellow innovators, environmental advocates, and potential partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Get in Touch
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Follow Our Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
