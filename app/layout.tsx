import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import { CartProvider } from "@/components/cart-context"
import { UserProvider } from "@/components/user-context"
import { Footer } from "@/components/footer"
import { WishlistProvider } from "@/components/wishlist-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SAROJ - From Her Heart to Yours | Authentic Indian Fashion from Ahmedabad",
  description:
    "Discover timeless Indian fashion with SAROJ's curated collection from Ahmedabad. From traditional Bandhani sarees to contemporary kurtas, each piece celebrates Indian heritage and craftsmanship.",
  keywords:
    "Indian fashion, Ahmedabad clothing, Bandhani sarees, kurtas, lehengas, traditional wear, Gujarat fashion, handcrafted clothing, Indian ethnic wear",
  authors: [{ name: "SAROJ Fashion" }],
  creator: "SAROJ",
  publisher: "SAROJ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://thesaroj.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SAROJ - From Her Heart to Yours | Authentic Indian Fashion",
    description: "Discover timeless Indian fashion with SAROJ's curated collection from Ahmedabad.",
    url: "https://thesaroj.in",
    siteName: "SAROJ",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SAROJ - Authentic Indian Fashion from Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAROJ - From Her Heart to Yours",
    description: "Discover timeless Indian fashion with SAROJ's curated collection from Ahmedabad.",
    images: ["/images/twitter-image.jpg"],
    creator: "@thesarojfashion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <CartProvider>
            <WishlistProvider>
              {children}
              <Footer />
              <CookieConsent />
            </WishlistProvider>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  )
}
