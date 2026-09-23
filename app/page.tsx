import Link from 'next/link';
import MetaRow from '@/components/MetaRow';
import WorkCarousel from '@/components/WorkCarousel';
import CommandPaletteHint from '@/components/CommandPaletteHint';
import { projects } from '@/lib/projects';
import { home, type Accent } from '@/lib/content';

const { stats, hero, manifesto, services, work, process } = home;

const accentText: Record<Accent, string> = {
  lime: 'text-lime',
  mint: 'text-mint',
  gold: 'text-gold',
};

export default function Home() {
  return (
    <>
      <div className="max-w-[1080px] mx-auto px-7">
        <MetaRow />

        {/* Hero */}
        <section className="relative py-10 sm:py-16">
          <div className="hidden lg:flex flex-col gap-4 absolute right-0 top-6 w-[210px] border-2 border-ink rounded-2xl bg-white p-5">
            {stats.map((stat, i) => (
              <div key={stat.label} className={i > 0 ? 'border-t-2 border-dashed border-line pt-4' : undefined}>
                <div className="font-mono text-[11px] text-muted mb-1">{stat.label}</div>
                {stat.variant === 'status' ? (
                  <div className="display text-xl text-[#5C8A3A]">{stat.value}</div>
                ) : stat.variant === 'text' ? (
                  <div className="text-sm font-semibold">{stat.value}</div>
                ) : (
                  <div className="display text-3xl">{stat.value}</div>
                )}
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-muted mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
            {hero.eyebrow}
          </div>
          <h1 className="display text-[clamp(64px,14vw,176px)] leading-[0.84]">
            <span className="relative inline-block">
              {hero.firstName}
              <span
                aria-hidden
                className="absolute left-full bottom-0 -translate-x-1/2 translate-y-1/2 w-[clamp(80px,11vw,150px)] h-[clamp(80px,11vw,150px)] rounded-full bg-lime border-2 border-ink flex items-center justify-center display text-base sm:text-2xl z-10"
              >
                {hero.badge}
              </span>
            </span>
            <span className="block">
              <span className="inline-block bg-lime px-4 sm:px-6 rounded-lg">{hero.lastName}</span>
            </span>
          </h1>
          <p className="max-w-[560px] text-base sm:text-lg text-muted mt-8">{hero.intro}</p>
          <div className="flex items-center gap-5 flex-wrap pt-7 sm:pt-8">
            <div className="flex gap-3">
              <Link
                href={hero.primaryCta.href}
                className="group font-mono font-bold text-sm bg-lime border-2 border-ink px-6 py-3.5 rounded-full transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#14120D]"
              >
                {hero.primaryCta.label} <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="font-mono font-bold text-sm border-2 border-ink px-6 py-3.5 rounded-full transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#14120D]"
              >
                {hero.secondaryCta.label}
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
            {manifesto.eyebrow}
          </div>

          {manifesto.statements.map((s, i) => (
            <div key={s.highlight} className={i > 0 ? 'border-t border-[#3A3826] mt-8 pt-8 sm:mt-10 sm:pt-10' : undefined}>
              <h3 className="display text-[clamp(34px,6vw,60px)] leading-[1.05]">
                {s.lead} <span className={accentText[s.color]}>{s.highlight}</span>
              </h3>
              <p className="text-[#B7B2A2] text-sm sm:text-base mt-2 max-w-[520px]">{s.desc}</p>
            </div>
          ))}

          <p className="max-w-[560px] text-[#B7B2A2] text-[15px] mt-10 sm:mt-12 border-t border-[#3A3826] pt-8">
            {manifesto.closing}
          </p>
        </div>
      </section>

      <div className="max-w-[1080px] mx-auto px-7">
        {/* Services preview */}
        <section className="py-14 dashed-b">
          <div className="flex justify-between items-baseline mb-7 flex-wrap gap-2">
            <div className="flex items-baseline gap-3.5">
              <span className="font-mono text-muted text-sm">{services.num}</span>
              <h2 className="display text-[clamp(30px,5vw,46px)]">{services.title}</h2>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
              {services.eyebrow}
            </span>
          </div>

          {services.items.map((s) => (
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
            <Link href={services.link.href} className="font-mono text-xs underline">
              {services.link.label}
            </Link>
          </div>
        </section>

        {/* Selected work strip */}
        <section className="py-14 dashed-b">
          <div className="flex justify-between items-baseline mb-7 flex-wrap gap-2">
            <div className="flex items-baseline gap-3.5">
              <span className="font-mono text-muted text-sm">{work.num}</span>
              <h2 className="display text-[clamp(30px,5vw,46px)]">{work.title}</h2>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-mint" aria-hidden="true" />
              {work.eyebrow}
            </span>
          </div>
          <WorkCarousel projects={projects} />
        </section>

        {/* Process */}
        <section className="py-14">
          <div className="flex justify-between items-baseline mb-10 flex-wrap gap-2">
            <div className="flex items-baseline gap-3.5">
              <span className="font-mono text-muted text-sm">{process.num}</span>
              <h2 className="display text-[clamp(30px,5vw,46px)]">{process.title}</h2>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
              {process.eyebrow}
            </span>
          </div>
          <div className="relative flex flex-col sm:flex-row justify-between gap-8 sm:gap-4">
            <div className="hidden sm:block absolute top-11 left-11 right-11 border-t-2 border-dashed border-line z-0" />
            {process.steps.map((s) => (
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
