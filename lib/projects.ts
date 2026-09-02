export type Project = {
  slug: string;
  num: string;
  name: string;
  color: 'lime' | 'mint' | 'gold';
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  liveUrl?: string;
  embeddable: boolean; // set false if the site blocks iframes — falls back to a link-only card
};

export const projects: Project[] = [
  {
    slug: 'byzzer',
    num: '№01',
    name: 'Byzzer',
    color: 'lime',
    summary: 'Retail analytics platform — interactive dashboards, grids, and data visualization for emerging brands.',
    problem: 'Complex market data needed to be usable by non-technical retail brand teams, not just analysts.',
    approach: 'Built data-intensive dashboards with charts, grids, and interactive workflows using React and TypeScript, optimizing rendering for large datasets.',
    outcome: 'A dashboard experience that turns dense market data into decisions emerging brands can actually act on.',
    stack: ['React', 'TypeScript', 'SCSS'],
    embeddable: false,
  },
  {
    slug: 'stio-apparel',
    num: '№02',
    name: 'Stio Apparel',
    color: 'mint',
    summary: 'High-performance Shopify 2.0 storefront with custom sections and A/B testing.',
    problem: 'Storefront performance and mobile experience were holding back conversion on a high-traffic apparel site.',
    approach: 'Rebuilt key storefront sections on Shopify 2.0 with custom performance work — code splitting, lazy loading, and A/B testing infrastructure.',
    outcome: 'A faster, more considered mobile shopping experience across the storefront.',
    stack: ['Shopify 2.0', 'Liquid', 'Vue.js'],
    embeddable: false,
    liveUrl: 'https://www.stio.com',
  },
  {
    slug: 'dropps',
    num: '№03',
    name: 'Dropps',
    color: 'gold',
    summary: 'Responsive Shopify storefront with subscription flows and custom product configurations.',
    problem: 'Subscription and custom product configuration needed to feel simple despite complex underlying logic.',
    approach: 'Built responsive subscription flows and custom product configuration UI on Shopify 2.0 with React and TypeScript.',
    outcome: 'A subscription experience that hides its complexity behind a simple, guided flow.',
    stack: ['Shopify 2.0', 'React', 'TypeScript'],
    embeddable: false,
    liveUrl: 'https://www.dropps.com',
  },
  {
    slug: 'sunbelt-rentals',
    num: '№04',
    name: 'Sunbelt Rentals',
    color: 'lime',
    summary: 'React + Adobe Experience Manager platform for equipment rentals and e-commerce.',
    problem: 'An enterprise equipment rental catalog needed a modern e-commerce layer on top of an AEM content backend.',
    approach: 'Built the frontend in React, integrated with AEM and GraphQL to bridge content management and e-commerce functionality.',
    outcome: 'A modern rental and e-commerce experience layered cleanly onto enterprise infrastructure.',
    stack: ['React', 'JavaScript', 'AEM', 'GraphQL'],
    embeddable: false,
    liveUrl: 'https://www.sunbeltrentals.com/',
  },
];
