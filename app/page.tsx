import Link from 'next/link';
import MetaRow from '@/components/MetaRow';
import WorkCarousel from '@/components/WorkCarousel';
import CommandPaletteHint from '@/components/CommandPaletteHint';
import { projects } from '@/lib/projects';

const services = [
  { idx: '01', name: 'FRONTEND', desc: "Web apps that don't lag. React, Next.js, design systems, accessibility built in.", tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT'] },
  { idx: '02', name: 'SHOPIFY', desc: 'High-performance storefronts, custom sections, subscription flows.', tags: ['SHOPIFY 2.0', 'LIQUID', 'VUE.JS'] },
  { idx: '03', name: 'SCRAPING & BOTS', desc: 'Data extraction pipelines and automation for the repetitive stuff.', tags: ['NODE.JS', 'APIS'] },
  { idx: '04', name: 'PERFORMANCE & A11Y', desc: 'Core Web Vitals, load-time fixes, WCAG-checked accessibility.', tags: ['LIGHTHOUSE', 'WEB VITALS', 'WCAG'] },
];

const steps = [
  { n: '01', t: 'SCOPE CALL', d: 'What you need, honestly assessed.' },
  { n: '02', t: 'PROPOSAL', d: 'Clear scope, timeline, price.' },
  { n: '03', t: 'BUILD', d: 'Regular updates, no silence.' },
  { n: '04', t: 'HANDOFF', d: 'Clean code, documented, yours.' },
];

export default function Home() {
  return (
    <>
      <div className="max-w-[1080px] mx-auto px-7">
        <MetaRow />

        {/* Hero */}
        <section className="relative py-10 sm:py-16">
          <div className="hidden lg:flex flex-col gap-4 absolute right-0 top-6 w-[210px] border-2 border-ink rounded-2xl bg-white p-5">
            <div>
              <div className="font-mono text-[11px] text-muted mb-1">YEARS BUILDING</div>
              <div className="display text-3xl">7+</div>
            </div>
            <div className="border-t-2 border-dashed border-line pt-4">
              <div className="font-mono text-[11px] text-muted mb-1">SERVICES</div>
              <div className="display text-3xl">5</div>
            </div>
            <div className="border-t-2 border-dashed border-line pt-4">
              <div className="font-mono text-[11px] text-muted mb-1">AVAILABILITY</div>
              <div className="display text-xl text-[#5C8A3A]">OPEN</div>
            </div>
            <div className="border-t-2 border-dashed border-line pt-4">
              <div className="font-mono text-[11px] text-muted mb-1">BASED</div>
              <div className="text-sm font-semibold">Remote — Worldwide</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-muted mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
            FRONTEND ENGINEER — FREELANCE
          </div>
          <h1 className="display text-[clamp(64px,14vw,176px)] leading-[0.84]">
            <span className="relative inline-block">
              SHUBHAM
              <span
                aria-hidden
                className="absolute left-full bottom-0 -translate-x-1/2 translate-y-1/2 w-[clamp(80px,11vw,150px)] h-[clamp(80px,11vw,150px)] rounded-full bg-lime border-2 border-ink flex items-center justify-center display text-base sm:text-2xl z-10"
              >
                DEV
              </span>
            </span>
            <span className="block">
              <span className="inline-block bg-lime px-4 sm:px-6 rounded-lg">BHATT</span>
            </span>
          </h1>
          <p className="max-w-[560px] text-base sm:text-lg text-muted mt-8">
            I build fast, accessible web apps and Shopify storefronts — from retail analytics
            dashboards to e-commerce platforms. Currently taking on new freelance projects.
          </p>
          <div className="flex items-center gap-5 flex-wrap pt-7 sm:pt-8">
            <div className="flex gap-3">
              <Link
                href="/work"
                className="group font-mono font-bold text-sm bg-lime border-2 border-ink px-6 py-3.5 rounded-full transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#14120D]"
              >
                VIEW WORK <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/services"
                className="font-mono font-bold text-sm border-2 border-ink px-6 py-3.5 rounded-full transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#14120D]"
              >
                WHY IT MATTERS
              </Link>
            </div>
            <CommandPaletteHint />
          </div>
        </section>
      </div>

      {/* Manifesto — plain-English statements */}
      <section className="grain bg-dark text-cream py-16 mt-10">
        <div className="max-w-[1080px] mx-auto px-7">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#9C9788] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
            MANIFESTO
          </div>

          <div>
            <h3 className="display text-[clamp(34px,6vw,60px)] leading-[1.05]">
              I BUILD <span className="text-lime">FAST.</span>
            </h3>
            <p className="text-[#B7B2A2] text-sm sm:text-base mt-2 max-w-[520px]">
              Core Web Vitals treated as a requirement, not an afterthought.
            </p>
          </div>

          <div className="border-t border-[#3A3826] mt-8 pt-8 sm:mt-10 sm:pt-10">
            <h3 className="display text-[clamp(34px,6vw,60px)] leading-[1.05]">
              I BUILD <span className="text-mint">ACCESSIBLE.</span>
            </h3>
            <p className="text-[#B7B2A2] text-sm sm:text-base mt-2 max-w-[520px]">
              Keyboard navigation, screen readers, and contrast — checked, not bolted on after.
            </p>
          </div>

          <div className="border-t border-[#3A3826] mt-8 pt-8 sm:mt-10 sm:pt-10">
            <h3 className="display text-[clamp(34px,6vw,60px)] leading-[1.05]">
              I AUTOMATE <span className="text-gold">EVERYTHING.</span>
            </h3>
            <p className="text-[#B7B2A2] text-sm sm:text-base mt-2 max-w-[520px]">
              Scraping, bots, and repetitive work handled — so the important decisions get the
              attention.
            </p>
          </div>

          <p className="max-w-[560px] text-[#B7B2A2] text-[15px] mt-10 sm:mt-12 border-t border-[#3A3826] pt-8">
            7 years across companies, agencies, and products — retail analytics platforms to
            e-commerce storefronts. One person across frontend, Shopify, scraping, bots,
            performance, and accessibility. Nothing lost between departments that don&apos;t exist.
          </p>
        </div>
      </section>

      <div className="max-w-[1080px] mx-auto px-7">
        {/* Services preview */}
        <section className="py-14 dashed-b">
          <div className="flex justify-between items-baseline mb-7 flex-wrap gap-2">
            <div className="flex items-baseline gap-3.5">
              <span className="font-mono text-muted text-sm">(01)</span>
              <h2 className="display text-[clamp(30px,5vw,46px)]">WHAT I WORK WITH</h2>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
              THE TOOLBOX
            </span>
          </div>

          {services.map((s) => (
            <div
              key={s.idx}
              className="group grid sm:grid-cols-[60px_1fr_auto] gap-5 items-center -mx-7 px-7 py-6 rounded-md border-t-2 border-dashed border-line transition-colors hover:bg-lime hover:border-t-transparent"
            >
              <div className="display text-3xl text-[#C9C2AF] transition-colors group-hover:text-ink group-hover:opacity-40">{s.idx}</div>
              <div>
                <h3 className="display text-2xl sm:text-3xl mb-1.5">{s.name}</h3>
                <p className="text-sm max-w-[420px] text-muted transition-colors group-hover:text-[#3A3826]">{s.desc}</p>
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
          <div className="pt-6">
            <Link href="/services" className="font-mono text-xs underline">
              See full services breakdown →
            </Link>
          </div>
        </section>

        {/* Selected work strip */}
        <section className="py-14 dashed-b">
          <div className="flex justify-between items-baseline mb-7 flex-wrap gap-2">
            <div className="flex items-baseline gap-3.5">
              <span className="font-mono text-muted text-sm">(02)</span>
              <h2 className="display text-[clamp(30px,5vw,46px)]">SELECTED WORK</h2>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-mint" aria-hidden="true" />
              SCROLL SIDEWAYS →
            </span>
          </div>
          <WorkCarousel projects={projects} />
        </section>

        {/* Process */}
        <section className="py-14">
          <div className="flex justify-between items-baseline mb-10 flex-wrap gap-2">
            <div className="flex items-baseline gap-3.5">
              <span className="font-mono text-muted text-sm">(03)</span>
              <h2 className="display text-[clamp(30px,5vw,46px)]">HOW THE WORK GOES</h2>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
              4 STEPS, NO SURPRISES
            </span>
          </div>
          <div className="relative flex flex-col sm:flex-row justify-between gap-8 sm:gap-4">
            <div className="hidden sm:block absolute top-11 left-11 right-11 border-t-2 border-dashed border-line z-0" />
            {steps.map((s) => (
              <div key={s.n} className="group relative z-10 text-center flex-1">
                <div className="w-[88px] h-[88px] rounded-full border-2 border-ink bg-cream flex items-center justify-center display text-2xl mx-auto mb-4 transition-colors group-hover:bg-lime">
                  {s.n}
                </div>
                <h3 className="text-base font-semibold mb-1.5">{s.t}</h3>
                <p className="text-xs text-muted max-w-[160px] mx-auto">{s.d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
