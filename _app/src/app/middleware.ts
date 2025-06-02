import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { isBot } = userAgent(request);
  if (process.env.NODE_ENV === 'production' && !isBot) {
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
