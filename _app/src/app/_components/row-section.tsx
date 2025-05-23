import React from 'react';

type RowSectionProps = {
  children: React.ReactNode;
  id?: string;
};

export function RowSection({ children, id }: RowSectionProps) {
  return (
    <section id={id} className='py-16 md:py-20 lg:py-24'>
      {children}
    </section>
  );
}
