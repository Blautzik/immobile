'use client';

import { Dialog } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import PropertyCard from 'components/property-card';
import { ZoneSelect } from 'components/ui/zone-select';
import { filterProperties, getAvailableZones } from 'lib/mock-data';
import { ListingType, Property, PropertyType } from 'lib/types';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


const PRICE_RANGES = [
  { min: 0, max: 100000, label: 'Hasta $100,000' },
  { min: 100000, max: 200000, label: '$100,000 - $200,000' },
  { min: 200000, max: 300000, label: '$200,000 - $300,000' },
  { min: 300000, max: 500000, label: '$300,000 - $500,000' },
  { min: 500000, max: null, label: 'Más de $500,000' }
];

const RENTAL_PRICE_RANGES = [
  { min: 0, max: 500, label: 'Hasta $500' },
  { min: 500, max: 1000, label: '$500 - $1,000' },
  { min: 1000, max: 1500, label: '$1,000 - $1,500' },
  { min: 1500, max: 2000, label: '$1,500 - $2,000' },
  { min: 2000, max: null, label: 'Más de $2,000' }
];

const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: 'casa', label: 'Casa' },
  { value: 'departamento', label: 'Departamento' },
  { value: 'terreno', label: 'Lote/Terreno' },
  { value: 'ph', label: 'PH' },
  { value: 'otro', label: 'Otras' }
];

const LISTING_TYPES: { value: ListingType; label: string }[] = [
  { value: 'venta', label: 'Compra' },
  { value: 'alquiler', label: 'Alquiler' },
  { value: 'alquiler_temporario', label: 'Alquiler Temporario' }
];

const FiltersContent = ({ filters, setFilters, availableZones }: {
  filters: any;
  setFilters: (filters: any) => void;
  availableZones: string[];
}) => {
  const handleZonesChange = (selected: string[]) => {
    setFilters({ ...filters, zones: selected });
  };

  return (
    <div className="space-y-6">
      {/* Tipo de Propiedad */}
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

      {/* Tipo de Operación */}
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

      {/* Precio */}
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

      {/* Zonas */}
      <div>
        <label className="block text-sm font-medium mb-2">Zonas</label>
        <ZoneSelect
          options={availableZones}
          selected={filters.zones}
          onChange={handleZonesChange}
          placeholder="Seleccionar zonas..."
        />
      </div>
    </div>
  );
};

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

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      {/* Search and filter button */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Buscar propiedades..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="w-full rounded-lg border border-neutral-200 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 sm:max-w-md"
        />
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800 sm:hidden"
        >
          <FunnelIcon className="h-5 w-5" />
          Filtros 
        </button>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Desktop filters */}
        <div className="hidden w-64 flex-shrink-0 lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Filtros</h3>
              <FiltersContent
                filters={filters}
                setFilters={setFilters}
                availableZones={availableZones}
              />
            </div>
          </div>
        </div>

        {/* Mobile filters modal */}
        <Transition.Root show={showFilters} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setShowFilters}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl dark:bg-neutral-900">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium">Filtros</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md focus:outline-none"
                      onClick={() => setShowFilters(false)}
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="px-4 mt-4">
                    <FiltersContent
                      filters={filters}
                      setFilters={setFilters}
                      availableZones={availableZones}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Property grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}