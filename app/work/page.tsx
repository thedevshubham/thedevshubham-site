import type { Metadata } from 'next';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import { work } from '@/lib/content';

export const metadata: Metadata = work.meta;

export default function WorkIndex() {
  return (
    <div className="max-w-[1080px] mx-auto px-7 py-14">
      <h1 className="display text-[clamp(36px,6vw,58px)] mb-3">{work.title}</h1>
      <p className="text-muted max-w-[520px] mb-10">{work.intro}</p>
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
