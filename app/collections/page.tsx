import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  ShoppingBag,
  Search,
  User,
  Calendar,
  Sparkles,
  Leaf,
  Sun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Header } from "@/components/header";

export default function CollectionsPage() {
  const collections = [
    {
      id: 1,
      name: "Navratri Nights 2025",
      description:
        "Our signature collection featuring vibrant mirror-work blouses and flowing chaniya cholis designed for endless nights of garba and dandiya",
      image: "/placeholder.svg?height=400&width=800",
      itemCount: 24,
      priceRange: "₹2,499 - ₹12,999",
      season: "Navratri 2025",
      isNew: true,
      theme: "Festive",
      icon: Sparkles,
    },
    {
      id: 2,
      name: "Bridal Dreams",
      description:
        "Exquisite lehenga cholis for the bride who wants to incorporate Navratri elements into her wedding ensemble",
      image: "/placeholder.svg?height=400&width=800",
      itemCount: 18,
      priceRange: "₹8,999 - ₹25,000",
      season: "Year-Round Collection",
      isNew: false,
      theme: "Bridal",
      icon: Heart,
    },
    {
      id: 3,
      name: "Artisan Heritage",
      description: "Handcrafted pieces showcasing traditional Gujarati techniques like bandhani, mirror work, and intricate embroidery",
      image: "/placeholder.svg?height=400&width=800",
      itemCount: 15,
      priceRange: "₹3,499 - ₹15,500",
      season: "Signature Collection",
      isNew: false,
      theme: "Traditional",
      icon: Leaf,
    },
    {
      id: 4,
      name: "Festive Essentials",
      description:
        "Must-have accessories and dupattas to complete your Navratri look, from oxidized jewelry to embellished footwear",
      image: "/placeholder.svg?height=400&width=800",
      itemCount: 21,
      priceRange: "₹899 - ₹4,999",
      season: "Festive Collection",
      isNew: false,
      theme: "Accessories",
      icon: Calendar,
    },
  ];

  const featuredProducts = [
    {
      name: "Mirror Work Blouse",
      price: "₹3,499",
      image: "/placeholder.svg?height=400&width=300",
      collection: "Navratri Nights 2025",
    },
    {
      name: "Embroidered Lehenga Choli",
      price: "₹8,999",
      image: "/placeholder.svg?height=400&width=300",
      collection: "Bridal Dreams",
    },
    {
      name: "Bandhani Dupatta",
      price: "₹1,299",
      image: "/placeholder.svg?height=400&width=300",
      collection: "Artisan Heritage",
    },
    {
      name: "Kundan Choker Set",
      price: "₹2,499",
      image: "/placeholder.svg?height=400&width=300",
      collection: "Festive Essentials",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-rose-900 mb-6">
            Our Collections
          </h1>
          <p className="text-lg md:text-xl text-rose-700 max-w-3xl mx-auto leading-relaxed">
            Discover curated collections that celebrate the spirit of Navratri. Each piece is
            thoughtfully designed to honor Gujarati craftsmanship while making you shine during the festive season.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:gap-12">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg w-full"
                  />
                  {collection.isNew && (
                    <Badge className="absolute top-6 left-6 bg-green-500 text-white">
                      New Collection
                    </Badge>
                  )}
                </div>
                <div
                  className={`space-y-6 text-center lg:text-left ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                    <collection.icon className="h-6 w-6 text-rose-600" />
                    <span className="text-rose-600 font-medium">
                      {collection.season}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-rose-900">
                    {collection.name}
                  </h2>
                  <p className="text-rose-700 leading-relaxed text-lg">
                    {collection.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-rose-600">
                    <span>{collection.itemCount} pieces</span>
                    <span className="hidden sm:block">•</span>
                    <span>{collection.priceRange}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button
                      size="lg"
                      className="bg-rose-600 hover:bg-rose-700 text-white"
                    >
                      Shop Collection
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                    >
                      View Lookbook
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">
              Collection Highlights
            </h2>
            <p className="text-rose-700 max-w-2xl mx-auto">
              Discover standout pieces from each collection, carefully selected
              to showcase the unique character and style of our Navratri offerings.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-rose-100 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-rose-600 mb-1">
                      {product.collection}
                    </p>
                    <h3 className="font-medium text-rose-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-rose-900">
                        {product.price}
                      </span>
                      <Button
                        size="sm"
                        className="bg-rose-600 hover:bg-rose-700 text-white"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-rose-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Stay in the Loop
          </h2>
          <p className="text-rose-100 max-w-2xl mx-auto mb-8">
            Be the first to discover new Navratri collections, exclusive previews, and
            styling inspiration delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-rose-900 border-0 focus:ring-2 focus:ring-rose-300"
            />
            <Button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
