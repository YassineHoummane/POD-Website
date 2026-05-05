export interface ColorVariant {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  categorySlug: string;
  image: string;
  imageAlt: string;
  imagePlaceholder: string;
  colors: ColorVariant[];
  sizes: string[];
  featured?: boolean;
  badge?: string;
}

export const BRAND = {
  name: 'MercheKing',
  tagline: 'Premium Custom Apparel & Design',
  domain: '150hp.com',
  email: 'contact@mercheking.com',
  phone: '(469) 595-9391',
  address: '1209 Mountain Road Pl NE Ste R, Albuquerque, NM 87110',
  year: 2026,
};

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1600&q=85&auto=format&fit=crop';

export const products: Product[] = [
  /* ── T-SHIRTS ───────────────────────────────────────── */
  {
    id: 'classic-tee',
    name: 'Classic Essential T-Shirt',
    price: 25.00,
    description: '100% GOTS-certified organic cotton. Pre-shrunk, tagless, and built to outlast a hundred washes. The blank canvas your wardrobe deserves.',
    category: 'T-Shirts', categorySlug: 't-shirts',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Classic essential white t-shirt',
    imagePlaceholder: 'Classic Essential T-Shirt',
    featured: true,
    colors: [
      { name: 'White',     hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80&auto=format&fit=crop' },
      { name: 'Black',     hex: '#1a1a1a', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80&auto=format&fit=crop' },
      { name: 'Navy',      hex: '#1B3A6B', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80&auto=format&fit=crop' },
      { name: 'Forest',    hex: '#2D5016', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80&auto=format&fit=crop' },
    ],
    sizes: ['XS','S','M','L','XL','2XL','3XL'],
  },
  {
    id: 'minimalist-graphic-tee',
    name: 'Minimalist Graphic Tee',
    price: 28.00,
    description: 'Breathable ring-spun cotton with an exclusive screenprint. Slightly relaxed fit, double-needle stitched hem — made to be worn, not just owned.',
    category: 'T-Shirts', categorySlug: 't-shirts',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Minimalist graphic tee with subtle design',
    imagePlaceholder: 'Minimalist Graphic Tee',
    badge: 'Best Seller',
    colors: [
      { name: 'White',     hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80&auto=format&fit=crop' },
      { name: 'Heather',   hex: '#B0AAAA', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop' },
      { name: 'Sand',      hex: '#C8B89A', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80&auto=format&fit=crop' },
    ],
    sizes: ['XS','S','M','L','XL','2XL'],
  },

  /* ── ZIP HOODIES ────────────────────────────────────── */
  {
    id: 'premium-zip-hoodie',
    name: 'Premium Zip Hoodie',
    price: 58.00,
    description: 'Heavyweight 400gsm fleece, full-length YKK zip, kangaroo pocket. The zip hoodie elevated — structured enough for the street, soft enough for the sofa.',
    category: 'Zip Hoodies', categorySlug: 'zip-hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
    imageAlt: 'Premium zip hoodie in dark color',
    imagePlaceholder: 'Premium Zip Hoodie',
    featured: true,
    badge: 'New',
    colors: [
      { name: 'Black',     hex: '#1a1a1a', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop' },
      { name: 'Charcoal',  hex: '#4a4a4a', image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80&auto=format&fit=crop' },
      { name: 'Navy',      hex: '#1B3A6B', image: 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=800&q=80&auto=format&fit=crop' },
      { name: 'Burgundy',  hex: '#6B1B2A', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80&auto=format&fit=crop' },
    ],
    sizes: ['XS','S','M','L','XL','2XL','3XL'],
  },
  {
    id: 'classic-zip-hoodie',
    name: 'Classic Zip Hoodie',
    price: 48.00,
    description: 'Midweight 320gsm cotton-poly blend, adjustable drawcord hood, ribbed cuffs and hem. Everyday versatility without compromise.',
    category: 'Zip Hoodies', categorySlug: 'zip-hoodies',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Classic zip hoodie in light grey',
    imagePlaceholder: 'Classic Zip Hoodie',
    colors: [
      { name: 'Grey',      hex: '#9E9E9E', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&auto=format&fit=crop' },
      { name: 'White',     hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80&auto=format&fit=crop' },
      { name: 'Forest',    hex: '#2D5016', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80&auto=format&fit=crop' },
    ],
    sizes: ['S','M','L','XL','2XL'],
  },

  /* ── TANK TOPS ──────────────────────────────────────── */
  {
    id: 'premium-tank',
    name: 'Premium Muscle Tank',
    price: 22.00,
    description: 'Athletic-cut 200gsm jersey, wide shoulder straps, deep armhole. Runs slightly slim — size up for a relaxed fit. DTG-printed graphic that won\'t crack or fade.',
    category: 'Tank Tops', categorySlug: 'tank-tops',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Premium muscle tank top',
    imagePlaceholder: 'Premium Muscle Tank',
    badge: 'New',
    colors: [
      { name: 'White',     hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&q=80&auto=format&fit=crop' },
      { name: 'Black',     hex: '#1a1a1a', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80&auto=format&fit=crop' },
      { name: 'Grey',      hex: '#9E9E9E', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80&auto=format&fit=crop' },
      { name: 'Terracotta',hex: '#C2714F', image: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=800&q=80&auto=format&fit=crop' },
    ],
    sizes: ['XS','S','M','L','XL','2XL'],
  },
  {
    id: 'essential-tank',
    name: 'Essential Ribbed Tank',
    price: 19.00,
    description: '1×1 rib-knit cotton, fitted silhouette. Clean, minimal, endlessly wearable. Pairs with everything — the tank top you\'ve been looking for.',
    category: 'Tank Tops', categorySlug: 'tank-tops',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Essential ribbed tank top',
    imagePlaceholder: 'Essential Ribbed Tank',
    colors: [
      { name: 'White',     hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80&auto=format&fit=crop' },
      { name: 'Black',     hex: '#1a1a1a', image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80&auto=format&fit=crop' },
      { name: 'Sand',      hex: '#C8B89A', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80&auto=format&fit=crop' },
    ],
    sizes: ['XS','S','M','L','XL'],
  },

  /* ── HATS ───────────────────────────────────────────── */
  {
    id: 'snapback-hat',
    name: 'Classic Snapback Cap',
    price: 32.00,
    description: 'Structured 6-panel snapback with flat brim. 100% cotton twill, embroidered front panel, adjustable snap closure. One size fits most.',
    category: 'Hats', categorySlug: 'hats',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Classic snapback cap',
    imagePlaceholder: 'Classic Snapback Cap',
    featured: true,
    badge: 'New',
    colors: [
      { name: 'Black',     hex: '#1a1a1a', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80&auto=format&fit=crop' },
      { name: 'White',     hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80&auto=format&fit=crop' },
      { name: 'Navy',      hex: '#1B3A6B', image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800&q=80&auto=format&fit=crop' },
      { name: 'Red',       hex: '#C0392B', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80&auto=format&fit=crop' },
      { name: 'Camo',      hex: '#6B7C4E', image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80&auto=format&fit=crop' },
    ],
    sizes: ['One Size'],
  },
  {
    id: 'embroidered-dad-hat',
    name: 'Embroidered Dad Hat',
    price: 28.00,
    description: 'Unstructured 6-panel with curved brim and brass buckle closure. Low-profile, easy-wearing, premium embroidered logo. The everyday hat, perfected.',
    category: 'Hats', categorySlug: 'hats',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Embroidered dad hat in tan color',
    imagePlaceholder: 'Embroidered Dad Hat',
    colors: [
      { name: 'Khaki',     hex: '#C8B89A', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80&auto=format&fit=crop' },
      { name: 'Black',     hex: '#1a1a1a', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80&auto=format&fit=crop' },
      { name: 'Olive',     hex: '#556B2F', image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80&auto=format&fit=crop' },
    ],
    sizes: ['One Size'],
  },

  /* ── SWEATSHIRTS / HOODIES (existing) ───────────────── */
  {
    id: 'premium-hoodie',
    name: 'Premium Pullover Hoodie',
    price: 45.00,
    description: 'Heavyweight 400gsm fleece blend, modern fit, kangaroo pocket. Engineered for comfort without sacrificing silhouette.',
    category: 'Hoodies', categorySlug: 'hoodies',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Premium pullover hoodie',
    imagePlaceholder: 'Premium Pullover Hoodie',
    featured: true,
    colors: [
      { name: 'Black',     hex: '#1a1a1a', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80&auto=format&fit=crop' },
      { name: 'Charcoal',  hex: '#4a4a4a', image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80&auto=format&fit=crop' },
      { name: 'Navy',      hex: '#1B3A6B', image: 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=800&q=80&auto=format&fit=crop' },
      { name: 'Sand',      hex: '#C8B89A', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80&auto=format&fit=crop' },
    ],
    sizes: ['XS','S','M','L','XL','2XL','3XL'],
  },
  {
    id: 'cozy-sweatshirt',
    name: 'Cozy Fleece Sweatshirt',
    price: 40.00,
    description: 'Classic crewneck in midweight 320gsm fleece. Relaxed, lived-in silhouette that only gets better over time.',
    category: 'Sweatshirts', categorySlug: 'sweatshirts',
    image: 'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Cozy fleece crewneck sweatshirt',
    imagePlaceholder: 'Cozy Fleece Sweatshirt',
    colors: [
      { name: 'Grey',      hex: '#9E9E9E', image: 'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=800&q=80&auto=format&fit=crop' },
      { name: 'Cream',     hex: '#F5F0E8', image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80&auto=format&fit=crop' },
      { name: 'Black',     hex: '#1a1a1a', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&auto=format&fit=crop' },
    ],
    sizes: ['XS','S','M','L','XL','2XL'],
  },
];

export const categories = [
  { name: 'T-Shirts',    slug: 't-shirts',    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80&auto=format&fit=crop' },
  { name: 'Zip Hoodies', slug: 'zip-hoodies', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop' },
  { name: 'Tank Tops',   slug: 'tank-tops',   image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80&auto=format&fit=crop' },
  { name: 'Hats',        slug: 'hats',        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80&auto=format&fit=crop' },
  { name: 'Hoodies',     slug: 'hoodies',     image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80&auto=format&fit=crop' },
  { name: 'Sweatshirts', slug: 'sweatshirts', image: 'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=600&q=80&auto=format&fit=crop' },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter(p => p.categorySlug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function searchProducts(query: string): Product[] {
  if (!query?.trim()) return products;
  const q = query.toLowerCase().trim();
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}
