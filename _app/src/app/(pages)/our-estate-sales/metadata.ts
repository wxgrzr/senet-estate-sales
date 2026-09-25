import { createMetadata } from '@/app/_metadata';
import { Routes } from '@/app/constants';

export const metadata = createMetadata({
  // Keep this title stable: it's the page most search impressions land on
  // and the sitelink label shown on brand searches.
  title: 'Michigan Estate Sales',
  description:
    'Photos, dates, and addresses from estate sales run by Senet Estate Sales around Holly, MI. New sales are announced first on our Facebook page.',
  path: Routes.OurEstateSales,
});
