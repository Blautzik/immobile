'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

interface CarouselProps {
  images: string | string[];
}

export function Carousel({ images }: CarouselProps) {
  const imageArray = Array.isArray(images) ? images : [images];
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % imageArray.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
  };

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
      <Image
        src={imageArray[currentIndex] || ''}
        alt={`Imagen ${currentIndex + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition duration-300 group-hover:scale-105"
        priority
      />
      
      {imageArray.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              previous();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
            {imageArray.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
                className={`h-1.5 w-1.5 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
} 