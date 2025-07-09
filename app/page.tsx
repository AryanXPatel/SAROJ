import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Truck, RotateCcw, Shield, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { products, categories } from "@/lib/products"
import { FeaturedProducts } from "./_components/featured-products"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-rose-900 leading-tight">
                  Navratri Ready.
                  <br />
                  <span className="text-rose-600">Dance in style.</span>
                </h1>
                <p className="text-base md:text-lg text-rose-700 max-w-md mx-auto lg:mx-0">
                Celebrate the spirit of Navratri with our handcrafted collection of blouses, lehengas, and dupattas. Made with love in the heart of Ahmedabad.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/shop">
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8">
                  Shop Navratri '25
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                  >
                    Our Garba Collection
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/PinkBlouse.jpg?height=600&width=500"
                alt="SAROJ Fashion Model wearing traditional Navratri blouse"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-rose-500 fill-current" />
                  <span className="text-sm font-medium text-rose-900">Perfect for Garba nights 💃</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-rose-900 mb-4">Find Your Navratri Style</h2>
            <p className="text-rose-700 max-w-2xl mx-auto">
            From mirror-work blouses to bandhani dupattas, explore our heart-made collections for the perfect dandiya night ensemble.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link key={category.slug} href={`/shop?category=${category.slug}`}>
                <Card className="group cursor-pointer border-rose-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={`/placeholder.svg?height=200&width=200&text=${category.name}`}
                        alt={category.name}
                        width={200}
                        height={200}
                        className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    </div>
                    <div className="p-3 md:p-4 text-center">
                      <h3 className="font-serif text-lg md:text-xl text-rose-900 mb-1">{category.name}</h3>
                      <p className="text-sm text-rose-600">{category.count} pieces</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Brand Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif text-rose-900">Our Heartbeat: Ahmedabad</h2>
                <p className="text-rose-700 leading-relaxed">
                Born in the city that lives and breathes Garba, SAROJ is a celebration of Ahmedabad's vibrant spirit and rich textile heritage. We partner with skilled local artisans who have mastered their craft over generations. 
                </p>
                <p className="text-rose-700 leading-relaxed">
                Every piece is designed to not only look beautiful but to feel incredible, letting you dance the night away in style and comfort.
                </p>
              </div>
              <Link href="/about">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white">Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Ahmedabad+Heritage"
                alt="SAROJ Brand Heritage - Ahmedabad Artisans"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                description: "Free shipping across India on orders over ₹2,500",
              },
              {
                icon: RotateCcw,
                title: "Easy Returns",
                description: "15-day hassle-free returns and exchanges",
              },
              {
                icon: Shield,
                title: "Authentic Craftsmanship",
                description: "Handcrafted by skilled artisans with quality guarantee",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full">
                  <feature.icon className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-medium text-rose-900">{feature.title}</h3>
                <p className="text-rose-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-rose-900 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-serif">Stay Connected</h2>
            <p className="text-rose-100">
              Be the first to know about new Navratri collections, exclusive offers, and styling tips. Plus, get 10% off your
              first order when you subscribe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-rose-900 border-0 h-12"
              />
              <Button className="bg-rose-600 hover:bg-rose-700 text-white h-12 px-6">Subscribe</Button>
            </div>
            <p className="text-sm text-rose-200">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
