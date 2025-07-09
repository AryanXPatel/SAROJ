"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/products"
import { formatPrice } from "@/lib/currency"
import { useWishlist } from "@/components/wishlist-context"

interface WishlistProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

export function FeaturedProducts() {
  // Select products from Navratri categories
  const navratriProducts = products.filter(product => 
    product.category === "Navratri Blouses" || 
    product.category === "Lehenga Cholis" ||
    product.category === "Dandiya Dupattas" ||
    product.category === "Jewelry"
  ).slice(0, 4)
  
  const { state: wishlistState, dispatch } = useWishlist()

  const handleWishlistToggle = (product: WishlistProduct) => {
    const isInWishlist = wishlistState.items.some(item => item.id === product.id)
    if (isInWishlist) {
      dispatch({ type: 'REMOVE_ITEM', payload: { id: product.id } })
    } else {
      dispatch({ type: 'ADD_ITEM', payload: product })
    }
  }

  return (
    <section className="py-16 px-4 bg-rose-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">Navratri Essentials</h2>
          <p className="text-rose-700 max-w-2xl mx-auto">
            Our most-loved festive pieces to make you shine during the nine nights of celebration. Perfect for garba and dandiya raas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {navratriProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer border-rose-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.onSale && <Badge className="absolute top-4 left-4 bg-rose-500 text-white">Sale</Badge>}
                  {product.isNew && <Badge className="absolute top-4 left-4 bg-green-500 text-white">New</Badge>}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                    onClick={(e) => {
                      e.preventDefault();
                      handleWishlistToggle({
                        id: String(product.id),
                        name: product.name,
                        price: product.price,
                        image: product.image
                      });
                    }}
                    aria-label="Toggle Wishlist"
                  >
                    <Heart className={`h-4 w-4 ${wishlistState.items.some(item => item.id === String(product.id)) ? 'text-rose-500 fill-current' : 'text-gray-500'}`} />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-rose-900 mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-rose-600">({product.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-rose-900">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/shop">
            <Button
              variant="outline"
              size="lg"
              className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
            >
              View All Navratri Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 