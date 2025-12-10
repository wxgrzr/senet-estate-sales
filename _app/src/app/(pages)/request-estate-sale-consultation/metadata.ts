import { Metadata } from 'next';
import { siteDefaults } from '@/app/_metadata/site';

export const metadata: Metadata = {
  ...(siteDefaults as Partial<Metadata>),
  title: 'Schedule a Consultation',
  description:
    'Schedule a free estate sale consultation with Senet Estate Sales. Compassionate, professional estate sale services in Southeast Michigan.',
  alternates: {
    canonical: 'https://senetestatesales.com/request-estate-sale-consultation',
  },
  openGraph: {
    ...(siteDefaults.openGraph || {}),
    title: 'Schedule a Consultation',
    description:
      'Schedule a free estate sale consultation with Senet Estate Sales. Compassionate, professional estate sale services in Southeast Michigan.',
    url: 'https://senetestatesales.com/request-estate-sale-consultation',
  },
  twitter: {
    ...(siteDefaults.twitter || {}),
    title: 'Schedule a Consultation',
    description:
      'Schedule a free estate sale consultation with Senet Estate Sales. Compassionate, professional estate sale services in Southeast Michigan.',
  },
  other: {
    ...(siteDefaults.other || {}),
    'og:see_also':
      'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
  },
};
