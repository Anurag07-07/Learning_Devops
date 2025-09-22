import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

// let requestCount = 0;

 // export function middleware(req:NextRequest){
//   requestCount++
//   const res = NextResponse.next()
//   console.log(requestCount);
//   return res
// }

//When we have restrict the the frontend 

export const config = {
  matcher:'/api/:path*' //It handle all route that starts with api
}

//For handling particular routes
export function middleware(request:NextRequest){
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/signin',request.url))
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }
}
