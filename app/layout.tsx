import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { BUSINESS_DATA, SITE_CONFIG, SITE_METADATA } from '@/data/content';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_METADATA.openGraph.title,
    description: SITE_METADATA.openGraph.description,
    url: '/',
    siteName: SITE_CONFIG.siteName,
    locale: SITE_CONFIG.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_METADATA.twitter.title,
    description: SITE_METADATA.twitter.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: BUSINESS_DATA.name,
    description: 'Cajas de comida infantil personalizadas para eventos y fiestas infantiles',
    telephone: BUSINESS_DATA.phone,
    areaServed: BUSINESS_DATA.zones,
    servesCuisine: 'Comida infantil',
    sameAs: [BUSINESS_DATA.instagram, BUSINESS_DATA.facebook],
    priceRange: BUSINESS_DATA.priceRange,
  };

  return (
    <html lang="es" className={nunito.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
