import Image from 'next/image';
import { HERO, BUSINESS_DATA } from '@/data/content';

export function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-box.jpeg" 
          alt="Caja Piringos Parties" 
          fill
          className="object-cover object-center animate-[ken-burns_20s_ease-out_forwards]"
          priority
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/60 via-brand-text/60 to-brand-bg/95 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-12 animate-fade-in-up">
        <h1 className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-2xl">
          {HERO.h1}
        </h1>
        <p className="text-white/95 mb-10 max-w-2xl text-xl md:text-2xl leading-relaxed drop-shadow-md font-medium">
          {HERO.subtitle}
        </p>
        <a 
          href={BUSINESS_DATA.whatsappUrl}
          className="bg-brand-cta text-brand-text py-5 px-12 rounded-full font-extrabold shadow-2xl shadow-brand-cta/40 hover:bg-opacity-95 hover:-translate-y-1 hover:shadow-brand-cta/60 transition-all text-lg md:text-xl inline-flex items-center justify-center gap-3 backdrop-blur-sm animate-[pulse_3s_ease-in-out_infinite] hover:animate-none"
        >
          {HERO.cta}
        </a>
        
        {/* Micro credibility block - Elite Mobile Layout */}
        <div className="mt-14 flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm text-white font-semibold animate-fade-in delay-300 w-full max-w-3xl">
          <span className="flex items-center gap-2 bg-black/40 px-4 py-2.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg whitespace-nowrap"><strong className="text-brand-cta text-lg leading-none">✓</strong> Entrega puntual</span>
          <span className="flex items-center gap-2 bg-black/40 px-4 py-2.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg whitespace-nowrap"><strong className="text-brand-cta text-lg leading-none">✓</strong> Personalización en tu caja</span>
          <span className="flex items-center gap-2 bg-black/40 px-4 py-2.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg whitespace-nowrap"><strong className="text-brand-cta text-lg leading-none">✓</strong> Tampico · Madero · Altamira</span>
        </div>
      </div>
    </section>
  );
}
