"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ShoppingBag,
  Search,
  User,
  Star,
  Filter,
  X,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    size: "",
    color: "",
  });
  const [sortBy, setSortBy] = useState("relevance");

  // Mock search results
  const allProducts = [
    {
      id: 1,
      name: "Silk Anarkali Dress",
      price: "₹10,600", // Dummy INR
      originalPrice: "₹13,200", // Dummy INR
      category: "Dresses",
      image: "/placeholder.svg?height=400&width=800",
      rating: 4.8,
      reviews: 24,
      colors: ["Rose", "Cream"],
      sizes: ["XS", "S", "M", "L", "XL"],
      onSale: true,
    },
    {
      id: 2,
      name: "Cotton Kurta Top",
      price: "₹5,600", // Dummy INR
      category: "Tops",
      image: "/placeholder.svg?height=400&width=800",
      rating: 4.9,
      reviews: 18,
      colors: ["White", "Cream"],
      sizes: ["XS", "S", "M", "L"],
      onSale: false,
    },
    {
      id: 3,
      name: "Palazzo Pants",
      price: "₹7,400", // Dummy INR
      category: "Bottoms",
      image: "/placeholder.svg?height=400&width=800",
      rating: 4.7,
      reviews: 31,
      colors: ["Navy", "Black", "Cream"],
      sizes: ["S", "M", "L", "XL"],
      onSale: false,
    },
    {
      id: 4,
      name: "Chanderi Dupatta",
      price: "₹3,800", // Dummy INR
      category: "Accessories",
      image: "/placeholder.svg?height=400&width=800",
      rating: 4.6,
      reviews: 12,
      colors: ["Rose", "Navy"],
      sizes: ["One Size"],
      onSale: false,
    },
  ];

  const [searchResults, setSearchResults] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      // Simulate search delay
      const timer = setTimeout(() => {
        const filtered = allProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filtered);
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSearchResults(allProducts);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic is handled by useEffect
  };

  const clearFilter = (filterType: string) => {
    setFilters({ ...filters, [filterType]: "" });
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <form
            onSubmit={handleSearch}
            className="relative max-w-2xl mx-auto mb-6"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-rose-400" />
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg border-rose-200 focus:border-rose-500 rounded-full"
            />
          </form>

          {searchQuery && (
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-serif text-rose-900 mb-2">
                Search Results for "{searchQuery}"
              </h1>
              <p className="text-rose-700">
                {isLoading
                  ? "Searching..."
                  : `${searchResults.length} products found`}
              </p>
            </div>
          )}
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
            >
              <Filter className="h-4 w-4 mr-1" />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </Button>

            {/* Active Filters */}
            {Object.entries(filters).map(([key, value]) =>
              value ? (
                <Badge
                  key={key}
                  variant="secondary"
                  className="bg-rose-100 text-rose-800 cursor-pointer hover:bg-rose-200"
                  onClick={() => clearFilter(key)}
                >
                  {key}: {value}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ) : null
            )}
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-rose-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-rose-200 rounded px-2 py-1 text-rose-700 focus:border-rose-500"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Search Results */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-rose-100 aspect-[3/4] rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-rose-100 rounded w-3/4"></div>
                  <div className="h-4 bg-rose-100 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <Card
                key={product.id}
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
                    {product.onSale && (
                      <Badge className="absolute top-4 left-4 bg-rose-500 text-white">
                        Sale
                      </Badge>
                    )}
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
                      {product.category}
                    </p>
                    <h3 className="font-medium text-rose-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-rose-600">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-rose-900">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        className="bg-rose-600 hover:bg-rose-700 text-white"
                      >
                        Quick Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="h-24 w-24 text-rose-300 mx-auto mb-6" />
            <h2 className="text-2xl font-serif text-rose-900 mb-4">
              No Results Found
            </h2>
            <p className="text-rose-700 mb-8 max-w-md mx-auto">
              We couldn't find any products matching "{searchQuery}". Try
              adjusting your search or browse our collections.
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => setSearchQuery("")}
                className="bg-rose-600 hover:bg-rose-700 text-white"
              >
                Clear Search
              </Button>
              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery("dress")}
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  Try "dress"
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery("blouse")}
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  Try "blouse"
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery("accessories")}
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  Try "accessories"
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Popular Searches */}
        {!searchQuery && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif text-rose-900 mb-6 text-center">
              Popular Searches
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "silk dress",
                "cotton blouse",
                "linen pants",
                "accessories",
                "summer collection",
                "work wear",
              ].map((term) => (
                <Button
                  key={term}
                  variant="outline"
                  onClick={() => setSearchQuery(term)}
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
