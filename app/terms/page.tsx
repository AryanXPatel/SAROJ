import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag,
  Search,
  User,
  FileText,
  Scale,
  Shield,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Header } from "@/components/header";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
              <FileText className="h-8 w-8 text-rose-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-rose-700 max-w-2xl mx-auto">
              These terms govern your use of SAROJ's website and services.
              Please read them carefully.
            </p>
            <div className="mt-4 text-sm text-rose-600">
              <p>Effective Date: March 1, 2025</p>
              <p>Last Updated: March 15, 2025</p>
            </div>
          </div>

          {/* Quick Summary */}
          <Card className="border-rose-100 mb-8">
            <CardHeader>
              <CardTitle className="text-rose-900 flex items-center">
                <Scale className="h-5 w-5 mr-2" />
                Terms Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <Shield className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                  <h3 className="font-medium text-rose-900 mb-1">Fair Use</h3>
                  <p className="text-sm text-rose-700">
                    Use our services responsibly and legally
                  </p>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <FileText className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                  <h3 className="font-medium text-rose-900 mb-1">
                    Clear Terms
                  </h3>
                  <p className="text-sm text-rose-700">
                    Straightforward rules and expectations
                  </p>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <Scale className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                  <h3 className="font-medium text-rose-900 mb-1">
                    Your Rights
                  </h3>
                  <p className="text-sm text-rose-700">
                    Protected under applicable laws
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="prose prose-rose max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  By accessing or using SAROJ's website, mobile application, or
                  services (collectively, the "Service"), you agree to be bound
                  by these Terms of Service ("Terms"). If you disagree with any
                  part of these terms, you may not access the Service.
                </p>
                <p>
                  These Terms apply to all visitors, users, and others who
                  access or use the Service. By using our Service, you represent
                  that you are at least 18 years old or have reached the age of
                  majority in your jurisdiction.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                2. Use of Service
              </h2>
              <div className="space-y-4 text-rose-700">
                <h3 className="text-lg font-medium text-rose-900">
                  Permitted Use
                </h3>
                <p>You may use our Service to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Browse and purchase products</li>
                  <li>Create and manage your account</li>
                  <li>Access customer support</li>
                  <li>Participate in promotions and events</li>
                  <li>Subscribe to newsletters and communications</li>
                </ul>

                <h3 className="text-lg font-medium text-rose-900">
                  Prohibited Use
                </h3>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Use the Service for any unlawful purpose or in violation of
                    any laws
                  </li>
                  <li>
                    Impersonate any person or entity or misrepresent your
                    affiliation
                  </li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    Service
                  </li>
                  <li>
                    Use automated systems to access the Service without
                    permission
                  </li>
                  <li>Transmit viruses, malware, or other harmful code</li>
                  <li>
                    Collect or harvest personal information of other users
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                3. Account Registration
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  To access certain features of the Service, you may be required
                  to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information as necessary</li>
                  <li>Keep your password secure and confidential</li>
                  <li>
                    Accept responsibility for all activities under your account
                  </li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate accounts that
                  violate these Terms or are inactive for extended periods.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                4. Products and Orders
              </h2>
              <div className="space-y-4 text-rose-700">
                <h3 className="text-lg font-medium text-rose-900">
                  Product Information
                </h3>
                <p>
                  We strive to provide accurate product descriptions, images,
                  and pricing. However, we do not warrant that product
                  descriptions or other content is accurate, complete, reliable,
                  or error-free. Colors may vary due to monitor settings and
                  photography conditions.
                </p>

                <h3 className="text-lg font-medium text-rose-900">
                  Pricing and Availability
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All prices are subject to change without notice</li>
                  <li>
                    Product availability is not guaranteed until order
                    confirmation
                  </li>
                  <li>
                    We reserve the right to limit quantities or refuse orders
                  </li>
                  <li>
                    Promotional offers may have specific terms and conditions
                  </li>
                </ul>

                <h3 className="text-lg font-medium text-rose-900">
                  Order Acceptance
                </h3>
                <p>
                  Your order is an offer to purchase products. We may accept or
                  decline your order at our discretion. Order confirmation does
                  not guarantee acceptance. We will notify you if we cannot
                  fulfill your order.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                5. Payment and Billing
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>Payment terms:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is due at the time of order placement</li>
                  <li>
                    We accept major credit cards, PayPal, and other approved
                    payment methods
                  </li>
                  <li>
                    All payments are processed securely through encrypted
                    connections
                  </li>
                  <li>
                    You authorize us to charge your payment method for all fees
                    and taxes
                  </li>
                  <li>Disputed charges must be reported within 60 days</li>
                </ul>
                <p>
                  If payment fails, we may suspend or cancel your order. You
                  remain responsible for any amounts due plus reasonable
                  collection costs.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                6. Shipping and Delivery
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>Shipping terms:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Shipping costs and delivery times vary by location and
                    method
                  </li>
                  <li>
                    Risk of loss transfers to you upon delivery to the carrier
                  </li>
                  <li>Delivery dates are estimates and not guaranteed</li>
                  <li>You must provide accurate shipping information</li>
                  <li>
                    Additional fees may apply for remote locations or special
                    handling
                  </li>
                </ul>
                <p>
                  We are not responsible for delays caused by weather, carrier
                  issues, customs, or other factors beyond our control.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                7. Returns and Exchanges
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>Our return policy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Returns accepted within 30 days of delivery</li>
                  <li>
                    Items must be unworn, unwashed, and in original condition
                  </li>
                  <li>Original tags and packaging must be included</li>
                  <li>
                    Return shipping costs are the customer's responsibility
                    unless item is defective
                  </li>
                  <li>
                    Refunds processed within 5-10 business days after receipt
                  </li>
                </ul>
                <p>
                  Certain items may not be eligible for return due to hygiene or
                  safety reasons. Sale items may have different return policies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                8. Intellectual Property
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  The Service and its content, including but not limited to
                  text, graphics, images, logos, and software, are owned by
                  SAROJ or our licensors and protected by copyright, trademark,
                  and other intellectual property laws.
                </p>
                <p>You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Copy, modify, or distribute our content without permission
                  </li>
                  <li>Use our trademarks or logos without authorization</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Create derivative works based on our content</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                9. Privacy
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  Your privacy is important to us. Our Privacy Policy explains
                  how we collect, use, and protect your information when you use
                  our Service. By using our Service, you agree to the collection
                  and use of information in accordance with our Privacy Policy.
                </p>
                <p>
                  <Link
                    href="/privacy"
                    className="text-rose-600 hover:text-rose-800 underline"
                  >
                    View our Privacy Policy
                  </Link>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                10. Disclaimers and Limitation of Liability
              </h2>
              <div className="space-y-4 text-rose-700">
                <h3 className="text-lg font-medium text-rose-900">
                  Disclaimers
                </h3>
                <p>
                  The Service is provided "as is" and "as available" without
                  warranties of any kind. We disclaim all warranties, express or
                  implied, including but not limited to merchantability, fitness
                  for a particular purpose, and non-infringement.
                </p>

                <h3 className="text-lg font-medium text-rose-900">
                  Limitation of Liability
                </h3>
                <p>
                  To the maximum extent permitted by law, SAROJ shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages, including but not limited to loss of
                  profits, data, or use, arising from your use of the Service.
                </p>
                <p>
                  Our total liability for any claim related to the Service shall
                  not exceed the amount you paid for the specific product or
                  service giving rise to the claim.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                11. Indemnification
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  You agree to indemnify, defend, and hold harmless SAROJ, its
                  officers, directors, employees, and agents from any claims,
                  damages, losses, or expenses arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>
                    Any content you submit or transmit through the Service
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                12. Termination
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  We may terminate or suspend your account and access to the
                  Service immediately, without prior notice, for any reason,
                  including if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will cease
                  immediately. Provisions that by their nature should survive
                  termination shall survive, including ownership provisions,
                  warranty disclaimers, and limitations of liability.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                13. Governing Law and Disputes
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of [Your State/Country], without regard to
                  conflict of law principles.
                </p>
                <p>
                  Any disputes arising from these Terms or your use of the
                  Service shall be resolved through binding arbitration in
                  accordance with the rules of the American Arbitration
                  Association, except that you may assert claims in small claims
                  court if they qualify.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                14. Changes to Terms
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  We reserve the right to modify these Terms at any time. We
                  will notify you of any material changes by posting the updated
                  Terms on our website and updating the "Last Updated" date.
                </p>
                <p>
                  Your continued use of the Service after any changes
                  constitutes acceptance of the new Terms. If you do not agree
                  to the modified Terms, you must stop using the Service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                15. Severability
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  If any provision of these Terms is found to be unenforceable
                  or invalid, that provision will be limited or eliminated to
                  the minimum extent necessary so that these Terms will
                  otherwise remain in full force and effect.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                16. Entire Agreement
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  These Terms, together with our Privacy Policy and any other
                  legal notices published by us on the Service, constitute the
                  entire agreement between you and SAROJ concerning the Service.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Information */}
          <Card className="border-rose-100 mt-12">
            <CardHeader>
              <CardTitle className="text-rose-900">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-rose-700 mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-rose-600" />
                  <div>
                    <p className="font-medium text-rose-900">Email</p>
                    <Link
                      href="mailto:legal@thesaroj.in"
                      className="text-rose-600 hover:text-rose-800 underline"
                    >
                      legal@thesaroj.in
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-rose-600" />
                  <div>
                    <p className="font-medium text-rose-900">Phone</p>
                    <Link
                      href="tel:+1-555-SAROJ-01"
                      className="text-rose-600 hover:text-rose-800"
                    >
                      +1 (555) SAROJ-01
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
