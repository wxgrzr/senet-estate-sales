import { createMetadata } from '@/app/_metadata';
import { Routes } from '@/app/constants';

export const metadata = createMetadata({
  title: 'Schedule a Consultation',
  description:
    "Request a free, no-obligation estate sale consultation with us. We'll answer questions you may have and help walk you through the process from start to finish.",
  path: Routes.ScheduleConsultation,
});
