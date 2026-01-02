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
        disabled && 'opacity-50 cursor-not-allowed',
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
