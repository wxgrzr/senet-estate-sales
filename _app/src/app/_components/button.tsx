import { ButtonProps } from '@/lib/types';
import { ButtonStyles } from '@/lib/buttonStyles';
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
