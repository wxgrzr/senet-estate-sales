import { ButtonProps } from '@/types';
import { ButtonStyles } from '@/lib/buttonStyles';
import clsx from 'classnames';

export const Button = ({
  type,
  children,
  colors = 'primary',
  subvariant = 'solid',
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        className ? className : '',
        ButtonStyles.baseStyles,
        ButtonStyles.subvariantStyles[subvariant],
        ButtonStyles.colorStyles[colors][subvariant],
      )}
    >
      {children}
    </button>
  );
};
