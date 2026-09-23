import Link from 'next/link';
import { layout, site } from '@/lib/content';

const { eyebrow, cta, location } = layout.footer;
const { github } = site.socials;

export default function Footer() {
  return (
    <footer className="grain bg-dark text-cream py-16">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#9C9788] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
          {eyebrow}
        </div>
        <Link
          href={cta.href}
          className="display text-lime text-[clamp(48px,9vw,96px)] flex items-center gap-6 leading-none w-fit"
        >
          {cta.label}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
        <div className="mt-8 font-mono text-xs text-[#9C9788] flex flex-wrap justify-between gap-2.5">
          <span>
            {github.label}:{' '}
            <a href={github.url} className="underline">
              {github.handle}
            </a>
          </span>
          <span>{location}</span>
        </div>
      </div>
    </footer>
  );
}
