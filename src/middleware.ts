import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getAccessToken } from "./lib/session";
import { getLoggedUser } from "./lib/server_api/auth";
// import axios from "axios";

export async function middleware(request: NextRequest){
    let authenticated = await getLoggedUser()

    // if(!authenticated.status && !(request.nextUrl.pathname == "/")){
    //     return NextResponse.redirect( new URL("/", request.url))
    // }else if(authenticated.status && request.nextUrl.pathname == "/"){
    //     return NextResponse.redirect( new URL("/dashboard", request.url))
    // }
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|image|assets).*)',
    ],
  }