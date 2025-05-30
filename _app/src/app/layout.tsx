import cn from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';
import { SanityLive } from '@/sanity/lib/live';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: 'variable',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://senetestatesales.com'),
  title: {
    default: 'Senet Estate Sales | Estate Sale Experts in Southeast Michigan',
    template: '%s | Senet Estate Sales',
  },
  description:
    'Estate and downsizing sales with care and clarity. Serving Southeast Michigan including Bloomfield, Flint, and Grand Blanc. Schedule a consultation today.',
  keywords: [
    'Estate Sales Michigan',
    'Downsizing Services Michigan',
    'Estate Liquidation',
    'Estate Sale Company MI',
    'Southeast Michigan Estate Sales',
    'Senet Estate Sales',
    'Onsite Estate Sales',
  ],
  openGraph: {
    title: 'Senet Estate Sales | Southeast Michigan Estate Sales',
    description:
      'Compassionate, professional estate sales in Michigan. Schedule a consultation or browse upcoming sales.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.variable, 'antialiased')}>
        <div className='min-h-screen'>
          <Header />
          {children}

          <Footer />
        </div>
        <SanityLive />
      </body>
    </html>
  );
}
