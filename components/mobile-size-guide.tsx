"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Ruler, X } from "lucide-react"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function MobileSizeGuide() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-800 md:hidden">
          <Ruler className="h-4 w-4 mr-1" />
          Size Guide
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[90vh] bg-white">
        <SheetHeader className="border-b border-rose-100 pb-4">
          <SheetTitle className="flex items-center justify-between text-rose-900">
            Size Guide
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-rose-900">
              <X className="h-5 w-5" />
            </Button>
          </SheetTitle>
        </SheetHeader>

        <div className="py-6 space-y-6 overflow-y-auto">
          {/* How to Measure */}
          <div>
            <h4 className="font-medium text-rose-900 mb-4">How to Measure</h4>
            <div className="space-y-4">
              <div className="text-center mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="How to measure"
                  width={200}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </div>
              <div className="space-y-3 text-sm text-rose-700">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-rose-600">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-rose-900">Bust</p>
                    <p>Measure around the fullest part of your bust, keeping the tape parallel to the floor.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-rose-600">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-rose-900">Waist</p>
                    <p>Measure around your natural waistline, which is the narrowest part of your torso.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-rose-600">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-rose-900">Hips</p>
                    <p>Measure around the fullest part of your hips, about 8 inches below your waist.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Size Chart */}
          <div>
            <h4 className="font-medium text-rose-900 mb-4">Size Chart</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-rose-200 rounded-lg">
                <thead className="bg-rose-50">
                  <tr>
                    <th className="text-left py-3 px-4 text-rose-900 font-medium">Size</th>
                    <th className="text-left py-3 px-4 text-rose-900 font-medium">Bust</th>
                    <th className="text-left py-3 px-4 text-rose-900 font-medium">Waist</th>
                    <th className="text-left py-3 px-4 text-rose-900 font-medium">Hips</th>
                  </tr>
                </thead>
                <tbody className="text-rose-700">
                  <tr className="border-t border-rose-100">
                    <td className="py-3 px-4 font-medium">XS</td>
                    <td className="py-3 px-4">32-34"</td>
                    <td className="py-3 px-4">24-26"</td>
                    <td className="py-3 px-4">34-36"</td>
                  </tr>
                  <tr className="border-t border-rose-100">
                    <td className="py-3 px-4 font-medium">S</td>
                    <td className="py-3 px-4">34-36"</td>
                    <td className="py-3 px-4">26-28"</td>
                    <td className="py-3 px-4">36-38"</td>
                  </tr>
                  <tr className="border-t border-rose-100">
                    <td className="py-3 px-4 font-medium">M</td>
                    <td className="py-3 px-4">36-38"</td>
                    <td className="py-3 px-4">28-30"</td>
                    <td className="py-3 px-4">38-40"</td>
                  </tr>
                  <tr className="border-t border-rose-100">
                    <td className="py-3 px-4 font-medium">L</td>
                    <td className="py-3 px-4">38-40"</td>
                    <td className="py-3 px-4">30-32"</td>
                    <td className="py-3 px-4">40-42"</td>
                  </tr>
                  <tr className="border-t border-rose-100">
                    <td className="py-3 px-4 font-medium">XL</td>
                    <td className="py-3 px-4">40-42"</td>
                    <td className="py-3 px-4">32-34"</td>
                    <td className="py-3 px-4">42-44"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fit Recommendation */}
          <div className="bg-rose-50 p-4 rounded-lg">
            <h4 className="font-medium text-rose-900 mb-2">Fit Recommendation</h4>
            <p className="text-sm text-rose-700">
              This dress has a relaxed fit through the body with a flattering A-line silhouette. If you prefer a more
              fitted look, consider sizing down. Model is 5'7" wearing size S.
            </p>
          </div>

          {/* Still Need Help */}
          <div className="text-center pt-4 border-t border-rose-100">
            <p className="text-sm text-rose-700 mb-3">Still need help finding your size?</p>
            <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent">
              Contact Our Fit Experts
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
