'use client';
import clsx from 'clsx';
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

const Carousel = ({ images = [], className }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [furthestIndex, setFurthestIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    setFurthestIndex((furthest) => Math.max(furthest, currentIndex));
  }, [currentIndex]);

  return (
    <div className={className}>
      {images.slice(0, furthestIndex + 2).map((item, index) => (
        <Image
          key={item.url ?? index}
          src={item.url}
          width='600'
          height='400'
          sizes='(max-width: 768px) 100vw, 50vw'
          alt={item.alt}
          className={clsx(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out',
            index === currentIndex ? 'z-10 opacity-100' : 'z-0 opacity-0',
          )}
        />
      ))}
    </div>
  );
};
export default Carousel;
