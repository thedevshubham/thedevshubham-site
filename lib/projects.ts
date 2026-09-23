import projectsJson from '@/content/projects.json';
import type { Accent } from '@/lib/content';

export type Project = {
  slug: string;
  num: string;
  name: string;
  color: Accent;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  liveUrl?: string;
  embeddable: boolean; // set false if the site blocks iframes — falls back to a link-only card
  screenshot?: string; // static fallback image shown when embeddable is false
};

// Content lives in /content/projects.json
export const projects = projectsJson as Project[];
