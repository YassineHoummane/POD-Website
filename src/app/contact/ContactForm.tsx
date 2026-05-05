'use client';
import { useState } from 'react';
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <h2 className="text-xl font-black mb-5">Send a Message</h2>
      {sent ? (
        <div className="bg-green-50 border border-green-200 p-6 text-center">
          <p className="text-green-700 font-bold text-lg mb-1">Message Sent!</p>
          <p className="text-green-600 text-sm">We&apos;ll get back to you within 2 business days.</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); setSent(true); }}>
          {[
            { id: 'name',    label: 'Full Name',     type: 'text',  placeholder: 'John Smith' },
            { id: 'email',   label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
            { id: 'subject', label: 'Subject',       type: 'text',  placeholder: 'Order question, return request…' },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">{label}</label>
              <input id={id} type={type} placeholder={placeholder} required
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-800 bg-white" />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Message</label>
            <textarea id="message" rows={5} placeholder="Describe your question or issue…" required
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-800 bg-white resize-none" />
          </div>
          <button type="submit" className="btn-primary w-full justify-center py-4">Send Message</button>
        </form>
      )}
    </div>
  );
}
