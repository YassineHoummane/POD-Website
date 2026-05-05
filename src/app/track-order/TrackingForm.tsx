'use client';
import { useState } from 'react';
export default function TrackingForm() {
  const [val, setVal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="bg-gray-50 border border-gray-200 p-8 mb-10">
      {submitted
        ? <p className="text-gray-600 text-sm font-semibold py-2">
            Tracking number <strong>{val}</strong> submitted. Please check the carrier&apos;s website or your email for live updates.
          </p>
        : <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => { e.preventDefault(); if (val.trim()) setSubmitted(true); }}>
            <input type="text" value={val} onChange={e => setVal(e.target.value)}
              placeholder="Enter your tracking number…" required
              className="flex-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-800 bg-white" />
            <button type="submit" className="btn-primary whitespace-nowrap px-8 py-3">Track Order</button>
          </form>
      }
      <p className="text-xs text-gray-400 mt-3">Your tracking number is in the shipping confirmation email sent when your order ships.</p>
    </div>
  );
}
