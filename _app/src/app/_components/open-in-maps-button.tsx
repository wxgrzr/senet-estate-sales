'use client';

import cn from 'classnames';

export function openMapLink(address: string) {
  if (!address) return '';
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  if (typeof window !== 'undefined') {
    window.open(googleMapsUrl, '_blank');
  }
}

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
    openMapLink(address);
  };
  return (
    <button
      type='button'
      className={cn(
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
