import { BUSINESS_DATA } from '@/data/content';
import Image from 'next/image';
import { MessageCircle, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-white pt-24 pb-12 px-6 border-t border-brand-surface relative overflow-hidden">
      {/* Decorative Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-pink via-brand-cta to-brand-blue opacity-80"></div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 mb-20">
        
        {/* Brand Status Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image src="/logo.png" alt="Piringos logo" width={90} height={90} className="drop-shadow-lg mb-5 hover:scale-105 transition-transform" />
          <div className="flex flex-col items-center md:items-start mb-4">
            <span className="font-black text-4xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-brand-pink via-brand-pink to-brand-cta leading-none drop-shadow-sm">
              Piringos
            </span>
            <span className="font-extrabold text-brand-text tracking-[0.3em] uppercase text-xs pl-1 opacity-60 mt-1.5">
              PARTIES
            </span>
          </div>
          <p className="text-brand-text/70 max-w-sm text-sm leading-relaxed font-medium">
            Cajas de comida infantil personalizadas. Elaboradas con ingredientes frescos el mismo día, garantizando puntualidad y una presentación premium para tu evento.
          </p>
        </div>

        {/* Contact Strategy Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-brand-text mb-6 uppercase tracking-widest text-sm opacity-60">Atención a Clientes</h4>
          <a href={BUSINESS_DATA.whatsappUrl} className="flex items-center gap-4 text-brand-text/80 hover:text-brand-cta hover:-translate-y-0.5 transition-all mb-6 group w-full max-w-xs md:max-w-none">
            <div className="w-12 h-12 rounded-2xl bg-brand-surface group-hover:bg-brand-cta group-hover:text-white group-hover:shadow-md flex items-center justify-center transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="font-bold text-base">Cotizar por WhatsApp</span>
          </a>
          <div className="flex items-center gap-4 text-brand-text/80 w-full max-w-xs md:max-w-none">
            <div className="w-12 h-12 rounded-2xl bg-brand-surface flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-brand-text/50" />
            </div>
            <span className="font-medium text-sm leading-tight text-left">
              Entregas directas en:<br/>
              <b className="text-brand-text">{BUSINESS_DATA.zones.join(' · ')}</b>
            </span>
          </div>
        </div>

        {/* Social Presence Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-brand-text mb-6 uppercase tracking-widest text-sm opacity-60">Síguenos</h4>
          <div className="flex gap-4">
            <a href={BUSINESS_DATA.instagram} aria-label="Instagram" className="w-14 h-14 rounded-2xl bg-brand-pink/10 text-brand-pink hover:bg-brand-pink hover:text-white hover:-translate-y-1 hover:shadow-lg shadow-brand-pink/30 flex items-center justify-center transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href={BUSINESS_DATA.facebook} aria-label="Facebook" className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white hover:-translate-y-1 hover:shadow-lg shadow-brand-blue/30 flex items-center justify-center transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-brand-surface flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-text/50 font-bold uppercase tracking-wider">
        <p>© {new Date().getFullYear()} {BUSINESS_DATA.name}</p>
        <p>Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
