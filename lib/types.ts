export type PropertyType = 'casa' | 'departamento' | 'terreno' | 'local';
export type ListingType = 'venta' | 'alquiler';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  type: PropertyType;
  listingType: ListingType;
  featured?: boolean;
  opportunity?: boolean;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area: {
    total: number;
    covered?: number;
  };
  amenities: string[];
} 