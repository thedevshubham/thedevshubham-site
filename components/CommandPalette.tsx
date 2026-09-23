'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '@/lib/projects';
import { layout, site } from '@/lib/content';

const copy = layout.commandPalette;
const { github } = site.socials;

type Item = { label: string; hint: string; action: () => void };

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(() => {
    const nav = [
      ...copy.pages,
      ...projects.map((p) => ({ label: p.name, hint: copy.projectHint, href: `/work/${p.slug}` })),
    ].map((n) => ({ label: n.label, hint: n.hint, action: () => router.push(n.href) }));

    const external: Item[] = [
      {
        label: github.label,
        hint: github.handle,
        action: () => window.open(github.url, '_blank', 'noopener'),
      },
    ];

    return [...nav, ...external];
  }, [router]);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter((i) => i.label.toLowerCase().includes(q) || i.hint.toLowerCase().includes(q));
  }, [items, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        close();
      }
    };
    const onOpenRequest = () => setOpen(true);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('open-command-palette', onOpenRequest);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('open-command-palette', onOpenRequest);
    };
  }, [close]);

  useEffect(() => {
    if (open) {
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function handleInputKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = filtered[activeIndex];
      if (item) {
        item.action();
        close();
      }
    }
  }

  if (!open) return null;

  return (
    <div
      role="presentation"
      onClick={close}
      className="fixed inset-0 z-[100] bg-ink/50 flex items-start justify-center pt-[12vh] px-4"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[560px] bg-cream border-2 border-ink rounded-2xl overflow-hidden"
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={handleInputKeyDown}
          placeholder={copy.placeholder}
          className="w-full font-mono text-sm px-5 py-4 bg-transparent border-b-2 border-ink outline-none placeholder:text-muted"
        />
        <ul className="max-h-[360px] overflow-y-auto py-2">
          {filtered.length === 0 && <li className="px-5 py-4 text-sm text-muted font-mono">{copy.empty}</li>}
          {filtered.map((item, i) => (
            <li key={item.label}>
              <button
                type="button"
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => {
                  item.action();
                  close();
                }}
                className={`w-full text-left px-5 py-3 flex items-center justify-between gap-3 font-mono text-sm ${
                  i === activeIndex ? 'bg-lime' : ''
                }`}
              >
                <span className="font-bold">{item.label}</span>
                <span className="text-xs text-muted">{item.hint}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="border-t-2 border-ink px-5 py-2.5 flex justify-between font-mono text-[11px] text-muted">
          {copy.keys.map((k) => (
            <span key={k}>{k}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
