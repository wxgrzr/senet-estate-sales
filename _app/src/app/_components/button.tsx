import { ButtonProps } from '@/types/types';
import { ButtonStyles } from '@/lib/constants';
import cn from 'classnames';

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
      className={cn(
        ButtonStyles.baseStyles,
        ButtonStyles.subvariantStyles[subvariant],
        ButtonStyles.colorStyles[colors][subvariant],
        className,
      )}
    >
      {children}
    </button>
  );
};
