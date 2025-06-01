import { ButtonStyles } from '@/app/_utils/buttonStyles';
import { LinkButtonProps } from '@/types';
import clsx from 'classnames';
import Link from 'next/link';

export const LinkButton = ({
  href,
  children,
  variant = 'button',
  colors = 'primary',
  subvariant = 'solid',
  className,
  arrow = false,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      role={variant === 'button' ? 'button' : ''}
      className={clsx(
        variant === 'button' && ButtonStyles.baseStyles,
        ButtonStyles.variantStyles[variant],
        variant === 'button' ? ButtonStyles.subvariantStyles[subvariant] : '',
        variant === 'button'
          ? ButtonStyles.colorStyles[colors][subvariant]
          : '',
        className ? className : '',
      )}
    >
      {children}
      {arrow ? <span className='ml-2 text-xl'>→</span> : null}
    </Link>
  );
};
