import Image from 'next/image';
import { BUSINESS_DATA, HERO } from '@/data/content';

export function Hero() {
  return (
    <section className="relative flex min-h-[95vh] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-box.jpeg"
          alt="Caja Piringos Parties"
          fill
          className="animate-[ken-burns_20s_ease-out_forwards] object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/60 via-brand-text/60 to-brand-bg/95 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 mt-12 flex w-full max-w-5xl flex-col items-center px-6 text-center animate-fade-in-up">
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
          {HERO.h1}
        </h1>
        <p className="mb-10 max-w-2xl text-xl leading-relaxed font-medium text-white/95 drop-shadow-md md:text-2xl">
          {HERO.subtitle}
        </p>
        <a
          href={BUSINESS_DATA.whatsappUrl}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-cta px-12 py-5 text-lg font-extrabold text-brand-text shadow-2xl shadow-brand-cta/40 transition-all animate-[pulse_3s_ease-in-out_infinite] hover:-translate-y-1 hover:bg-opacity-95 hover:shadow-brand-cta/60 hover:animate-none md:text-xl"
        >
          {HERO.cta}
        </a>

        <div className="mt-14 flex w-full max-w-3xl flex-wrap justify-center gap-3 text-xs font-semibold text-white animate-fade-in delay-300 md:gap-6 md:text-sm">
          {HERO.proofPoints.map((proofPoint) => (
            <span
              key={proofPoint}
              className="flex whitespace-nowrap items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2.5 shadow-lg backdrop-blur-md"
            >
              <strong className="text-lg leading-none text-brand-cta">✓</strong>
              {proofPoint}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
