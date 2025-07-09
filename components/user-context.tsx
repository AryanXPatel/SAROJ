"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
}

interface UserContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: Omit<User, "id"> & { password: string }) => Promise<boolean>
  logout: () => void
  updateProfile: (userData: Partial<User>) => void
  isLoading: boolean
}

const UserContext = createContext<UserContextType | null>(null)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for saved user session
    const savedUser = localStorage.getItem("saroj-user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Error loading user from localStorage:", error)
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful login
      const mockUser: User = {
        id: "1",
        firstName: "Priya",
        lastName: "Sharma",
        email: email,
        phone: "+91 98765 43210",
      }

      setUser(mockUser)
      localStorage.setItem("saroj-user", JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    } catch (error) {
      setIsLoading(false)
      return false
    }
  }

  const register = async (userData: Omit<User, "id"> & { password: string }): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newUser: User = {
        id: Date.now().toString(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
      }

      setUser(newUser)
      localStorage.setItem("saroj-user", JSON.stringify(newUser))
      setIsLoading(false)
      return true
    } catch (error) {
      setIsLoading(false)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("saroj-user")
  }

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      localStorage.setItem("saroj-user", JSON.stringify(updatedUser))
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateProfile,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
