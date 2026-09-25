import { createMetadata } from '@/app/_metadata';
import { Routes } from '@/app/constants';

export const metadata = createMetadata({
  title: 'Schedule a Consultation',
  description:
    "Request a free, no-obligation estate sale consultation with Senet Estate Sales in Holly, MI. We'll walk through the home and plan your sale or clean-out.",
  path: Routes.ScheduleConsultation,
});
