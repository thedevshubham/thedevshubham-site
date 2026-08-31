import Link from 'next/link';
import { Project } from '@/lib/projects';

const colorClass: Record<Project['color'], string> = {
  lime: 'bg-lime',
  mint: 'bg-mint',
  gold: 'bg-gold',
};

export default function ProjectCard({
  project,
  size = 'default',
  wide = false,
}: {
  project: Project;
  size?: 'default' | 'large';
  wide?: boolean;
}) {
  const large = size === 'large';
  const widthClass = large
    ? wide
      ? 'w-[320px] sm:w-[440px] lg:w-[520px]'
      : 'w-[300px] sm:w-[380px] lg:w-[420px]'
    : 'w-full';
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`${colorClass[project.color]} ${widthClass} border-2 border-ink flex-shrink-0 snap-start flex flex-col hover:-translate-y-1 transition-transform ${
        large ? 'min-h-[420px] p-7 sm:p-9 rounded-3xl' : 'min-h-[260px] p-6 rounded-2xl'
      }`}
    >
      <div className={`font-mono opacity-70 mb-4 ${large ? 'text-sm' : 'text-xs'}`}>{project.num}</div>
      <h3 className={`display mb-3 ${large ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}>{project.name}</h3>
      <p className={`mb-4 ${large ? 'text-base sm:text-lg max-w-[90%]' : 'text-sm'}`}>{project.summary}</p>
      <div className="mt-auto">
        <div className="border-t-2 border-dashed border-ink/30 mb-4" />
        <div className={`font-mono font-bold ${large ? 'text-sm' : 'text-xs'}`}>{project.stack.join(' · ')}</div>
      </div>
    </Link>
  );
}
