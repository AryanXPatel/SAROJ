"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface MobileImageGalleryProps {
  images: string[]
  productName: string
  onSale?: boolean
}

export function MobileImageGallery({ images, productName, onSale }: MobileImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="md:hidden">
      <div className="relative">
        <Image
          src={images[selectedImage] || "/placeholder.svg?height=600&width=500"}
          alt={`${productName} - image ${selectedImage + 1}`}
          width={500}
          height={600}
          className="object-cover cursor-pointer"
          onClick={() => setIsFullscreen(true)}
        />

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-8 h-8"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-8 h-8"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Badges and Actions */}
        <div className="absolute top-3 left-3">
          {onSale && <Badge className="bg-rose-500 text-white text-xs">20% Off</Badge>}
        </div>
        <div className="absolute top-3 right-3 space-y-2">
          <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white w-8 h-8">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white w-8 h-8">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="p-0 max-w-screen-lg h-screen bg-black/90 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/30 text-white"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Image
              src={images[selectedImage] || "/placeholder.svg?height=600&width=500"}
              alt={`${productName} - image ${selectedImage + 1}`}
              fill
              className="object-contain"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
