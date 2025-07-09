"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Heart,
  ShoppingBag,
  Star,
  Ruler,
  Truck,
  RotateCcw,
  Shield,
  Plus,
  Minus,
  Camera,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileSizeGuide } from "@/components/mobile-size-guide";
import { MobileImageGallery } from "@/components/mobile-image-gallery";
import { Product } from "@/lib/products";
import { formatPrice } from "@/lib/currency";
import { useWishlist } from "@/components/wishlist-context";
import { useCart } from "@/components/cart-context";

interface ProductDetailsProps {
    product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "");
  const [quantity, setQuantity] = useState(1);

  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist()
  const { dispatch: cartDispatch } = useCart()

  const handleWishlistToggle = () => {
    const isInWishlist = wishlistState.items.some(item => item.id === String(product.id))
    const payload = { 
      id: String(product.id), 
      name: product.name, 
      price: product.price, 
      image: product.image 
    };
    if (isInWishlist) {
      wishlistDispatch({ type: 'REMOVE_ITEM', payload: { id: String(product.id) } })
    } else {
      wishlistDispatch({ type: 'ADD_ITEM', payload })
    }
  }
  
  const handleAddToCart = () => {
    cartDispatch({
        type: 'ADD_ITEM',
        payload: {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: selectedSize,
            color: selectedColor,
        }
    });
  }

  const productImages = [
    product.image,
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=800&width=800",
  ];
  
  // Updated reviews for Navratri-themed products
  const reviews = [
    {
      id: 1,
      name: "Meera P.",
      rating: 5,
      date: "2 weeks ago",
      title: "Perfect for Garba nights!",
      content:
        "This blouse is absolutely stunning! The mirror work catches the light beautifully while dancing, and I received so many compliments during Navratri. The fit is perfect and comfortable enough for hours of garba.",
      verified: true,
      helpful: 12,
      images: ["/placeholder.svg?height=800&width=800"],
    },
    {
      id: 2,
      name: "Anita S.",
      rating: 4,
      date: "1 month ago",
      title: "Beautiful craftsmanship",
      content:
        "The handwork on this piece is exquisite. You can tell it's made by skilled artisans. The colors are vibrant and perfect for festive occasions. Giving 4 stars only because the delivery took longer than expected.",
      verified: true,
      helpful: 8,
      images: [],
    },
    {
      id: 3,
      name: "Ritu M.",
      rating: 5,
      date: "3 weeks ago",
      title: "Worth every rupee!",
      content:
        "I ordered this for my daughter for college Navratri celebrations, and she absolutely loves it! The quality is excellent, and it looks even better in person than in the photos. Will definitely order more from SAROJ.",
      verified: true,
      helpful: 5,
      images: ["/placeholder.svg?height=800&width=800"],
    }
  ];
  
  const relatedProducts = [];

  return (
    <>
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-rose-600">
            <Link href="/" className="hover:text-rose-800">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-rose-800">Shop</Link>
            <span className="mx-2">/</span>
            <Link href={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-rose-800">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-rose-900">{product.name}</span>
            </nav>
        </div>

        {/* Product Section */}
        <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            
            <MobileImageGallery
                images={productImages}
                productName={product.name}
                onSale={product.onSale || false}
            />

            
            <div className="space-y-4 md:space-y-6">
                <div>
                <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star
                        key={i}
                        className={`h-3 w-3 md:h-4 md:w-4 ${ i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                    ))}
                    </div>
                    <span className="text-xs md:text-sm text-rose-600">
                    ({product.reviews} reviews)
                    </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-serif text-rose-900 mb-2">
                    {product.name}
                </h1>
                <p className="text-sm md:text-base text-rose-700 mb-4">
                    {product.description}
                </p>
                <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-rose-900">₹{product.price}</span>
                    {product.originalPrice && <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>}
                    {product.onSale && <Badge variant="secondary" className="bg-rose-100 text-rose-800">Sale</Badge>}
                </div>
                </div>

                {/* Color Selector */}
                <div>
                <h3 className="text-sm font-medium text-rose-900 mb-2">Color: <span className="font-bold">{selectedColor}</span></h3>
                <div className="flex items-center space-x-2">
                    {product.colors.map((color) => (
                    <button
                        key={color}
                        className={`h-8 w-8 rounded-full border-2 transition-all ${selectedColor === color ? 'border-rose-500 scale-110' : 'border-transparent'}`}
                        style={{ backgroundColor: color.toLowerCase() }}
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select color ${color}`}
                    />
                    ))}
                </div>
                </div>

                {/* Size Selector */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-rose-900">Size: <span className="font-bold">{selectedSize}</span></h3>
                        <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="link" className="text-rose-600 h-auto p-0">
                            <Ruler className="h-4 w-4 mr-1" />
                            Size Guide
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Size Guide</DialogTitle>
                            </DialogHeader>
                            <MobileSizeGuide />
                        </DialogContent>
                        </Dialog>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                        <Button
                            key={size}
                            variant={selectedSize === size ? "default" : "outline"}
                            onClick={() => setSelectedSize(size)}
                            className={selectedSize === size ? 'bg-rose-600 text-white' : 'border-rose-300 text-rose-700'}
                        >
                            {size}
                        </Button>
                        ))}
                    </div>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex items-center border border-rose-200 rounded-md p-2">
                        <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center">{quantity}</span>
                        <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button size="lg" className="flex-1 bg-rose-600 hover:bg-rose-700 text-white" onClick={handleAddToCart}>
                        <ShoppingBag className="h-5 w-5 mr-2" />
                        Add to Cart
                    </Button>
                    <Button size="lg" variant="outline" className="border-rose-300" onClick={handleWishlistToggle}>
                        <Heart className={`h-5 w-5 ${wishlistState.items.some(item => item.id === String(product.id)) ? 'text-rose-500 fill-current' : ''}`} />
                    </Button>
                </div>
            </div>
            </div>
        </div>

        {/* Product Information Tabs */}
        <div className="container mx-auto px-4 py-8">
            <Tabs defaultValue="description" className="w-full">
            <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Fabric & Care</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="prose prose-rose max-w-none mt-4">
                <p>{product.description}</p>
                <p>This piece is handcrafted in Ahmedabad, celebrating the rich textile heritage of Gujarat. Every detail is a testament to the skill of local artisans.</p>
            </TabsContent>
            <TabsContent value="details" className="prose prose-rose max-w-none mt-4">
                <p><strong>Fabric:</strong> 100% Mulberry Silk</p>
                <p><strong>Care:</strong> Dry clean only. Iron on low heat.</p>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
                <div className="space-y-6">
                  {reviews.map(review => (
                    <Card key={review.id} className="border-rose-100">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium text-rose-900">{review.title}</h3>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                ))}
                              </div>
                              <span className="text-sm text-rose-600">{review.date}</span>
                            </div>
                          </div>
                          {review.verified && (
                            <Badge variant="outline" className="text-green-600 border-green-200">Verified Purchase</Badge>
                          )}
                        </div>
                        <p className="text-rose-700 my-3">{review.content}</p>
                        {review.images.length > 0 && (
                          <div className="flex space-x-2 my-3">
                            {review.images.map((img, i) => (
                              <div key={i} className="relative w-16 h-16">
                                <Image src={img} alt="Customer photo" fill className="object-cover rounded" />
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center text-sm text-rose-600 mt-2">
                          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>Helpful ({review.helpful})</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </TabsContent>
            </Tabs>
      </div>
    </>
  );
} 