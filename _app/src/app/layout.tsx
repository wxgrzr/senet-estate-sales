import clsx from 'clsx';
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
  metadataBase: new URL('https://www.senetestatesales.com'),
  title: {
    default: 'Senet Estate Sales',
    template: '%s | Senet Estate Sales',
  },
  // Preview image when a link is shared on Facebook or in a text message.
  openGraph: { images: '/og-image.jpg' },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
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
      </body>
    </html>
  );
}
