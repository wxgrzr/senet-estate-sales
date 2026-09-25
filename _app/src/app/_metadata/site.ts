import type { Metadata } from 'next';

export const siteDefaults = {
  siteName: 'Senet Estate Sales',
  openGraph: {
    siteName: 'Senet Estate Sales',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Senet Estate Sales',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
  other: {
    'fb:page_id': '424849244049685',
    'fb:profile_id': '61567003222290',
    'og:see_also':
      'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
  },
} satisfies {
  siteName: string;
  openGraph: Metadata['openGraph'];
  twitter: Metadata['twitter'];
  other: Record<string, string>;
};
