import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { work } from '@/lib/content';

const copy = work.caseStudy;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

const colorClass: Record<string, string> = {
  lime: 'bg-burnt-orange',
  mint: 'bg-mint',
  gold: 'bg-gold',
};

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="max-w-[860px] mx-auto px-7 py-14">
      <Link href="/work" className="font-mono text-xs text-forest-green underline">
        {copy.back}
      </Link>

      <div className="font-mono text-xs text-forest-green mt-8 mb-3">{project.num}</div>
      <h1 className="display text-[clamp(40px,7vw,64px)] mb-5">{project.name}</h1>
      <div className="flex flex-wrap gap-2 mb-10">
        {project.stack.map((t) => (
          <span key={t} className="font-mono text-[11px] border border-ink px-3.5 py-1.5 rounded-full">
            {t}
          </span>
        ))}
      </div>

      {/* Live preview — iframe where allowed, fallback card otherwise */}
      <div className={`border-2 border-ink rounded-2xl overflow-hidden mb-10 ${colorClass[project.color]}`}>
        {project.embeddable && project.liveUrl ? (
          <iframe
            src={project.liveUrl}
            title={`Live preview of ${project.name}`}
            className="w-full h-[480px] bg-white"
            loading="lazy"
          />
        ) : project.screenshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.screenshot}
            alt={`Screenshot of the ${project.name} live site`}
            className="w-full h-auto block"
          />
        ) : (
          <div className="p-10 text-center bg-burnt-orange text-white">
            <p className="font-mono text-sm mb-4">{copy.noPreview}</p>
          </div>
        )}
        {project.liveUrl && (
          <div className="border-t-2 border-ink p-4 flex justify-between items-center bg-white">
            <span className="font-mono text-xs">{project.liveUrl.replace('https://', '')}</span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-bold underline"
            >
              {copy.openLive}
            </a>
          </div>
        )}
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="inline-flex items-center gap-2 font-mono text-xs text-forest-green mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${colorClass[project.color]}`} aria-hidden="true" />
            {copy.problem}
          </h2>
          <p className="text-[15.5px]">{project.problem}</p>
        </div>
        <div>
          <h2 className="inline-flex items-center gap-2 font-mono text-xs text-forest-green mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${colorClass[project.color]}`} aria-hidden="true" />
            {copy.approach}
          </h2>
          <p className="text-[15.5px]">{project.approach}</p>
        </div>
        <div>
          <h2 className="inline-flex items-center gap-2 font-mono text-xs text-forest-green mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${colorClass[project.color]}`} aria-hidden="true" />
            {copy.outcome}
          </h2>
          <p className="text-[15.5px]">{project.outcome}</p>
        </div>
      </div>

      <div className="mt-14 dashed-t pt-8">
        <Link
          href={copy.cta.href}
          className="group font-mono font-bold text-sm bg-burnt-orange text-white border-2 border-ink px-6 py-3.5 rounded-full inline-block transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#14120D]"
        >
          {copy.cta.label}{' '}
          <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
