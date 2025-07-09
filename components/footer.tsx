import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-rose-50 border-t border-rose-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif text-rose-900 font-bold mb-2">SAROJ</h3>
            <p className="text-rose-700 text-sm">
              From Her Heart to Yours. Authentic Indian fashion from Ahmedabad, celebrating heritage and craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-rose-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-rose-700 hover:text-rose-900 hover:underline">About Us</Link></li>
              <li><Link href="/shop" className="text-sm text-rose-700 hover:text-rose-900 hover:underline">Shop</Link></li>
              <li><Link href="/journal" className="text-sm text-rose-700 hover:text-rose-900 hover:underline">Journal</Link></li>
              <li><Link href="/contact" className="text-sm text-rose-700 hover:text-rose-900 hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-rose-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-rose-700 hover:text-rose-900 hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-rose-700 hover:text-rose-900 hover:underline">Terms of Service</Link></li>
              <li><Link href="/shipping" className="text-sm text-rose-700 hover:text-rose-900 hover:underline">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-rose-900 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-rose-700 hover:text-rose-900" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-rose-700 hover:text-rose-900" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-rose-700 hover:text-rose-900" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-rose-200 pt-6 text-center">
          <p className="text-sm text-rose-600">
            © {currentYear} SAROJ. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 