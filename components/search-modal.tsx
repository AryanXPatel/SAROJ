"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/products"
import { formatPrice } from "@/lib/currency"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(products.slice(0, 6))

  useEffect(() => {
    if (query.trim()) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.tags?.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
      )
      setResults(filtered.slice(0, 6))
    } else {
      setResults(products.slice(0, 6))
    }
  }, [query])

  const popularSearches = ["Anarkali", "Kurta", "Saree", "Lehenga", "Palazzo", "Dupatta"]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden p-0">
        <div className="flex items-center border-b border-rose-100 p-4">
          <Search className="h-5 w-5 text-rose-400 mr-3" />
          <Input
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 text-lg"
            autoFocus
          />
        </div>

        <div className="p-4 max-h-96 overflow-y-auto">
          {query ? (
            <div>
              <h3 className="text-sm font-medium text-rose-900 mb-3">Products</h3>
              <div className="space-y-4">
                {products.slice(0, 3).map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="flex items-center space-x-4 group"
                    onClick={onClose}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-rose-900">{product.name}</h4>
                      <p className="text-sm text-rose-600">{product.category}</p>
                      <p className="text-sm font-semibold text-rose-900">{formatPrice(product.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-rose-900 mb-3">Top Suggestions</h3>
                {products.slice(0, 3).map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="flex items-center space-x-4 group"
                    onClick={onClose}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-rose-900">{product.name}</h4>
                      <p className="text-sm text-rose-600">{product.category}</p>
                      <p className="text-sm font-semibold text-rose-900">{formatPrice(product.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h3 className="font-medium text-rose-900 mb-3">Popular Searches</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {popularSearches.map((term) => (
                  <Button
                    key={term}
                    variant="outline"
                    size="sm"
                    onClick={() => setQuery(term)}
                    className="border-rose-300 text-rose-700 hover:bg-rose-50"
                  >
                    {term}
                  </Button>
                ))}
              </div>
              <h3 className="font-medium text-rose-900 mb-3">Featured Products</h3>
              <div className="space-y-3">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    onClick={onClose}
                    className="flex items-center space-x-3 p-2 hover:bg-rose-50 rounded-lg transition-colors"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-rose-900">{product.name}</h4>
                      <p className="text-sm text-rose-600">{product.category}</p>
                      <p className="text-sm font-semibold text-rose-900">{formatPrice(product.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
