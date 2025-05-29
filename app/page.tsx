"use client"

import { useState, useEffect } from "react"
import LoginForm from "@/components/login-form"
import RegisterForm from "@/components/register-form"
import Profile from "@/components/profile"
import Loading from "@/components/loading"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState("login")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token")
    if (token) {
      // Verify token is still valid
      fetch("/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            setIsLoggedIn(true)
          } else {
            // Token is invalid, remove it
            localStorage.removeItem("token")
            localStorage.removeItem("user")
          }
        })
        .catch(() => {
          // Network error or token invalid
          localStorage.removeItem("token")
          localStorage.removeItem("user")
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsLoading(false)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setIsLoggedIn(false)
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
        <Loading />
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        {isLoggedIn ? (
          <Profile onLogout={handleLogout} />
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex mb-6 border-b">
              <button
                className={`py-2 px-4 ${
                  activeTab === "login" ? "border-b-2 border-purple-500 text-purple-500 font-medium" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`py-2 px-4 ${
                  activeTab === "register"
                    ? "border-b-2 border-purple-500 text-purple-500 font-medium"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("register")}
              >
                Register
              </button>
            </div>

            {activeTab === "login" ? (
              <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
            ) : (
              <RegisterForm onRegisterSuccess={() => setActiveTab("login")} />
            )}
          </div>
        )}
      </div>
    </main>
  )
}
