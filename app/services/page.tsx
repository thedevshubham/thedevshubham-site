import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/content';

export const metadata: Metadata = services.meta;

export default function Services() {
  return (
    <div className="max-w-[1080px] mx-auto px-7 py-14">
      <h1 className="display text-[clamp(36px,6vw,58px)] mb-3">{services.title}</h1>
      <p className="text-muted max-w-[520px] mb-10">{services.intro}</p>

      {services.items.map((s) => (
        <div
          key={s.idx}
          className="group grid sm:grid-cols-[60px_1fr_auto] gap-5 items-start -mx-7 px-7 py-7 rounded-md border-t-2 border-dashed border-line transition-colors hover:bg-lime hover:border-t-transparent"
        >
          <div className="display text-3xl text-[#C9C2AF] transition-colors group-hover:text-ink group-hover:opacity-40">{s.idx}</div>
          <div>
            <h2 className="display text-2xl sm:text-3xl mb-2">{s.name}</h2>
            <p className="text-sm max-w-[480px] text-muted transition-colors group-hover:text-[#3A3826]">{s.desc}</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {s.tags.map((t) => (
              <span key={t} className="font-mono text-[11px] border border-ink px-3.5 py-1.5 rounded-full bg-white transition-colors group-hover:bg-cream">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-12 pt-2">
        <Link
          href={services.cta.href}
          className="group font-mono font-bold text-sm bg-lime border-2 border-ink px-6 py-3.5 rounded-full inline-block transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#14120D]"
        >
          {services.cta.label} <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
