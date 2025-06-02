'use client';

import { clsx } from 'yet-another-react-lightbox';

type MediaContainerProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const MediaContainer: React.FC<MediaContainerProps> = ({
  children,
  className,
  ...rest
}) => (
  <div
    className={clsx(
      'relative size-full min-h-80 overflow-hidden rounded-lg sm:min-h-96 md:min-h-[24rem] lg:min-h-[28rem]',
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);
