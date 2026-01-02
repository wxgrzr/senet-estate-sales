import { buttonClasses } from '@/app/_utils/buttonVariants';
import { LinkButtonProps } from '@/types';
import clsx from 'clsx';
import Link from 'next/link';

export const LinkButton = ({
  href,
  children,
  variant = 'primary',
  className,
  arrow = false,
}: LinkButtonProps) => {
  const isTextVariant = variant === 'text';
  return (
    <Link
      href={href}
      role={isTextVariant ? undefined : 'button'}
      className={clsx(buttonClasses(variant), className ? className : '')}
    >
      {children}
      {arrow ? <span className='ml-2 text-xl'>→</span> : null}
    </Link>
  );
};
