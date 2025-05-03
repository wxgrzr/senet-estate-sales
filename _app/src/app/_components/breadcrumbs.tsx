'use client';
import { LinkButton } from '@/app/_components/link-button';

type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className='mb-4 text-sm' aria-label='Breadcrumb'>
      <ol className='list-reset md:flex'>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li
              key={idx}
              className={isLast ? 'font-semibold' : undefined}
              aria-current={isLast ? 'page' : undefined}
            >
              {item.href && !isLast ? (
                <LinkButton
                  variant='text'
                  href={item.href}
                  className='font-normal opacity-80'
                >
                  {item.label}
                </LinkButton>
              ) : (
                item.label
              )}
              {idx < items.length - 1 && <span className='mx-2'>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
