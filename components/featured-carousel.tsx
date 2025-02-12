'use client';

import { Property } from '@/lib/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface FeaturedCarouselProps {
  properties: Property[];
}

export function FeaturedCarousel({ properties }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const property = properties[currentIndex];

  return (
    <div className="container mx-auto px-4">
      <div className="relative aspect-[4/5] sm:aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          <h3 className="mb-2 text-xl sm:text-2xl md:text-3xl font-bold text-white">{property.title}</h3>
          <p className="mb-4 text-sm sm:text-base text-white/90 line-clamp-2 sm:line-clamp-3">{property.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs sm:text-sm text-white">
              {property.type}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs sm:text-sm text-white">
              {property.bedrooms} hab.
            </span>
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs sm:text-sm text-white">
              {property.area.total}m²
            </span>
          </div>
          <Link
            href={`/property/${property.id}`}
            className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-100"
          >
            Ver más
          </Link>
        </div>

        <button
          onClick={previous}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 sm:p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <ChevronLeftIcon className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 sm:p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <ChevronRightIcon className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>

        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex gap-1">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 