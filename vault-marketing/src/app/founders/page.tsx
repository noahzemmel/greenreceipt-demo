"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, GraduationCap, Lightbulb, Target, Users, Globe, Heart } from "lucide-react"

export default function Founders() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-green-600">Founders</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Two Cambridge students on a mission to save money, time, and the planet — one receipt at a time.
          </p>
        </div>
      </section>

      {/* Founders Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Noah */}
            <Card className="card-hover">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-8">
                  <span className="text-white font-bold text-4xl">NZ</span>
                </div>
                <CardTitle className="text-3xl font-bold">Noah Zemmel</CardTitle>
                <CardDescription className="text-xl text-green-600 font-semibold">Co-Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">BA History, Trinity College, University of Cambridge</span>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Background & Expertise</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Noah brings deep understanding of consumer behavior and market dynamics from his studies in History at Cambridge. 
                    His passion for sustainability and consumer rights drives Vault&apos;s mission to eliminate paper waste while 
                    creating genuine value for both consumers and retailers.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    With a keen eye for identifying market inefficiencies, Noah recognized the massive opportunity in digitizing 
                    receipts — a $857M annual problem affecting billions of consumers worldwide.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Vision & Leadership</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Leading Vault&apos;s strategic direction and market expansion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Building partnerships with retailers and sustainability organizations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Ensuring consumer-first approach in all product decisions</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Sam */}
            <Card className="card-hover">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-8">
                  <span className="text-white font-bold text-4xl">SH</span>
                </div>
                <CardTitle className="text-3xl font-bold">Sam Hillman</CardTitle>
                <CardDescription className="text-xl text-green-600 font-semibold">Co-Founder & CTO</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">MA Economics, Kings College, University of Cambridge</span>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Background & Expertise</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Sam combines economic expertise with technical innovation, bringing a unique perspective to building 
                    sustainable business models. His background in Economics from Cambridge helps shape Vault&apos;s approach 
                    to creating value for all stakeholders.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    With deep understanding of market structures and consumer economics, Sam ensures Vault&apos;s technology 
                    solutions are not just innovative, but economically viable and scalable.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Technical Leadership</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Leading technical architecture and product development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Ensuring privacy-first design and data security</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Building scalable systems for millions of users</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Mission</span> & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe technology should make life simpler, not more complicated. Here&apos;s what drives us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Mission-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Every decision we make is guided by our mission to eliminate paper waste and create value for consumers.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Consumer-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We prioritize user experience and privacy above all else, ensuring our technology serves people, not profits.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Environmental impact is at the core of everything we do, from product design to business operations.</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We constantly push boundaries to create solutions that are both cutting-edge and practical.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="card-hover max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why We Started Vault</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                As Cambridge students, we witnessed firsthand the inefficiencies in how receipts are handled. 
                Every day, billions of receipts are printed, lost, forgotten, or thrown away. We saw an opportunity 
                to use technology to solve a real problem that affects everyone.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vault isn&apos;t just about digitizing receipts — it&apos;s about creating a smarter, more sustainable 
                way to manage personal finances and business operations. We&apos;re building the future of receipt 
                management, one scan at a time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cambridge Connection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Born at <span className="text-green-600">Cambridge</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Cambridge education shapes how we approach problems and build solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Academic Excellence</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our Cambridge education taught us to think critically, analyze complex problems, and develop 
                innovative solutions. We bring this rigorous academic approach to building Vault.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Evidence-based decision making and data-driven product development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Rigorous analysis of market dynamics and consumer behavior</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Commitment to excellence and attention to detail</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-8">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">University of Cambridge</h4>
              <p className="text-gray-600">
                Trinity College & Kings College<br />
                Where innovation meets tradition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Be part of the digital receipt revolution. Get early access to Vault and help us build a more sustainable future.
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