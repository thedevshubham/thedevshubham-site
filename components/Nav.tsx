'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { layout } from '@/lib/content';

const { logo, links, cta } = layout.nav;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-t-2 border-b-2 transition-colors ${
        scrolled ? 'border-t-ink border-b-ink' : 'border-t-transparent border-b-transparent'
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-7 py-5 flex justify-between items-center">
        <Link href="/" className="display text-xl">
          {logo}
        </Link>
        <nav aria-label="Primary" className="hidden sm:flex gap-2.5 items-center">
          {links.map((l) => {
            const active = pathname === l.href || pathname?.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'font-mono text-xs font-bold px-4 py-2 rounded-full bg-burnt-orange text-white border-2 border-ink'
                    : 'font-mono text-xs text-forest-green px-4 py-2 rounded-full border border-transparent hover:border-ink hover:text-forest-green transition-colors'
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href={cta.href}
          className="group font-mono text-xs bg-burnt-orange text-white border-2 border-ink rounded-full font-bold px-[26px] py-3 transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#14120D]"
        >
          {cta.label} <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </header>
  );
}
