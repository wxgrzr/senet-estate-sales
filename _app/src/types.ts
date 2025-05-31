import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

export type BtnStyleProps = {
  colors?: 'primary' | 'secondary' | 'indigodye';
  variant?: 'button' | 'text';
  subvariant?: 'solid' | 'outline';
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
