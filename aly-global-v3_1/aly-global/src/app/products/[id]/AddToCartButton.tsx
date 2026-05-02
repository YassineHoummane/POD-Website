'use client';
import { useState } from 'react';

export default function AddToCartButton({ productName }: { productName: string }) {
  const [state, setState] = useState<'idle' | 'added'>('idle');

  const handle = () => {
    setState('added');
    setTimeout(() => setState('idle'), 2400);
  };

  return (
    <button
      onClick={handle}
      className="w-full btn-primary justify-center py-[17px] text-[12px]"
      style={state === 'added' ? { background: '#3a6b4a' } : {}}
      aria-label={`Add ${productName} to cart`}
    >
      {state === 'added' ? (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Added to Cart
        </>
      ) : (
        'Add to Cart'
      )}
    </button>
  );
}
