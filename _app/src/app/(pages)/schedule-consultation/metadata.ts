import { createMetadata } from '@/app/_metadata';
import { Routes } from '@/app/constants';

export const metadata = createMetadata({
  title: 'Schedule a Consultation',
  description:
    'Schedule a free estate sale consultation with Senet Estate Sales. Compassionate, professional estate sale services in Southeast Michigan.',
  path: Routes.ScheduleConsultation,
  openGraph: {
    title: 'Schedule a Consultation',
    description:
      'Schedule a free estate sale consultation with Senet Estate Sales. Compassionate, professional estate sale services in Southeast Michigan.',
  },
  twitter: {
    title: 'Schedule a Consultation',
    description:
      'Schedule a free estate sale consultation with Senet Estate Sales. Compassionate, professional estate sale services in Southeast Michigan.',
  },
  other: {
    'og:see_also':
      'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
  },
});
