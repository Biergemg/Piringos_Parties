import Image from 'next/image';
import { BUSINESS_DATA } from '@/data/content';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-brand-text/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Piringos Parties Logo" 
            width={85} 
            height={85} 
            className="drop-shadow-xl hover:scale-105 transition-transform"
          />
          <div className="flex flex-col justify-center translate-y-0.5 ml-1 sm:ml-0">
            <span className="font-black text-2xl sm:text-3xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-brand-pink via-brand-pink to-brand-cta leading-none drop-shadow-sm">
              Piringos
            </span>
            <span className="font-extrabold text-brand-text tracking-[0.25em] uppercase text-[0.55rem] sm:text-[0.65rem] pl-0.5 opacity-60 leading-tight mt-0.5">
              Parties
            </span>
          </div>
        </div>
        
        <a 
          href={BUSINESS_DATA.whatsappUrl}
          className="bg-brand-cta text-brand-text px-6 py-2.5 rounded-full font-bold shadow-md shadow-brand-cta/20 hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm md:text-base"
        >
          Pedir ahora
        </a>
      </div>
    </nav>
  );
}
