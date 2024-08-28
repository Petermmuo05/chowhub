import { auth } from "./_lib/auth.ts";
import { getToken } from "next-auth/jwt";


export default auth(async function middleware(req) {
  // Your custom middleware logic goes here
  // console.log(req, "This is the req auth");
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  if (
    req.auth?.user?.role === "admin" &&
    !req.nextUrl.pathname.startsWith("/admin")
  ) {
    const newUrl = new URL("/admin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  if (
    req.auth?.user?.role === "user" &&
    req.nextUrl.pathname.startsWith("/admin")
  ) {
    const newUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});
export const config = {
  matcher: [
    "/checkout",
    "/restaurants",
    "/restaurants/:path*",
    "/profile",
    "/admin/:path*",
    "/"
  ],
};
