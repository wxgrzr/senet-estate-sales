// import { Breadcrumbs } from '@/app/_components/breadcrumbs';
import React from 'react';

export default function UpcomingEstateSalesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='container mx-auto flex min-h-screen max-w-6xl flex-col gap-8 p-4'>
      {children}
    </main>
  );
}
