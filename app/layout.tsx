import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { BUSINESS_DATA } from '@/data/content';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata: Metadata = {
  metadataBase: new URL("https://piringosparties.com"),
  title: "Piringos Parties | Cajas de comida infantil en Tampico, Ciudad Madero y Altamira",
  description: "Cajas de comida infantil personalizadas para fiestas y eventos en Tampico, Madero y Altamira. Pedido fácil por WhatsApp. 5 paquetes desde $68.",
  alternates: { canonical: "https://piringosparties.com" },
  openGraph: {
    title: "Piringos Parties | Cajas de comida infantil",
    description: "Cajas de comida infantil personalizadas para fiestas y eventos en Tampico, Madero y Altamira. Pedido fácil por WhatsApp.",
    url: "https://piringosparties.com",
    siteName: "Piringos Parties",
    images: [{ url: "/hero-box.jpeg", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website"
  },
  icons: { icon: "/favicon.ico" }
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
