import { PROPERTY_IMAGES } from './constants';
import { Property } from './types';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Casa Moderna en Palermo',
    description: 'Hermosa casa moderna completamente renovada con acabados de lujo',
    detailedDescription: `
      <h3>Descripción General</h3>
      <p>Espectacular casa moderna ubicada en el corazón de Palermo Hollywood, completamente renovada con los más altos estándares de calidad y diseño contemporáneo.</p>
      
      <h3>Características Principales</h3>
      <ul>
        <li>Amplios espacios luminosos con ventanales de piso a techo</li>
        <li>Cocina integrada con isla central y electrodomésticos de alta gama</li>
        <li>Suite principal con vestidor y baño en suite</li>
        <li>Jardín diseñado profesionalmente con sistema de riego automático</li>
        <li>Piscina climatizada con solárium</li>
      </ul>

      <h3>Distribución</h3>
      <p>Planta baja: Living comedor, cocina integrada, toilette, family room, dependencia de servicio.</p>
      <p>Planta alta: Suite principal, dos dormitorios secundarios, baño completo, estudio/playroom.</p>
    `,
    price: 450000,
    images: PROPERTY_IMAGES.CASA_MODERNA.map(image => image),
    type: 'casa',
    listingType: 'venta',
    featured: true,
    location: 'Palermo Hollywood',
    zone: 'Palermo',
    address: 'Av. Juan B. Justo 1234',
    googleMapsUrl: 'https://maps.google.com/?q=-34.5884,-58.4306',
    bedrooms: 3,
    bathrooms: 2,
    area: {
      total: 250,
      covered: 180
    },
    amenities: ['Jardín', 'Garage', 'Piscina', 'Seguridad 24h']
  },
  {
    id: '2',
    title: 'Departamento en Belgrano',
    description: 'Moderno departamento ideal para profesionales',
    price: 1200,
    images: PROPERTY_IMAGES.DEPTO_EJECUTIVO,
    type: 'departamento',
    listingType: 'alquiler',
    featured: true,
    location: 'Belgrano R',
    zone: 'Belgrano',
    address: 'Av. Cabildo 2500',
    googleMapsUrl: 'https://maps.google.com/?q=-34.5884,-58.4306',
    bedrooms: 2,
    bathrooms: 1,
    area: {
      total: 75,
      covered: 75
    },
    amenities: ['Gimnasio', 'Cochera', 'Seguridad']
  },
  {
    id: '3',
    title: 'Terreno en Villa Urquiza',
    description: 'Excelente oportunidad de inversión en zona de alto crecimiento',
    price: 85000,
    images: PROPERTY_IMAGES.TERRENO,
    type: 'terreno',
    listingType: 'venta',
    opportunity: true,
    location: 'Villa Urquiza',
    zone: 'Villa Urquiza',
    address: 'Av. Triunvirato 3500',
    googleMapsUrl: 'https://maps.google.com/?q=-34.5884,-58.4306',
    area: {
      total: 1000
    },
    amenities: ['Servicios disponibles', 'Zona en desarrollo']
  },
  {
    id: '4',
    title: 'Casa en San Isidro',
    description: 'Espectacular casa con amplio jardín',
    price: 320000,
    images: PROPERTY_IMAGES.CASA_CAMPO,
    type: 'casa',
    listingType: 'venta',
    featured: true,
    location: 'San Isidro',
    zone: 'San Isidro',
    address: 'Av. del Libertador 15000',
    googleMapsUrl: 'https://maps.google.com/?q=-34.5884,-58.4306',
    bedrooms: 4,
    bathrooms: 3,
    area: {
      total: 800,
      covered: 250
    },
    amenities: ['Quincho', 'Piscina', 'Jardín', 'Seguridad']
  },
  {
    id: '5',
    title: 'Local en Recoleta',
    description: 'Local en esquina con gran visibilidad',
    price: 1800,
    images: PROPERTY_IMAGES.LOCAL,
    type: 'local',
    listingType: 'alquiler',
    location: 'Recoleta',
    zone: 'Recoleta',
    address: 'Av. Santa Fe 1500',
    googleMapsUrl: 'https://maps.google.com/?q=-34.5884,-58.4306',
    area: {
      total: 120,
      covered: 120
    },
    amenities: ['Vidriera', 'Depósito', 'Baño']
  },
  {
    id: '6',
    title: 'Departamento en Caballito',
    description: '¡Oportunidad! Departamento a estrenar con excelente ubicación',
    price: 180000,
    images: PROPERTY_IMAGES.DEPTO_NUEVO,
    type: 'departamento',
    listingType: 'venta',
    opportunity: true,
    location: 'Caballito',
    zone: 'Caballito',
    address: 'Av. Pedro Goyena 1200',
    googleMapsUrl: 'https://maps.google.com/?q=-34.5884,-58.4306',
    bedrooms: 2,
    bathrooms: 1,
    area: {
      total: 65,
      covered: 65
    },
    amenities: ['Balcón', 'Cochera', 'SUM']
  },
  {
    id: '7',
    title: 'Penthouse en Puerto Madero',
    description: 'Espectacular penthouse con vista panorámica a la ciudad',
    price: 750000,
    images: PROPERTY_IMAGES.PENTHOUSE,
    type: 'departamento',
    listingType: 'venta',
    featured: true,
    location: 'Puerto Madero',
    zone: 'Puerto Madero',
    address: 'Juana Manso 1200',
    googleMapsUrl: 'https://maps.google.com/?q=-34.5884,-58.4306',
    bedrooms: 4,
    bathrooms: 3,
    area: {
      total: 300,
      covered: 300
    },
    amenities: ['Terraza', 'Jacuzzi', 'Sala de cine', 'Gimnasio privado']
  },
  {
    id: '8',
    title: 'Casa en Vicente López',
    description: 'Amplia casa ideal para familias, cerca de colegios y parques',
    price: 280000,
    images: PROPERTY_IMAGES.CASA_FAMILIAR,
    type: 'casa',
    listingType: 'venta',
    location: 'Vicente López',
    zone: 'Vicente López',
    googleMapsUrl: 'https://maps.google.com/?q=-34.5884,-58.4306',
    address: 'Av. Maipú 2500',
    bedrooms: 4,
    bathrooms: 2,
    area: {
      total: 200,
      covered: 160
    },
    amenities: ['Jardín', 'Parrilla', 'Garage para 2 autos']
  },
  {
    id: '9',
    title: 'Loft en Palermo Soho',
    description: 'Moderno loft estilo industrial, ideal para creativos',
    price: 900,
    images: PROPERTY_IMAGES.LOFT,
    type: 'departamento',
    listingType: 'alquiler',
    location: 'Palermo Soho',
    zone: 'Palermo',
    address: 'Thames 1500',
    googleMapsUrl: 'https://maps.google.com/?q=-34.5884,-58.4306',
    bedrooms: 1,
    bathrooms: 1,
    area: {
      total: 85,
      covered: 85
    },
    amenities: ['Techos altos', 'Ventanales', 'Terraza común']
  },
  {
    id: '10',
    title: 'Departamento en Villa Crespo',
    description: '¡Oportunidad! Excelente ubicación, ideal inversión',
    price: 95000,
    images: PROPERTY_IMAGES.DEPTO_NUEVO,
    type: 'departamento',
    listingType: 'venta',
    opportunity: true,
    location: 'Villa Crespo',
    googleMapsUrl: 'https://maps.google.com/?q=-34.5884,-58.4306',
    zone: 'Villa Crespo',
    address: 'Av. Corrientes 5200',
    bedrooms: 2,
    bathrooms: 1,
    area: {
      total: 55,
      covered: 55
    },
    amenities: ['Balcón', 'Lavadero', 'Seguridad']
  },
  {
    id: '11',
    title: 'Local en Villa Urquiza',
    description: '¡Oportunidad! Local a estrenar en zona comercial',
    price: 850,
    images: PROPERTY_IMAGES.LOCAL,
    googleMapsUrl: 'https://maps.google.com/?q=-34.5884,-58.4306',
    type: 'local',
    listingType: 'alquiler',
    opportunity: true,
    location: 'Villa Urquiza',
    zone: 'Villa Urquiza',
    address: 'Av. Triunvirato 4200',
    area: {
      total: 45,
      covered: 45
    },
    amenities: ['Vidriera', 'Baño', 'Persiana']
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return mockProperties.find(property => property.id === id);
};

