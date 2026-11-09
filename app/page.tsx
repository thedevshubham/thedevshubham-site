import Link from 'next/link';
import MetaRow from '@/components/MetaRow';
import WorkCarousel from '@/components/WorkCarousel';
import CommandPaletteHint from '@/components/CommandPaletteHint';
import { projects } from '@/lib/projects';
import { home, type Accent } from '@/lib/content';

const { stats, hero, manifesto, services, work, process } = home;

const accentText: Record<Accent, string> = {
  lime: 'text-forest-green',
  mint: 'text-forest-green',
  gold: 'text-forest-green',
};

export default function Home() {
  return (
    <>
      <div className="max-w-[1080px] mx-auto px-7">
        <MetaRow />

        {/* Hero */}
        <section className="relative py-10 sm:py-16">
          <div className="hidden lg:flex flex-col gap-4 absolute right-0 top-6 w-[210px] p-5">
            {stats.map((stat, i) => (
              <div key={stat.label} className={i > 0 ? 'border-t-2 border-dashed border-line pt-4' : undefined}>
                <div className="font-mono text-[11px] text-forest-green mb-1">{stat.label}</div>
                {stat.variant === 'status' ? (
                  <div className="inline-block -rotate-3 border-2 border-burnt-orange rounded-md px-3 py-2 my-2 font-mono text-xs font-bold leading-snug text-burnt-orange">{stat.value}</div>
                ) : stat.variant === 'text' ? (
                  <div className="text-sm font-semibold">{stat.value}</div>
                ) : (
                  <div className="display text-3xl">{stat.value}</div>
                )}
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-forest-green mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange" aria-hidden="true" />
            {hero.eyebrow}
          </div>
          <h1 className="display text-[clamp(64px,14vw,176px)] leading-[0.84]">
            <span className="relative inline-block">
              {hero.firstName}
            </span>
            <span className="block">
              <span className="relative inline-block pb-[clamp(10px,1.5vw,20px)]">
                {hero.lastName}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 64 64"
                  className="absolute left-full top-1/4 ml-3 sm:ml-5 w-[clamp(28px,5vw,64px)] h-[clamp(28px,5vw,64px)] rotate-12 text-burnt-orange"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                >
                  <path d="M32 6 L31 58 M9 19 L55 45 M10 46 L54 18" />
                </svg>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 24"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 left-0 w-full h-[clamp(10px,1.5vw,20px)] text-burnt-orange"
                  fill="none"
                >
                  <path className="hero-underline" pathLength="1" d="M4 5 Q200 29 396 5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </h1>
          <p className="max-w-[560px] text-base sm:text-lg text-forest-green mt-8">{hero.intro}</p>
          <div className="flex items-center gap-5 flex-wrap pt-7 sm:pt-8">
            <div className="flex gap-3">
              <Link
                href={hero.primaryCta.href}
                className="group font-mono font-bold text-sm bg-burnt-orange text-white border-2 border-ink px-6 py-3.5 rounded-full transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#14120D]"
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
      <section className="grain bg-white text-forest-green py-16 mt-10">
        <div className="max-w-[1080px] mx-auto px-7">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-forest-green mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange" aria-hidden="true" />
            {manifesto.eyebrow}
          </div>

          {manifesto.statements.map((s, i) => (
            <div key={s.highlight} className={i > 0 ? 'border-t border-[#3A3826] mt-8 pt-8 sm:mt-10 sm:pt-10' : undefined}>
              <h3 className="display text-[clamp(34px,6vw,60px)] leading-[1.05]">
                {s.lead} <span className={accentText[s.color]}>{s.highlight}</span>
              </h3>
              <p className="text-forest-green text-sm sm:text-base mt-2 max-w-[520px]">{s.desc}</p>
            </div>
          ))}

          <p className="max-w-[560px] text-forest-green text-[15px] mt-10 sm:mt-12 border-t border-[#3A3826] pt-8">
            {manifesto.closing}
          </p>
        </div>
      </section>

      <div className="max-w-[1080px] mx-auto px-7">
        {/* Services preview */}
        <section className="py-14 dashed-b">
          <div className="flex justify-between items-baseline mb-7 flex-wrap gap-2">
            <div className="flex items-baseline gap-3.5">
              <span className="font-mono text-forest-green text-sm">{services.num}</span>
              <h2 className="display text-[clamp(30px,5vw,46px)]">{services.title}</h2>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-forest-green">
              <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange" aria-hidden="true" />
              {services.eyebrow}
            </span>
          </div>

          {services.items.map((s) => (
            <div
              key={s.idx}
              className="group grid sm:grid-cols-[60px_1fr_auto] gap-5 items-center -mx-7 px-7 py-6 rounded-md border-t-2 border-dashed border-line"
            >
              <div className="display text-3xl text-forest-green transition-colors group-hover:text-forest-green ">{s.idx}</div>
              <div>
                <h3 className="display text-2xl sm:text-3xl mb-1.5">{s.name}</h3>
                <p className="text-sm max-w-[420px] text-forest-green transition-colors group-hover:text-forest-green">{s.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {s.tags.map((t) => (
                  <span key={t} className="font-mono text-[11px] border border-ink px-3.5 py-1.5 rounded-full bg-white transition-colors group-hover:bg-white">
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
              <span className="font-mono text-forest-green text-sm">{work.num}</span>
              <h2 className="display text-[clamp(30px,5vw,46px)]">{work.title}</h2>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-forest-green">
              <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange" aria-hidden="true" />
              {work.eyebrow}
            </span>
          </div>
          <WorkCarousel projects={projects} />
        </section>

        {/* Process */}
        <section className="py-14">
          <div className="flex justify-between items-baseline mb-10 flex-wrap gap-2">
            <div className="flex items-baseline gap-3.5">
              <span className="font-mono text-forest-green text-sm">{process.num}</span>
              <h2 className="display text-[clamp(30px,5vw,46px)]">{process.title}</h2>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-forest-green">
              <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange" aria-hidden="true" />
              {process.eyebrow}
            </span>
          </div>
          <div className="relative flex flex-col sm:flex-row justify-between gap-8 sm:gap-4">
            <div className="hidden sm:block absolute top-11 left-11 right-11 border-t-2 border-dashed border-line z-0" />
            {process.steps.map((s) => (
              <div key={s.n} className="group relative z-10 text-center flex-1">
                <div className="w-[88px] h-[88px] rounded-full border-2 border-forest-green bg-white flex items-center justify-center display text-2xl mx-auto mb-4 transition-colors group-hover:bg-burnt-orange group-hover:text-white">
                  {s.n}
                </div>
                <h3 className="text-base font-semibold mb-1.5">{s.t}</h3>
                <p className="text-xs text-forest-green max-w-[160px] mx-auto">{s.d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
