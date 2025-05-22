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
        'w-2/3 cursor-pointer text-left text-pretty focus:outline-none',
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
