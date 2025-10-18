import clsx from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';
import type { Viewport } from 'next';

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
  metadataBase: new URL('https://senetestatesales.com'),
  title: {
    default: 'Senet Estate Sales | Estate Sale Experts in Southeast Michigan',
    template: '%s | Senet Estate Sales',
  },
  description:
    'Michigan estate sale specialists delivering full-service liquidation, clean-out, and downsizing solutions across Southeast Michigan, Detroit, Ann Arbor, Flint, and surrounding communities.',
  keywords: [
    'estate sales',
    'liquidation',
    'senet',
    'downsizing',
    'Southeastern Michigan',
    'Estate Sales Michigan',
    'Downsizing Services Michigan',
    'Estate Liquidation',
    'Estate Sale Company MI',
    'Southeast Michigan Estate Sales',
    'Senet Estate Sales',
    'Onsite Estate Sales',
    'Michigan cleanout services',
    'Flint clean-out company',
    'Detroit estate services',
  ],
  openGraph: {
    title: 'Senet Estate Sales',
    description:
      'Full-service Michigan estate sales, home clean-out services, and liquidation support for families in Detroit, Ann Arbor, Flint, and Southeast Michigan.',
    url: 'https://senetestatesales.com',
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
    title: 'Senet Estate Sales',
    description:
      'Estate and downsizing sales in Southeast Michigan. Trusted local provider.',
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
        <div className='min-h-screen'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
