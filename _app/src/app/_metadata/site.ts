export const siteDefaults = {
  siteName: 'Senet Estate Sales',
  defaultImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  // Common default description for pages to fall back to
  description:
    'Browse Michigan estate sales hosted by Senet Estate Sales, featuring upcoming events across Detroit, Ann Arbor, Flint, Bloomfield, Bay City, and Southeast Michigan.',
  // Canonical base (route-specific pages should append their path)
  alternates: { canonical: 'https://senetestatesales.com' },
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
  },
  keywords: [
    'estate sales',
    'Michigan estate sales',
    'Michigan cleanout services',
    'Senet Estate Sales',
  ],
};
