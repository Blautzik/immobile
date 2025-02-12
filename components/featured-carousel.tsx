'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Property } from 'lib/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function FeaturedCarousel({ properties }: { properties: Property[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % properties.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + properties.length) % properties.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden bg-black">
      <div className="relative h-[70vh]">
        {/* Imagen actual */}
        <div className="absolute inset-0 transition-opacity duration-500">
          <img
            src={properties[currentIndex].image}
            alt={properties[currentIndex].title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20" />
        </div>

        {/* Contenido */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-white/10 text-white backdrop-blur-sm">
                Propiedad Destacada
              </span>
              <h2 className="mt-4 text-4xl font-bold text-white">
                {properties[currentIndex].title}
              </h2>
              <p className="mt-2 text-lg text-white/80">
                {properties[currentIndex].description}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Link
                  href={`/property/${properties[currentIndex].id}`}
                  className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors"
                >
                  Ver Detalles
                </Link>
                <div className="text-white">
                  <span className="text-2xl font-bold">
                    ${properties[currentIndex].price.toLocaleString()}
                  </span>
                  {properties[currentIndex].listingType === 'alquiler' && (
                    <span className="ml-1 text-white/70">/mes</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controles */}
        <div className="absolute bottom-8 right-8 flex gap-2">
          <button
            onClick={prev}
            className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
} 