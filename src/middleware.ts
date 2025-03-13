import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const route = req.nextUrl.pathname;

  if (route === "/about") {
    console.log("Visiting about page");
  }

  if (route === "/home") {
    console.log("Visiting home page");
  }

  // Example: Redirect if the user is not authenticated
  const authToken = req.cookies.get("auth_token");
  if (!authToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Define which routes the middleware should run on
export const config = {
  matcher: ["/home/:path*", "/about/:path*"] // Run only on /dashboard and subpaths
};