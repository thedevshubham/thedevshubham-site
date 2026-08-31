import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';

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
  lime: 'bg-lime',
  mint: 'bg-mint',
  gold: 'bg-gold',
};

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="max-w-[860px] mx-auto px-7 py-14">
      <Link href="/work" className="font-mono text-xs text-muted underline">
        ← Back to work
      </Link>

      <div className="font-mono text-xs text-muted mt-8 mb-3">{project.num}</div>
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
        ) : (
          <div className="p-10 text-center">
            <p className="font-mono text-sm mb-4">
              This site doesn&apos;t allow embedded previews — take a look at the real thing instead.
            </p>
          </div>
        )}
        {project.liveUrl && (
          <div className="border-t-2 border-ink p-4 flex justify-between items-center bg-cream">
            <span className="font-mono text-xs">{project.liveUrl.replace('https://', '')}</span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-bold underline"
            >
              Open live site ↗
            </a>
          </div>
        )}
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="inline-flex items-center gap-2 font-mono text-xs text-muted mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${colorClass[project.color]}`} aria-hidden="true" />
            THE PROBLEM
          </h2>
          <p className="text-[15.5px]">{project.problem}</p>
        </div>
        <div>
          <h2 className="inline-flex items-center gap-2 font-mono text-xs text-muted mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${colorClass[project.color]}`} aria-hidden="true" />
            THE APPROACH
          </h2>
          <p className="text-[15.5px]">{project.approach}</p>
        </div>
        <div>
          <h2 className="inline-flex items-center gap-2 font-mono text-xs text-muted mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${colorClass[project.color]}`} aria-hidden="true" />
            THE OUTCOME
          </h2>
          <p className="text-[15.5px]">{project.outcome}</p>
        </div>
      </div>

      <div className="mt-14 dashed-t pt-8">
        <Link
          href="/contact"
          className="group font-mono font-bold text-sm bg-lime border-2 border-ink px-6 py-3.5 rounded-full inline-block transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#14120D]"
        >
          START A SIMILAR PROJECT{' '}
          <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
