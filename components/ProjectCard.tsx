import Link from 'next/link';
import { Project } from '@/lib/projects';

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
      className={`group bg-white text-forest-green ${widthClass} border-2 border-forest-green flex-shrink-0 snap-start flex flex-col hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#CC5500] focus-visible:shadow-[4px_4px_0_0_#CC5500] transition-[transform,box-shadow] duration-150 ${
        large ? 'min-h-[420px] p-7 sm:p-9 rounded-3xl' : 'min-h-[260px] p-6 rounded-2xl'
      }`}
    >
      <div className="flex items-center justify-between mb-4 text-burnt-orange">
        <span className={`font-mono ${large ? 'text-sm' : 'text-xs'}`}>{project.num}</span>
        <span aria-hidden="true" className="text-2xl transition-transform group-hover:translate-x-1">↗</span>
      </div>
      <h3 className={`display mb-3 ${large ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}>{project.name}</h3>
      <span aria-hidden="true" className="block w-12 h-1 bg-burnt-orange mb-5" />
      <p className={`mb-4 ${large ? 'text-base sm:text-lg max-w-[90%]' : 'text-sm'}`}>{project.summary}</p>
      <div className="mt-auto">
        <div className="border-t-2 border-dashed border-forest-green/30 mb-4" />
        <div className={`font-mono font-bold ${large ? 'text-sm' : 'text-xs'}`}>{project.stack.join(' · ')}</div>
      </div>
    </Link>
  );
}
