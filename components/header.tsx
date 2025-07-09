"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Search, User, Heart } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import dynamic from "next/dynamic"
import { useCart } from "@/components/cart-context"
import { useUser } from "@/components/user-context"

const SearchModal = dynamic(() => import("@/components/search-modal").then(mod => mod.SearchModal))

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { state: cartState } = useCart()
  const { user } = useUser()

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-rose-100 text-center py-2 px-4">
        <p className="text-sm text-rose-800">
          Free shipping across India on orders over ₹2,500 • New Collection Now Available
        </p>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-2xl md:text-3xl font-serif text-rose-900 font-bold">SAROJ</div>
              <div className="text-xs text-rose-600 -mt-1">From Her Heart to Yours</div>
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
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

            {/* Header Icons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-rose-900 hover:text-rose-600"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Open search"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Link href={user ? "/account" : "/login"}>
                  <Button variant="ghost" size="icon" className="text-rose-900 hover:text-rose-600" aria-label="My account">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/wishlist">
                  <Button variant="ghost" size="icon" className="text-rose-900 hover:text-rose-600" aria-label="My wishlist">
                    <Heart className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="text-rose-900 hover:text-rose-600 relative" aria-label="Open cart">
                  <ShoppingBag className="h-5 w-5" />
                  {cartState.itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center" aria-hidden="true">
                      {cartState.itemCount}
                    </Badge>
                  )}
                </Button>
              </Link>
              <MobileNav setIsSearchOpen={setIsSearchOpen} />
            </div>
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
