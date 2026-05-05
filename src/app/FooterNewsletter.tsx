'use client';
import { useState } from 'react';
export default function FooterNewsletter() {
  const [done, setDone] = useState(false);
  return done
    ? <p className="text-green-400 text-sm font-semibold py-2">✓ You&apos;re subscribed!</p>
    : <form className="flex max-w-md mx-auto gap-0" onSubmit={e => { e.preventDefault(); setDone(true); }}>
        <input type="email" placeholder="Email" required
          className="flex-1 bg-white text-gray-900 px-4 py-3 text-sm focus:outline-none border-0" />
        <button type="submit"
          className="bg-[var(--accent)] text-white px-5 py-3 font-bold text-sm hover:bg-[#c73820] transition-colors">→</button>
      </form>;
}
