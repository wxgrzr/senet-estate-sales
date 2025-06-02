import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware running in:', process.env.NODE_ENV);
  const { isBot } = userAgent(request);
  console.log('isBot:', isBot);
  if (process.env.NODE_ENV === 'production' && !isBot) {
    console.log('Creating 503 status');
    return new NextResponse(
      "Service Unavailable: We're working on updates. Please check back soon.",
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
  // matcher: '/:path*',
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|humans.txt|site.webmanifest|google82aa0d6e5055e850.html).*)',
  ],
};
