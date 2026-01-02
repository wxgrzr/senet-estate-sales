import { ButtonVariant } from '@/types';

const buttonBase =
  'inline-flex items-center justify-center rounded px-5 py-2 font-medium tracking-tight transition-colors duration-200 focus-visible:outline-hidden';

const solidVariants: Record<Exclude<ButtonVariant, 'text'>, string> = {
  primary:
    'border border-[color:var(--color-richblack)] bg-[color:var(--color-richblack)] text-white hover:bg-[color:var(--color-ship-cove-700)]',
  secondary:
    'border border-ship-cove-600 bg-ship-cove-600 text-white hover:bg-ship-cove-700',
  indigodye:
    'border border-indigodye bg-indigodye text-platinum hover:bg-ship-cove-600 hover:text-white',
};

const textVariant =
  'inline-flex items-center gap-1 text-subtext font-medium transition-colors duration-200 hover:text-gray-500 focus-visible:text-gray-500 focus-visible:outline-hidden';

export const buttonClasses = (variant: ButtonVariant = 'primary') =>
  variant === 'text' ? textVariant : `${buttonBase} ${solidVariants[variant]}`;
