'use client';

import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '@/lib/projects';

export default function WorkCarousel({ projects }: { projects: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 1) {
        setActive(cards.length - 1);
        return;
      }
      let closest = 0;
      let closestDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - el.scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      <div
        ref={scrollerRef}
        className="relative flex gap-5 overflow-x-auto pt-2 pb-4 pr-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} size="large" wide={i % 2 === 0} />
        ))}
      </div>
      <div className="flex gap-2 pt-2" aria-hidden="true">
        {projects.map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={`w-2.5 h-2.5 rounded-full border transition-colors ${
              i === active ? 'bg-burnt-orange border-burnt-orange' : 'bg-white border-forest-green'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
