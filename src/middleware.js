import { NextResponse } from "next/server";

// Using a more flexible approach to catch all dashboard-related routes
const DASHBOARD_PATH = "/dashboard";
const LOGIN_PATH = "/login";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const isLoggedIn = request.cookies.get("sispon_actkn");
  const pathname = request.nextUrl.pathname;

  // Redirect /dashboard (exact path) to /dashboard/home
  if (pathname === DASHBOARD_PATH) {
    return NextResponse.redirect(new URL("/dashboard/home", request.url));
  }

  // Authentication checks
  // if (pathname.includes(DASHBOARD_PATH) && !isLoggedIn) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // if (pathname === LOGIN_PATH && isLoggedIn) {
  //   return NextResponse.redirect(new URL(DASHBOARD_PATH, request.url));
  // }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
