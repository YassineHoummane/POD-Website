export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imagePlaceholder: string;
}

export const products: Product[] = [
  {
    id: 'classic-tee',
    name: 'Classic Essential T-Shirt',
    price: 25.0,
    description:
      '100% organic cotton, pre-shrunk. The foundation of any wardrobe — structured yet soft, built to last through every wash and wear.',
    category: 'T-Shirts',
    imagePlaceholder: 'Person wearing a clean white classic t-shirt',
  },
  {
    id: 'premium-hoodie',
    name: 'Premium Urban Hoodie',
    price: 45.0,
    description:
      'Heavyweight fleece blend, modern fit. Engineered for comfort without sacrificing silhouette — the hoodie redefined for city living.',
    category: 'Hoodies',
    imagePlaceholder: 'Person wearing a premium urban hoodie in a city setting',
  },
  {
    id: 'minimalist-tee',
    name: 'Minimalist Graphic Tee',
    price: 28.0,
    description:
      'Breathable fabric, exclusive design. Less is more — a single mark, perfectly placed, on a canvas built for movement.',
    category: 'T-Shirts',
    imagePlaceholder: 'Person wearing a minimalist graphic tee with subtle design',
  },
  {
    id: 'cozy-sweatshirt',
    name: 'Cozy Fleece Sweatshirt',
    price: 50.0,
    description:
      'Classic crewneck perfect for layering. Midweight fleece with a relaxed, lived-in silhouette that only gets better over time.',
    category: 'Sweatshirts',
    imagePlaceholder: 'Person wearing a cozy fleece crewneck sweatshirt',
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
