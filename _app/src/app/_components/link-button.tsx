import { ButtonStyles } from '@/lib/buttonStyles';
import { LinkButtonProps } from '@/lib/types';
import cn from 'classnames';
import Link from 'next/link';

export const LinkButton = ({
  href,
  children,
  variant = 'button',
  colors = 'primary',
  subvariant = 'solid',
  className,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      role={variant === 'button' ? 'button' : ''}
      className={cn(
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
    </Link>
  );
};
