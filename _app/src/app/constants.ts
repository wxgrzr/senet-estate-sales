export const Routes = {
  Home: '/',
  OurEstateSales: '/our-estate-sales',
  Faq: '/faq',
  ScheduleConsultation: '/schedule-consultation',
  Privacy: '/privacy',
} as const;
export type RoutesType = (typeof Routes)[keyof typeof Routes];
export type PathType = RoutesType | `${typeof Routes.OurEstateSales}/${string}`;

export const PAGES = [
  { label: 'Home', href: Routes.Home },
  { label: 'Estate Sales', href: Routes.OurEstateSales },
  { label: 'FAQs', href: Routes.Faq },
  {
    label: 'Schedule a Consultation',
    href: Routes.ScheduleConsultation,
  },
];
