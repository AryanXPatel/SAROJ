"use client"

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, X } from "lucide-react";
import Link from "next/link";
import { useWishlist } from "@/components/wishlist-context";
import Image from "next/image";
import { formatPrice } from "@/lib/currency";
import { useRouter } from "next/navigation";

export default function WishlistPage() {
  const { state, dispatch } = useWishlist();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-rose-50/50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif text-rose-900 mb-6">My Wishlist</h1>

        {state.items.length === 0 ? (
          <Card className="flex flex-col items-center justify-center p-12 border-dashed border-rose-200 bg-transparent">
            <Heart className="h-16 w-16 text-rose-300 mb-4" />
            <h2 className="text-xl font-semibold text-rose-800 mb-2">Your wishlist is empty</h2>
            <p className="text-rose-600 mb-6 text-center">
              Fill it with pieces that make your heart sing.
            </p>
            <Button onClick={() => router.push("/shop")} className="bg-rose-600 hover:bg-rose-700 text-white">
              Continue Shopping
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {state.items.map((product) => (
              <Card key={product.id} className="group relative">
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: product.id } })}
                  aria-label="Remove from wishlist"
                >
                  <X className="h-4 w-4" />
                </Button>
                <Link href={`/products/${product.id}`}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 border-t border-rose-100">
                      <h3 className="font-medium text-rose-900 mb-2 truncate">{product.name}</h3>
                      <p className="text-lg font-semibold text-rose-900">{formatPrice(product.price)}</p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
} 