import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { BUSINESS_DATA } from '@/data/content';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata: Metadata = {
  metadataBase: new URL("https://piringos-parties.vercel.app"),
  title: "Piringos Parties | Delega el estrés de la comida infantil",
  description: "Cajas premium, 100% caseras y entregadas con puntualidad perfecta en Tampico, Madero y Altamira. Cada niño recibe su caja espectacular lista para disfrutar.",
  alternates: { canonical: "https://piringos-parties.vercel.app" },
  openGraph: {
    title: "Piringos Parties | Delega el estrés de la comida infantil",
    description: "Cajas premium, 100% caseras y entregadas con puntualidad perfecta. Tú disfrutas la fiesta, cada niño recibe su caja espectacular.",
    url: "https://piringos-parties.vercel.app",
    siteName: "Piringos Parties",
    images: [{ 
      url: "https://piringos-parties.vercel.app/og-image.jpg", 
      width: 1200, 
      height: 630,
      alt: "Piringos Parties Box Lunch Premium"
    }],
    locale: "es_MX",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Piringos Parties | Delega el estrés de la comida",
    description: "Cajas infantiles premium, 100% caseras y entregadas con puntualidad perfecta en Tampico, Madero y Altamira.",
    images: ["https://piringos-parties.vercel.app/og-image.jpg"]
  },
  icons: { 
    icon: "/app-icon.png",
    shortcut: "/app-icon.png",
    apple: "/apple-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": BUSINESS_DATA.name,
    "description": "Cajas de comida infantil personalizadas para eventos y fiestas infantiles",
    "telephone": BUSINESS_DATA.phone,
    "areaServed": BUSINESS_DATA.zones,
    "servesCuisine": "Comida infantil",
    "sameAs": [BUSINESS_DATA.instagram, BUSINESS_DATA.facebook],
    "priceRange": "$68 - $90"
  };

  return (
    <html lang="es" className={`${nunito.variable}`}>
       <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
