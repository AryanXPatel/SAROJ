"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react"
import { Header } from "@/components/header"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const faqItems = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 15-day return policy for all unworn items with original tags. Returns are free within India, and we'll provide a prepaid shipping label for major cities.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-7 business days within India. Express shipping (1-3 business days) is available for ₹200 extra in major cities like Mumbai, Delhi, Bangalore, and Ahmedabad.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Currently, we only ship within India. We're working on expanding to international markets soon. Please subscribe to our newsletter for updates.",
    },
    {
      question: "How do I find my size?",
      answer:
        "We recommend using our detailed size guide, which includes measurements in both Indian and international sizes. Our customer service team in Ahmedabad can also help you choose the best fit.",
    },
    {
      question: "Are your products handmade?",
      answer:
        "Yes! Many of our pieces are handcrafted by skilled artisans in Gujarat, especially our Bandhani sarees and embroidered lehengas. We're committed to supporting traditional Indian craftsmanship.",
    },
    {
      question: "Do you offer cash on delivery?",
      answer:
        "Yes, we offer cash on delivery (COD) for orders within India. COD is available for orders up to ₹15,000 with a small handling fee of ₹50.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-rose-900 mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-rose-700 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions about our Indian wear collection, need styling
            advice, or want to know more about our Ahmedabad heritage, we're here to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif text-rose-900 mb-6">Send us a Message</h2>
            <Card className="border-rose-100">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-rose-900 mb-2">Message Sent!</h3>
                    <p className="text-rose-700">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-rose-900 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-rose-200 focus:border-rose-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-rose-900 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-rose-200 focus:border-rose-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-rose-900 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-rose-200 focus:border-rose-500"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-rose-900 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-rose-200 focus:border-rose-500 min-h-32"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif text-rose-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-rose-900 mb-1">Email Us</h3>
                    <p className="text-rose-700 text-sm mb-1">hello@thesaroj.in</p>
                    <p className="text-rose-600 text-xs">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-rose-900 mb-1">Call Us</h3>
                    <p className="text-rose-700 text-sm mb-1">+91 79 2658 4321</p>
                    <p className="text-rose-600 text-xs">Mon-Sat, 10AM-7PM IST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-rose-900 mb-1">Visit Our Studio</h3>
                    <p className="text-rose-700 text-sm mb-1">
                      23, Heritage Plaza, C.G. Road
                      <br />
                      Navrangpura, Ahmedabad - 380009
                      <br />
                      Gujarat, India
                    </p>
                    <p className="text-rose-600 text-xs">By appointment only</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-rose-900 mb-1">Business Hours</h3>
                    <p className="text-rose-700 text-sm">
                      Monday - Saturday: 10:00 AM - 7:00 PM IST
                      <br />
                      Sunday: 11:00 AM - 5:00 PM IST
                      <br />
                      Closed on major Indian festivals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-serif text-rose-900 mb-4">Follow Our Journey</h3>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-rose-700 text-sm mt-3">
                Follow us for daily inspiration, behind-the-scenes content from our Ahmedabad studio, and styling tips.
              </p>
            </div>

            {/* Quick Help */}
            <div>
              <h3 className="text-xl font-serif text-rose-900 mb-4">Need Quick Help?</h3>
              <div className="space-y-3">
                <a
                  href="#faq"
                  className="flex items-center space-x-3 p-3 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-rose-600" />
                  <div>
                    <p className="font-medium text-rose-900">FAQ</p>
                    <p className="text-rose-700 text-sm">Find answers to common questions</p>
                  </div>
                </a>
                <a
                  href="/size-guide"
                  className="flex items-center space-x-3 p-3 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-rose-600" />
                  <div>
                    <p className="font-medium text-rose-900">Size Guide</p>
                    <p className="text-rose-700 text-sm">Find your perfect fit</p>
                  </div>
                </a>
                <a
                  href="/shipping"
                  className="flex items-center space-x-3 p-3 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-rose-600" />
                  <div>
                    <p className="font-medium text-rose-900">Shipping & Returns</p>
                    <p className="text-rose-700 text-sm">Learn about our policies</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20" id="faq">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-rose-700 max-w-2xl mx-auto">
              Quick answers to the questions we hear most often. Can't find what you're looking for? Send us a message
              above.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-rose-200 rounded-lg px-6">
                  <AccordionTrigger className="text-rose-900 hover:text-rose-700 text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-rose-700 pb-4">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
