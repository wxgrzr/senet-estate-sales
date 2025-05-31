'use client';

import clsx from 'classnames';
import { openMapButton } from '../_utils/openMapButton';

export const OpenInMapsButton = ({
  address,
  className,
  ...rest
}: {
  address: string;
  className?: string;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openMapButton(address);
  };
  return (
    <button
      type='button'
      className={clsx(
        'cursor-pointer text-left text-pretty text-gray-500 transition duration-200 hover:text-gray-400 focus:outline-none',
        className,
      )}
      onClick={handleClick}
      aria-label={`Open address in maps: ${address}`}
      {...rest}
    >
      {address}
    </button>
  );
};
