"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus, X, Heart, Truck, Tag, ArrowRight, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { useCart } from "@/components/cart-context"
import { formatINR } from "@/lib/currency"
import { useState } from "react"

export default function CartPage() {
  const { state: cartState, dispatch } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null)
  const [promoDiscount, setPromoDiscount] = useState(0)

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch({ type: "REMOVE_ITEM", payload: index })
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id: index, quantity: newQuantity } })
    }
  }

  const removeItem = (index: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: index })
  }

  const applyPromoCode = () => {
    if (promoCode === "WELCOME10") {
      setAppliedPromo(promoCode)
      setPromoDiscount(10)
      setPromoCode("")
    } else if (promoCode === "FREESHIP") {
      setAppliedPromo(promoCode)
      setPromoDiscount(0)
      setPromoCode("")
    }
  }

  const subtotal = cartState.total
  const discountAmount = appliedPromo === "WELCOME10" ? subtotal * 0.1 : 0
  const shippingCost = appliedPromo === "FREESHIP" || subtotal >= 2500 ? 0 : 150
  const taxAmount = (subtotal - discountAmount) * 0.18 // 18% GST
  const totalAmount = subtotal - discountAmount + shippingCost + taxAmount

  if (cartState.items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />

        {/* Empty Cart */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-serif text-rose-900 mb-4">Your Cart is Empty</h1>
            <p className="text-rose-700 mb-8">
              Looks like you haven't added any beautiful pieces to your cart yet. Start shopping to fill it up!
            </p>
            <div className="space-y-4">
              <Link href="/shop">
                <Button size="lg" className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/collections">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  View Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif text-rose-900 mb-2">Shopping Cart</h1>
          <p className="text-rose-700">{cartState.items.length} items in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartState.items.map((item, index) => (
              <Card key={`${item.id}-${item.color}-${item.size}`} className="border-rose-100">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative w-full sm:w-32 h-40 sm:h-32 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-rose-900 text-lg">{item.name}</h3>
                          <p className="text-rose-600 text-sm">
                            Color: {item.color} • Size: {item.size}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-lg font-semibold text-rose-900">₹{item.price}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(index)}
                          className="text-rose-400 hover:text-rose-600"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium text-rose-900">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-800">
                            <Heart className="h-4 w-4 mr-1" />
                            Save for Later
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <Card className="border-rose-100">
              <CardContent className="p-6">
                <h3 className="font-medium text-rose-900 mb-4">Promo Code</h3>
                {appliedPromo ? (
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Tag className="h-4 w-4 text-green-600" />
                      <span className="text-green-800 font-medium">{appliedPromo}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setAppliedPromo(null)
                        setPromoDiscount(0)
                      }}
                      className="text-green-600 hover:text-green-800"
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="border-rose-200 focus:border-rose-500"
                    />
                    <Button
                      onClick={applyPromoCode}
                      variant="outline"
                      className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                    >
                      Apply
                    </Button>
                  </div>
                )}
                <div className="mt-3 text-xs text-rose-600">
                  <p>Try: WELCOME10 for 10% off or FREESHIP for free shipping</p>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="border-rose-100">
              <CardContent className="p-6">
                <h3 className="font-medium text-rose-900 mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-rose-700">
                    <span>Subtotal ({cartState.itemCount} items)</span>
                    <span>{formatINR(subtotal)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedPromo})</span>
                      <span>-{formatINR(Math.round(discountAmount))}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-rose-700">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? "Free" : formatINR(shippingCost)}</span>
                  </div>
                  <div className="flex justify-between text-rose-700">
                    <span>GST (18%)</span>
                    <span>{formatINR(Math.round(taxAmount))}</span>
                  </div>
                  <Separator className="bg-rose-200" />
                  <div className="flex justify-between text-lg font-semibold text-rose-900">
                    <span>Total</span>
                    <span>{formatINR(Math.round(totalAmount))}</span>
                  </div>
                </div>

                {subtotal < 2500 && (
                  <div className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-4 w-4 text-rose-600" />
                      <span className="text-rose-800 text-sm">
                        Add {formatINR(2500 - subtotal)} more for free shipping!
                      </span>
                    </div>
                  </div>
                )}

                <Link href="/checkout">
                  <Button size="lg" className="w-full mt-6 bg-rose-600 hover:bg-rose-700 text-white">
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>

                <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-rose-600">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Secure checkout with SSL encryption</span>
                </div>
              </CardContent>
            </Card>

            {/* Continue Shopping */}
            <Link href="/shop">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
