export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  imagePlaceholder: string;
}

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1400&q=80&auto=format&fit=crop';

export const products: Product[] = [
  {
    id: 'classic-tee',
    name: 'Classic Essential T-Shirt',
    price: 25.0,
    description:
      '100% organic cotton, pre-shrunk. The foundation of any wardrobe — structured yet soft, built to last through every wash and wear.',
    category: 'T-Shirts',
    image:
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Classic white essential t-shirt laid flat on a clean surface',
    imagePlaceholder: 'Classic Essential T-Shirt',
  },
  {
    id: 'premium-hoodie',
    name: 'Premium Urban Hoodie',
    price: 45.0,
    description:
      'Heavyweight fleece blend, modern fit. Engineered for comfort without sacrificing silhouette — the hoodie redefined for city living.',
    category: 'Hoodies',
    image:
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Premium urban hoodie worn in a city environment',
    imagePlaceholder: 'Premium Urban Hoodie',
  },
  {
    id: 'minimalist-tee',
    name: 'Minimalist Graphic Tee',
    price: 28.0,
    description:
      'Breathable fabric, exclusive design. Less is more — a single mark, perfectly placed, on a canvas built for movement.',
    category: 'T-Shirts',
    image:
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Minimalist graphic tee with subtle design detail',
    imagePlaceholder: 'Minimalist Graphic Tee',
  },
  {
    id: 'cozy-sweatshirt',
    name: 'Cozy Fleece Sweatshirt',
    price: 50.0,
    description:
      'Classic crewneck perfect for layering. Midweight fleece with a relaxed, lived-in silhouette that only gets better over time.',
    category: 'Sweatshirts',
    image:
      'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Cozy fleece crewneck sweatshirt in neutral tone',
    imagePlaceholder: 'Cozy Fleece Sweatshirt',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function searchProducts(query: string): Product[] {
  if (!query || query.trim() === '') return products;
  const q = query.toLowerCase().trim();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}
