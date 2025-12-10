import { siteDefaults } from '@/app/_metadata/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...(siteDefaults as Partial<Metadata>),
  title: 'Privacy Policy',
  description:
    'Read the privacy policy for Senet Estate Sales. Learn how we protect your information and your rights as a visitor or client in Southeast Michigan.',
  alternates: { canonical: 'https://senetestatesales.com/privacy' },
  openGraph: {
    ...(siteDefaults.openGraph || {}),
    title: 'Privacy Policy',
    description:
      'Read the privacy policy for Senet Estate Sales. Learn how we protect your information and your rights as a visitor or client in Southeast Michigan.',
    url: 'https://senetestatesales.com/privacy',
  },
  twitter: {
    ...(siteDefaults.twitter || {}),
    title: 'Privacy Policy',
    description:
      'Read the privacy policy for Senet Estate Sales. Learn how we protect your information and your rights as a visitor or client in Southeast Michigan.',
  },
  other: {
    ...(siteDefaults.other || {}),
    'og:see_also':
      'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
  },
};
