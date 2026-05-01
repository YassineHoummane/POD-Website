'use client';

import { useState } from 'react';

export default function AddToCartButton({ productName }: { productName: string }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full font-body text-sm tracking-[0.15em] uppercase py-4 px-8 
                  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${
                    added
                      ? 'bg-gray-700 text-white focus:ring-gray-700'
                      : 'bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-900'
                  }`}
      aria-label={`Add ${productName} to cart`}
    >
      {added ? '✓ Added to Cart' : 'Add to Cart'}
    </button>
  );
}
