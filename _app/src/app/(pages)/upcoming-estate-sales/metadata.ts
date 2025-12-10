import { Metadata } from 'next';
import { siteDefaults } from '@/app/_metadata/site';

export const metadata: Metadata = {
  // base defaults from siteDefaults (pages override below)
  ...(siteDefaults as Partial<Metadata>),
  title: 'Michigan Estate Sales',
  description:
    'Browse Michigan estate sales hosted by Senet Estate Sales, featuring upcoming events across Detroit, Ann Arbor, Flint, Bloomfield, Bay City, and Southeast Michigan.',
  alternates: { canonical: 'https://senetestatesales.com/upcoming-estate-sales' },
  openGraph: {
    ...(siteDefaults.openGraph || {}),
    title: 'Michigan Estate Sales',
    description:
      'Browse Michigan estate sales hosted by Senet Estate Sales, featuring upcoming events across Detroit, Ann Arbor, Flint, Bloomfield, Bay City, and Southeast Michigan.',
    url: 'https://senetestatesales.com/upcoming-estate-sales',
  },
  twitter: {
    ...(siteDefaults.twitter || {}),
    title: 'Michigan Estate Sales',
    description:
      'Upcoming Michigan estate sales and liquidation events handled by Senet Estate Sales across Detroit, Ann Arbor, Flint, and Southeast Michigan.',
  },
  other: {
    ...(siteDefaults.other || {}),
    'og:see_also':
      'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
  },
  keywords: [
    ...((siteDefaults.keywords as string[]) || []),
    'Detroit estate auctions',
    'Flint estate liquidators',
    'Northville MI',
    'Bloomfield MI',
    'Bay City MI',
    'Southeast Michigan',
    'Senet Estate Sales',
  ],
};
