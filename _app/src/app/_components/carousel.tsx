"use client";
import cn from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselProps = {
  srcs: object;
  altPrefix: string;
  className?: string;
};

const Carousel = ({ srcs, altPrefix, className }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Object.values(srcs);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {items.map((item, index) => (
        <Image
          key={index}
          src={item}
          width="600"
          height="400"
          alt={`${altPrefix} carousel image #${index}`}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out",
            index === currentIndex ? "z-10 opacity-100" : "z-0 opacity-0"
          )}
        />
      ))}
    </div>
  );
};
export default Carousel;
