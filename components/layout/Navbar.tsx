import Image from 'next/image';
import { BUSINESS_DATA } from '@/data/content';
import { BrandWordmark } from '@/components/ui/BrandWordmark';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-brand-text/5 bg-white/70 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Piringos Parties Logo"
            width={85}
            height={85}
            className="drop-shadow-xl transition-transform hover:scale-105"
          />
          <BrandWordmark
            containerClassName="justify-center translate-y-0.5 ml-1 sm:ml-0"
            titleClassName="text-2xl sm:text-3xl"
            subtitleClassName="tracking-[0.25em] text-[0.55rem] sm:text-[0.65rem] pl-0.5 leading-tight mt-0.5"
          />
        </div>

        <a
          href={BUSINESS_DATA.whatsappUrl}
          className="rounded-full bg-brand-cta px-6 py-2.5 text-sm font-bold text-brand-text shadow-md shadow-brand-cta/20 transition-all hover:-translate-y-0.5 hover:shadow-lg md:text-base"
        >
          Pedir ahora
        </a>
      </div>
    </nav>
  );
}
