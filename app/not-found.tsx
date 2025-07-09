"use client"

import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-rose-50/50">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-rose-100 mb-6">
            <AlertTriangle className="h-12 w-12 text-rose-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-rose-700 mb-8 max-w-md mx-auto">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <Link href="/">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg">
              Go Back to Homepage
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
