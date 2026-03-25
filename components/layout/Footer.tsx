import Image from 'next/image';
import { MessageCircle, MapPin } from 'lucide-react';
import { BrandWordmark } from '@/components/ui/BrandWordmark';
import { BUSINESS_DATA } from '@/data/content';

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-brand-surface bg-white px-6 pt-24 pb-12">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-pink via-brand-cta to-brand-blue opacity-80"></div>

      <div className="mx-auto mb-20 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Image
            src="/logo.png"
            alt="Piringos logo"
            width={90}
            height={90}
            className="mb-5 drop-shadow-lg transition-transform hover:scale-105"
          />
          <BrandWordmark
            containerClassName="items-center md:items-start mb-4"
            titleClassName="text-4xl"
            subtitleClassName="tracking-[0.3em] text-xs pl-1 mt-1.5"
            subtitle="PARTIES"
          />
          <p className="max-w-sm text-sm leading-relaxed font-medium text-brand-text/70">
            Cajas de comida infantil personalizadas. Elaboradas con ingredientes frescos el mismo día,
            garantizando puntualidad y una presentación premium para tu evento.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="mb-6 text-sm font-bold tracking-widest text-brand-text opacity-60 uppercase">
            Atención a Clientes
          </h4>
          <a
            href={BUSINESS_DATA.whatsappUrl}
            className="group mb-6 flex w-full max-w-xs items-center gap-4 text-brand-text/80 transition-all hover:-translate-y-0.5 hover:text-brand-cta md:max-w-none"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-surface transition-all duration-300 group-hover:bg-brand-cta group-hover:text-white group-hover:shadow-md">
              <MessageCircle className="h-5 w-5" />
            </div>
            <span className="text-base font-bold">Cotizar por WhatsApp</span>
          </a>
          <div className="flex w-full max-w-xs items-center gap-4 text-brand-text/80 md:max-w-none">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-surface">
              <MapPin className="h-5 w-5 text-brand-text/50" />
            </div>
            <span className="text-left text-sm leading-tight font-medium">
              Entregas directas en:
              <br />
              <b className="text-brand-text">{BUSINESS_DATA.zones.join(' · ')}</b>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="mb-6 text-sm font-bold tracking-widest text-brand-text opacity-60 uppercase">
            Síguenos
          </h4>
          <div className="flex gap-4">
            <a
              href={BUSINESS_DATA.instagram}
              aria-label="Instagram"
              rel="noreferrer"
              target="_blank"
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink transition-all duration-300 hover:-translate-y-1 hover:bg-brand-pink hover:text-white hover:shadow-lg shadow-brand-pink/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href={BUSINESS_DATA.facebook}
              aria-label="Facebook"
              rel="noreferrer"
              target="_blank"
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue transition-all duration-300 hover:-translate-y-1 hover:bg-brand-blue hover:text-white hover:shadow-lg shadow-brand-blue/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-brand-surface pt-8 text-xs font-bold tracking-wider text-brand-text/50 uppercase sm:flex-row">
        <p>© {new Date().getFullYear()} {BUSINESS_DATA.name}</p>
        <p>Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
