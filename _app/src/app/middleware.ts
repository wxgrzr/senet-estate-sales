import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse(
      'Service Unavailable: We’re working on updates. Please check back soon.',
      {
        status: 503,
        headers: {
          'Retry-After': '3600',
          'Content-Type': 'text/plain',
        },
      },
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
