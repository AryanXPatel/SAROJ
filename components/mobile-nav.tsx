"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Search, User, ShoppingBag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useCart } from "@/components/cart-context"
import { useUser } from "@/components/user-context"
import { ScrollArea } from "@/components/ui/scroll-area"

interface MobileNavProps {
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>
}

export function MobileNav({ setIsSearchOpen }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()
  const { state: cartState } = useCart()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
    { href: "/journal", label: "Journal" },
    { href: "/contact", label: "Contact" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const handleSearchClick = () => {
    setIsOpen(false)
    setIsSearchOpen(true)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-rose-900">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-80 bg-white p-0">
        <SheetHeader className="border-b border-rose-100 p-4">
          <SheetTitle asChild>
            <div className="text-2xl font-serif text-rose-900 font-bold">SAROJ</div>
          </SheetTitle>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-rose-900">
            <X className="h-6 w-6" />
          </Button>
        </SheetHeader>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Button
              variant="outline"
              onClick={handleSearchClick}
              className="flex flex-col items-center p-4 h-auto border-rose-200 bg-transparent"
            >
              <Search className="h-5 w-5 text-rose-600 mb-1" />
              <span className="text-xs text-rose-700">Search</span>
            </Button>
            <Link href={user ? "/account" : "/login"} passHref>
              <Button
                variant="outline"
                onClick={handleLinkClick}
                className="flex flex-col items-center p-4 h-auto border-rose-200 bg-transparent w-full"
              >
                <User className="h-5 w-5 text-rose-600 mb-1" />
                <span className="text-xs text-rose-700">Account</span>
              </Button>
            </Link>
            <Link href="/cart" passHref>
              <Button
                variant="outline"
                onClick={handleLinkClick}
                className="flex flex-col items-center p-4 h-auto border-rose-200 relative bg-transparent w-full"
              >
                <ShoppingBag className="h-5 w-5 text-rose-600 mb-1" />
                <span className="text-xs text-rose-700">Cart</span>
                {cartState.itemCount > 0 && (
                  <Badge
                    className="absolute top-1 right-1 h-4 w-4 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {cartState.itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>

          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-rose-900 hover:bg-rose-50 rounded-lg font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-rose-100 bg-white">
          <p className="text-sm text-rose-700">© {new Date().getFullYear()} SAROJ</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
