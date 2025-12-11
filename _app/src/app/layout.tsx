import clsx from 'classnames';
import type { Metadata } from 'next';
import { siteDefaults } from '@/app/_metadata/siteDefaults';
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
  metadataBase: new URL(siteDefaults.alternates?.canonical || 'https://senetestatesales.com'),
  title: {
    default: siteDefaults.siteName || 'Senet Estate Sales',
    template: `%s | ${siteDefaults.siteName || 'Senet Estate Sales'}`,
  },
  description: siteDefaults.description,
  keywords: (siteDefaults.keywords as string[]) || [],
  openGraph: {
    ...(siteDefaults.openGraph || {}),
    title: siteDefaults.siteName,
  },
  twitter: {
    ...(siteDefaults.twitter || {}),
    creator: siteDefaults.twitter?.creator || '@senet_estates',
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
