import { createMetadata } from '@/app/_metadata';
import { Routes } from '@/app/constants';

export const metadata = createMetadata({
  title: 'Michigan Estate Sales',
  description:
    'Explore upcoming Michigan estate sales hosted by Senet Estate Sales across Detroit, Ann Arbor, Flint, Bloomfield, Bay City, and nearby communities.',
  path: Routes.OurEstateSales,
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
      'Explore upcoming Michigan estate sales hosted by Senet Estate Sales across Detroit, Ann Arbor, Flint, Bloomfield, Bay City, and nearby communities.',
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
