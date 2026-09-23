// Single entry point for all site copy. Edit the JSON files in /content, not the components.
import siteJson from '@/content/site.json';
import layoutJson from '@/content/layout.json';
import homeJson from '@/content/home.json';
import servicesJson from '@/content/services.json';
import workJson from '@/content/work.json';
import contactJson from '@/content/contact.json';

export type Accent = 'lime' | 'mint' | 'gold';

export const site = siteJson;
export const layout = layoutJson;
export const services = servicesJson;
export const work = workJson;
export const contact = contactJson;

// JSON imports widen string unions to `string`; narrow the accent colors back.
export const home = {
  ...homeJson,
  manifesto: {
    ...homeJson.manifesto,
    statements: homeJson.manifesto.statements.map((s) => ({ ...s, color: s.color as Accent })),
  },
};
