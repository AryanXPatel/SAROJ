"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Heart, Star, Filter, Grid3X3, List, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { products, categories, tags } from "@/lib/products"
import { formatINR } from "@/lib/currency"
import { useCart } from "@/components/cart-context"
import { useWishlist } from "@/components/wishlist-context"

export default function ShopPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const tagParam = searchParams.get("tag")

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categoryParam ? [categoryParam] : [])
  const [selectedTags, setSelectedTags] = useState<string[]>(tagParam ? [tagParam] : [])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [filteredProducts, setFilteredProducts] = useState(products)

  const { dispatch: cartDispatch } = useCart()
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist()

  const sizes = ["XS", "S", "M", "L", "XL", "One Size"]
  const colors = [
    { name: "Rose", hex: "#f43f5e" },
    { name: "Cream", hex: "#fef7ed" },
    { name: "Navy", hex: "#1e40af" },
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#ffffff" },
    { name: "Royal Blue", hex: "#1e3a8a" },
    { name: "Mint Green", hex: "#6ee7b7" },
    { name: "Maroon", hex: "#7f1d1d" },
    { name: "Gold", hex: "#fbbf24" },
    { name: "Silver", hex: "#9ca3af" },
    { name: "Red", hex: "#dc2626" },
    { name: "Green", hex: "#16a34a" },
    { name: "Yellow", hex: "#eab308" },
    { name: "Pink", hex: "#ec4899" },
    { name: "Purple", hex: "#9333ea" },
  ]

  useEffect(() => {
    let filtered = [...products]

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category))
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((product) => product.tags?.some((tag) => selectedTags.includes(tag)))
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((product) => product.sizes.some((size) => selectedSizes.includes(size)))
    }

    // Filter by colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) => product.colors.some((color) => selectedColors.includes(color)))
    }

    // Filter by price range
    filtered = filtered.filter((product) => {
      return product.price >= priceRange[0] && product.price <= priceRange[1]
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        // Keep original order for featured
        break
    }

    setFilteredProducts(filtered)
  }, [selectedCategories, selectedTags, selectedSizes, selectedColors, priceRange, sortBy])

  const addToCart = (product: any) => {
    cartDispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        color: product.colors[0],
        size: product.sizes[0],
      },
    })
  }
  
  const handleWishlistToggle = (product: any) => {
    const productId = String(product.id)
    const isInWishlist = wishlistState.items.some(item => item.id === productId)
    
    if (isInWishlist) {
      wishlistDispatch({ 
        type: 'REMOVE_ITEM', 
        payload: { id: productId } 
      })
    } else {
      wishlistDispatch({ 
        type: 'ADD_ITEM', 
        payload: {
          id: productId,
          name: product.name,
          price: product.price,
          image: product.image
        }
      })
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedTags([])
    setSelectedSizes([])
    setSelectedColors([])
    setPriceRange([0, 5000])
  }

  const activeFiltersCount =
    selectedCategories.length + selectedTags.length + selectedSizes.length + selectedColors.length

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-medium text-rose-900 mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.slug} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded border-rose-300 text-rose-600 focus:ring-rose-500"
                checked={selectedCategories.includes(category.name)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCategories([...selectedCategories, category.name])
                  } else {
                    setSelectedCategories(selectedCategories.filter((c) => c !== category.name))
                  }
                }}
              />
              <span className="text-rose-700 text-sm">
                {category.name} ({category.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-medium text-rose-900 mb-3">Style Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              size="sm"
              className={`text-xs ${
                selectedTags.includes(tag)
                  ? "bg-rose-600 hover:bg-rose-700 text-white"
                  : "border-rose-300 text-rose-700 hover:bg-rose-50"
              }`}
              onClick={() => {
                if (selectedTags.includes(tag)) {
                  setSelectedTags(selectedTags.filter((t) => t !== tag))
                } else {
                  setSelectedTags([...selectedTags, tag])
                }
              }}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="font-medium text-rose-900 mb-3">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSizes.includes(size) ? "default" : "outline"}
              size="sm"
              className={`${
                selectedSizes.includes(size)
                  ? "bg-rose-600 hover:bg-rose-700 text-white"
                  : "border-rose-300 text-rose-700 hover:bg-rose-50"
              }`}
              onClick={() => {
                if (selectedSizes.includes(size)) {
                  setSelectedSizes(selectedSizes.filter((s) => s !== size))
                } else {
                  setSelectedSizes([...selectedSizes, size])
                }
              }}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-medium text-rose-900 mb-3">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-8 h-8 rounded-full border-2 transition-colors ${
                selectedColors.includes(color.name) ? "border-rose-500 scale-110" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
              onClick={() => {
                if (selectedColors.includes(color.name)) {
                  setSelectedColors(selectedColors.filter((c) => c !== color.name))
                } else {
                  setSelectedColors([...selectedColors, color.name])
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-medium text-rose-900 mb-3">Price Range (₹)</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              placeholder="Min"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
              className="w-20 text-sm border-rose-200"
            />
            <span className="text-rose-700">-</span>
            <Input
              type="number"
              placeholder="Max"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 5000])}
              className="w-20 text-sm border-rose-200"
            />
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
        onClick={clearFilters}
      >
        Clear All Filters
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-8 md:py-12 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-serif text-rose-900 mb-4">Shop All</h1>
          <p className="text-rose-700 max-w-2xl mx-auto">
            Discover our complete collection of Navratri fashion, from traditional blouses to contemporary fusion pieces, all
            crafted with love in Ahmedabad.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xl font-serif text-rose-900 mb-6">Filters</h2>
              <FilterContent />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filters */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="border-rose-300 text-rose-700 bg-transparent">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-80">
                  <SheetHeader>
                    <SheetTitle className="text-rose-900">Filters</SheetTitle>
                  </SheetHeader>
                  <div className="py-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-rose-700 text-sm">Showing {filteredProducts.length} products</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-rose-700">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border border-rose-200 rounded px-2 py-1 text-rose-700 focus:border-rose-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-rose-600 hover:bg-rose-700" : "border-rose-300 text-rose-700"}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-rose-600 hover:bg-rose-700" : "border-rose-300 text-rose-700"}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer border-rose-100 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className={`${viewMode === "list" ? "flex" : ""}`}>
                      <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                        <Link href={`/products/${product.id}`}>
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={300}
                            height={400}
                            className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                              viewMode === "list" ? "h-48" : "h-80"
                            }`}
                          />
                        </Link>
                        {(product.onSale || product.isNew) && (
                          <div className="absolute top-4 left-4 space-y-2">
                            {product.onSale && <Badge className="bg-rose-500 text-white">Sale</Badge>}
                            {product.isNew && <Badge className="bg-green-500 text-white">New</Badge>}
                          </div>
                        )}
                        <Button
                          size="icon"
                          variant="secondary"
                          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                          onClick={(e) => {
                            e.preventDefault()
                            handleWishlistToggle(product)
                          }}
                        >
                          <Heart className={`h-4 w-4 ${wishlistState.items.some(item => item.id === String(product.id)) ? 'text-rose-500 fill-current' : ''}`} />
                        </Button>
                      </div>
                      <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                        <Link href={`/products/${product.id}`}>
                          <h3 className="font-medium text-rose-900 mb-2 hover:text-rose-700">{product.name}</h3>
                        </Link>
                        <p className="text-sm text-rose-600 mb-2">{product.category}</p>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-rose-600">({product.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-lg font-semibold text-rose-900">₹{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              ₹{product.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-1">
                            {product.colors.slice(0, 3).map((color) => {
                              const colorObj = colors.find((c) => c.name === color)
                              return (
                                <div
                                  key={color}
                                  className="w-4 h-4 rounded-full border border-gray-300"
                                  style={{ backgroundColor: colorObj?.hex }}
                                  title={color}
                                />
                              )
                            })}
                            {product.colors.length > 3 && (
                              <span className="text-xs text-rose-600">+{product.colors.length - 3}</span>
                            )}
                          </div>
                          <Button
                            size="sm"
                            className="bg-rose-600 hover:bg-rose-700 text-white"
                            onClick={(e) => {
                              e.preventDefault()
                              addToCart(product)
                            }}
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-serif text-rose-900 mb-4">No products found</h3>
                <p className="text-rose-700 mb-6">Try adjusting your filters or search criteria</p>
                <Button onClick={clearFilters} className="bg-rose-600 hover:bg-rose-700 text-white">
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredProducts.length > 0 && filteredProducts.length >= 12 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
