import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // For now, let the API routes handle their own authentication
  // This middleware can be expanded later for additional protection
  return NextResponse.next()
}

export const config = {
  matcher: ["/api/auth/:path*"],
}
