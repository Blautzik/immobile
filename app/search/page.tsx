'use client';

import { HeartIcon } from '@heroicons/react/24/outline';
import { useFavorites } from 'components/favorites/favorites-context';
import { filterProperties } from 'lib/mock-data';
import { Property } from 'lib/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const PRICE_RANGES = [
  { min: 0, max: 100000, label: 'Hasta $100,000' },
  { min: 100000, max: 200000, label: '$100,000 - $200,000' },
  { min: 200000, max: 300000, label: '$200,000 - $300,000' },
  { min: 300000, max: 500000, label: '$300,000 - $500,000' },
  { min: 500000, max: null, label: 'Más de $500,000' }
];

const BEDROOMS = [
  { value: '', label: 'Cualquiera' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
  { value: '4', label: '4+' }
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || '',
    listingType: searchParams.get('listingType') || '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: ''
  });

  useEffect(() => {
    const filtered = filterProperties({
      type: filters.type || undefined,
      listingType: filters.listingType || undefined,
      minPrice: filters.minPrice ? Number(filters.minPrice) : undefined,
      maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined,
      minBedrooms: filters.minBedrooms ? Number(filters.minBedrooms) : undefined
    });
    setProperties(filtered);
  }, [filters]);

  const isFavorite = (propertyId: string) => {
    return favorites.some(fav => fav === propertyId);
  };

  const toggleFavorite = (property: Property) => {
    if (isFavorite(property.id)) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property.id);
    }
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-4 pt-20">
      <div className="flex gap-8">
        {/* Filtros laterales */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Filtros</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Precio</label>
                  {PRICE_RANGES.map((range) => (
                    <label key={range.label} className="flex items-center space-x-2 mb-2">
                      <input
                        type="radio"
                        name="price"
                        onChange={() => setFilters({
                          ...filters,
                          minPrice: String(range.min),
                          maxPrice: range.max ? String(range.max) : ''
                        })}
                        checked={
                          filters.minPrice === String(range.min) &&
                          filters.maxPrice === (range.max ? String(range.max) : '')
                        }
                        className="text-blue-600"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Habitaciones</label>
                  <select
                    value={filters.minBedrooms}
                    onChange={(e) => setFilters({ ...filters, minBedrooms: e.target.value })}
                    className="w-full rounded-md border-gray-300 text-sm"
                  >
                    {BEDROOMS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Listado de propiedades */}
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <div 
                key={property.id}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <Link href={`/property/${property.id}`} className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(property);
                    }}
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
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-green-50 text-green-700'
                      }`}
                    >
                      {property.listingType === 'venta' ? 'Venta' : 'Alquiler'}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">
                      {property.type}
                    </span>
                  </div>

                  <Link href={`/property/${property.id}`} className="group-hover:underline">
                    <h3 className="text-lg font-medium">{property.title}</h3>
                  </Link>
                  
                  <p className="mt-1 text-sm text-neutral-600">{property.location}</p>
                  
                  <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
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
                      <span className="text-sm font-normal text-neutral-600">/mes</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
