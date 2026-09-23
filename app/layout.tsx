import type { Metadata } from 'next';
import { Big_Shoulders_Display, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import CommandPalette from '@/components/CommandPalette';
import { site } from '@/lib/content';

const display = Big_Shoulders_Display({ subsets: ['latin'], variable: '--font-display' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jbmono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jbmono' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: site.titleTemplate,
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.ogDescription,
    url: site.url,
    siteName: site.handle,
    type: 'website',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  alternateName: site.handle,
  jobTitle: site.jobTitle,
  url: site.url,
  sameAs: Object.values(site.socials).map((s) => s.url),
  knowsAbout: site.knowsAbout,
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
        <Analytics />
      </body>
    </html>
  );
}
