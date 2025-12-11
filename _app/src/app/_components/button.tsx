import { ButtonProps } from '@/types';
import { ButtonStyles } from '@/app/_utils/buttonStyles';
import clsx from 'clsx';

export const Button = ({
  type,
  children,
  colors = 'primary',
  subvariant = 'solid',
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        className ? className : '',
        ButtonStyles.baseStyles,
        ButtonStyles.subvariantStyles[subvariant],
        ButtonStyles.colorStyles[colors][subvariant],
        disabled && 'opacity-50 cursor-not-allowed',
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
