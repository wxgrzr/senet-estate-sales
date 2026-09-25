import { createMetadata } from '@/app/_metadata';
import { Routes } from '@/app/constants';

export const metadata = createMetadata({
  title: 'Senet Estate Sales | Our Estate Sales',
  description:
    'Explore upcoming Southeastern Michigan estate sales hosted by Senet Estate Sales across Detroit, Ann Arbor, Flint, Bloomfield, Bay City, and nearby communities.',
  path: Routes.OurEstateSales,
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
});
