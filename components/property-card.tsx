'use client';

import { Property } from '@/lib/types';
import { HeartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useFavorites } from './favorites/favorites-context';
import { Carousel } from './ui/carousel';

export default function PropertyCard({ property }: { property: Property }) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const isFavorite = (propertyId: string) => {
    return favorites.some(fav => fav === propertyId);
  };

  const toggleFavorite = (e: React.MouseEvent, property: Property) => {
    e.preventDefault();
    if (isFavorite(property.id)) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property.id);
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-xl dark:bg-neutral-900">
      <Link href={`/property/${property.id}`} className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <Carousel images={property.images} />
        </div>
        <button
          onClick={(e) => toggleFavorite(e, property)}
          className="absolute right-4 top-4 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-colors hover:bg-white"
        >
          <HeartIcon 
            className={`h-5 w-5 ${
              isFavorite(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
            ${property.listingType === 'venta' 
              ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
              : 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400'
            }`}
          >
            {property.listingType === 'venta' ? 'Venta' : 'Alquiler'}
          </span>
          <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
            {property.type}
          </span>
          {property.opportunity && (
            <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400">
              ¡Oportunidad!
            </span>
          )}
        </div>

        <Link href={`/property/${property.id}`} className="group-hover:underline">
          <h3 className="text-lg font-medium">{property.title}</h3>
        </Link>
        
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{property.location}</p>
        
        <div className="mt-4 flex items-center justify-between border-t pt-4 dark:border-neutral-800">
          <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
            {property.bedrooms && (
              <span>{property.bedrooms} hab.</span>
            )}
            {property.bathrooms && (
              <>
                <span>•</span>
                <span>{property.bathrooms} baños</span>
              </>
            )}
            <span>•</span>
            <span>{property.area.total}m²</span>
          </div>
        </div>
        
        <div className="mt-2 text-lg font-semibold">
          ${property.price.toLocaleString()}
          {property.listingType === 'alquiler' && (
            <span className="text-sm font-normal text-neutral-600 dark:text-neutral-400">/mes</span>
          )}
        </div>
      </div>
    </div>
  );
} 