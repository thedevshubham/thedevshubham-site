'use client';

import { useState, FormEvent } from 'react';
import { contact, site } from '@/lib/content';

const copy = contact.form;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(copy.endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="border-2 border-ink rounded-2xl p-8 bg-lime">
        <p className="display text-2xl mb-2">{copy.sentTitle}</p>
        <p className="text-sm">
          {site.replyTime} {copy.sentClosing}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="font-mono text-xs block mb-2">
          {copy.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full border-2 border-ink rounded-lg px-4 py-3 bg-white focus-visible:outline-none focus:ring-2 focus:ring-ink"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-mono text-xs block mb-2">
          {copy.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border-2 border-ink rounded-lg px-4 py-3 bg-white focus-visible:outline-none focus:ring-2 focus:ring-ink"
        />
      </div>
      <div>
        <label htmlFor="project" className="font-mono text-xs block mb-2">
          {copy.projectLabel}
        </label>
        <select
          id="project"
          name="project"
          required
          className="w-full border-2 border-ink rounded-lg px-4 py-3 bg-white focus-visible:outline-none focus:ring-2 focus:ring-ink"
        >
          <option value="">{copy.projectPlaceholder}</option>
          {copy.projectOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="group font-mono font-bold text-sm bg-lime border-2 border-ink px-6 py-3.5 rounded-full transition-all duration-150 disabled:opacity-60 enabled:hover:-translate-x-1 enabled:hover:-translate-y-1 enabled:hover:shadow-[4px_4px_0_0_#14120D]"
      >
        {status === 'sending' ? (
          copy.sending
        ) : (
          <>
            {copy.submit} <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
          </>
        )}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-700">{copy.error}</p>
      )}
    </form>
  );
}
