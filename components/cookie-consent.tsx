"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Settings, Cookie } from "lucide-react"
import dynamic from "next/dynamic"

const Dialog = dynamic(() => import("@/components/ui/dialog").then(mod => mod.Dialog))
const DialogContent = dynamic(() => import("@/components/ui/dialog").then(mod => mod.DialogContent))
const DialogHeader = dynamic(() => import("@/components/ui/dialog").then(mod => mod.DialogHeader))
const DialogTitle = dynamic(() => import("@/components/ui/dialog").then(mod => mod.DialogTitle))

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("saroj-cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("saroj-cookie-consent", JSON.stringify(allAccepted))
    setShowBanner(false)
  }

  const acceptSelected = () => {
    localStorage.setItem("saroj-cookie-consent", JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(onlyNecessary)
    localStorage.setItem("saroj-cookie-consent", JSON.stringify(onlyNecessary))
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <Card className="max-w-4xl mx-auto border-rose-200 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Cookie className="h-6 w-6 text-rose-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-rose-900 mb-2">We value your privacy</h3>
                <p className="text-rose-700 text-sm mb-4">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our
                  traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences
                  or learn more in our{" "}
                  <a href="/privacy" className="text-rose-600 hover:text-rose-800 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={acceptAll} className="bg-rose-600 hover:bg-rose-700 text-white">
                    Accept All
                  </Button>
                  <Button
                    onClick={rejectAll}
                    variant="outline"
                    className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
                  >
                    Reject All
                  </Button>
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="outline"
                    className="border-rose-300 text-rose-700 hover:bg-rose-50"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowBanner(false)}
                className="text-rose-400 hover:text-rose-600"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {showSettings && (
        <Dialog open={showSettings} onOpenChange={setShowSettings}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-rose-900">Cookie Preferences</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <p className="text-rose-700 text-sm">
                Choose which cookies you want to accept. You can change these settings at any time.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-rose-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-rose-900">Necessary Cookies</h4>
                    <p className="text-sm text-rose-600">
                      Essential for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="rounded border-rose-300 text-rose-600"
                  />
                </div>

                <div className="flex items-center justify-between p-4 border border-rose-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-rose-900">Analytics Cookies</h4>
                    <p className="text-sm text-rose-600">Help us understand how visitors interact with our website.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="rounded border-rose-300 text-rose-600"
                  />
                </div>

                <div className="flex items-center justify-between p-4 border border-rose-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-rose-900">Marketing Cookies</h4>
                    <p className="text-sm text-rose-600">
                      Used to deliver personalized advertisements and track campaign performance.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="rounded border-rose-300 text-rose-600"
                  />
                </div>

                <div className="flex items-center justify-between p-4 border border-rose-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-rose-900">Functional Cookies</h4>
                    <p className="text-sm text-rose-600">
                      Enable enhanced functionality like chat support and personalized content.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                    className="rounded border-rose-300 text-rose-600"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <Button
                  onClick={() => setShowSettings(false)}
                  variant="outline"
                  className="border-rose-300 text-rose-700 hover:bg-rose-50"
                >
                  Cancel
                </Button>
                <Button onClick={acceptSelected} className="bg-rose-600 hover:bg-rose-700 text-white">
                  Save Preferences
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
