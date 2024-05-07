// external imports
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// middleware to make /user-management the default route
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/user-management", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
