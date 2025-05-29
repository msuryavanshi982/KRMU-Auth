"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface ProfileProps {
  onLogout: () => void
}

interface User {
  username: string
  email: string
}

export default function Profile({ onLogout }: ProfileProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          throw new Error("No token found")
        }

        const response = await fetch("/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error("Failed to fetch profile")
        }

        const data = await response.json()
        setUser(data.user)
      } catch (err: any) {
        setError(err.message || "Failed to load profile")
        // If token is invalid, logout
        if (err.message === "Invalid token") {
          onLogout()
        }
      } finally {
        setLoading(false)
      }
    }

    // Try to get user from localStorage first for immediate display
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    fetchProfile()
  }, [onLogout])

  if (loading && !user) {
    return <div className="text-center">Loading...</div>
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Your account information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {user && (
          <div className="space-y-4">
            <div className="p-6 bg-purple-50 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-purple-700">Welcome, {user.username}!</h2>
              <p className="text-purple-600 mt-2">{user.email}</p>
            </div>

            <Button variant="outline" className="w-full" onClick={onLogout}>
              Logout
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
