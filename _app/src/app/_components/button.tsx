import { buttonClasses } from '@/app/_utils/buttonVariants';
import { ButtonProps } from '@/types';
import clsx from 'clsx';

export const Button = ({
  type,
  children,
  variant = 'primary',
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        buttonClasses(variant),
        className ? className : '',
        disabled && 'cursor-not-allowed opacity-50',
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
