import { createMetadata } from '@/app/_metadata';

export const metadata = createMetadata({
  title: 'Michigan Estate Sales',
  description:
    'Browse Michigan estate sales hosted by Senet Estate Sales, featuring upcoming events across Detroit, Ann Arbor, Flint, Bloomfield, Bay City, and Southeast Michigan.',
  path: '/upcoming-estate-sales',
  keywords: [
    'Detroit estate auctions',
    'Flint estate liquidators',
    'Northville MI',
    'Bloomfield MI',
    'Bay City MI',
    'Southeast Michigan',
    'Senet Estate Sales',
  ],
  openGraph: {
    title: 'Michigan Estate Sales',
    description:
      'Browse Michigan estate sales hosted by Senet Estate Sales, featuring upcoming events across Detroit, Ann Arbor, Flint, Bloomfield, Bay City, and Southeast Michigan.',
  },
  twitter: {
    title: 'Michigan Estate Sales',
    description:
      'Upcoming Michigan estate sales and liquidation events handled by Senet Estate Sales across Detroit, Ann Arbor, Flint, and Southeast Michigan.',
  },
  other: {
    'og:see_also':
      'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
  },
});
