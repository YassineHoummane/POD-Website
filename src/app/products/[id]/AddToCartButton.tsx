'use client';
import { useState } from 'react';

export default function AddToCartButton({ productName, price }: { productName: string; price: number }) {
  const [qty, setQty]     = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Qty selector — exactly matches screenshot */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Quantity</p>
        <div className="flex items-center w-fit border border-gray-300">
          <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
          <input type="number" className="qty-input" value={qty} min={1} readOnly aria-label="Quantity" />
          <button className="qty-btn" onClick={() => setQty(q => q + 1)} aria-label="Increase quantity">+</button>
        </div>
      </div>

      {/* Add to cart */}
      <button onClick={handleAdd}
        className="btn-accent w-full justify-center py-4 text-base"
        style={added ? { background: '#2d6a4f', borderColor: '#2d6a4f' } : {}}
        aria-label={`Add ${productName} to cart`}>
        {added ? '✓ Added to Cart!' : `Add to Cart — $${(price * qty).toFixed(2)}`}
      </button>
    </div>
  );
}
