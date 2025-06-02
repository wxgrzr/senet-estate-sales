import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
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

// Impose until project completion
// Currently 'off' while testing production deployment(s) in development
export const config = {
  // matcher: '/:path*',
};
