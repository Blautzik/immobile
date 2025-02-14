export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';

export const PROPERTY_IMAGES = {
  HERO: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
  CASA_MODERNA: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994'
  ],
  DEPTO_EJECUTIVO: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858'
  ],
  TERRENO: [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
    'https://images.unsplash.com/photo-1434025697302-54853b8da166',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef'
  ],
  LOCAL: [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    'https://images.unsplash.com/photo-1464890100898-a385f744067f',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8'
  ],
  CASA_CAMPO: [
    'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
  ],
  CASA_FAMILIAR: [
    'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
  ],
  DEPTO_NUEVO: [
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858'
  ],
  PENTHOUSE: [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9'
  ],
  LOFT: [
    'https://images.unsplash.com/photo-1536376072261-38c75010e6c9',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f'
  ]
};
