import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'indigodye' | 'text';

export type BtnStyleProps = {
  variant?: ButtonVariant;
  className?: string;
  children?: React.ReactNode;
  arrow?: boolean;
};

export type ButtonProps = BtnStyleProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type LinkButtonProps = BtnStyleProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };
