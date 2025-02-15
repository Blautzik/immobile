'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PropertyCard from 'components/property-card';
import { ZoneSelect } from 'components/ui/zone-select';
import { filterProperties, getAvailableZones } from 'lib/mock-data';
import { ListingType, Property, PropertyType } from 'lib/types';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const [properties, setProperties] = useState<Property[]>([]);
  const [availableZones, setAvailableZones] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || '',
    listingType: searchParams.get('listingType') || '',
    minPrice: '',
    maxPrice: '',
    zones: [] as string[],
    search: searchParams.get('q') || ''
  });

  useEffect(() => {
    const zones = getAvailableZones();
    setAvailableZones(zones);
  }, []);

  useEffect(() => {
    let filtered = filterProperties({
      type: filters.type || undefined,
      listingType: filters.listingType || undefined,
      minPrice: filters.minPrice ? Number(filters.minPrice) : undefined,
      maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined,
      zones: filters.zones.length > 0 ? filters.zones : undefined
    });

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(
        property =>
          property.title.toLowerCase().includes(searchTerm) ||
          property.description.toLowerCase().includes(searchTerm) ||
          property.location.toLowerCase().includes(searchTerm) ||
          property.address.toLowerCase().includes(searchTerm)
      );
    }

    setProperties(filtered);
  }, [filters]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Listado de Propiedades</h1>
        <Button 
          onClick={() => setShowFilters(!showFilters)}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {showFilters && (
          <div className="lg:col-span-1 p-4 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <FiltersContent 
              filters={filters} 
              setFilters={setFilters} 
              availableZones={availableZones} 
            />
          </div>
        )}
        
        <div className={`${showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {properties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 dark:text-neutral-400">
                No se encontraron propiedades con los filtros seleccionados.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const FiltersContent = ({ 
  filters, 
  setFilters, 
  availableZones 
}: {
  filters: any;
  setFilters: (filters: any) => void;
  availableZones: string[];
}) => {
  const handleZonesChange = (selected: string[]) => {
    setFilters({ ...filters, zones: selected });
  };

  const handleClearFilters = () => {
    setFilters({
      type: '',
      listingType: '',
      minPrice: '',
      maxPrice: '',
      zones: [],
      search: ''
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Tipo de Propiedad</label>
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="w-full rounded-lg border border-neutral-200 px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <option value="">Todos</option>
          {PROPERTY_TYPES.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Operación</label>
        <select
          value={filters.listingType}
          onChange={(e) => setFilters({ ...filters, listingType: e.target.value })}
          className="w-full rounded-lg border border-neutral-200 px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <option value="">Todas</option>
          {LISTING_TYPES.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Precio</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Mín"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900"
          />
          <input
            type="number"
            placeholder="Máx"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Zonas</label>
        <ZoneSelect
          options={availableZones}
          selected={filters.zones}
          onChange={handleZonesChange}
          placeholder="Seleccionar zonas..."
        />
      </div>

      <Button 
        onClick={handleClearFilters}
        variant="outline" 
        className="w-full"
      >
        Limpiar Filtros
      </Button>
    </div>
  );
};