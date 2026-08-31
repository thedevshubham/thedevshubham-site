import type { Metadata } from 'next';
import { Big_Shoulders_Display, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import CommandPalette from '@/components/CommandPalette';

const display = Big_Shoulders_Display({ subsets: ['latin'], variable: '--font-display' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jbmono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jbmono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://thedevshubham.com'),
  title: {
    default: 'Shubham Bhatt (thedevshubham) — Frontend Engineer',
    template: '%s · thedevshubham',
  },
  description:
    'Frontend engineer building fast, accessible web apps and Shopify storefronts. Web apps, e-commerce, scraping, automation, performance and accessibility.',
  openGraph: {
    title: 'Shubham Bhatt (thedevshubham) — Frontend Engineer',
    description:
      'Frontend engineer building fast, accessible web apps and Shopify storefronts.',
    url: 'https://thedevshubham.com',
    siteName: 'thedevshubham',
    type: 'website',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shubham Bhatt',
  alternateName: 'thedevshubham',
  jobTitle: 'Frontend Engineer',
  url: 'https://thedevshubham.com',
  sameAs: [
    'https://github.com/thedevshubham',
    'https://instagram.com/thedevshubham',
    'https://x.com/thedevshubham',
  ],
  knowsAbout: [
    'Frontend Development',
    'Shopify Development',
    'Web Scraping',
    'Automation',
    'Web Performance',
    'Accessibility',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${inter.variable} ${jbmono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-cream text-ink font-body">
        <Marquee />
        <Nav />
        <main>{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
