export interface BusinessData {
  name: string;
  phone: string;
  whatsappUrl: string;
  instagram: string;
  facebook: string;
  zones: readonly string[];
  priceRange: string;
}

export interface SiteConfig {
  url: string;
  locale: string;
  siteName: string;
}

export interface SiteMetadataContent {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    alt: string;
  };
  twitter: {
    title: string;
    description: string;
    alt: string;
  };
}

export interface SharePreviewContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  proofPoints: readonly string[];
}

export interface HeroContent {
  h1: string;
  subtitle: string;
  cta: string;
  proofPoints: readonly string[];
}

export interface PackageTier {
  id: number;
  name: string;
  price: string;
  color: 'pink' | 'blue' | 'green' | 'purple' | 'cta';
  items: readonly string[];
  featured?: boolean;
  badge?: string;
}

export interface BenefitItem {
  title: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const BRAND_COLORS = {
  bg: '#f9f5f4',
  surface: '#f0de9d',
  text: '#2d1633',
  cta: '#e9ca3a',
  pink: '#ea5bc4',
  blue: '#4aa8b6',
  green: '#99daa5',
  purple: '#e77ecd',
  pale: '#e7bfcf',
} as const;

export const SITE_CONFIG = {
  url: 'https://piringos-parties.vercel.app',
  locale: 'es_MX',
  siteName: 'Piringos Parties',
} satisfies SiteConfig;

export const BUSINESS_DATA = {
  name: 'Piringos Parties',
  phone: '528338508988',
  whatsappUrl: 'https://wa.me/528338508988',
  instagram: 'https://www.instagram.com/piringosparties',
  facebook: 'https://www.facebook.com/share/18UrRn6RS5/',
  zones: ['Tampico', 'Ciudad Madero', 'Altamira'],
  priceRange: '$68 - $90',
} satisfies BusinessData;

export const SITE_METADATA = {
  title: 'Piringos Parties | Delega el estrés de la comida infantil',
  description:
    'Cajas premium, 100% caseras y entregadas con puntualidad perfecta en Tampico, Madero y Altamira. Cada niño recibe su caja espectacular lista para disfrutar.',
  openGraph: {
    title: 'Piringos Parties | Delega el estrés de la comida infantil',
    description:
      'Cajas premium, 100% caseras y entregadas con puntualidad perfecta. Tú disfrutas la fiesta, cada niño recibe su caja espectacular.',
    alt: 'Preview premium de Piringos Parties con logo y caja infantil personalizada.',
  },
  twitter: {
    title: 'Piringos Parties | Delega el estrés de la comida',
    description:
      'Cajas infantiles premium, 100% caseras y entregadas con puntualidad perfecta en Tampico, Madero y Altamira.',
    alt: 'Tarjeta social premium de Piringos Parties.',
  },
} satisfies SiteMetadataContent;

export const SHARE_PREVIEW = {
  eyebrow: 'Piringos Parties',
  headline: 'Cajas premium para eventos infantiles',
  subheadline:
    'Caseras, puntuales y personalizadas en Tampico · Ciudad Madero · Altamira.',
  proofPoints: ['100% caseras', 'Entrega puntual', 'Sticker personalizado'],
} satisfies SharePreviewContent;

export const HERO = {
  h1: 'Delega el estrés de la comida en tu evento infantil',
  subtitle:
    'Cajas premium, 100% caseras y entregadas con puntualidad perfecta en Tampico, Madero y Altamira. Cada niño recibe su caja lista y tú disfrutas la fiesta.',
  cta: 'Ver disponibilidad para mi fecha',
  proofPoints: ['Entrega puntual', 'Personalización en tu caja', 'Tampico · Madero · Altamira'],
} satisfies HeroContent;

export const SERVICES = [
  'Cumpleaños infantiles',
  'Eventos escolares',
  'Convivios de guardería',
  'Fiestas temáticas',
] as const;

export const PACKAGES = [
  {
    id: 1,
    name: 'Caja Clásica',
    price: '$75',
    color: 'pink',
    items: ['Cuernito o Sandwich', 'Jugo', 'Mini sabritas o fruta', 'Gelatina'],
  },
  {
    id: 2,
    name: 'Caja Favorita',
    price: '$78',
    color: 'blue',
    items: ['Hotdog', 'Jugo', 'Mini sabritas o fruta', 'Gelatina'],
    featured: true,
    badge: 'Más Popular',
  },
  {
    id: 3,
    name: 'Caja Premium',
    price: '$90',
    color: 'green',
    items: ['Mini boneless', 'Jugo', 'Mini sabritas o fruta', 'Gelatina'],
  },
  {
    id: 4,
    name: 'Desayuno Dulce',
    price: '$68',
    color: 'purple',
    items: ['Hotcakes', 'Jugo o lechita', 'Fruta'],
  },
  {
    id: 5,
    name: 'Caja Deluxe',
    price: '$85',
    color: 'cta',
    items: ['Hamburguesa', 'Jugo', 'Mini sabritas o fruta', 'Gelatina'],
  },
] satisfies readonly PackageTier[];

export const BENEFITS = [
  {
    title: 'Bono: Personalización Temática',
    text: 'Diseño y sticker decorativo incluido ($0 costo extra). Tú eliges el personaje, nosotros diseñamos la caja.',
  },
  {
    title: 'Preparación 100% Casera',
    text: 'Cero congelados. Solo ingredientes frescos y preparados horas antes de tu evento.',
  },
  {
    title: 'Puntualidad Absoluta',
    text: 'Sabemos que el recreo no espera. Entregamos a la hora exacta en tu colegio o salón.',
  },
  {
    title: 'Presentación Estética',
    text: 'Cuidamos el detalle interno y externo para que cada niño reciba una sorpresa digna de tu evento.',
  },
  {
    title: 'Cero Estrés para ti',
    text: 'Sin comprar platos ni interrumpir la fiesta para servir. Una solución llave en mano.',
  },
] satisfies readonly BenefitItem[];

export const PROCESS = [
  'Nos escribes por WhatsApp',
  'Eliges tu paquete y cantidad',
  'Personalizamos tu pedido',
  'Entregamos en tu evento',
] as const;

export const FAQS = [
  {
    q: '¿Con cuánto tiempo de anticipación debo hacer mi pedido?',
    a: 'Recomendamos contactarnos con al menos 48 horas de anticipación para asegurar disponibilidad y personalización.',
  },
  {
    q: '¿Entregan en escuelas o salones de fiestas?',
    a: 'Sí. Entregamos directamente en el lugar del evento dentro de Tampico, Ciudad Madero y Altamira.',
  },
  {
    q: '¿Las cajas incluyen personalización?',
    a: 'Sí. Todos los paquetes incluyen sticker personalizado sin costo adicional.',
  },
  {
    q: '¿La comida viene recién preparada?',
    a: 'Sí. Toda la comida es casera, preparada el mismo día del evento. No usamos congelados.',
  },
  {
    q: '¿Cuántas cajas puedo pedir?',
    a: 'Escríbenos y coordinamos la cantidad que necesitas según tu evento.',
  },
  {
    q: '¿Cómo pago?',
    a: 'Te informamos los métodos de pago disponibles al momento de cotizar por WhatsApp.',
  },
] satisfies readonly FaqItem[];
