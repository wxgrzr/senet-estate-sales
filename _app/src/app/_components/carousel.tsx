'use client';
import cn from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type CarouselImage = {
  alt: string;
  url: string;
};

type CarouselProps = {
  images: CarouselImage[];
  className?: string;
};

const Carousel = ({ images, className }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = Array.isArray(images) ? images : [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg',
        className ? className : '',
      )}
    >
      {items.map((item, index) => (
        <Image
          key={index}
          src={item.url}
          width='600'
          height='400'
          alt={item.alt}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out',
            index === currentIndex ? 'z-10 opacity-100' : 'z-0 opacity-0',
          )}
        />
      ))}
    </div>
  );
};
export default Carousel;
