"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingBag, Search, User, Package, MapPin, CreditCard, Heart, Settings, LogOut, Edit } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export default function AccountPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
  })

  const orders = [
    {
      id: "#SAROJ-2025-001",
      date: "March 15, 2025",
      status: "Delivered",
      total: 264.95,
      items: [
        { name: "Silk Midi Dress", image: "/placeholder.svg?height=400&width=800", quantity: 1 },
        { name: "Cotton Blouse", image: "/placeholder.svg?height=400&width=800", quantity: 2 },
      ],
    },
    {
      id: "#SAROJ-2025-002",
      date: "March 10, 2025",
      status: "In Transit",
      total: 189.0,
      items: [{ name: "Cashmere Cardigan", image: "/placeholder.svg?height=400&width=800", quantity: 1 }],
    },
  ]

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Sarah Johnson",
      address: "123 Main Street, Apt 4B",
      city: "New York, NY 10001",
      isDefault: true,
    },
    {
      id: 2,
      type: "Work",
      name: "Sarah Johnson",
      address: "456 Business Ave, Suite 200",
      city: "New York, NY 10002",
      isDefault: false,
    },
  ]

  const wishlistItems = [
    {
      id: 1,
      name: "Linen Trousers",
      price: 89,
      image: "/placeholder.svg?height=400&width=800",
      inStock: true,
    },
    {
      id: 2,
      name: "Pearl Earrings",
      price: 45,
      image: "/placeholder.svg?height=400&width=800",
      inStock: true,
    },
    {
      id: 3,
      name: "Wrap Dress",
      price: 98,
      originalPrice: 120,
      image: "/placeholder.svg?height=400&width=800",
      inStock: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-rose-100 text-center py-2 px-4">
        <p className="text-sm text-rose-800">Welcome back, Sarah! • Free shipping on orders over $75</p>
      </div>

      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/saroj-logo.png"
                alt="SAROJ - From Her Heart to Yours"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-rose-900 hover:text-rose-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-rose-900 hover:text-rose-600 font-medium transition-colors">
                Shop
              </Link>
              <Link href="/collections" className="text-rose-900 hover:text-rose-600 font-medium transition-colors">
                Collections
              </Link>
              <Link href="/about" className="text-rose-900 hover:text-rose-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/journal" className="text-rose-900 hover:text-rose-600 font-medium transition-colors">
                Journal
              </Link>
              <Link href="/contact" className="text-rose-900 hover:text-rose-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-rose-900 hover:text-rose-600">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-rose-900 hover:text-rose-600">
                  <User className="h-5 w-5" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="text-rose-900 hover:text-rose-600 relative">
                <ShoppingBag className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center">
                  2
                </Badge>
              </Button>
              <MobileNav setIsSearchOpen={setIsSearchOpen} />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif text-rose-900 mb-2">My Account</h1>
          <p className="text-rose-700">Manage your orders, addresses, and account settings</p>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-rose-50 h-auto">
            <TabsTrigger
              value="orders"
              className="data-[state=active]:bg-white data-[state=active]:text-rose-900 text-xs md:text-sm py-3"
            >
              <Package className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger
              value="addresses"
              className="data-[state=active]:bg-white data-[state=active]:text-rose-900 text-xs md:text-sm py-3"
            >
              <MapPin className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Addresses</span>
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              className="data-[state=active]:bg-white data-[state=active]:text-rose-900 text-xs md:text-sm py-3"
            >
              <CreditCard className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Payment</span>
            </TabsTrigger>
            <TabsTrigger
              value="wishlist"
              className="data-[state=active]:bg-white data-[state=active]:text-rose-900 text-xs md:text-sm py-3"
            >
              <Heart className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Wishlist</span>
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-white data-[state=active]:text-rose-900 text-xs md:text-sm py-3"
            >
              <Settings className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif text-rose-900">Order History</h2>
            </div>
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="border-rose-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium text-rose-900">{order.id}</h3>
                        <p className="text-rose-600 text-sm">{order.date}</p>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 md:mt-0">
                        <Badge
                          className={
                            order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }
                        >
                          {order.status}
                        </Badge>
                        <span className="font-semibold text-rose-900">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="flex space-x-3 mb-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                          {item.quantity > 1 && (
                            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center">
                              {item.quantity}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                      >
                        View Details
                      </Button>
                      {order.status === "Delivered" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                        >
                          Reorder
                        </Button>
                      )}
                      {order.status === "In Transit" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                        >
                          Track Package
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="addresses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif text-rose-900">Saved Addresses</h2>
              <Button className="bg-rose-600 hover:bg-rose-700 text-white">Add New Address</Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {addresses.map((address) => (
                <Card key={address.id} className="border-rose-100">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-rose-900">{address.type}</h3>
                        {address.isDefault && <Badge className="bg-rose-100 text-rose-800 text-xs">Default</Badge>}
                      </div>
                      <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-800">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-rose-700 text-sm space-y-1">
                      <p className="font-medium">{address.name}</p>
                      <p>{address.address}</p>
                      <p>{address.city}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif text-rose-900">Payment Methods</h2>
              <Button className="bg-rose-600 hover:bg-rose-700 text-white">Add Payment Method</Button>
            </div>
            <Card className="border-rose-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">VISA</span>
                    </div>
                    <div>
                      <p className="font-medium text-rose-900">•••• •••• •••• 4242</p>
                      <p className="text-rose-600 text-sm">Expires 12/26</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-rose-100 text-rose-800 text-xs">Default</Badge>
                    <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-800">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif text-rose-900">My Wishlist</h2>
              <p className="text-rose-600">{wishlistItems.length} items</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="border-rose-100 group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4 text-rose-500 fill-current" />
                      </Button>
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge className="bg-white text-gray-800">Out of Stock</Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-rose-900 mb-2">{item.name}</h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-lg font-semibold text-rose-900">${item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                        disabled={!item.inStock}
                      >
                        {item.inStock ? "Add to Cart" : "Notify When Available"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif text-rose-900">Profile Settings</h2>
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
                className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>

            <Card className="border-rose-100">
              <CardHeader>
                <CardTitle className="text-rose-900">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-rose-900">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      value={userInfo.firstName}
                      onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                      disabled={!isEditing}
                      className="border-rose-200 focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-rose-900">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      value={userInfo.lastName}
                      onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
                      disabled={!isEditing}
                      className="border-rose-200 focus:border-rose-500"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-rose-900">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    disabled={!isEditing}
                    className="border-rose-200 focus:border-rose-500"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-rose-900">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                    disabled={!isEditing}
                    className="border-rose-200 focus:border-rose-500"
                  />
                </div>
                {isEditing && <Button className="bg-rose-600 hover:bg-rose-700 text-white">Save Changes</Button>}
              </CardContent>
            </Card>

            <Card className="border-rose-100">
              <CardHeader>
                <CardTitle className="text-rose-900">Account Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  Change Password
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  Download My Data
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
