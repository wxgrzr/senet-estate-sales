import { siteDefaults } from '@/app/_metadata/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...(siteDefaults as Partial<Metadata>),
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about estate sales, our process, and how Senet Estate Sales can help you in Southeast Michigan.',
  alternates: {
    canonical: 'https://senetestatesales.com/estate-sale-questions',
  },
  openGraph: {
    ...(siteDefaults.openGraph || {}),
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about estate sales, our process, and how Senet Estate Sales can help you in Southeast Michigan.',
    url: 'https://senetestatesales.com/estate-sale-questions',
  },
  twitter: {
    ...(siteDefaults.twitter || {}),
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about estate sales, our process, and how Senet Estate Sales can help you in Southeast Michigan.',
  },
  other: {
    ...(siteDefaults.other || {}),
    'og:see_also':
      'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
  },
};