export const getFeaturedProperties = (): Property[] => {
  // Asegurarnos de que siempre devolvemos al menos 3 propiedades destacadas
  const featured = mockProperties.filter(property => property.featured);
  if (featured.length < 3) {
    // Si no hay suficientes propiedades destacadas, agregamos algunas más
    return [...featured, ...mockProperties.filter(p => !p.featured).slice(0, 3 - featured.length)];
  }
  return featured;
};

export const getOpportunities = (): Property[] => {
  return mockProperties.filter(property => property.opportunity);
};

export const filterProperties = ({
  type,
  listingType,
  minPrice,
  maxPrice,
  minBedrooms,
  zones
}: {
  type?: string;
  listingType?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  zones?: string[];
}): Property[] => {
  return mockProperties.filter(property => {
    if (type && property.type !== type) return false;
    if (listingType && property.listingType !== listingType) return false;
    if (minPrice && property.price < minPrice) return false;
    if (maxPrice && property.price > maxPrice) return false;
    if (minBedrooms && (!property.bedrooms || property.bedrooms < minBedrooms)) return false;
    if (zones && zones.length > 0 && !zones.includes(property.zone)) return false;
    return true;
  });
};

export const getAvailableZones = (): string[] => {
  try {
    // Obtenemos todas las zonas únicas de las propiedades
    const zones = new Set(
      mockProperties
        .map(p => p.zone)
        .filter((zone): zone is string => Boolean(zone)) // Type guard para asegurar que no hay undefined
    );
    
    // Convertimos a array y ordenamos alfabéticamente
    return Array.from(zones).sort((a, b) => 
      a.localeCompare(b, 'es-AR', { sensitivity: 'base' })
    );
  } catch (error) {
    console.error('Error al obtener zonas disponibles:', error);
    return []; // Retornamos array vacío en caso de error
  }
};

// Persistencia de favoritos
export const saveFavoritesToLocalStorage = (favorites: string[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('propertyFavorites', JSON.stringify(favorites));
  }
};

export const loadFavoritesFromLocalStorage = (): string[] => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('propertyFavorites');
    return saved ? JSON.parse(saved) : [];
  }
  return [];
}; 