"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: true,
  })

  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
  })

  const checkPasswordStrength = (password: string) => {
    setPasswordStrength({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
    })
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    setFormData({ ...formData, password })
    checkPasswordStrength(password)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Registration attempt:", formData)
  }

  const isPasswordValid = Object.values(passwordStrength).every(Boolean)
  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== ""

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <Image
              src="/images/saroj-logo.png"
              alt="SAROJ - From Her Heart to Yours"
              width={150}
              height={75}
              className="h-16 w-auto mx-auto"
            />
          </Link>
        </div>

        <Card className="border-rose-100 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif text-rose-900">Create Account</CardTitle>
            <p className="text-rose-700">Join our community of beautiful women</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="firstName" className="text-rose-900">
                    First Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-rose-400" />
                    <Input
                      id="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="pl-10 border-rose-200 focus:border-rose-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-rose-900">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="border-rose-200 focus:border-rose-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-rose-900">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-rose-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 border-rose-200 focus:border-rose-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-rose-900">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-rose-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handlePasswordChange}
                    className="pl-10 pr-10 border-rose-200 focus:border-rose-500"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 text-rose-400 hover:text-rose-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {formData.password && (
                  <div className="mt-2 space-y-1">
                    <div className="text-xs text-rose-700">Password must contain:</div>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div
                        className={`flex items-center space-x-1 ${passwordStrength.length ? "text-green-600" : "text-gray-400"}`}
                      >
                        <Check className="h-3 w-3" />
                        <span>8+ characters</span>
                      </div>
                      <div
                        className={`flex items-center space-x-1 ${passwordStrength.uppercase ? "text-green-600" : "text-gray-400"}`}
                      >
                        <Check className="h-3 w-3" />
                        <span>Uppercase</span>
                      </div>
                      <div
                        className={`flex items-center space-x-1 ${passwordStrength.lowercase ? "text-green-600" : "text-gray-400"}`}
                      >
                        <Check className="h-3 w-3" />
                        <span>Lowercase</span>
                      </div>
                      <div
                        className={`flex items-center space-x-1 ${passwordStrength.number ? "text-green-600" : "text-gray-400"}`}
                      >
                        <Check className="h-3 w-3" />
                        <span>Number</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-rose-900">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-rose-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="pl-10 pr-10 border-rose-200 focus:border-rose-500"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 text-rose-400 hover:text-rose-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {formData.confirmPassword && (
                  <div className="mt-1">
                    {passwordsMatch ? (
                      <div className="flex items-center space-x-1 text-xs text-green-600">
                        <Check className="h-3 w-3" />
                        <span>Passwords match</span>
                      </div>
                    ) : (
                      <div className="text-xs text-red-600">Passwords don't match</div>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className="rounded border-rose-300 text-rose-600 focus:ring-rose-500 mt-0.5"
                    required
                  />
                  <span className="text-sm text-rose-700">
                    I agree to the{" "}
                    <Link href="/terms" className="text-rose-600 hover:text-rose-800 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-rose-600 hover:text-rose-800 underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.subscribeNewsletter}
                    onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
                    className="rounded border-rose-300 text-rose-600 focus:ring-rose-500"
                  />
                  <span className="text-sm text-rose-700">
                    Subscribe to our newsletter for styling tips and exclusive offers
                  </span>
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                disabled={!isPasswordValid || !passwordsMatch || !formData.agreeToTerms}
              >
                Create Account
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-rose-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-rose-600">Or sign up with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent">
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-rose-700">
                Already have an account?{" "}
                <Link href="/login" className="text-rose-600 hover:text-rose-800 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-rose-600 hover:text-rose-800">
            ← Back to shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
