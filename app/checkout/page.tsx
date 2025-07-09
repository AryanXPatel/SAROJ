"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, ShieldCheck, Lock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/components/cart-context"
import { formatPrice } from "@/lib/currency"

export default function CheckoutPage() {
  const { state: cartState } = useCart()
  const [step, setStep] = useState(1) // 1: Shipping, 2: Payment, 3: Confirmation
  const [shippingData, setShippingData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
    phone: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [sameAsShipping, setSameAsShipping] = useState(true)
  const [orderComplete, setOrderComplete] = useState(false)

  const cartItems = cartState.items

  // Update the price display in the component
  const subtotal = cartState.total;
  const shipping = subtotal >= 2500 ? 0 : 150;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOrderComplete(true)
    setStep(3)
  }

  if (orderComplete && step === 3) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-rose-100">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="flex flex-col items-center">
              <div className="text-2xl md:text-3xl font-serif text-rose-900 font-bold">SAROJ</div>
              <div className="text-xs text-rose-600 -mt-1">From Her Heart to Yours</div>
            </Link>
          </div>
        </header>

        {/* Order Confirmation */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">Order Confirmed!</h1>
            <p className="text-rose-700 mb-6">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>

            <Card className="border-rose-100 mb-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-rose-700">Order Number:</span>
                    <span className="font-medium text-rose-900">#SAROJ-2025-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-rose-700">Email:</span>
                    <span className="font-medium text-rose-900">{shippingData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-rose-700">Total:</span>
                    <span className="font-medium text-rose-900">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-rose-700">Estimated Delivery:</span>
                    <span className="font-medium text-rose-900">3-5 business days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                <Link href="/account/orders">Track Your Order</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
              >
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>

            <p className="text-sm text-rose-600 mt-8">A confirmation email has been sent to {shippingData.email}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <div className="text-2xl md:text-3xl font-serif text-rose-900 font-bold">SAROJ</div>
              <div className="text-xs text-rose-600 -mt-1">From Her Heart to Yours</div>
            </Link>
            <div className="flex items-center space-x-2 text-sm text-rose-600">
              <Lock className="h-4 w-4" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            <div className={`flex items-center space-x-2 ${step >= 1 ? "text-rose-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 1 ? "bg-rose-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                1
              </div>
              <span className="hidden sm:block">Shipping</span>
            </div>
            <div className="w-8 h-px bg-gray-300" />
            <div className={`flex items-center space-x-2 ${step >= 2 ? "text-rose-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 2 ? "bg-rose-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
              <span className="hidden sm:block">Payment</span>
            </div>
            <div className="w-8 h-px bg-gray-300" />
            <div className={`flex items-center space-x-2 ${step >= 3 ? "text-rose-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 3 ? "bg-rose-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                3
              </div>
              <span className="hidden sm:block">Confirmation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Content */}
          <div>
            {step === 1 && (
              <Card className="border-rose-100">
                <CardHeader>
                  <CardTitle className="text-rose-900">Shipping Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleShippingSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-rose-900">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={shippingData.email}
                        onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                        className="border-rose-200 focus:border-rose-500"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-rose-900">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          required
                          value={shippingData.firstName}
                          onChange={(e) => setShippingData({ ...shippingData, firstName: e.target.value })}
                          className="border-rose-200 focus:border-rose-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-rose-900">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          required
                          value={shippingData.lastName}
                          onChange={(e) => setShippingData({ ...shippingData, lastName: e.target.value })}
                          className="border-rose-200 focus:border-rose-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-rose-900">
                        Address *
                      </Label>
                      <Input
                        id="address"
                        required
                        value={shippingData.address}
                        onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                        className="border-rose-200 focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="apartment" className="text-rose-900">
                        Apartment, suite, etc. (optional)
                      </Label>
                      <Input
                        id="apartment"
                        value={shippingData.apartment}
                        onChange={(e) => setShippingData({ ...shippingData, apartment: e.target.value })}
                        className="border-rose-200 focus:border-rose-500"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-rose-900">
                          City *
                        </Label>
                        <Input
                          id="city"
                          required
                          value={shippingData.city}
                          onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                          className="border-rose-200 focus:border-rose-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-rose-900">
                          State *
                        </Label>
                        <Input
                          id="state"
                          required
                          value={shippingData.state}
                          onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })}
                          className="border-rose-200 focus:border-rose-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode" className="text-rose-900">
                          ZIP Code *
                        </Label>
                        <Input
                          id="zipCode"
                          required
                          value={shippingData.zipCode}
                          onChange={(e) => setShippingData({ ...shippingData, zipCode: e.target.value })}
                          className="border-rose-200 focus:border-rose-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                        <Label htmlFor="country" className="text-rose-900">
                          Country *
                        </Label>
                        <Input
                          id="country"
                          required
                          value={shippingData.country}
                          disabled
                          className="border-rose-200 focus:border-rose-500 bg-gray-100"
                        />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-rose-900">
                        Phone (for shipping updates)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={shippingData.phone}
                        onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                        className="border-rose-200 focus:border-rose-500"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                      Continue to Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card className="border-rose-100">
                <CardHeader>
                  <CardTitle className="text-rose-900">Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="space-y-4"
                    >
                      <Label
                        className={`flex items-center space-x-4 p-4 border rounded-lg cursor-pointer ${
                          paymentMethod === "card" ? "border-rose-500 bg-rose-50" : "border-rose-200"
                        }`}
                      >
                        <RadioGroupItem value="card" />
                        <CreditCard className="h-6 w-6 text-rose-800" />
                        <div className="flex-1">
                          <p className="font-medium text-rose-900">Credit or Debit Card</p>
                          <p className="text-sm text-rose-700">Pay with Visa, Mastercard, AMEX</p>
                        </div>
                      </Label>
                      <Label
                        className={`flex items-center space-x-4 p-4 border rounded-lg cursor-pointer ${
                          paymentMethod === "upi" ? "border-rose-500 bg-rose-50" : "border-rose-200"
                        }`}
                      >
                        <RadioGroupItem value="upi" />
                        <Image src="/images/upi-logo.svg" alt="UPI" width={24} height={24} />
                         <div className="flex-1">
                          <p className="font-medium text-rose-900">UPI</p>
                          <p className="text-sm text-rose-700">Pay with Google Pay, PhonePe, etc.</p>
                        </div>
                      </Label>
                    </RadioGroup>

                    {paymentMethod === 'card' && (
                        <div className="space-y-4 pt-4 border-t border-rose-100">
                            <div>
                                <Label htmlFor="cardNumber" className="text-rose-900">Card Number</Label>
                                <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="border-rose-200 focus:border-rose-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="expiryDate" className="text-rose-900">Expiry Date</Label>
                                    <Input id="expiryDate" placeholder="MM / YY" className="border-rose-200 focus:border-rose-500" />
                                </div>
                                <div>
                                    <Label htmlFor="cvc" className="text-rose-900">CVC</Label>
                                    <Input id="cvc" placeholder="123" className="border-rose-200 focus:border-rose-500" />
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className="pt-6 border-t border-rose-100">
                        <h3 className="text-lg font-medium text-rose-900 mb-4">Billing Address</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="sameAsShipping" checked={sameAsShipping} onCheckedChange={(checked) => setSameAsShipping(checked as boolean)} />
                                <Label htmlFor="sameAsShipping" className="text-rose-700">Same as shipping address</Label>
                            </div>
                            {!sameAsShipping && (
                               <div className="space-y-4 p-4 border border-rose-100 rounded-lg">
                                   {/* Billing address form would go here */}
                                   <p className="text-sm text-rose-600">Please enter your billing address.</p>
                               </div>
                            )}
                        </div>
                    </div>


                    <Button type="submit" size="lg" className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                      Pay {formatPrice(total)}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="border-rose-100">
              <CardHeader>
                <CardTitle className="text-rose-900">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="relative w-20 h-24 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg border border-rose-100"
                      />
                      <Badge className="absolute -top-2 -right-2 bg-rose-600 text-white w-6 h-6 flex items-center justify-center">
                        {item.quantity}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-rose-900">{item.name}</h3>
                      <p className="text-sm text-rose-600">
                        {item.color} • {item.size}
                      </p>
                    </div>
                    <span className="font-semibold text-rose-900">₹{item.price * item.quantity}</span>
                  </div>
                ))}

                <Separator className="bg-rose-200" />
                <div className="space-y-2">
                  <div className="flex justify-between text-rose-700">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-rose-700">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between text-rose-700">
                    <span>Tax</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  <Separator className="bg-rose-200" />
                  <div className="flex justify-between text-lg font-semibold text-rose-900">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-rose-600 flex items-center justify-center space-x-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Secure checkout with SSL encryption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
