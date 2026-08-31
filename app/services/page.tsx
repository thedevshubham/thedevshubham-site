import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Frontend, Shopify, scraping & bots, performance and accessibility work.',
};

const services = [
  {
    idx: '01',
    name: 'FRONTEND & WEB APPS',
    desc: 'Custom web application development — dashboards, internal tools, customer-facing products. Built with React and Next.js, with accessibility considered from the start, not bolted on after.',
    tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT'],
  },
  {
    idx: '02',
    name: 'SHOPIFY & E-COMMERCE',
    desc: 'High-performance Shopify 2.0 storefronts — custom sections, subscription flows, product configurators. Built for speed and conversion, not just to look good.',
    tags: ['SHOPIFY 2.0', 'LIQUID', 'VUE.JS'],
  },
  {
    idx: '03',
    name: 'WEB SCRAPING & BOTS',
    desc: 'Data extraction pipelines and automation for repetitive manual work — pricing checks, data collection, scheduled reports.',
    tags: ['NODE.JS', 'APIS'],
  },
  {
    idx: '04',
    name: 'PERFORMANCE OPTIMIZATION',
    desc: 'Core Web Vitals audits and fixes — code splitting, lazy loading, bundle size reduction. The unglamorous work that actually moves the needle on load time.',
    tags: ['LIGHTHOUSE', 'WEB VITALS', 'WEBPACK'],
  },
  {
    idx: '05',
    name: 'ACCESSIBILITY (A11Y)',
    desc: 'WCAG-checked accessibility audits and remediation — keyboard navigation, screen reader support, contrast fixes. The thing most sites skip.',
    tags: ['WCAG', 'ARIA', 'AXE'],
  },
];

export default function Services() {
  return (
    <div className="max-w-[1080px] mx-auto px-7 py-14">
      <h1 className="display text-[clamp(36px,6vw,58px)] mb-3">SERVICES</h1>
      <p className="text-muted max-w-[520px] mb-10">
        One person across the frontend stack — no handoffs, no departments, no lost context
        between them.
      </p>

      {services.map((s) => (
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
          href="/contact"
          className="group font-mono font-bold text-sm bg-lime border-2 border-ink px-6 py-3.5 rounded-full inline-block transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#14120D]"
        >
          GET IN TOUCH <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
