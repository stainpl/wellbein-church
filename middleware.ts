// middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Skip public assets, Next.js internals, and the login page itself
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname === '/admin/login'
  ) {
    return NextResponse.next();
  }

  // 2. Protect /admin/*
  if (pathname.startsWith('/admin')) {
    // Try to get a valid token
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      // If no token, redirect to login
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = '/admin/login';
      return NextResponse.redirect(loginUrl);
    }
  }

  // 3. All other requests continue
  return NextResponse.next();
}

// Only run this middleware on /admin/*
export const config = {
  matcher: ['/admin/:path*'],
};
