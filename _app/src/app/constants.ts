export const Routes = {
  Home: '/',
  OurEstateSales: '/our-estate-sales',
  Faq: '/faq',
  ScheduleConsultation: '/schedule-consultation',
  Privacy: '/privacy',
} as const;
export type RoutesType = (typeof Routes)[keyof typeof Routes];
export type PathType = RoutesType | `${typeof Routes.OurEstateSales}/${string}`;

export const NAV_LINKS = {
  home: { label: 'Home', href: Routes.Home },
  ourEstateSales: { label: 'Our Estate Sales', href: Routes.OurEstateSales },
  faq: { label: 'FAQ', href: Routes.Faq },
};
