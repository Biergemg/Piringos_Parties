import { BUSINESS_DATA, PACKAGES } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Packages() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-bg px-6 py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-pink/10 blur-[120px]"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-cta/10 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Opciones para tu evento"
          title="Elige tu paquete"
          description="Todos los paquetes incluyen sticker personalizado y presentación individual Premium. Calidad garantizada en cada caja."
          className="mb-20"
          eyebrowClassName="mb-4 bg-brand-surface text-brand-text border border-brand-text/10"
          titleClassName="mb-4 text-4xl md:text-5xl"
          descriptionClassName="mx-auto mb-16 max-w-2xl text-lg"
        />

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {PACKAGES.map((pkg, idx) => {
            const isPopular = Boolean(pkg.featured);

            return (
              <div
                key={pkg.id}
                className={`relative flex h-full flex-col rounded-[2.5rem] p-8 shadow-xl transition-all duration-500 animate-fade-in-up md:p-10 ${
                  isPopular
                    ? 'z-10 scale-100 border-none bg-brand-text text-brand-bg shadow-brand-text/40 md:scale-105'
                    : 'border border-brand-text/5 bg-white text-brand-text hover:-translate-y-2'
                }`}
                style={{ animationDelay: `${(idx % 3 + 1) * 150}ms` }}
              >
                {isPopular && pkg.badge ? (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 rotate-1 rounded-full border-2 border-brand-bg bg-brand-pink px-6 py-1.5 text-sm font-bold text-white shadow-lg">
                    {pkg.badge}
                  </div>
                ) : null}

                <div className="mb-8">
                  <h3 className={`m-0 mb-2 text-2xl font-extrabold tracking-tight ${isPopular ? 'text-white' : 'text-brand-text'}`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-black ${isPopular ? 'text-brand-cta' : 'text-brand-text'}`}>
                      {pkg.price}
                    </span>
                    <span className={`font-bold ${isPopular ? 'text-white/60' : 'text-brand-text/50'}`}>
                      /caja
                    </span>
                  </div>
                </div>

                <ul className="mb-10 flex-grow space-y-5">
                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start text-base leading-snug font-medium ${isPopular ? 'text-white/90' : 'text-brand-text/80'}`}
                    >
                      <span
                        className={`mt-0.5 mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          isPopular ? 'bg-brand-cta/20 text-brand-cta' : 'bg-brand-green/20 text-brand-green'
                        }`}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={BUSINESS_DATA.whatsappUrl}
                  className={`block w-full rounded-full py-4 text-center font-bold shadow-md transition-all duration-300 ${
                    isPopular
                      ? 'bg-brand-cta text-brand-text hover:-translate-y-1 hover:bg-white hover:text-brand-text hover:shadow-brand-cta/40'
                      : 'border border-brand-text/10 bg-brand-surface text-brand-text hover:-translate-y-1 hover:border-transparent hover:bg-brand-cta hover:text-brand-text hover:shadow-brand-cta/30'
                  }`}
                >
                  Pedir este paquete
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
