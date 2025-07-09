import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag,
  Search,
  User,
  Shield,
  Eye,
  Lock,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Header } from "@/components/header";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      <div className="bg-rose-100 text-center py-2 px-4">
        <p className="text-sm text-rose-800">
          Your privacy matters to us • Last updated: March 2025
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
              <Shield className="h-8 w-8 text-rose-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-rose-700 max-w-2xl mx-auto">
              At SAROJ, we are committed to protecting your privacy and ensuring
              the security of your personal information.
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
                <Eye className="h-5 w-5 mr-2" />
                Privacy at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <Lock className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                  <h3 className="font-medium text-rose-900 mb-1">
                    Secure Data
                  </h3>
                  <p className="text-sm text-rose-700">
                    Your information is encrypted and protected
                  </p>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <Eye className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                  <h3 className="font-medium text-rose-900 mb-1">
                    Transparent
                  </h3>
                  <p className="text-sm text-rose-700">
                    Clear about what data we collect and why
                  </p>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <Shield className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                  <h3 className="font-medium text-rose-900 mb-1">
                    Your Control
                  </h3>
                  <p className="text-sm text-rose-700">
                    You can access, update, or delete your data
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="prose prose-rose max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-rose-700">
                <h3 className="text-lg font-medium text-rose-900">
                  Personal Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Name, email address, and phone number when you create an
                    account
                  </li>
                  <li>Billing and shipping addresses for order processing</li>
                  <li>
                    Payment information (processed securely through our payment
                    partners)
                  </li>
                  <li>Communication preferences and marketing consent</li>
                </ul>

                <h3 className="text-lg font-medium text-rose-900">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Device information (browser type, operating system, IP
                    address)
                  </li>
                  <li>
                    Usage data (pages visited, time spent, click patterns)
                  </li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Location data (with your permission)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                2. How We Use Your Information
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>
                    Send order confirmations, shipping updates, and important
                    account information
                  </li>
                  <li>
                    Personalize your shopping experience and product
                    recommendations
                  </li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Improve our website, products, and services</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                3. Information Sharing
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Payment processors,
                    shipping companies, email service providers, and analytics
                    services
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law,
                    court order, or to protect our rights
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets
                  </li>
                </ul>
                <p className="font-medium">
                  We never sell your personal information to third parties for
                  marketing purposes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                4. Cookies and Tracking
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and shopping cart contents</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Ensure website security and prevent fraud</li>
                </ul>
                <p>
                  You can control cookie preferences through your browser
                  settings or our cookie consent banner. Some features may not
                  work properly if you disable certain cookies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                5. Data Security
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  We implement industry-standard security measures to protect
                  your information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure servers and databases with access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection practices</li>
                  <li>PCI DSS compliance for payment processing</li>
                </ul>
                <p>
                  While we strive to protect your information, no method of
                  transmission over the internet is 100% secure. We cannot
                  guarantee absolute security.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                6. Your Rights and Choices
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Update or correct inaccurate information</li>
                  <li>Delete your account and personal data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Object to certain data processing activities</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at{" "}
                  <Link
                    href="mailto:privacy@thesaroj.in"
                    className="text-rose-600 hover:text-rose-800 underline"
                  >
                    privacy@thesaroj.in
                  </Link>{" "}
                  or through your account settings.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                7. Data Retention
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>We retain your information for as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide our services and support your account</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our products and services</li>
                </ul>
                <p>
                  When you delete your account, we will delete or anonymize your
                  personal information within 30 days, except where retention is
                  required by law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                8. International Transfers
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure appropriate
                  safeguards are in place to protect your data during
                  international transfers, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Standard contractual clauses</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                9. Children's Privacy
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  Our services are not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If we become aware that we have collected
                  personal information from a child under 13, we will take steps
                  to delete such information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-rose-900 mb-4">
                10. Changes to This Policy
              </h2>
              <div className="space-y-4 text-rose-700">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending an email notification to registered users</li>
                  <li>Displaying a prominent notice on our website</li>
                </ul>
                <p>
                  Your continued use of our services after any changes
                  constitutes acceptance of the updated policy.
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
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-rose-600" />
                  <div>
                    <p className="font-medium text-rose-900">Email</p>
                    <Link
                      href="mailto:privacy@thesaroj.in"
                      className="text-rose-600 hover:text-rose-800 underline"
                    >
                      privacy@thesaroj.in
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
