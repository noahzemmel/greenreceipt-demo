"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Building, Lightbulb } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-green-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to revolutionize receipt management? We&apos;d love to hear from you. 
            Whether you&apos;re a consumer, retailer, or investor, let&apos;s start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {isSubmitted ? (
                <Card className="card-hover border-green-200">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="card-hover">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company (Optional)
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full min-h-[120px]"
                          placeholder="Tell us about your interest in Vault..."
                        />
                      </div>
                      
                      <Button type="submit" className="btn-primary w-full">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mr-4">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 mb-1">hello@vault.app</p>
                        <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mr-4">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                        <p className="text-gray-600 mb-1">Cambridge, United Kingdom</p>
                        <p className="text-sm text-gray-500">Founded at University of Cambridge</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mr-4">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                        <p className="text-gray-600 mb-1">Within 24 hours</p>
                        <p className="text-sm text-gray-500">Monday to Friday, 9 AM - 6 PM GMT</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Want to Hear From */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Want to Hear From
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re building Vault for everyone. Here&apos;s who we&apos;d especially love to connect with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Consumers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Early adopters who want to be part of the digital receipt revolution and help shape our product.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Beta testers</li>
                  <li>• Feedback providers</li>
                  <li>• Sustainability advocates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Retailers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Forward-thinking businesses ready to reduce costs, enhance sustainability, and improve customer experience.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Pilot partners</li>
                  <li>• Integration discussions</li>
                  <li>• Sustainability champions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Investors & Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Visionary investors and strategic partners who share our mission to revolutionize receipt management.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Funding opportunities</li>
                  <li>• Strategic partnerships</li>
                  <li>• Advisory roles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about Vault.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">When will Vault be available?</h3>
                <p className="text-gray-600">
                  We&apos;re currently in development and planning to launch our beta version in early 2025. 
                  Sign up for early access to be among the first to try Vault.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is my data secure?</h3>
                <p className="text-gray-600">
                  Absolutely. We use end-to-end encryption and never share your personal data. 
                  Our privacy-first approach means no personal information is exchanged at checkout.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How do retailers benefit?</h3>
                <p className="text-gray-600">
                  Retailers save on printing costs, reduce environmental impact, and gain valuable 
                  customer insights while improving the checkout experience.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes Vault different?</h3>
                <p className="text-gray-600">
                  Vault is the only solution that combines privacy-first design, AI-powered insights, 
                  and seamless retailer integration in one platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join the digital receipt revolution. Be part of the solution that&apos;s changing how we handle receipts forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="btn-secondary bg-white text-green-700 hover:bg-gray-100 text-xl px-12 py-7">
              <a href="#contact-form">Get Early Access</a>
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