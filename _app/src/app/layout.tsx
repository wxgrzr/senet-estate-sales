import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';
import type { Viewport } from 'next';
import { BASE_URL, buildCanonicalUrl } from '@/app/_metadata';

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: 'variable',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Senet Estate Sales | Estate Sale Experts in Southeast Michigan',
    template: '%s | Senet Estate Sales',
  },
  // No site-wide description, og:url, or og/twitter title: child pages inherit
  // any field they don't set, so these belong on individual pages only.
  openGraph: {
    siteName: 'Senet Estate Sales',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Senet Estate Sales Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
    creator: '@senet_estates',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(inter.variable, 'antialiased')}>
        <div className='min-h-screen' tabIndex={-1}>
          <Header />
          {children}
          <Footer />
        </div>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Senet Estate Sales',
              image: buildCanonicalUrl('/og-image.jpg'),
              url: BASE_URL,
              // TODO(human): confirm the phone number with the owner. The site uses
              // 810-588-8175, but Google Business Profile and Yelp list 810-553-7698.
              // Name/address/phone should match everywhere for local ranking.
              telephone: '8105888175',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '14525 N Holly Rd',
                addressLocality: 'Holly',
                addressRegion: 'MI',
                postalCode: '48442',
                addressCountry: 'US',
              },
              description:
                'Professional estate sale services in Southeastern MI. Compassionate, efficient, and tailored to your needs.',
              sameAs: [
                'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
